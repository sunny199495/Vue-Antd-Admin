import { METHOD, request } from "@/utils/request";
import api from "./api";

const Api = api.host;

export async function GetNav(params) {
  return request(Api + "/getNav", METHOD.GET, params);
}

export async function GetModule(params) {
  return request(Api + "/getModule", METHOD.GET, params);
}

export async function GetBreadcrumbs(params) {
  return request(Api + "/getBreadcrumbs", METHOD.GET, params);
}

export default { GetNav, GetModule };
