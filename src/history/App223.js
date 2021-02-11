import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { courses } from './choices';
import './App.css'
import { courses } from './choices';

// need to add in state 'an obj that describes app'
// parents feed state into property

class App extends Component {
    constructor(){
        super()
        this.state = {
            courses: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            // will display loading until this completes?
            .then(users=> this.setState({ courses: users}));
    }

    onSearchChange = (event) => {
        // anytime you want to change state, do this, set the state to the event/changing variable
        this.setState({ searchfield: event.target.value })
    }

    render(){// run the "filter" creates a new array with all elements that pass the test implemented by the provided function.
        const filteredCourses = this.state.courses.filter(course => {
            // return the value of the checked if course name includes the text in the searchfield
            return course.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        if (this.state.courses.length === 0) {
            return <h1>Louding...</h1>
        } else {
            return(
            <div className='tc'>
                <h1 className='f1'>buddIes</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList courses={filteredCourses}/>
            </div>
        );
        }
       
    }
}

export default App;