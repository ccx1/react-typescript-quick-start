import * as React from 'react';
import {connect} from "react-redux";
import {IPageInfo} from "@/reducer/BasicReducer";

interface ILoginState {

}

interface ILoginProps {
    pageInfo: IPageInfo
}

class Login extends React.Component<ILoginProps, ILoginState> {

    constructor(props: ILoginProps) {
        super(props);
    }

    render() {
        console.log(this.props.pageInfo);
        return (
            <div>
                登陆
            </div>
        );
    }
}

const mapStateToProps = state => {
    const pageInfo = state.pageInfo;
    return {pageInfo};
};

export default connect(mapStateToProps)(Login);
