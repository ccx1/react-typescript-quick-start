import * as React from 'react';
import {connect, DispatchProp} from "react-redux";
import {IPageInfo} from "@/reducer/BasicReducer";
import {Link, RouteComponentProps} from "react-router-dom";

interface IHomeState {

}

type IHomeBaseProps = RouteComponentProps & DispatchProp;

interface IHomeProps extends IHomeBaseProps {
    pageInfo: IPageInfo,
}

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={'/login'}>
                    首页
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const pageInfo = state.pageInfo;
    return {pageInfo};
};

export default connect(mapStateToProps)(Home);
