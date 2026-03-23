const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// ✅ Schema now includes all fields being saved
const reviewSchema = new mongoose.Schema({
    name: String,
    email: String,
    review: String,
    rating: Number,
    category: String
});

const Review = mongoose.model('Review', reviewSchema);

// GET Route - Testing Route
router.get("/", (req, res) => {
    res.send("inside the shelter");
});

// POST Route - Submitting Reviews
router.post('/', async (req, res) => {
    const { name, email, review, rating, category } = req.body;

    const newReview = new Review({ name, email, review, rating, category });

    try {
        await newReview.save();
        res.status(201).json({ message: 'Review submitted successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit review' });
    }
});

// GET Route - Fetch All Reviews
router.get('/all', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});

// DELETE Route
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReview = await Review.findByIdAndDelete(id);

        if (!deletedReview) {
            return res.status(404).json({ error: "Review not found" });
        }

        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete review" });
    }
});

module.exports = router;