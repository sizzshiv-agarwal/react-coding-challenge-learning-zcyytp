import React from 'react';
import ViewLessons from './ViewLessons';
import { getCoursesData } from '../action/coursesAction';

const Course = () => {
  const data = {
    id: '1',
    title: 'ReactJS',
    description:
      'One of the simplest frameworks to learn – React – was developed at Facebook to fix code maintainability issues due to the constant addition of features in the app.',
    renderLessons: false
  };

  const lessons = getCoursesData();
  console.log(lessons);
  function handleViewLessons() {
    data.renderLessons = true;
  }
  return (
    <div class="course">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <button onClick={handleViewLessons()}>View Lessons</button>
      {data.renderLessons && <ViewLessons />}
    </div>
  );
};

export default Course;
