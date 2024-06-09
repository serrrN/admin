//数据类型定义
export interface ResponseData {
  message: string
  code: number
  _v: number
}

//知识数据类型定义
export interface Knowledge {
  _id: string
  question: string
  answer: string
  tags: string[]
  createdTime: string
  updateTime: string
}

//知识数据返回类型定义
