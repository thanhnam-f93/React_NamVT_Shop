import { CONSTANTS } from "../utils/constant";
export default async function callAPI(endpoint: RequestInfo | URL, method: any = CONSTANTS.METHOD.GET, body?: any) {
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