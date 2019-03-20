import { camelizeKeys } from 'humps'
import apiClient from './'

function fetchConfig() {
  return camelizeKeys(
    JSON.parse(
      '{"result":"success","errorCode":0,"errorMessage":"","socialSources":[{"id":"bM","parentId":"qd","name":"Facebook","type":"socialSource","stt":0},{"id":"Mb","parentId":"qd","name":"Instagram","type":"socialSource","stt":0}],"topics":[{"id":"8q","parentId":"bM","name":"Product","type":"topic","stt":0},{"id":"Kd","parentId":"bM","name":"Brand","type":"topic","stt":0}],"categories":[{"id":"EL","parentId":"8q","name":"Generic Question/Taste","type":"category","stt":0},{"id":"zP","parentId":"8q","name":"Origin","type":"category","stt":0},{"id":"lN","parentId":"8q","name":"Price","type":"category","stt":0}],"subCategories":[{"id":"N5","parentId":"EL","name":"Question General","type":"subCategory","stt":0},{"id":"2g","parentId":"zP","name":"Unknown","type":"subCategory","stt":0},{"id":"Zj","parentId":"lN","name":"Price Good","type":"subCategory","stt":0}]}'
    )
  )
}

export const GlobalService = {
  fetchConfig,
}
