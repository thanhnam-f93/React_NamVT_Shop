import { CONSTANTS } from "../utils/constant";
import axios from 'axios';
export async function callAPIFetch(endpoint: RequestInfo | URL, method: any = CONSTANTS.METHOD.GET, body?: any) {
  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // var raw = JSON.stringify(body);
  var requestOptions = {
    method: method ? method : CONSTANTS.METHOD.GET,
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };
  const response = await fetch(endpoint, requestOptions);
  return response;
}
// use Axios
let endpoint = CONSTANTS.EMPTY;
const callAPIAxios = {
  async get_all() {
    return axios.get(endpoint);
  },
  async add_new(data: any) {
    return await axios.post(endpoint, data);
  },
  async edit(id: string, data: any) {
    return await axios.put(`${endpoint}/${id}`, data);
  },
  async delete(id: string) {
    return await axios.delete(`${endpoint}/${id}`);
  },
};
export { callAPIAxios }
