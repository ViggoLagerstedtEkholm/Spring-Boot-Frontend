import axios from "axios";
import Interceptor from "./Interceptor";
import jwt from "jwt-decode";

export const ChangePassword = async (credentials) =>{
    const promise = Interceptor.post("/user/update/password", credentials);
    return promise.catch((error) => Promise.reject(error));
}

export const LoginUser = async (username, password) =>{
    let url = new URL("http://localhost:8080/api/user/login?");
    url.searchParams.append("username", username);
    url.searchParams.append("password", password);
    const promise = axios.get(url.toString());
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}

export const RegisterUser = async (credentials) =>{
    const promise = axios.post("http://localhost:8080/api/user/register", credentials);
    return promise.catch((error) => Promise.reject(error));
}

export const RemoveUser = async (username) =>{
    const promise = Interceptor.post("/user/remove", {username : username});

    //Check if you removed the logged in account, this should be properly handled.
    return promise.then(() => {
        const accessToken = localStorage.getItem('accessToken');
        const user = jwt(accessToken);
        const {sub} = user;
        if(sub === username){
            localStorage.clear();
            alert('You deleted yourself.');
            window.location.reload();
        }
    }).catch((error) => Promise.reject(error));
}

export const ValidatePassword = async (token) =>{
    let url = new URL("http://localhost:8080/api/reset/validate");
    url.searchParams.append("token", token);

    const promise = axios.get(url.toString());
    return promise.then(response => response).catch((error) => Promise.reject(error));
}

export const PasswordReset = async (credentials) =>{
    const promise = axios.post("http://localhost:8080/api/reset/update", credentials);
    return promise.catch((error) => Promise.reject(error));
}

export const SendPasswordEmail = async (email) =>{
    let url = new URL("http://localhost:8080/api/reset/password");
    url.searchParams.append("email", email);

    const promise = axios.post(url.toString());
    return promise.then(response => response).catch((error) => Promise.reject(error));
}

export const GetUsersByUsername = async (filter) =>{
    let url = new URL("http://localhost:8080/api/user/search");
    url.searchParams.append("page", filter.Page);
    url.searchParams.append("resultsPerPage", filter.ResultsPerPage);
    url.searchParams.append("username", filter.Username);

    const promise = axios.get(url.toString());
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}

export const GetAllUsers = async (filter) => {
    console.log(filter.Page);
    let url = new URL("http://localhost:8080/api/user/all");
    url.searchParams.append("page", filter.Page);
    url.searchParams.append("resultsPerPage", filter.ResultsPerPage);

    const promise = axios.get(url.toString());
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}