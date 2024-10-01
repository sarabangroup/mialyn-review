const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const reviewRoutes = require('./routes/reviews');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON request bodies

// MongoDB connection
mongoose.connect('mongodb+srv://thiru:Thiru736@cluster0.pdzby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', reviewRoutes);

// Starting the server
const PORT = process.env.PORT || 3001;
app.listen(PORT,0.0.0.0/0, () => {
    console.log(`Server is running on port ${PORT}`);
});
