import axios from "axios";

const baseURL = "http://localhost:8080";
export const authService = {

    signup(data){
        console.log(data)
        const newUser = axios.post(`${baseURL}/auth/signup`, data).then(res => {
            return res.data;
        })
        return newUser;
    },

    login(data){
        console.log(data)
        const user = axios.post(`${baseURL}/auth/signin`, data).then(res => {
            return res.data;
        })
        return user;
    }
    

}   