import axios from "axios";

const baseURL = "http://localhost:8080";

export const eventService = {

    getAllEvents(){
        const events = axios.get(`${baseURL}/events`).then(res => {
            if(res) return res.data;
        })
        return events;
    }
}