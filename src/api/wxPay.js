// axios 发送ajax请求
import request from '@/utils/request'

export default{

  nativePay(productId) {
    return request({
      url: '/api/wx-pay/native/' + productId,
      method: 'post'
    })
  },

  cancel(orderNo) {
    return request({
      url: '/api/wx-pay/cancel/' + orderNo,
      method: 'post'
    })
  },

  refunds(orderNo, reason) {
    return request({
      url: '/api/wx-pay/refunds/' + orderNo + '/' + reason,
      method: 'post'
    })
  }
}
