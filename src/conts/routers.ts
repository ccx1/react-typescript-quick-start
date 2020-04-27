import Home from '@/page/home';

export const basename = '';

export const routers = [
    {
        path: '/',
        exact: true,
        component: Home,
        name: 'home',
        title: 'home'
    },
    // 404 Not Found
    {
        path: '*',
        exact: true,
        component: Home,
        name: '404',
        title: '404'
    }
];

export const beforeRouter = (route: any) => {
    console.log(route);
};



