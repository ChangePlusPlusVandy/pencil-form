const dummyTeacherObject = {
  teacher_id: 666,
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@vanderbilt.edu",
  school_id: "fgh136Dbest",
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
  return dummyTeacherObject;
};

export { getTeacherByID };
