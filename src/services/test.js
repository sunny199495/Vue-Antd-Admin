import { METHOD, request } from "@/utils/request";

export async function messageList(params) {
  return request('http://192.168.50.248:80/messageapi/getMessageList?currentPage=1&pageSize=10&status=1', METHOD.GET, params);
}

export default { messageList };
