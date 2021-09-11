import React from 'react'
import './share.css'
import RateReviewIcon from '@material-ui/icons/RateReview';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import BookIcon from '@material-ui/icons/Book';

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="assets/person/1.jpeg" alt="Self" className="shareProfileImg" />
                    <input type="text" placeholder="What are you reading?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <span className="shareOption">
                            <span className="shareOptionIcon">
                                    <BookIcon/>
                            </span>
                            <span className="shareOptionText">Book</span>
                        </span>
                        <span className="shareOption">
                            <span className="shareOptionIcon">
                                <FormatQuoteIcon/>
                            </span>
                            <span className="shareOptionText">Add a quote</span>
                        </span>
                        <span className="shareOption">
                            <span className="shareOptionIcon">
                                <RateReviewIcon/>
                            </span>
                            <span className="shareOptionText">Review</span>
                        </span>
                        <button className="postButton">
                            Post
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
