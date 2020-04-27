import * as React from 'react';
import {connect} from "react-redux";
import {IPageInfo} from "@/reducer/BasicReducer";

interface IHomeState {

}

interface IHomeProps {
    pageInfo: IPageInfo
}

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);
    }

    render() {
        console.log(this.props.pageInfo);
        return (
            <div>
                首页aaa
            </div>
        );
    }
}

const mapStateToProps = state => {
    const pageInfo = state.pageInfo;
    return {pageInfo};
};

export default connect(mapStateToProps)(Home);
