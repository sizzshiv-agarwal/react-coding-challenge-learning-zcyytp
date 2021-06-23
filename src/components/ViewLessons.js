import React from 'react';
import { connect } from 'react-redux';

class ViewLessons extends React.Component {
  render() {
    const { lessons } = this.props;
    console.log(lessons);
    return (
      <div class="course">
        {lessons.map(eachLesson => (
          <div>
            <p>
              {' '}
              Lesson - {eachLesson.id} {eachLesson.title}
            </p>
            <a href={eachLesson.videoUrl}>{eachLesson.videoUrl} </a>
          </div>
        ))}
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
export default connect(mapStateToProps)(ViewLessons);
