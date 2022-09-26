import validation from "../../utils/validation";
import axios from "../configuration/axios-config";

export const requirementService = {

    getAll() {
        const requirements = axios.get(`/requirements`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return requirements;
    },

    getById(id) {
        const requirement = axios.get(`/requirements/${id}`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return requirement;
    },
    getByEventId(id) {
        const requirements = axios.get(`/events/${id}/requirements`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return requirements;
    },
    // requirementReq: {
    //     "name": "party",
    //      "eventId": id
    // }
    createRequirement({ id, ...req }) {
        const msg = axios.post(`/events/${id}/requirements`, req).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return msg;
    },

    // requirementReq: {
    //     "name": "party",
    //      "eventId": id
    // }
    deleteRequirement({ id, ...req }) {
        const msg = axios.delete(`/events/${id}/requirements`, { data: req }).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return msg;
    }
}