/*
 * @Author: your name
 * @Date: 2021-06-30 20:00:55
 * @LastEditTime: 2021-06-30 20:36:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mobile-vue\src\http\test\test.js
 */
import { get, post } from '../base'
export const getStoragePathApi = (playload) => {
    const params = {
      url: '/v1/video-management/aaaa',
      query: playload
    }
    return get(params)
  }
  // 获取视频资源类型
  export const getClassApi = (playload) => {
    const params = {
      url: 'systemOpsManager/v1/systemOpsManager/queryDataDictBasicInfo',
      body: playload
    }
    return post(params)
  }