import React from 'react';
import {Component} from 'react';
import * as api from '../src/api/api';

export default class App extends Component {


    constructor(props) {
        super(props);
        this.state = {}
    }

    onClickBack = () => {
        api.getProjects()
            .then(data => {
                console.log(data)
            })
            .catch(e => {

            });
    };


    render() {
        return (
            <div>
                <button onClick={this.onClickBack} value={"aaa"}/>
            </div>
        );
    }
}


