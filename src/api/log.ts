import axios from './axios';


 const login =  ({ phone, password}) => {
  const response = axios({
        url: '/login/cellphone',
        params: {
          phone,
          password
        }
    })
    return response
}

const logout = () => {
    return axios({
        method: "post",
        url: "/logout"
    })
}

export  { login, logout }