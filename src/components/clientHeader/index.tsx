import * as React from 'react';
import './index.less'
import {Button} from 'antd';

let win: any = window;
let {ipcRenderer} = win.electron;

const ClientHeader: React.FC<any> = () => {

    return <div className={"client-header"}>
        <div className={"drag-header"}/>
        <div className={"client-header-wrapper"}>
            <Button type="primary" onClick={() => {
                console.log(win)
                ipcRenderer.send("closeWindow")
            }}>关闭</Button>
            <Button type="primary">缩放</Button>
            <Button type="primary">缩小</Button>
        </div>
    </div>
}

export default ClientHeader;