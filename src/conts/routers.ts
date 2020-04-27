import * as React from 'react';

const {lazy} = React;
export const basename = '';
const lazyHome = lazy(() => import('@/page/home'));

export const routers = [
    {
        path: '/',
        exact: true,
        component: lazyHome,
        name: 'home',
        title: 'home'
    },
    // 404 Not Found
    {
        path: '*',
        exact: true,
        component: lazyHome,
        name: '404',
        title: '404'
    }
];

export const beforeRouter = (route: any) => {
    console.log(route);
};



