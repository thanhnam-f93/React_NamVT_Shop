import { User } from "../model/User";
import { CONSTANTS } from "../utils/constant";
import axios from "axios";
const endpoint = CONSTANTS.URL.TODO;
const callAPITodo = {
    async get_all() {
        const url = endpoint;
        return axios.get(url);
    },
    async getByStatus(input: string) {
        const url = endpoint + `?status=${input}`
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
export { callAPITodo }
