import axios from "axios";
import { AuthService } from "../AuthService";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function(config) {
  const token = AuthService.getAuthUser().token;
  config.headers.Authorization = token? `Bearer ${token}`: "";
  return config;
});

export const eventService = {

    getAllEvents() {
        const events = axios.get(`/events`).then(res => {
            return res.data;
        })
        return events;
    },

    getEvent(id) {
        const event = axios.get(`/events/${id}`).then(res => {
            return res.data;
        })
        return event;
    },
    // eventReq:{
    //     "title":"B-day party!",
    //     "description":"Mikusa's b-day, she's getting older soon to be a nanny",
    //     "type":"offline",
    //     "date": "2022-09-17T09:30:15"
    // }
    postEvent(req) {
        const event = axios.post(`/events`, req).then(res => {
            return res.data;
        })
        return event;
    },
    // eventReq:{
    //     "title":"B-day party!",
    //     "description":"Mikusa's b-day, she's getting older soon to be a nanny",
    //     "type":"offline",
    //     "date": "2022-09-17T09:30:15",
    //      "id":id
    // }
    updateEvent({ id, ...rest }) {
        console.log(id);
        console.log(rest);
        const event = axios.put(`/events/${id}`, rest).then(res => {
            return res.data;
        })
        return event;
    },
    deleteEvent(id) {
        const event = axios.delete(`/events/${id}`).then(res => {
            return res.data;
        })
        return event;
    }
}