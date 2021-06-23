import React from 'react';
import Course from './components/Course';
import './style.css';
import { getCoursesData } from './action/coursesAction';
import { connect } from 'react-redux';
/**
 * 1.	Each course will display title and description of a course.
 * 2.	Each course will contain a “View Lessons” button which can be clicked to display
 *    lessons within a particular course.
 * 3.	Each lesson will display title and a “View” button which opens a YouTube video in new window.
 * 4.	(Optional) Write a few test cases if time is available.
 */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.props.dispatch(getCoursesData());
    //  console.log(this);
  }
  render() {
    // this.getData = getCoursesData();
    return (
      <div>
        <h1>Courses</h1>
        <Course />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state: state
  };
}
export default connect(mapStateToProps)(App);
