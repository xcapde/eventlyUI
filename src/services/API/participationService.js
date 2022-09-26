import validation from "../../utils/validation";
import axios from "../configuration/axios-config";

export const participationService = {

    getByEventId(id) {
        const participations = axios.get(`/events/${id}/participations`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return participations;
    },
    join(id) {
        const participations = axios.post(`/events/${id}/participations`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return participations;
    },
    unjoin(id) {
        const participations = axios.delete(`/events/${id}/unjoin`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return participations;
    },
    getAll(){
        const participations = axios.get(`/participations`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return participations;
    }
}