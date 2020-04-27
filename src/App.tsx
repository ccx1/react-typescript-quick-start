import {Component} from 'react';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import '@/App.less';
import {Button} from "antd";
import * as React from "react";
import {Slider} from "@/Sider.tsx";

class App extends Component<any,any> {


    constructor(props) {
        super(props);
        this.state = {}
    }

    onClickBack = () => {
       console.log(this.props.state)
    };


    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <Button onClick={this.onClickBack}>测试</Button>
                    <Slider/>
                </div>
            </Provider>
        );
    }
}

const mapStateToProps = state => {
    return {state};
};

export default connect(mapStateToProps)(App);

