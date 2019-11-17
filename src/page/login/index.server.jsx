import api from '../../api/index'
const API  =new api()
const loginUrl='http://172.20.10.5:3000/login';
const registerUrl='http://172.20.10.5:3000/register';

function login(data) {
    return API.post(loginUrl, data)
}

function register(data) {
    return API.post(registerUrl, data)
}

export default{
  login,
  register
}
