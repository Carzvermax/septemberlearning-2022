import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postService = {
    getById: (id) => axiosService.get(`${urls.postById}/${id}`)
}

export {
    postService
}