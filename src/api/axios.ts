
// import axios from "axios";


// const createInstance = () => {
//     const instance = axios.create({
//         baseURL: 'http://localhost:3000/',
//         withCredentials: true,
//         responseType: 'json'
//     });

//     instance.interceptors.response.use(handleResponse, handleError)

//     return instance;
// };

// const handleResponse = (res) => {
//     return res.data
// }

// const handleError = (error) => {
//     const { response, message } = error
//     return "error"
//   }

// const request = createInstance();

// export default request;

import axios, { AxiosRequestConfig, ResponseType, AxiosInstance } from 'axios'



const createInstance = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,
    timeout: 8000,
    responseType: 'json',
  })

  instance.interceptors.response.use(handleResponse)

  return instance
}

const handleResponse = (response: any) => {
  return response.data
}

const handleError = (error: any) => {
  const { response } = error
  return Promise.reject(response ? new Error(response.data || error) : error)
}

const toastError = (error: any) => {
  const { response, message } = error

  return Promise.reject(error)
}

interface Instance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>
}
export const requestWithoutErrorToast: Instance = createInstance()

const request: Instance = createInstance()
request.interceptors.response.use(undefined, toastError)

export default request