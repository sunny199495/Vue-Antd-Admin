import { METHOD, request } from "@/utils/request";
import api from "./api";

const messageApi = api.host + "/messageApi/";

export async function messageList(params) {
  return request(messageApi + "getMessageList?currentPage=1&pageSize=10&status=1", METHOD.GET, params);
}

export async function msgDetail(params) {
  return request(messageApi + "msg/getMsgDetail?msgId=1&terminal=1", METHOD.GET, params);
}

export async function msgLaster(params) {
  return request(messageApi + "msg/getLatestWarning?size=1&terminal=1", METHOD.GET, params);
}

export default { messageList, msgDetail, msgLaster };
