import React from 'react';
import ReviewsListElement from './ReviewsListElement.jsx';
import PopupReviewsList from './PopupReviewsList.jsx';
import PopupDescription from './PopupDescription.jsx';
import Modal from './elements/Modal.js';
import ModalContent from './elements/ModalContent.js';
class Popup extends React.Component {

    render(){
        //renders PopupDescription to the left and PopUp ReviewsList to the right
         //has an 'x' in the upper left hand corner to exit the popup
       return(  

        <Modal>

            <ModalContent>
      
                <PopupDescription rating = {this.props.rating} numReviews = {this.props.reviews.length}/>
                <PopupReviewsList reviews = {this.props.reviews}/>
            
             </ModalContent>
        </Modal>
       )
    }

}

export default Popup;