
export default [{
    path: '/',
    name: 'page1',
    component: () => import(/* webpackChunkName: "brand" */ 'containers/index.vue'),
    children: [
        {
            path: '/testPage1',
            component: () => import('views/testPage1'),
            children: [
                {
                    path: '/testPage1/page1',
                    component: () => import('views/testPage1/page1'),
                },
                {
                    path: '/testPage1/page2',
                    component: () => import('views/testPage1/page2'),
                },
            ],
        },
    ],
}];
