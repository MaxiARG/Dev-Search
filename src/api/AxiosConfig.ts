import axios from 'axios';

const url = process.env.EXPO_PUBLIC_API_URL;

const axiosIntance = axios.create({ baseURL: url, headers: { 'Content-Type': 'application/json', } });

const getAxiosInstance = () => axiosIntance;

// This file could grow in the future due to the possibility to add more configurations, 
// like interceptors or another network provider like React Query.


export { url, getAxiosInstance };
