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
