import * as React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {beforeRouter} from "@/conts/routers";


const renderRoutes = (routes: any, authPath = '/home', extraProps = {}, switchProps = {}) =>
    routes ? (
        <Switch {...switchProps}>
            {routes.map((route: any, i: number) => (
                <Route
                    key={route.key || i}
                    path={route.path}
                    exact={route.exact}
                    strict={route.strict}
                    render={props => {
                        beforeRouter(route);
                        if (!route.requireAuth || route.path === authPath) {
                            return <route.component {...props} {...extraProps} route={route}/>;
                        }
                        // eslint-disable-next-line
                        return <Redirect to={{pathname: authPath, state: {from: props.location}}}/>;
                    }}
                />
            ))}
        </Switch>
    ) : null;

export default renderRoutes;
