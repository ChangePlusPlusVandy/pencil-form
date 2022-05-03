/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */

import axios from '../axios';

/**
 * Makes GET request to API to get teacher information.
 * @param  {string} id - Teacher ID to be queried by backend.
 *
 * @returns {Object} - Teacher information if request is successful, error otherwise.
 * */
const getTeacherByID = async (id) => {
  try {
    const response = await axios.get(`/teacher/${id}`);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

const getAllLocations = async () => {
  try {
    const response = await axios.get('/location/locations');
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

const getShopForm = async (location) => {
  try {
    const response = await axios.get(`/${location}/form/getShopForm`);
    response.data.forEach((element) => {
      element.itemCount = 0;
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

const submitForm = async (location, items) => {
  // remove items which weren't taken
  items.items = items.items.filter((item) => item.itemCount > 0);
  try {
    const response = await axios.post(
      `/${location}/transaction/submit`,
      items,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export { getTeacherByID, getShopForm, submitForm, getAllLocations };
