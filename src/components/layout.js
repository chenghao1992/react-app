import styles from '../styles/app.less'
import React, {Component} from 'react';
import { Router, Route, hashHistory,Link } from 'react-router';


export default class LayoutIndex  extends Component{
    render() {
        return (
           <div>
               <div className="header">header</div>
               <div className="content">{this.props.children}</div>
               <div className="footer">footer</div>
           </div>
        )

    }
}
