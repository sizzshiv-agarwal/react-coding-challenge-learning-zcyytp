import { GET_ALL_COURSES, GET_ALL_LESSONS } from './actionTypes';

export function getCoursesData() {
  return dispatch => {
    const url = 'https://6091056250c2550017677756.mockapi.io/learning/courses';
    console.log(url);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log('in getcoursesdata', data);
        dispatch(getCourses(data));
      });
  };
}

export function getLessons() {
  return dispatch => {
    const url = 'https://6091056250c2550017677756.mockapi.io/learning/lessons';
    console.log(url);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log('in getLessons', data);
        dispatch(getLessonsData(data));
      });
  };
}

export function getCourses(data) {
  console.log('insideGetPosts', data);
  return {
    type: GET_ALL_COURSES,
    data: data
  };
}

export function getLessonsData(data) {
  return {
    type: GET_ALL_LESSONS,
    data
  };
}
