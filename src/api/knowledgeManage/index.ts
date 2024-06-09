import request from '@/utils/request'
enum API {
  //获取全部知识
  ALL_KNOWLEDGE_URL = 'knowledge',
}
//获取全部知识
export const getAllKnowledge = () => {
  return request.get<any, any>(API.ALL_KNOWLEDGE_URL)
}
