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

export const webUrlService = {

    getAll() {
        const urls = axios.get(`/webUrls`).then(res => {
            return res.data;
        })
        return urls;
    },
    getById(id) {
        const url = axios.get(`/webUrls/${id}`).then(res => {
            return res.data;
        })
        return url;
    },
    getByEventId(id) {
        const url = axios.get(`/events/${id}/webUrls`).then(res => {
            return res.data;
        })
        return url;
    },
    createWebUrl({ id, ...req }) {
        console.log(id, req)
        const msg = axios.post(`/events/${id}/webUrls`, req).then(res => {
            return res.data;
        })
        .catch(err =>{
            console.log(err)
        })
        return msg;
    },
    deleteByEventId(id) {
        const msg = axios.delete(`/events/${id}/webUrls`).then(res => {
            return res.data;
        })
        return msg;
    }
}