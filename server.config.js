/*
 * @Author: ysz
 * @describe: 代理配置文件
 * @Date: 2019-05-30 16:27:18
 * @Last Modified by: ysz
 * @Last Modified time: 2019-05-30 18:50:03
 */

const ProxyContainer = require('./dev-proxy-container')

module.exports = {
    appPort: 9005,
    proxy: {
        '/api': {
            target: ProxyContainer.proxyTable.mock, // sdPro
            secure: false,  // 默认true情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器
            // changeOrigin 的意思就是把 http 请求中的 Origin 字段进行变换，在浏览器接收到后端回复的时候，浏览器会以为这是本地请求，而在后端那边会以为是在站内的调用。
            changeOrigin: true, // 默认false，是否需要改变原始主机头为目标URL
            pathRewrite: {
                '^/api': '',
            },
        },
    },
}
