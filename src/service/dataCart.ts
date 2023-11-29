import { CONSTANTS } from "../utils/constant";
import { callAPIFetch } from "./api";

function getDataCart(): any {
  callAPIFetch(CONSTANTS.URL.CART, CONSTANTS.METHOD.GET, null)
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
