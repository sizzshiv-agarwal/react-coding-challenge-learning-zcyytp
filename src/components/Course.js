import React from 'react';
import ViewLessons from './ViewLessons';
import { getLessons } from '../action/coursesAction';
import { connect } from 'react-redux';

class Course extends React.Component {
  handleGetLessons = () => {
    this.props.dispatch(getLessons());
  };

  render() {
    console.log('inside CourseComponent');
    const data = this.props.courseProps;
    console.log('inside course', data);
    return (
      <div class="course">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <button onClick={this.handleGetLessons}>View Lessons</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
export default connect(mapStateToProps)(Course);
//export default Course;
