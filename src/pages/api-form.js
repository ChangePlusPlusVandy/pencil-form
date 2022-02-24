/* eslint-disable consistent-return */
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
  try {
    console.log(id);
    const response = await fetch(`http://localhost:8080/api/teacher/${id}`);
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: 'Teacher Not Found' };
  }
};

const getShopForm = async (location) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/${location}/form/getShopForm`
    );
    const responseJson = await response.json();
    responseJson.forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.itemCount = 0;
    });
    console.log(responseJson);
    return responseJson;
  } catch (err) {
    console.log(err);
  }
};

const submitForm = async (location, items) => {
  try {
    console.log(items);
    // eslint-disable-next-line prefer-const
    let result = {};
    console.log(items, 'here');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < items.items.length; i++) {
      result[items.items[i].itemName] = items.items[i].itemCount;
      console.log(items.items[i], 'here');
    }
    console.log(result);
    // eslint-disable-next-line no-param-reassign
    items.items = result;
    console.log(items.items);
    const response = await fetch(
      `http://localhost:8080/api/${location}/transaction/submit`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(items),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { getTeacherByID, getShopForm, submitForm };
