import xhr from './xhr/'

/**
 * 留言板所用到的 API
 */
class ExamService {

  /**
   * 获取所有发布者
   * @resolve {String[]} authors
   */
  fetchPackageAuth (orgId) {
    return xhr({
      url: '/packageAndLicenceInfoList2',
      body: {'orgId':orgId,'request_cid' : 'c5c4d06ad427d2d8895758fb92484cbf'}
    })
  }

  /**
   * 新增留言信息
   * @param   {String} msgBody.title
   * @param   {String} msgBody.content
   * @resolve {Object} msg
   */
  add (msgBody) {
    return xhr({
      method: 'post',
      url: '/msg',
      body: msgBody
    })
  }

  // 查询服务商编码
  queryAgent (agentCode) {
    return xhr({
      method: 'get',
      origin: true,
      url: '/order/checkPartner?partnerCode=' + agentCode
      // body: '' + agentCode
    })
  }

  submitOrder (productPackageSubmitDto) {
    return xhr({
      method: 'post',
      url: 'http://store2.chanjet.com/package/v1/submitOrder',
      body: {'productPackageSubmitDto': productPackageSubmitDto}
    })
  }

  /*licenceInfoList (agentCode) {
    return xhr({
      method: 'get',
      url: '/packageAndLicenceInfoList?partnerCode=' + agentCode,
      origin: true
      // body: '' + agentCode
    })
  }*/
  orgList () {
    return xhr({
      method: 'get',
      url: '/package/orgList2' ,
      origin: true,
      body: {'request_cid' : 'c5c4d06ad427d2d8895758fb92484cbf'}
    })
  }
}

// 实例化后导出，全局单例
export default new ExamService()
