const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 

// Schema Definition
const reviewSchema = new mongoose.Schema({
    name: String,
    email: String,
    review: String,
    rating: Number,
    category: String
});

// Model Creation
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
        const reviews = await Review.find(); // Retrieves all reviews from the database
        // console.log(reviews)
        res.status(200).json(reviews);       // Send data as JSON response
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
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
