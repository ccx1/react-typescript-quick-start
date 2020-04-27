import {BrowserRouter} from 'react-router-dom';
import '@/App.less';
import * as React from "react";
import * as Routers from '@/conts/routers.ts';
import renderRoutes from "@/utils/renderRoute.tsx";
import {Provider} from "react-redux";

const App: React.FC = (props: any) => {
    return (<Provider store={props.store}>
        <BrowserRouter
            basename={Routers.basename}>
            {
                renderRoutes(Routers.routers)
            }
        </BrowserRouter>
    </Provider>)
};

export default App;

