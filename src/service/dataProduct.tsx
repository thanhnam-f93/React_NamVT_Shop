import { CONSTANTS } from "../utils/constant";
import callAPI from "./api";

const getDataProduct = () => {
  callAPI(CONSTANTS.URL.DOG, CONSTANTS.METHOD.GET, null)
    .then((response: { ok: any; status: any; json: () => any }) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data: string | any[]) => {
      return { data: data };
    })
    .catch((error: string) => {
      return { error: error };
    });
};
export { getDataProduct };
