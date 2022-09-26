import validation from "../../utils/validation";
import axios from "../configuration/axios-config";

export const imageService = {

    getAll() {
        const images = axios.get(`/images`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return images;
    },

    getById(id) {
        const image = axios.get(`/images/${id}`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return image;
    },
    postImg(file, id) {
        const fd = new FormData();
        fd.append('multipartFile', file);
        const imgRes = axios.post(`/events/${id}/images`, fd).then(res => {
            return res.data;
        })
        .catch(err=>{
            console.log(err)
            return { error: validation.errorHandler(err) }
        })
        return imgRes;
    },
    deleteById(id) {
        const msg = axios.delete(`/images/${id}`).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return msg;
    },
    deleteByUrl(req) {
        req = { url: req };
        const msg = axios.delete(`/images`, { data: req }).then(res => {
            return res.data;
        })
        .catch(err=>{
            return { error: validation.errorHandler(err) }
        })
        return msg;
    }
}