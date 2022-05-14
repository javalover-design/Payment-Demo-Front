import request from '@/utils/request'

export default{

  queryOrderStatus(orderNo) {
    return request({
      url: '/api/order-info/query-order-status/' + orderNo,
      method: 'get'
    })
  },

  list() {
    return request({
      url: '/api/order-info/list',
      method: 'get'
    })
  }
}
