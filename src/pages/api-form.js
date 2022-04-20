/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

/**
 * Makes GET request to API to get teacher information.
 * @param  {string} id - Teacher ID to be queried by backend.
 *
 * @returns {Object} - Teacher information if request is successful, error otherwise.
 * */
const getTeacherByID = async (id) => {
  try {
    const response = await fetch(`api/teacher/${id}`);
    return await response.json();
  } catch (err) {
    console.log(err);
    return { error: 'Teacher Not Found' };
  }
};

const getAllLocations = async () => {
  try {
    const response = await fetch('api/location/locations');
    return await response.json();
  } catch (err) {
    return err;
  }
};

const getShopForm = async (location) => {
  try {
    const response = await fetch(`api/${location}/form/getShopForm`);
    const responseJson = await response.json();
    responseJson.forEach((element) => {
      element.itemCount = 0;
    });
    return responseJson;
  } catch (err) {
    console.log(err);
  }
};

const submitForm = async (location, items) => {
  try {
    // remove items which weren't taken
    items.items = items.items.filter((item) => item.itemCount > 0);

    const response = await fetch(`api/${location}/transaction/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(items),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { getTeacherByID, getShopForm, submitForm, getAllLocations };
