import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props);
   
         this.getFirstSixReviews = this.getFirstSixReviews.bind(this);
        // this.onSearch = this.onSearch.bind(this);
        // this.get
        this.showAllReviews = this.showAllReviews.bind(this);
        this.getRating = this.getRating.bind(this);
        this.state = {
            rating : 0, //an average of all the ratings on all of the reviews
            reviews : [
                {
                    "id": 32,
                    "review_text": "National seize Communications Checking Account Direct brand",
                    "rating": 2,
                    "date_posted": "Thu Dec 04 2003",
                    "user_id": 32,
                    "listings_id": 45,
                    "name": "Brent Dare",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 37,
                    "review_text": "aggregate",
                    "rating": 3,
                    "date_posted": "Wed May 28 1975",
                    "user_id": 37,
                    "listings_id": 45,
                    "name": "Bryana McKenzie",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 50,
                    "review_text": "magenta Fantastic lime Web Buckinghamshire Dynamic web-enabled Buckinghamshire Creative cohesive customer loyalty Cliff",
                    "rating": 4,
                    "date_posted": "Sun May 27 1984",
                    "user_id": 50,
                    "listings_id": 45,
                    "name": "Lennie Nienow",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 91,
                    "review_text": "Creative Ball 1080p calculate calculate Surinam Dollar Rustic Buckinghamshire",
                    "rating": 2,
                    "date_posted": "Fri May 08 1987",
                    "user_id": 91,
                    "listings_id": 45,
                    "name": "Wilson Prosacco",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 100,
                    "review_text": "Representative Mozambique Street Brook Savings Account Global withdrawal",
                    "rating": 0,
                    "date_posted": "Sun Mar 20 1983",
                    "user_id": 100,
                    "listings_id": 45,
                    "name": "Tanner Beahan",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 95,
                    "review_text": "Bolivar Fuerte Georgia",
                    "rating": 0,
                    "date_posted": "Sat Mar 25 1995",
                    "user_id": 95,
                    "listings_id": 45,
                    "name": "Brigitte Hirthe",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 42,
                    "review_text": "Balanced green",
                    "rating": 1,
                    "date_posted": "Thu May 06 1976",
                    "user_id": 42,
                    "listings_id": 45,
                    "name": "Floyd Paucek",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 67,
                    "review_text": "New Hampshire mint green hybrid Bolivar Fuerte optimal card framework override auxiliary",
                    "rating": 1,
                    "date_posted": "Mon Mar 26 1990",
                    "user_id": 67,
                    "listings_id": 45,
                    "name": "Aniya Strosin",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 48,
                    "review_text": "Concrete innovate radical online Dominica Accountability mobile regional Wooden Markets Nepalese Rupee compress alarm synthesize Cambridgeshire sensor primary integrate Interactions Checking Account",
                    "rating": 4,
                    "date_posted": "Mon Jul 20 1987",
                    "user_id": 48,
                    "listings_id": 45,
                    "name": "Arlene Cummings",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 12,
                    "review_text": "bluetooth implementation Optional static online Graphical User Interface bifurcated Right-sized Corporate bandwidth-monitored",
                    "rating": 5,
                    "date_posted": "Thu Jun 17 1976",
                    "user_id": 12,
                    "listings_id": 45,
                    "name": "Davin Kling",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 16,
                    "review_text": "Soap Digitized application Licensed Frozen Car turquoise",
                    "rating": 4,
                    "date_posted": "Sun Feb 19 1984",
                    "user_id": 16,
                    "listings_id": 45,
                    "name": "Sarina Morar",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 96,
                    "review_text": "maroon Ville Checking Account Avon JSON Cotton Cambridgeshire Borders convergence SCSI Generic Incredible Intelligent Specialist Down-sized Wall",
                    "rating": 3,
                    "date_posted": "Wed May 21 1975",
                    "user_id": 96,
                    "listings_id": 45,
                    "name": "Mervin Goyette",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 37,
                    "review_text": "RAM Turnpike",
                    "rating": 1,
                    "date_posted": "Sat Aug 29 1987",
                    "user_id": 37,
                    "listings_id": 45,
                    "name": "Bryana McKenzie",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 83,
                    "review_text": "digital Concrete Qatari Rial Granite back up THX benchmark encoding Granite online Vatu Intranet Place",
                    "rating": 2,
                    "date_posted": "Thu Jun 14 1979",
                    "user_id": 83,
                    "listings_id": 45,
                    "name": "Emmanuel Greenholt",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 30,
                    "review_text": "Sleek Books plum Sleek Granite Chair Guatemala SMS Computers Salad",
                    "rating": 5,
                    "date_posted": "Sun Jul 08 1979",
                    "user_id": 30,
                    "listings_id": 45,
                    "name": "Abigale Ondricka",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 10,
                    "review_text": "green withdrawal Arizona Visionary grow Iraqi Dinar Mississippi Coordinator Marketing Checking Account Drive navigating backing up streamline National",
                    "rating": 4,
                    "date_posted": "Sat Jan 28 1995",
                    "user_id": 10,
                    "listings_id": 45,
                    "name": "Trisha Tromp",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 9,
                    "review_text": "cutting-edge backing up Agent Rubber moratorium transmit panel Intranet United Kingdom Keys Chair",
                    "rating": 4,
                    "date_posted": "Wed Sep 28 2016",
                    "user_id": 9,
                    "listings_id": 45,
                    "name": "Quinn Hodkiewicz",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 92,
                    "review_text": "Generic syndicate Director Baby Shores withdrawal Lodge dedicated Supervisor multi-byte intranet invoice Supervisor Brook open-source Checking Account",
                    "rating": 1,
                    "date_posted": "Fri Sep 02 2005",
                    "user_id": 92,
                    "listings_id": 45,
                    "name": "Modesta Lockman",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 14,
                    "review_text": "",
                    "rating": 5,
                    "date_posted": "Fri Nov 01 2002",
                    "user_id": 14,
                    "listings_id": 45,
                    "name": "Darryl O'Reilly",
                    "photo": "https://loremflickr.com/320/240"
                },
                {
                    "id": 72,
                    "review_text": "Saint Vincent and the Grenadines Parks Handmade Soft Table Future-proofed Trail Kids payment Total Cayman Islands Dollar Fish Liaison enhance azure Nevada ubiquitous FTP Handmade Fresh Towels",
                    "rating": 5,
                    "date_posted": "Tue Oct 31 2017",
                    "user_id": 72,
                    "listings_id": 45,
                    "name": "Joey Skiles",
                    "photo": "https://loremflickr.com/320/240"
                }], //all of the reviews for that listing
            currentReviews: [], //the current 6 or less reviews being shown
            isBeginning: true, //whether or not we are displaying the first 5 reviews
            isEnd: false //whether or not the last 5 or less reviews are being displayed
        }
        this.getListing = this.getListing.bind(this);
    }

    componentDidMount() {
        this.getListing();
 
        this.getFirstSixReviews();
        this.getRating();
        //calls get listing
        //then calls getFirstFiveReviews
        // console.log(this.state.reviews);
    }

    getListing() {
       axios.get('/onelisting')
       .then((response) => {
           //console.log(response.data);
           this.setState({
               reviews : response.data
           });
       })
       .catch((error) => {console.log(error + ' retrieving listing at app.jsx')} )

    }

    getRating(){
        //gets rating from all of the reviews and sets this.rating to the average of all of them

    }

    getFirstSixReviews() {
        //sets this.currentReviews to the first 5 reviews in this.reviews
        console.log(this.state.reviews);
    } 

    showAllReviews(){
        //when *show all* button is clicked, toggle pop up with all of the reviews in it
    } 

    render(){
      return (
          <div className='reviews'>
          <ReviewsList reviews ={this.state.reviews}/>

          <button className = 'showAllButton' onClick = {this.showAllReviews()}> show all </button>
          </div>
      )

    }
}

//should render 1 Header component, 1 searchBar component, and one ReviewsList component

//on component did mount get a random listing and then pull the first
//5 reviews from that 



export default App;