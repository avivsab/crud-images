import * as api from "../API/index.js";

export const getImages = () => async dispatch => {
  try {
    const { data } = await api.fetchImages();
    dispatch({ type: "GET_ALL", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const uploadData = image => async dispatch => {
  try {
    const { data } = await api.uploadImage(image);
    dispatch({ type: "UPLOAD", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const hideImg = (id, images = []) => dispatch => {
  const newImages = images.filter( img => img._id !== id);
  dispatch({type: "HIDE", payload: newImages});
}

export const deleteAll = () => async dispatch => {
  try {
    const { data } = await api.deleteImages();
    dispatch({type: "DELETE_ALL", payload: data})
  } catch (error) {
    console.error(error);
  }
}