import { User } from "../model/User";
import { CONSTANTS } from "../utils/constant";
import axios from "axios";
let endpoint = CONSTANTS.URL.USER;
const callAPIUser = {
    async get_all() {
        return axios.get(endpoint);
    },
    async signin(data: User) {
        CONSTANTS.URL.USER +
            `?username=${data.username}&password=${data.password}`
        return axios.get(endpoint);
    },
    async signup(data: User) {
        return await axios.post(endpoint, data);
    },
    async update(id: string, data: User) {
        return await axios.put(`${endpoint}/${id}`, data);
    },
    async delete(id: string) {
        return await axios.delete(`${endpoint}/${id}`);
    },
};
export { callAPIUser }
