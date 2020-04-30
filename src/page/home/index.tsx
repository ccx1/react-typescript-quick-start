import * as React from 'react';
import {connect} from "react-redux";
import {IPageInfo} from "@/reducer/BasicReducer";
import {Link, RouteComponentProps} from "react-router-dom";
import {Dispatch} from "redux";

interface IHomeState {

}

interface IHomeProps extends RouteComponentProps {
    pageInfo: IPageInfo,
    dispatch:Dispatch
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
