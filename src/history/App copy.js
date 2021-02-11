import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { courses } from './choices';

// need to add in state 'an obj that describes app'
// parents feed state into property

class App extends Component {
    constructor(){
        super()
        this.state = {
            courses: courses,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        // anytime you want to change state, do this, set the state to the event/changing variable
        this.setState({ searchfield: event.target.value })
        // run the "filter" creates a new array with all elements that pass the test implemented by the provided function.
        // should this be named filteredSearch or Courses
        const filteredCourses = this.state.courses.filter(course => {
            // return the value of the checked if course name includes the text in the searchfield
            return course.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        // console.log(filteredCources);
    }

    render(){
        return(
            <div className='tc'>
                <h1>Study Smoothie</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {/* replace this.state.courses with the filtered results */}
                <CardList courses={this.state.courses}/>
            </div>
        );
    }
}

export default App;