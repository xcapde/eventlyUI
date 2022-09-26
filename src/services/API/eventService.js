import validation from "../../utils/validation";
import axios from "../configuration/axios-config";

export const eventService = {

    getAllEvents() {
        const events = axios.get(`/events`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return events;
    },

    getEvent(id) {
        const event = axios.get(`/events/${id}`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return event;
    },
    postEvent(req) {
        const event = axios.post(`/events`, req).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return event;
    },
    updateEvent({ id, ...rest }) {
        const event = axios.put(`/events/${id}`, rest).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return event;
    },
    deleteEvent(id) {
        const event = axios.delete(`/events/${id}`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return event;
    },
    getJoinedEvents() {
        const events = axios.get(`/joined-events`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return events;
    },
    getPublishedEvents() {
        const events = axios.get(`/published-events`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return events;
    },
    getUserPublishedEvents(id) {
        const events = axios.get(`/users/${id}/events`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return events;
    },

    getOfflineEvent(){
        const events = axios.get(`events?type=offline`).then(res => {
            return res.data
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return events;
    },

    getOnlineEvent(){
        const events = axios.get(`events?type=online`).then(res => {
            return res.data
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return events;
    },

    getEventsByTag(tag){
        const events = axios.get(`events?tag=${tag}`).then(res => {
            return res.data
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return events;
    },

    getEventsBySearch(search){
        const events = axios.get(`events?search=${search}`).then(res => {
            return res.data
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return events;
    }
}