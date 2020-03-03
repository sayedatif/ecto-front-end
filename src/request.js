import axios from 'axios';

const request = axios.create({
  baseURL: 'https://swapi.co/api',
})

export default request;