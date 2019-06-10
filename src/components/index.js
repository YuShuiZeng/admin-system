/*
 * @Author: ysz
 * @describe: 按需引入ui组件(全局注册)
 * @Date: 2019-05-30 16:24:19
 * @Last Modified by: ysz
 * @Last Modified time: 2019-05-31 10:07:20
 */

import Vue from 'vue';

/**
 * 完整组件列表
 * https://github.com/ElemeFE/element/blob/master/components.json
 */

import {
    Container,
    Header,
    Aside,
    Main,
    Footer,
    MessageBox,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Button,
} from 'element-ui';

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Button);

Vue.prototype.$msgbox = MessageBox;
