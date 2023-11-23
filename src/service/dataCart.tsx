import { CONSTANTS } from "../utils/constant";
import callAPI from "./api";

function getDataCart(): any {
  callAPI(CONSTANTS.URL.CART, CONSTANTS.METHOD.GET, null)
    .then((response: { ok: any; status: any; json: () => any }) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data: string | any[]) => {
      return { data: data, error: {} };
    })
    .catch((error: string) => {
      return { data: {}, error: error };
    });
}
export { getDataCart };
