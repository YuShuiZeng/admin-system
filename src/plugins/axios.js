/*
 * @Author: ysz
 * @describe: axios请求封装
 * @Date: 2019-05-31 10:09:11
 * @Last Modified by: ysz
 * @Last Modified time: 2019-05-31 10:09:36
 */
import axios from 'axios';

axios.defaults.baseURL = '/';
axios.defaults.withCredentials = false;
axios.defaults.headers.contentType = 'application/json';

axios.interceptors.request.use(
    (config) => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        return config;
    },
    err => (Promise.reject(err)),
);

axios.interceptors.response.use(
    response => response,
    err => (Promise.reject(err)),
);

axios.install = (Vue) => {
    Vue.prototype.$http = axios;
};

export default axios;
