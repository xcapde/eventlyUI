import axios from "axios";
import { AuthService } from "../AuthService";
import validation from "../../utils/validation";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
    const token = AuthService.getAuthUser().token;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

export const notificationService = {

    getAuthNotifications() {
        const notifications = axios.get(`/auth-notifications`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        
        return notifications;
    },
    toggleCheck(id) {
        const message = axios.patch(`/auth-notifications/${id}/check`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return message;
    },
    delete(id) {
        const message = axios.delete(`/auth-notifications/${id}`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return message;
    }
}