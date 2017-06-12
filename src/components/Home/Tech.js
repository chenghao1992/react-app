import React, {Component} from 'react';
import styles from '../../styles/Home.less'
import {Link} from 'react-router'
export default class Sport extends Component{
    render(){
        return (
            <div className="tech">
                <div className="card">
                    <h3>基础类</h3>
                    <div><label>js：</label><span>擅长</span></div>
                    <div><label>css：</label><span>擅长</span></div>
                    <div><label>html：</label><span>擅长</span></div>
                </div>
                <div className="card">
                    <h3>框架类</h3>
                    <div><label>jquery：</label><span>擅长</span></div>
                    <div><label>react+redux：</label><span>擅长</span></div>
                    <div><label>angular1：</label><span>擅长</span></div>
                    <div><label>ionic：</label><span>熟悉</span></div>
                    <div><label>vue：</label><span>熟悉</span></div>
                </div>
                <div className="card">
                    <h3>工具类</h3>
                    <div><label>webpack：</label><span>熟悉</span></div>
                    <div><label>npm：</label><span>熟悉</span></div>
                    <div><label>gulp：</label><span>熟悉</span></div>
                    <div><label>ps：</label><span>熟悉</span></div>
                    <div><label>git：</label><span>熟悉</span></div>
                    <div><label>less/sass：</label><span>熟悉</span></div>
                </div>
                <div className="card">
                    <h3>后台类</h3>
                    <div><label>nodejs：</label><span>熟悉</span></div>
                    <div><label>php：</label><span>熟悉</span></div>
                    <div><label>c语言：</label><span>熟悉</span></div>
                    <div><label>java：</label><span>了解</span></div>
                    <div><label>freeMark：</label><span>熟悉</span></div>
                </div>

            </div>
        )
    }
}
