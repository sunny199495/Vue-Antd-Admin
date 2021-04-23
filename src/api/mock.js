import { METHOD, request } from "@/utils/request";
import api from "./api";

const Api = api.host;

export async function GetRoutesConfig(params) {
  return request(Api + "/router1", METHOD.GET, params);
}

export default { GetRoutesConfig };
