import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Review({ setReviews }) {
    const [value, setValue] = useState(0);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        review: '',
        rating: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newReview = {
            name:formData.name,
            review:formData.review,
            rating:value
        };
    
        try {
            const response = await fetch('https://fullcommercewebsite.onrender.com/review', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newReview),
            });
    
            const result = await response.json();
    
            if (result.message === "Review submitted successfully!") {
                //  Fetch the latest reviews after successful submission

                const updatedReviewsResponse = await fetch('https://fullcommercewebsite.onrender.com/review/all');
                const updatedReviews = await updatedReviewsResponse.json();

                setReviews(updatedReviews); // ✅ Now updates with actual reviews
            }
            setFormData({name:'',email:'',review:''});
            setValue(0);
    
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };
    
    

    return (
        <div className="container review-content w-100 mt-5 p-5">
            <form onSubmit={handleSubmit}>
                <div className="review-input">
                    <h6>Your rating *</h6>
                    <Rating
                        name="rating"
                        value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                    />

                    <h6>Your review *</h6>
                    <textarea
                        name="review"
                        value={formData.review}
                        rows="5"
                        cols="100"
                        onChange={handleChange}
                        required
                    />

                    <h6>Name *</h6>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <h6>Email *</h6>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <Button type="submit" variant="contained" endIcon={<SendIcon />}
                    >
                        Submit
                    </Button>
                    <Button type="reset" variant="outlined" startIcon={<DeleteIcon />}
                        onClick={() => {
                            setFormData({ name: '', email: '', review: '' });
                            setValue(0);
                        }}
                    >
                        Reset
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Review;
