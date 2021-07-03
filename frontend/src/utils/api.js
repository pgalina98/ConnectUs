import axios from "axios";
const API_URL = process.env.REACT_APP_API_URI;

export default axios.create({
  baseURL: API_URL,
});
