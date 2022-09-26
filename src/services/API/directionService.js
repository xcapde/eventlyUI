import validation from "../../utils/validation";
import axios from "../configuration/axios-config";

export const directionService = {

    getAll() {
        const directions = axios.get(`/directions`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return directions;
    },
    getById(id) {
        const direction = axios.get(`/directions/${id}`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return direction;
    },
    getByEventId(id) {
        const direction = axios.get(`/events/${id}/directions`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
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
        const msg = axios.post(`/events/${id}/directions`, req).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return msg;
    },
    deleteByEventId(id) {
        const msg = axios.delete(`/events/${id}/directions`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return msg;
    }
}