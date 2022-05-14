// axios 发送ajax请求
import request from '@/utils/request'

export default{

  list() {
    return request({
      url: '/api/product/list',
      method: 'get'
    })
  }
}
