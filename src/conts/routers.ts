import * as React from 'react';
// import Home from '@/page/home';
export const basename = '';

// const Home = lazy(() => import('@/page/home'));

interface IRoute {
    path: string,
    exact: boolean,
    component: any,
    name: string,
    title: string
}

const routerArray: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: '/home',
        name: 'home',
        title: 'home'
    },
    {
        path: '/home',
        exact: true,
        component: '/home',
        name: 'home',
        title: '首页'
    },
    {
        path: '*',
        exact: true,
        component: '/home',
        name: '404',
        title: '404'
    }
];

// 需要懒加载,因为webpack不支持完全动态注入，所以@拼字符串。然后再动态变量
export const routers = routerArray.map((router) => {
    const component = React.lazy(() => import(`@/page${router.component}`));
    return {
        ...router,
        component
    }
});

// 加载路由前
export const beforeRouter = (route: IRoute) => {
    document.title = route.title;
};



