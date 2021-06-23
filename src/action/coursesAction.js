import { GET_ALL_COURSES } from './actionTypes';

export function getCoursesData() {
  return dispatch => {
    const url = 'https://6091056250c2550017677756.mockapi.io/learning/courses';
    console.log(url);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(getPosts(data));
      });
  };
}

export function getLessons() {
  const url = 'https://6091056250c2550017677756.mockapi.io/learning/lessons';
  console.log(url);

  return function(dispatch) {
    fetch(url)
      .then(response => {
        response.json();
      })
      .then(courses => {
        console.log(courses);
      });
  };
}

export function getPosts(data) {
  console.log('insideGetPosts');
  return {
    type: GET_ALL_COURSES,
    data: data
  };
}
