import axios from 'axios';
import { API_CONSTANTS } from "../assets/config/constant"


import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data',

  }
}



function getBaseUrl() {
  return API_CONSTANTS.BASE_URL;
}

function getToken() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('token').then(token => {
      resolve(token)
    })
  });
}

async function callAxios(endPoint, reqData, auth = true) {
  try {
    const [baseUrl, token] = await Promise.all([getBaseUrl(), getToken()]);

    const authtoken = auth ? 'Bearer ' + token : "";

    const response = await axios.post(
      baseUrl + endPoint,
      { ...reqData },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': authtoken
        }
      },

    );
 
    if (response.data.access_token) {
      return { success: true, data: response.data, message: response.data.message };
    } if (response.data.aaData) {
      return { success: true, data: response.data };
    } else if (response.data.status === "success") {
      return { success: true, data: response.data, message: response.data.message };
    } else {
      return { success: false, data: response.data, message: response.data.message };
    }
  } catch (error) {

    return {

      success: false,
      data: {
        message: 'Some Error occurred!',
        error: error.response
      }
    };
  }
}
async function callAxiosWithFormData(endPoint, reqData, auth = true) {
  let formData = new FormData()
  formData.append("name", reqData.name)
  formData.append("price", reqData.price)
  formData.append("type", reqData.type)
  formData.append("prefer", reqData.prefer)
  formData.append("description", reqData.description)
  formData.append("category", reqData.category)
  formData.append("subCategory", reqData.subCategory)
  formData.append("file", {
    uri: '/image/data/logo.png',
    type: 'image/png',
    name: 'd7fe29b8-9acb-4e94-9df3-41017f508d82.jpg'
  })
  try {
    const [baseUrl, token] = await Promise.all([getBaseUrl(), getToken()]);

    const authtoken = auth ? 'Bearer ' + token : "";

    const response = await axios.post(
      baseUrl + endPoint,
      formData,


      {
        headers: {
          // 'Accept': 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
          'Authorization': authtoken
        }
      },

    );
  
    if (response.data.access_token) {
      return { success: true, data: response.data, message: response.data.message };
    } if (response.data.aaData) {
      return { success: true, data: response.data };
    } else if (response.data.status === "success") {
      return { success: true, data: response.data, message: response.data.message };
    } else {
      return { success: false, data: response.data, message: response.data.message };
    }
  } catch (error) {

    return {

      success: false,
      data: {
        message: 'Some Error occurred!',
        error: error.response
      }
    };
  }
}

async function callAxiosGet(endPoint, auth = true) {
 
  try {
    const [baseUrl, token] = await Promise.all([getBaseUrl(), getToken()]);

    const authtoken = auth ? 'Bearer ' + token : "";

    const response = await axios.get(
      baseUrl + endPoint,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authtoken
        }
      }
    );

    if (response.data.success) {
      return { success: true, data: response.data };
    } else {
      return { success: true, data: response.data };
    }
  } catch (error) {

    return {
      success: false, data: {
        message: 'Some Error occurred!',
        error: error
      }
    };
  }
}

async function callAxiosWithoutSession(endPoint, reqData) {
  try {
    const baseUrl = await getBaseUrl();

    const response = await axios.post(
      baseUrl + endPoint,
      { ...reqData },
      axiosRequestConfig
    );

    if (response.data.success) {
      return { success: true, data: response.data };
    } else {
      return { success: false, data: response.data };
    }
  } catch (error) {

    return { success: false, data: 'Some Error occurred!' };
  }
}

async function callAxiosGetWithoutSession(endPoint) {
  try {
    const baseUrl = await getBaseUrl();

    const response = await axios.get(
      baseUrl + endPoint
    );

    if (response.data.status === "success") {
      return { success: true, data: response.data };
    } else {
      return { success: false, data: response.data };
    }
  } catch (error) {

    return { success: false, data: 'Some Error occurred!' };
  }
}

export {
  callAxios,
  callAxiosGet,
  callAxiosWithFormData,
  callAxiosWithoutSession,
  callAxiosGetWithoutSession
};
