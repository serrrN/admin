import request from '@/utils/request'
import type { KnowledgeResponseData } from './type'
enum API {
  //获取全部知识
  ALL_KNOWLEDGE_URL = 'knowledge',
}
//获取全部知识
export const getAllKnowledge = () => {
  return request.get<any, KnowledgeResponseData>(API.ALL_KNOWLEDGE_URL)
}
//添加知识
export const addKnowledge = () => {
  return request.post()
}