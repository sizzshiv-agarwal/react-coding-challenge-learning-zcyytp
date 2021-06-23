import React from 'react';
import ViewLessons from './ViewLessons';
import { getCoursesData } from '../action/coursesAction';
import { connect } from 'react-redux';

class Course extends React.Component {
  render() {
    console.log('inside CourseComponent');
    const data = this.props;
    console.log('inside course', data);
    return (
      <div class="course">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <button>View Lessons</button>
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
