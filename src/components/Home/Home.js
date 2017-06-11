import React, {Component} from 'react';
import styles from '../../styles/Home.less'
import Tab from './Tab';
export default class Home extends Component{
    render(){
        return (
            <div >
                <Tab/>
                <div>{this.props.children}</div>
            </div>
        )
    }
}
