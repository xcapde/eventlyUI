import validation from "../../utils/validation";
import axios from "../configuration/axios-config";

export const tagService = {

    getAll() {
        const tags = axios.get(`/tags`)
            .then(res => {
                return res.data;
            })
            .catch(err=>{
                return { error: validation.errorHandler(err) }
            })
        return tags;
    },

    getById(id) {
        const tag = axios.get(`/events/${id}`).then(res => {
            return res.data;
        })
        return tag;
    },
    addTagsToEvent({id, ...req}) {
        const msg = axios.post(`/events/${id}/tags`, {tags: req.data}).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return msg;
    },
    deleteEventTag({id, ...req}) {
        const msg = axios.delete(`/events/${id}/tags`,  { data: req }).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return msg;
    }
}