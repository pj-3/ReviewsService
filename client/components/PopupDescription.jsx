import React from 'react';
import Header from './Header.jsx';

class PopupDescription extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header rating = {this.props.rating} numReviews = {this.props.numReviews} />
        )
        
    }
}

export default PopupDescription;