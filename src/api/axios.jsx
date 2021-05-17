import axios from "axios";

const baseURL = "https://cs334-project2-backend.herokuapp.com/"; //"http://localhost:5000/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
