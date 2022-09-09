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

export const requirementService = {

    getAll() {
        const requirements = axios.get(`/requirements`).then(res => {
            return res.data;
        })
        return requirements;
    },

    getById(id) {
        const requirement = axios.get(`/requirements/${id}`).then(res => {
            return res.data;
        })
        return requirement;
    },
    getByEventId(id) {
        const requirements = axios.get(`/events/${id}/requirements`).then(res => {
            return res.data;
        })
        return requirements;
    },
    // requirementReq: {
    //     "name": "party",
    //      "eventId": id
    // }
    createRequirement({ id, ...tags }) {
        const msg = axios.post(`/events/${id}/requirements`, tags).then(res => {
            return res.data;
        })
        return msg;
    },

    // requirementReq: {
    //     "name": "party",
    //      "eventId": id
    // }
    deleteRequirement({ id, ...tag }) {
        const msg = axios.delete(`/events/${id}/requirements`, tag).then(res => {
            return res.data;
        })
        return msg;
    }
}