/*
 * @Author: ysz
 * @describe: 接口文件
 * @Date: 2019-05-31 10:06:41
 * @Last Modified by: ysz
 * @Last Modified time: 2019-06-05 16:02:48
 */
import Vue from 'vue';

const prefix = 'api';

Vue.prototype.$apis = {
    user: {
        userInfo: `${prefix}/user`,
    },
};
