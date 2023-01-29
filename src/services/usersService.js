import {axiosService} from "./axiosService";
import {urls} from "../configs";

const usersService = {
    getAll:() => axiosService.get(urls.users),
    create:(newUser) => axiosService.post(urls.users, newUser)
}

export {
    usersService
}