import React, {Component} from 'react';
// build a switcher compo for courses, flashers, etc
import CardList from '../components/CardList';
import { courses } from '../components/choices';
import FlashList from '../components/FlashList';
import SearchBox from '../components/SearchBox';
import { SRS } from '../components/Srs'; 
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import Modal from '../components/Modal';

// need to add in state 'an obj that describes app'
// parents feed state into property

class App extends Component {
    constructor(){
        super()
        this.state = {
            // srs: SRS changed courses to SRS
            courses: SRS,
            searchfield: '',
            isModalDisplayed: false,
            modalData: '',
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=> response.json())
    //         // will display loading until this completes?
    //         .then(users=> this.setState({ courses: users}));
    // }

    onSearchChange = (event) => {
        // anytime you want to change state, do this, set the state to the event/changing variable
        this.setState({ searchfield: event.target.value })
    }
    onCardClickHandler = (event) => {
        this.setState({isModalDisplayed: !this.state.isModalDisplayed})
        this.setState({ modalData : event.target.dataset.value})
    }
    

    render(){// run the "filter" creates a new array with all elements that pass the test implemented by the provided function.
        // destructure to clean up all that this.state

        const { courses, searchfield} = this.state;
        const filteredCourses = courses.filter(course => {
            // return the value of the checked if course name includes the text in the searchfield
            return course.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        // 0 = false ! = isn't 
    return !courses.length ?
            <h1 className='tr'>Louding...</h1> :
            (
                <div className='tc'>
                    <div className='modal-container'>
                        {
                            this.state.isModalDisplayed ?
                            <Modal onCardClickHandler={this.onCardClickHandler} title={this.state.modalData}/>
                            : null
                        }
                    </div>
                    <h1 className='f1'>Study buddIes</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/* scroll lets this scroll and h1 sticky */}
                    <Scroll>
                        <ErrorBoundry>
                            {/* <CardList courses={filteredCourses}/> */}
                            <FlashList SRS={filteredCourses} onCardClickHandler={this.onCardClickHandler}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App;