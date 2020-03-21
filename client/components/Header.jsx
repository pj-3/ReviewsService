import React from 'react';  


class Header extends React.Component{
    constructor(props) {
        super(props)
    }
    //gets rating and number of reviews as props
    //should render rating and number of reviews
    render() {
        return (
        <div>
           <div id = 'rating'>{this.props.rating} </div> 

           <div id = 'numReviews'>  ({this.props.numReviews} reviews) </div>
        </div>
        )
    }
}
export default Header;