import React from 'react';
import ViewLessons from './ViewLessons';
import { getLessons } from '../action/coursesAction';
import { connect } from 'react-redux';

class Course extends React.Component {
  handleGetLessons = () => {
    this.props.dispatch(getLessons());
  };

  render() {
    console.log('inside CourseComponent', this.props);
    const { courseProps, renderLessons, lessons } = this.props;

    console.log('inside course', courseProps);
    return (
      <div class="course">
        <h3>{courseProps.title}</h3>
        <p>{courseProps.description}</p>
        <button onClick={this.handleGetLessons}>View Lessons</button>
        {renderLessons && <ViewLessons lessonsList={lessons} />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    courses: state.courses,
    renderLessons: state.renderLessons,
    lessons: state.lessons
  };
}
export default connect(mapStateToProps)(Course);
//export default Course;
