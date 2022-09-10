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

export const directionService = {

    getAll() {
        const directions = axios.get(`/directions`).then(res => {
            return res.data;
        })
        return directions;
    },
    getById(id) {
        const direction = axios.get(`/directions/${id}`).then(res => {
            return res.data;
        })
        return direction;
    },
    // directionReq:{
    //     "country":"Catalunya",
    //     "province":"Barcelona",
    //     "city":"La Garriga",
    //     "street":"Calabria",
    //     "building":"9",
    //     "door":"2n 4a",
    //     "eventId": id
    // }
    createDirection({ id, ...req }) {
        console.log(id, req)
        const msg = axios.post(`/events/${id}/directions`, req).then(res => {
            return res.data;
        })
        .catch(err =>{
            console.log(err)
        })
        return msg;
    },
    deleteByEventId(id) {
        const msg = axios.delete(`/events/${id}/directions`).then(res => {
            return res.data;
        })
        return msg;
    }
}