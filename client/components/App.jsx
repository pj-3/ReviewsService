import React from 'react';



class App extends React.Component {
    constructor(props) {
        super(props);
         this.getListing = this.getListing.bind(this);
         this.getFirstSixReviews = this.getFirstSixReviews.bind(this);
        // this.onSearch = this.onSearch.bind(this);
        // this.get
        this.showAllReviews = this.showAllReviews.bind(this);
        this.getRating = this.getRating.bind(this);
        this.state = {
            rating : 0, //an average of all the ratings on all of the reviews
            reviews : [], //all of the reviews for that listing
            currentReviews: [], //the current 6 or less reviews being shown
            isBeginning: true, //whether or not we are displaying the first 5 reviews
            isEnd: false //whether or not the last 5 or less reviews are being displayed
        }
    }

    componentDidMount() {
        this.getListing();
        this.getFirstSixReviews();
        this.getRating();
        //calls get listing
        //then calls getFirstFiveReviews
    }

    getListing() {
        //picks a random listing
        //sets this.reviews to that listings corresponding reviews

    }

    getRating(){
        //gets rating from all of the reviews and sets this.rating to the average of all of them

    }

    getFirstSixReviews() {
        //sets this.currentReviews to the first 5 reviews in this.reviews

    } 

    showAllReviews(){
        //when *show all* button is clicked, toggle pop up with all of the reviews in it
    } 

    render(){
      return (
          <button className = 'showAllButton' onClick = 'showAllReviews()'> show all </button>
      )

    }
}

//should render 1 Header component, 1 searchBar component, and one ReviewsList component

//on component did mount get a random listing and then pull the first
//5 reviews from that 



export default App;