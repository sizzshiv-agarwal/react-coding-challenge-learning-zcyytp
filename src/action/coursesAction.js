export function getCoursesData() {
  const url = 'https://6091056250c2550017677756.mockapi.io/learning/courses';
  console.log(url);
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
