import axios from 'axios'

export const wrapperInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    // 'X-Custom-Header': 'foobar'
  }
});