import axios from 'axios';

const apiAxios = axios.create({
    baseURL: 'http://localhost:3001'
});

export default apiAxios;


export function setBearerToken (token) {
    apiAxios.defaults.headers.common.Authorization = `bearer ${token}`;
    localStorage.setItem("token", token);
};

export function removeBearerToken () {
    apiAxios.defaults.headers.common.Authorization = undefined;
    localStorage.removeItem("token");
}

export function getLocalBearerToken () {
    const localToken = localStorage.getItem("token");
    if(localToken){
        return localToken;
    }
    return undefined;
}