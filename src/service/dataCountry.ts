import { User } from "../model/User";
import { CONSTANTS } from "../utils/constant";
import axios from "axios";
let endpoint = CONSTANTS.URL.COUNTRY;
// COUNTRY: 'https://restcountries.com/v3.1/'
const callAPICountry = {
    async get_all() {
        endpoint += 'all';
        return axios.get(endpoint);
    },
    async getByName(input: string) {
        endpoint += `name/${input}`
        return axios.get(endpoint);
    },
    async getByFullname(input: string) {
        endpoint += `name/${input}?fullText=true`
        return axios.get(endpoint);
    },
    async getByCode(input: string) {
        endpoint += `alpha/${input}`
        return axios.get(endpoint);
    },
    async getByRegion(input: string) {
        endpoint += `region/${input}`
        return axios.get(endpoint);
    },
    async getBySubregion(input: string) {
        endpoint += `subregion/${input}`
        return axios.get(endpoint);
    },
    async getByLanguage(input: string) {
        endpoint += `lang/${input}`
        return axios.get(endpoint);
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
