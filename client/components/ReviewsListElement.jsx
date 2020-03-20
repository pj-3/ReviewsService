import React from 'react';

class ReviewsListElement extends React.Component{
    constructor(props) {
        super(props);
    }
    //props: an object with review and user data
    render(){
        //renders user, userphoto, and date along with the review text
        return(
            <div>
               {this.props.review.review_text};
            </div>
        )
    }
}

export default ReviewsListElement;