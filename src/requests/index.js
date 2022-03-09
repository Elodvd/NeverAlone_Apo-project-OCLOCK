import axios from 'axios';

const apiAxios = axios.create({
    baseURL: 'http://localhost:3001'
});

export default apiAxios;


export function setBearerToken (token, user) {
    apiAxios.defaults.headers.common.Authorization = `bearer ${token}`;
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
};

export function removeBearerToken () {
    apiAxios.defaults.headers.common.Authorization = undefined;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

export function getLocalUser () {
    const localToken = localStorage.getItem("token");
    const localUser = localStorage.getItem("user")
    if(localToken){
        return localUser;
    }
    return undefined;
}