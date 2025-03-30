import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";

function ReviewList() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('http://localhost:5000/review/all');
                const data = await response.json();
                console.log(data);
                setReviews(data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, []);
    
    async function handleDelete(id)
    {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:5000/review/${id}`,
                {
                    method : "DELETE"
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch reviews");
                }
                
                if(response.ok)
                {
                    setReviews(reviews.filter(review => review._id !== id));
                }else {
                    console.error("Failed to delete review");
                }
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    }
    return (
        <div className=" container review-list mt-5 ">
        <div className='heading'>
            <h3 >Customer Reviews</h3><hr />
        </div>
        <div className='content mt-2'>
            
            
            {reviews.length === 0 ? (
                    <p>No reviews yet. Be the first to review!</p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={review._id} className='review-section'>
                            <div className="review-item">
                                <h5>{review.name}</h5>
                                <p>{review.review}</p>
                                <span>⭐ {review.rating}/5</span>
                                
                            </div>
                            <div className='del-button'>
                                <Button onClick={()=>handleDelete(review._id)} ><MdDelete/></Button>
                            </div>
                            
                            <hr />
                        </div>
                    ))
                )}

                
        </div> 
        </div>
    );
}

export default ReviewList;
