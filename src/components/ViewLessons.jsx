import React from 'react';

const ViewLessons = () => {
  const data = {
    id: '1',
    title: 'ReactJS',
    description:
      'One of the simplest frameworks to learn – React – was developed at Facebook to fix code maintainability issues due to the constant addition of features in the app.'
  };

  return (
    <div class="course">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <button>View Lessons</button>
    </div>
  );
};

export default ViewLessons;
