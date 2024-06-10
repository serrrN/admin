import request from '@/utils/request'
import type { KnowledgeResponseData ,Knowledge,ResponseData} from './type'
enum API {
  //获取全部知识
  ALL_KNOWLEDGE_URL = '/knowledge',
  //添加知识
  ADD_KNOWLEDGE_URL = "/knowledge/add"
}
//获取全部知识
export const getAllKnowledge = () => {
  return request.get<any, KnowledgeResponseData>(API.ALL_KNOWLEDGE_URL)
}
//添加知识
export const addKnowledge = (data:Knowledge) => {
  return request.post<Knowledge,ResponseData>(API.ADD_KNOWLEDGE_URL,data)
}