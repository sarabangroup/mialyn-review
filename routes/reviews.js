const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// POST: Add a new review
router.post('/reviews', async (req, res) => {
    const { name, rating, review } = req.body;

    try {
        const newReview = new Review({
            name,
            rating,
            review
        });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Error saving review', error });
    }
});

// GET: Fetch all reviews
router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
});

module.exports = router;
