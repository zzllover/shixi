export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            //hd:true
        }],
    ],

    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: './hello',
            },
            {
                path: 'hello',
                component: './hello',
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
            {
                path: '/react',
                routes: [
                    { path: '/react/react-props', component: 'React/ReactProps' },
                    { path: '/react/react-state', component: 'React/ReactState' },
                    { path: '/react/react-controller-component', component: 'React/ReactControllerComponent' }
                ]
            },
            {
                path: '/dva',
                routes: [
                    { path: '/dva/card-1', component: 'DVA/Card-1' },
                    { path: '/dva/card-2', component: 'DVA/Card-2' },
                    { path: '/dva/card-3', component: 'DVA/Card-3' },
                    { path: '/dva/card-4', component: 'DVA/Card-4' },
                    { path: '/dva/card-5', component: 'DVA/Card-5/Card-5' },
                    //{path:'/dva/react-state',component:'React/ReactState'},
                    //{path:'/dva/react-controller-component',component:'React/ReactControllerComponent'}
                ]
            }
        ]
    }],
    /*proxy: {
        '/dev': {
            target: 'http://127.0.0.1:8081',
            changeOrigin: true,
            //pathRewrite: { "^/dev": "" }
        },
    },*/
}