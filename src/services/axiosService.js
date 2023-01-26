import axios from "axios";

const axiosService = axios.create({baseURL: 'https://api.spacexdata.com/v4/launches/'})

export {
    axiosService
}