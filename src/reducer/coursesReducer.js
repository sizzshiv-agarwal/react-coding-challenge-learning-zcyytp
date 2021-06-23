import { GET_ALL_COURSES } from '../action/actionTypes';

const initialState = {
  courses: [
    {
      id: '1',
      title: 'ReactJS',
      description:
        'One of the simplest frameworks to learn – React – was developed at Facebook to fix code maintainability issues due to the constant addition of features in the app.',
      renderLessons: false
    }
  ]
};

export default function coursesReducer(state = initialState, action) {
  console.log('inside reducer', action.type);
  switch (action.type) {
    case GET_ALL_COURSES: {
      console.log('GET_ALL_COURSES in reducer', action.data);
      return {
        ...state,
        courses: action.data
      };
    }

    default:
      return state;
  }
}
