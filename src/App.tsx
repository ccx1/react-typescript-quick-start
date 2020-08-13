import {BrowserRouter, Route} from 'react-router-dom';
import '@/App.less';
import * as React from "react";
import * as Routers from '@/conts/routers.ts';
import renderRoutes from "@/utils/renderRoute.tsx";
import {Provider} from "react-redux";
import {Spin} from "antd";
import ClientHeader from "@/components/clientHeader";

// const {Suspense} = React;

// 懒加载添加Suspense
const App: React.FC<any> = (props: any) => {
    return (<Provider store={props.store}>
        <React.Suspense fallback={<Spin style={
            {width: '100%', height: '100%', paddingTop: '20%'}}/>}>
            <BrowserRouter
                basename={Routers.basename}>
                <ClientHeader/>
                {
                    renderRoutes(Routers.routers)
                }
            </BrowserRouter>
        </React.Suspense>
    </Provider>)
};

export default App;

