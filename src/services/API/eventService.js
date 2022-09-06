import axios from "axios";
import { AuthService } from "../AuthService";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] ="application/json"; 
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function(config){
    const token = AuthService.getAuthUser().token;
    config.headers.Authorization = token? `Bearer ${token}` : "";
    return config;
});

export const eventService = {

    getAllEvents(){
        const events = axios.get(`/events`).then(res => {
            if(res) return res.data;
        })
        return events;
    },

    getEvent(id){
        const event = axios.get(`/events/${id}`).then(res => {
            if(res) return res.data;
        })
        return event;
    }
}