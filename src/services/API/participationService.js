import axios from "axios";
import { AuthService } from "../AuthService";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
    const token = AuthService.getAuthUser().token;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

export const participationService = {

    getByEventId(id) {
        const participations = axios.get(`/events/${id}/participations`).then(res => {
            return res.data;
        })
        return participations;
    },
    join(id) {
        const participations = axios.post(`/events/${id}/participations`).then(res => {
            return res.data;
        })
        return participations;
    },
    unjoin(id) {
        const participations = axios.delete(`/events/${id}/unjoin`).then(res => {
            return res.data;
        })
        return participations;
    },
    getAll(){
        const participations = axios.get(`/participations`).then(res => {
            return res.data;
        })
        return participations;
    }
}