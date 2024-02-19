import axios from 'axios';

const api = axios.create({
  baseURL: 'https://chatapp-backend-q2cq.onrender.com', // Your Node.js server URL
});

export default api;