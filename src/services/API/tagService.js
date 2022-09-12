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

export const tagService = {

    getAll() {
        const tags = axios.get(`/tags`)
            .then(res => {
                return res.data;
            })
            .catch(err => console.log(err))
        return tags;
    },

    getById(id) {
        const tag = axios.get(`/events/${id}`).then(res => {
            return res.data;
        })
        return tag;
    },
    // PostMultTagsReq: {
    //     "tags": ["pet-friendly", "party"],
    //      "eventId": id
    // }
    addTagsToEvent({id, ...req}) {
        console.log(id)
        console.log({tags: req.data})
        const msg = axios.post(`/events/${id}/tags`, {tags: req.data}).then(res => {
            return res.data;
        })
        return msg;
    },

    // tagReq: {
    //     "name": "party",
    //      "eventId": id
    // }
    deleteEventTag({id, ...req}) {
        const msg = axios.delete(`/events/${id}/tags`,  { data: req }).then(res => {
            return res.data;
        })
        return msg;
    }
}