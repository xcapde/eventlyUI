import validation from "../../utils/validation";
import axios from "../configuration/axios-config";

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