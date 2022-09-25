import axios from "axios";
import validation from "../../utils/validation";

const baseURL = "http://localhost:8080";
export const authService = {

    signup(data) {
        const newUser = axios.post(`${baseURL}/auth/signup`, data)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return { error: validation.errorHandler(err) }
            })
        return newUser;
    },

    login(data) {
        const user = axios.post(`${baseURL}/auth/signin`, data).then(res => {
            return res.data;
        })
            .catch(err => {
                return { error: validation.errorHandler(err) }
            })
        return user;
    }


}   