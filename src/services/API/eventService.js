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
        .catch(err => console.log("get by id ", err))
        return event;
    },
    postEvent(req) {
        const event = axios.post(`/events`, req).then(res => {
            return res.data;
        })
        return event;
    },
    updateEvent({ id, ...rest }) {
        const event = axios.put(`/events/${id}`, rest).then(res => {
            return res.data;
        })
        .catch(err => console.log("update err:", err))
        return event;
    },
    deleteEvent(id) {
        const event = axios.delete(`/events/${id}`).then(res => {
            return res.data;
        })
        .catch(error => console.log(error))
        return event;
    },
    getJoinedEvents() {
        const events = axios.get(`/joined-events`).then(res => {
            return res.data;
        })
        return events;
    },
    getPublishedEvents() {
        const events = axios.get(`/published-events`).then(res => {
            return res.data;
        })
        return events;
    },
    getUserPublishedEvents(id) {
        const events = axios.get(`/users/${id}/events`).then(res => {
            return res.data;
        })
        return events;
    },

    getOfflineEvent(){
        const events = axios.get(`events?type=offline`).then(res => {
            return res.data
        })
        return events;
    },

    getOnlineEvent(){
        const events = axios.get(`events?type=online`).then(res => {
            return res.data
        })
        return events;
    },

    getEventsByTag(tag){
        const events = axios.get(`events?tag=${tag}`).then(res => {
            return res.data
        })
        return events;
    },

    getEventsBySearch(search){
        const events = axios.get(`events?search=${search}`).then(res => {
            return res.data
        })
        return events;
    }
}