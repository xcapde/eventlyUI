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

export const tagService = {

    getAll() {
        const tags = axios.get(`/tags`)
            .then(res => {
                return res.data;
            })
            .catch(err=>{
                return { error: validation.errorHandler(err) }
            })
        return tags;
    },

    getById(id) {
        const tag = axios.get(`/events/${id}`).then(res => {
            return res.data;
        })
        return tag;
    },
    addTagsToEvent({id, ...req}) {
        const msg = axios.post(`/events/${id}/tags`, {tags: req.data}).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return msg;
    },
    deleteEventTag({id, ...req}) {
        const msg = axios.delete(`/events/${id}/tags`,  { data: req }).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return msg;
    }
}