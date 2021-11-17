const dummyTeacherObject = {
  teacherId: 666,
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@vanderbilt.edu',
  schoolId: 'fgh136Dbest',
};

// test

/**
 * Makes GET request to API to get teacher information.
 * @param  {string} id - Teacher ID to be queried by backend.
 *
 * @returns {Object} - Teacher information if request is successful, error otherwise.
 * */
const getTeacherByID = async (id) => {
  // try{
  //     const response = await fetch(`http://localhost:8080/api/form/${id}`);
  //     return await response.json();
  // } catch(err) {
  //     console.log(err);
  // }
  console.log(id);
  return dummyTeacherObject;
};

export default getTeacherByID;
