import { CONSTANTS } from "../utils/constant";
import { callAPIFetch } from "./api";

const getDataProduct = (name: string = "") => {
  const endpoint = CONSTANTS.URL.DOG + `?name=${name}`;
  callAPIFetch(
    name.length != 0 ? endpoint : CONSTANTS.URL.DOG,
    CONSTANTS.METHOD.GET,
    null
  )
    .then((response: { ok: any; status: any; json: () => any }) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data: string | any[]) => {
      return data;
    })
    .catch((error: string) => {
      return error;
    });
};
export { getDataProduct };
