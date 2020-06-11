import {Tree} from 'antd';
import * as React from 'react';
import {useState} from "react";

const {TreeNode} = Tree;



const generateTree = (treeNodes = [], checkedKeys = []) => {
    return treeNodes.map(({children, ...props}) => (
        <TreeNode {...props}  key={props.key}>
            {generateTree(children, checkedKeys)}
        </TreeNode>
    ));
};

const generateTargetTree = (treeNodes = []) => {
    return treeNodes.map(({children, ...props}) => (
        <TreeNode {...props} key={props.key}>
            {generateTree(children)}
        </TreeNode>
    ));
};


function extracted(item,keys) {
    const temp = [];
    for (let i = 0 ;i < item.children.length;i++){
        let child = item.children[i];
        if (keys.indexOf(child.key) !== -1) {
            temp.push(child);
        }else if (child.children){
            let extract = extracted(child,keys);
            if (extract) {
                temp.push(extract);
            }
        }
    }
    if (temp.length > 0){
        return  {...item,children:temp}
    }
    return null;
}


function noExtracted(item,keys) {
    // 如果children不可用，那么就保留

    for (let i = 0 ;i < item.children.length;i++){
        let child = item.children[i];
        if (keys.indexOf(child.key) !== -1){
            // 说明找到了。需要删除
            item.children.splice(i,1);
            i--;
        } else if (child.children) {
            noExtracted(child,keys);
        }
    }
}




const TreeTransfer = ({dataSource = [], targetKeys, onChange}) => {

    const [leftSource,setLeftSource] = useState([]);
    const [rightSource,setRightSource] = useState([]);

    const getCheckedKeys = (keys:string[] = []) =>{
        const checkedKeys = [];

        console.log(keys);

        dataSource.forEach((item)=>{
            if (keys.indexOf(item.key) !== -1) {
                checkedKeys.push(item);
            }else if (item.children){
                const childParent = extracted(item,keys);
                if (childParent){
                    checkedKeys.push(childParent);
                }
            }
        });

        return checkedKeys;
    };
    const getNotCheckedKeys = (keys:string[] = []) =>{
        const checkedKeys = $.extend(true,[],targetKeys);

        console.log(checkedKeys);
        // 如果children不可用，那么就保留

        checkedKeys.forEach((item,index)=>{
            if (keys.indexOf(item.key) !== -1){
                // 说明当前层找到了。
                checkedKeys.splice(index,1);
            } else if (item.children) {
                // 说明没找到
                noExtracted(item,keys);

            }
        });

        console.log(checkedKeys);

        return checkedKeys;
    };


    return (
        <React.Fragment>
            <Tree
                blockNode
                checkable
                checkStrictly
                defaultExpandAll
                onCheck={(checkedKeys:any,e) => {
                    const targetKeys = getCheckedKeys(checkedKeys.checked);
                    setLeftSource(targetKeys);
                }}
            >
                {generateTree(dataSource, targetKeys)}
            </Tree>

            <a onClick={()=>{
                onChange(leftSource);
            }}>移动</a>

            <a onClick={()=>{
                onChange(rightSource);
            }}>去掉</a>

            <Tree
                blockNode
                checkable
                checkStrictly
                defaultExpandAll
                onCheck={(checkedKeys:any, _) => {
                    const sourceKeys = getNotCheckedKeys(checkedKeys.checked);
                    setRightSource(sourceKeys);
                }}
            >
                {generateTargetTree(targetKeys)}
            </Tree>
        </React.Fragment>
    );
};

const treeData = [
    {key: '1', title: '0-0'},
    {
        key: '2',
        title: '0-1',
        children: [{key: '2-1', title: '0-1-0', children: [{key: '2-1-1', title: '0-1-0-1'},{key: '2-1-2', title: '0-1-0-2'}]}, {key: '2-2', title: '0-1-1'}],
    },
    {key: '3', title: '0-3'},
];

export default class TransferBar extends React.Component {
    state = {
        targetKeys: []
    };

    onChange = targetKeys => {
        console.log('Target Keys:', targetKeys);
        this.setState({targetKeys});
    };

    getResult = () =>{
        const {targetKeys} = this.state;
        // 换句话说，只要有children就行
        const temp = [];
        this.extracted(targetKeys, temp);
        console.log(temp);
        return temp;
    };

    extracted = (targetKeys, temp) =>{
        targetKeys.forEach((item) => {
            if (!item.children) {
                temp.push(item.key)
            } else {
                this.extracted(item.children, temp);
            }
        });
    };

    render() {
        const {targetKeys} = this.state;
        return (
            <div>
                <a onClick={()=>{
                   console.log(this.getResult())
                }}>结果</a>
                <TreeTransfer dataSource={treeData} targetKeys={targetKeys} onChange={this.onChange}/>
            </div>
        );
    }
}
