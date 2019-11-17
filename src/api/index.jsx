/*
 * File: index.js
 * Project: sz-html-fa-vue
 * File Created: Tuesday, 10th July 2018 9:39:46 pm
 * Author: 
 * -----
 * Last Modified: Wednesday, 11th July 2018 4:44:48 pm
 * Modified By: 
 * -----
 * Desc: API模块
 */
import axios from 'axios';
import qs from 'qs';
// axios.defaults.baseURL = '/api' // 反向代理需要的 build的时候需要注释掉即可 除此外其他什么不需要改
// const PLATFORM_NAME = process.env.VUE_APP_PLATFORM_NAME // 注意这里不同的项目必须改
// const baseUrl = isMobile()
//   ? process.env.VUE_APP_API_MOBILE_URL
//   : process.env.VUE_APP_API_URL // 获取配置文件中的Url
class api {
  /**
   * ajax主函数
   *
   * @param {Object} opt 请求参数，同axios option参数
   * @returns
   *
   * @memberOf api
   */
  ajax(url, opt) {
    const options = Object.assign({
      loading: true, // 默认展示loading图
      url: url
    }, opt)

    return new Promise((resolve, reject) => {
      axios(options).then(res => {
        // 校验返回值结构
        if (typeof res.data !== 'object') {
          reject(new Error('返回值格式不正确'))
        }
        // DEBUG 1 打开 0 关闭
        if (process.env.VUE_APP_DEBUG === '1') {
          let ajaxlog = {
            url: '',
            method: '',
            request: {},
            response: {}
          }
          ajaxlog.url = url
          ajaxlog.method = options.method
          ajaxlog.response = res.data
          if (options.method === 'get') {
            ajaxlog.request = options.params
          } else {
            ajaxlog.request = options.data
          }
          console.warn(ajaxlog)
        }
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
  // 本地存储
  setStorage(name, data) {
    // json对象
    window.localStorage.setItem(name, data);
  }
  // 取出本地存储内容
  getStorage(name) {
    let data = window.localStorage.getItem(name);
    return data;
  }
  // 删除本地存储
  removeStorage(name) {
    window.localStorage.removeItem(name);
  }

  /**
   * get方法
   *
   * @param {String} url 接口地址
   * @param {Object} [params={}] 请求参数，默认为空对象
   * @param {Object} [options={}] 其它配置，同axios option 参数
   * @returns
   *
   * @memberOf api
   */
  get(url, params = {}, options = {}) {
    // params._t = new Date().getTime()
    const opt = Object.assign({
      method: 'get',
      params
    }, options)

    return this.ajax(url, opt)
  }
  /**
   * post方法
   *
   * @param {String} url 接口地址
   * @param {Object} [data={}] 请求参数，默认为空对象
   * @param {Object} [options={}] 其它配置，同axios option 参数
   * @returns
   *
   * @memberOf api
   */
  post(url, data = {}, options = {}) {
    // data._t = new Date().getTime()
    const opt = Object.assign({
      method: 'post',
      // data: {
      //   ...data
      // },
      data: qs.stringify(data)
    }, options)

    return this.ajax(url, opt)
  }
}
export default api
