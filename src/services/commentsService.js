import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentsService = {
    getAll:() => axiosService.get(urls.comments),
    create:(newComment) => axiosService.post(urls.comments, newComment)
 }

export {
    commentsService
}