export default function coursesReducer(state = [], action) {
  switch (action.type) {
    case 'GET_ALL_COURSES': {
      console.log(courses, 'in reducer');
      return state;
    }
    default:
      return state;
  }
}
