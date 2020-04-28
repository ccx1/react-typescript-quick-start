import {BrowserRouter} from 'react-router-dom';
import '@/App.less';
import * as React from "react";
import * as Routers from '@/conts/routers.ts';
import renderRoutes from "@/utils/renderRoute.tsx";
import {Provider} from "react-redux";

// const {Suspense} = React;

// 懒加载添加Suspense
const App: React.FC = (props: any) => {
    return (<Provider store={props.store}>
        <React.Suspense fallback={<div>懒加载</div>}>
            <BrowserRouter
                basename={Routers.basename}>
                {
                    renderRoutes(Routers.routers)
                }
            </BrowserRouter>
        </React.Suspense>
    </Provider>)
};

export default App;

