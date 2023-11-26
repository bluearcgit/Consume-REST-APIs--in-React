// apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your API base URL

const Service = axios.create({
  baseURL: API_BASE_URL,
});

export const AllPosts = async () => {
  try {
    const response = await Service.get('/posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};