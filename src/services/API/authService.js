import axios from "axios";

const baseURL = "http://localhost:8080";
export const authService = {

    signup(data){
        const newUser = axios.post(`${baseURL}/auth/signup`, data)
        .then(res => {
            return res.data;
        })
        .catch(err=>{
            console.log(err)
            return { error : err.response.data ? err.response.data : err}
        })
        return newUser;
    },

    login(data){
        const user = axios.post(`${baseURL}/auth/signin`, data).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error : err.response.data ? err.response.data : err}
        })
        return user;
    }
    

}   