import React from 'react';

class ReviewsListElement extends React.Component{
    constructor(props) {
        super(props);
    }
    
    //props: an object with review and user data
    render() {
        //renders user, userphoto, and date along with the review text
        return(
            <div className = 'review'>
            <img className= 'userPhoto' src = {this.props.review.photo}/> 
            <div className = 'user'> {this.props.review.name}</div>
            <div className = 'date'>{this.props.review.date_posted}</div>
            <div className = 'review_text'>
               {this.props.review.review_text};
            </div>
            </div>
        )
    }
}

export default ReviewsListElement;