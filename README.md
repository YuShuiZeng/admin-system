# 后台管理

> backstage management system

# 技术框架

> Vue+ElementUI+Webpack+Eslint

# 目录说明

```
.

├── build               // webpack 构建目录
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── src
│   ├── api
│   │   └── index.js    // 接口存放
│   ├── assets          // 资源文件夹
│   │   ├── images      // 图片存放
│   │   └── styles      // 样式文件
│   ├── components      // 基础组件文件夹
│   ├── containers      // 布局类组件-大首页
│   ├── mixins          // 公共方法存放
│   ├── plugins         // 插件
│   ├── router          // 路由文件存放
│   ├── store           // 状态管理
│   ├── utils           // 工具类函数
│   ├── views           // 视图
│   └── main.js         // 入口文件
├── static
├── .babelrc            // Babel配置
├── .editorconfig       // 编辑器配置
├── .eslintignore       // ESLint忽略配置
├── .eslintrc.js        // eslint配置
├── .gitignore          // git忽略配置
├── .postcssrc.js       // postcss 插件配置
├── index.html
├── dev-proxy-container.js // 存放所有需要用到的代理服务地址
├── server.config.js       // 配置当前开发代理服务器
├── package-lock.json      // 锁定版本 - 不要提交本地的该文件
├── package.json           // package
```

# 项目开发说明

#### 文件夹创建

> views下最多创建两个层级目录分别按模块 -> 页面的顺序创建，每个页面文件夹包含index.vue和components文件夹，业务组件统一放在components内

#### 编码规范

> 项目整体使用Airbnb编码规范，参考公司内部规范进行部分调整

> 参考链接：
[Airbnb](https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md)
[confluence](http://confluence.worken.cn/pages/viewpage.action?pageId=2129941)

#### mock数据

> 在mock -> modules文件夹新建mock数据js文件并添加模型与路由中

## 命令

``` bash
# 安装依赖包
npm install

# 启动服务
npm run dev

# 项目打包
npm run build

# 查看包分析器
npm run build --report

# 启动本地json-server服务，获取mock数据
npm run mock-dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
