import * as React from 'react';
import {connect, DispatchProp} from "react-redux";
import {IPageInfo} from "@/reducer/BasicReducer";
import {Link, RouteComponentProps} from "react-router-dom";
import {Button, Modal} from "antd";
import {UploadFile} from "@/components/upload";

interface IHomeState {
    showUploadModal: boolean
}

type IHomeBaseProps = RouteComponentProps & DispatchProp;

interface IHomeProps extends IHomeBaseProps {
    pageInfo: IPageInfo,
}

class Home extends React.Component<IHomeProps, IHomeState> {

    state = {
        showUploadModal: false
    };

    constructor(props: IHomeProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={'/login'}>
                    首页
                </Link>
                <Button onClick={() => {
                    this.setState({showUploadModal: true})
                }}>上传文件</Button>
                <UploadFile
                    accept={'.doc,.xlsx,.txt'}
                    visible={this.state.showUploadModal}
                    onOk={() => {
                        this.setState({showUploadModal: false})
                    }}
                    onCancel={() => {
                        this.setState({showUploadModal: false})
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const pageInfo = state.pageInfo;
    return {pageInfo};
};

export default connect(mapStateToProps)(Home);
