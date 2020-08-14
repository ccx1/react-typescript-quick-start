import * as React from 'react';
import {connect, DispatchProp} from "react-redux";
import {IPageInfo} from "@/reducer/BasicReducer";
import {Link, RouteComponentProps} from "react-router-dom";
import {Button, Input, Modal, Select} from "antd";
import {UploadFile} from "@/components/upload";
import * as config from '@/conts/conf';
import TransferBar from "@/transferBar";

const Option = Select.Option;

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
                    uploadOptions={{
                        data: {},
                        filename: "file",
                        action: config.GLOBAL_CONFIG.requestUrl.getJobInfo
                    }}
                    accept={'.doc,.xlsx,.txt'}
                    visible={this.state.showUploadModal}
                    onOk={() => {
                        this.setState({showUploadModal: false})
                    }}
                    onCancel={() => {
                        this.setState({showUploadModal: false})
                    }}
                />
                {/*<Button onClick={()=>{*/}
                {/*    this.props.dispatch(action.changeCollapsed(!this.props.pageInfo.collapsed))*/}
                {/*}}>切换</Button>*/}
                {/*<Slider/>*/}
                <TransferBar/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    const pageInfo = state.pageInfo;
    return {pageInfo};
};

export default connect(mapStateToProps)(Home);
