import React from 'react';
import {Component} from 'react';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';

class App extends Component {


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
                    <button onClick={this.onClickBack} value={"aaa"}/>
                </div>
            </Provider>
        );
    }
}

const mapStateToProps = state => {
    return {state};
};

export default connect(mapStateToProps)(App);

