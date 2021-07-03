/*
 * @Author: your name
 * @Date: 2021-06-30 19:51:21
 * @LastEditTime: 2021-06-30 19:55:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mobile-vue\src\http\base.js
 */
import Vue from 'vue'
export const get = param => {
  return new Promise((resolve, reject) => {
    Vue.http
      .get(param.url, {
        params: param.query || {},
        headers: param.headers || {}
      })
      .then(res => {
        if (res.status === 401) {
          reject('与服务器断开连接')
        } else {
          resolve(res)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
export const post = (param, config = {}) => {
  return new Promise((resolve, reject) => {
    Vue.http
      .post(param.url, param.body, config)
      .then(res => {
        if (res.status === 401) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('与服务器断开连接')
        } else {
          resolve(res)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
export const put = (param, config = {}) => {
  return new Promise((resolve, reject) => {
    Vue.http
      .put(param.url, param.body, config)
      .then(res => {
        if (res.status === 401) {
          reject(new Error('与服务器断开连接'))
        } else {
          resolve(res)
        }
      })
      .catch(err => reject(err))
  })
}
export const remove = (param, config = {}) => {
  return new Promise((resolve, reject) => {
    Vue.http
      .delete(param.url, config)
      .then(res => {
        if (res.status === 401) {
          reject('与服务器断开连接')
        } else {
          resolve(res)
        }
      })
      .catch(err => reject(err))
  })
}
