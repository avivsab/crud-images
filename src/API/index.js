import axios from 'axios';

const url = 'http://localhost:3300';

export const fetchImages = () => axios.get(`${url}/images`);
export const uploadImage = (newImage) => axios.post(`${url}/images`, newImage);
export const deleteImages = () => axios.delete(`${url}/images/clearAll`);