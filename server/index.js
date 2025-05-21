const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const UserModel = require('./models/UserModel');
const JournalModel = require('./models/JournalModel');
const ToDoModel = require('./models/ToDoModel');
const app = express();
require('dotenv').config();

// Middleware setup
app.use(cors({
    origin: 'http://localhost:5173',  // Replace with your frontend URL
    methods: ['GET', 'POST','PUT','DELETE'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log("🚀 Server is running on port", process.env.PORT);
  });
})
.catch(err => console.error("❌ MongoDB connection error:", err));


// Middleware for verifying JWT
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json("The token is missing");
    }
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if (err) {
            return res.status(401).json("The token is invalid");
        }
        req.userId = decoded.userId;
        next();
    });
};

// User registration (Sign Up)
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json(err);
        const newUser = new UserModel({ username, email, password: hash });
        newUser.save()
            .then(() => res.json("User registered successfully"))
            .catch(err => res.status(500).json(err));
    });
});

// User login (Sign In)
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json("User not found");
            bcrypt.compare(password, user.password, (err, match) => {
                if (match) {
                    const token = jwt.sign({ userId: user._id, email: user.email, username: user.username }, "jwt-secret-key");
                    res.cookie("token", token, { httpOnly: true });
                    res.json("success");
                } else {
                    res.status(400).json("Incorrect password");
                }
            });
        })
        .catch(err => res.status(500).json(err));
});

// Logout
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json("success");
});

// Create Journal Entry
app.post('/journals', verifyUser, (req, res) => {
    const { title, content } = req.body;
    const newJournal = new JournalModel({
        userId: req.userId,
        title,
        content
    });
    

    newJournal.save()
        .then(() => res.json("Journal entry created successfully"))
        .catch(err => res.status(500).json(err));
});

// Get All Journal Entries
app.get('/journals', verifyUser, (req, res) => {
    JournalModel.find({ userId: req.userId })
        .then(journals => res.json(journals))
        .catch(err => res.status(500).json(err));
});

// Edit Journal Entry
app.put('/journals/:id', verifyUser, (req, res) => {
    const { title, content } = req.body;
    JournalModel.findOneAndUpdate({ _id: req.params.id, userId: req.userId }, { title, content }, { new: true })
        .then(updatedJournal => res.json(updatedJournal))
        .catch(err => res.status(500).json(err));
});

// Delete Journal Entry
app.delete('/journals/:id', verifyUser, (req, res) => {
    JournalModel.findOneAndDelete({ _id: req.params.id, userId: req.userId })
        .then(() => res.json("Journal entry deleted"))
        .catch(err => res.status(500).json(err));
});

// Create To-Do List
app.post('/todos', verifyUser, (req, res) => {
    const { title, tasks } = req.body;
    const newToDo = new ToDoModel({
        userId: req.userId,
        title,
        tasks
    });

    newToDo.save()
        .then(() => res.json("To-Do list created successfully"))
        .catch(err => res.status(500).json(err));
});

// Get All To-Do Lists
app.get('/todos', verifyUser, (req, res) => {
    ToDoModel.find({ userId: req.userId })
        .then(todos => res.json(todos))
        .catch(err => res.status(500).json(err));
});


// Edit To-Do List
app.put('/todos/:id', verifyUser, (req, res) => {
    const { title, tasks } = req.body;
    ToDoModel.findOneAndUpdate({ _id: req.params.id, userId: req.userId }, { title, tasks }, { new: true })
        .then(updatedToDo => res.json(updatedToDo))
        .catch(err => res.status(500).json(err));
});

// Delete To-Do List
app.delete('/todos/:id', verifyUser, (req, res) => {
    ToDoModel.findOneAndDelete({ _id: req.params.id, userId: req.userId })
        .then(() => res.json("To-Do list deleted"))
        .catch(err => res.status(500).json(err));
});
