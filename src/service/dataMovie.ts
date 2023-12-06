import { Movie } from "../model/Movie";
import { CONSTANTS } from "../utils/constant";
import axios, { AxiosError } from "axios";
const endpoint = CONSTANTS.URL.MOVIE;
const callAPIMovie = {
    async get_all1() {
        const url = endpoint;
        axios.get(url).then((response) => {
            if (
                [CONSTANTS.STATUS.CREATE, CONSTANTS.STATUS.OK].includes(
                    response.status
                )
            ) {
                console.log("Return Data", response.data);
                return response.data;
            } else {
                console.log("Throw Erro");
                return new AxiosError("Haven't data find")
            }

        })
            .catch((error) => {
                console.log("Return Errr");
                if (CONSTANTS.STATUS.ERR_SERVER == error?.code) {
                    alert("Server Error");
                } else {
                    alert(error);
                }

            })
    },
    async get_all() {
        // const url = endpoint;
        const url = endpoint + "?_page=1&_limit=10"
        return axios.get(url);
    },
    async getByTitle(input: string) {
        const url = endpoint + `name/${input}`
        return axios.get(url);
    },
    async getByType(input: string) {
        const url = endpoint + `genre/${input}`
        return axios.get(url);
    },
    async getByYear(input: string) {
        const url = endpoint + `year/${input}`
        return axios.get(url);
    },
    async getByLanguage(input: string) {
        const url = endpoint + `language/${input}`
        return axios.get(url);
    },
    async getByRating(input: string) {
        const url = endpoint + `imdbRating/${input}`
        return axios.get(url);
    },
    async getByVote(input: string) {
        const url = endpoint + `imdbVotes/${input}`
        return axios.get(url);
    },
    async getLasted(input: string) {
        const url = endpoint + `?_sort=year&_order=desc&_limit=${input}`
        return axios.get(url);
    },
    async add(data: any) {
        return await axios.post(endpoint, data);
    },
    async update(id: string, data: any) {
        return await axios.put(`${endpoint}/${id}`, data);
    },
    async delete(id: string) {
        return await axios.delete(`${endpoint}/${id}`);
    },
};
export { callAPIMovie }
