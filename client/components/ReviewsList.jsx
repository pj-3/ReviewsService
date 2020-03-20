import React from 'react';
import ReviewsListElement from './ReviewsListElement.jsx';
class ReviewsList extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(    this.props.reviews);
    }
    render(){
        return (
            <div>
            {this.props.reviews.map((review) => 
                (<ReviewsListElement review = {review} />))}
            </div>
        )
    }
}
export default ReviewsList;