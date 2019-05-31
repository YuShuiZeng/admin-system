
export default [{
    path: '/',
    name: 'page2',
    component: () => import(/* webpackChunkName: "brand" */ 'containers/index.vue'),
    children: [
        {
            path: '/testPage2',
            component: () => import('views/testPage2'),
        },
    ],
}];
