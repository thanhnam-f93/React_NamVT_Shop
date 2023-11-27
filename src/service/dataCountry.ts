import { User } from "../model/User";
import { CONSTANTS } from "../utils/constant";
import axios from "axios";
const endpoint = CONSTANTS.URL.COUNTRY;
// COUNTRY: 'https://restcountries.com/v3.1/'
const callAPICountry = {
    async get_all() {
        const url = endpoint + "all";
        return axios.get(url);
    },
    async getByName(input: string) {
        const url = endpoint + `name/${input}`
        return axios.get(url);
    },
    async getByFullname(input: string) {
        const url = endpoint + `name/${input}?fullText=true`
        return axios.get(url);
    },
    async getByCode(input: string) {
        const url = endpoint + `alpha/${input}`
        return axios.get(url);
    },
    async getByRegion(input: string) {
        const url = endpoint + `region/${input}`
        return axios.get(url);
    },
    async getBySubregion(input: string) {
        const url = endpoint + `subregion/${input}`
        return axios.get(url);
    },
    async getByLanguage(input: string) {
        const url = endpoint + `lang/${input}`
        return axios.get(url);
    },

    async add(data: any) {
        return await axios.post(endpoint, data);
    },
    async update(id: string, data: User) {
        return await axios.put(`${endpoint}/${id}`, data);
    },
    async delete(id: string) {
        return await axios.delete(`${endpoint}/${id}`);
    },
};
export { callAPICountry }
