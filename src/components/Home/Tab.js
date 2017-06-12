import React, {Component} from 'react';
import styles from '../../styles/Home.less'
import {Link} from 'react-router'
export default class Tab extends Component{
    render(){
        return (
            <ul className={styles.h_tab}>
                <li><Link to="home/life" activeClassName='tab_active'>详细信息</Link></li>
                <li><Link to="home/sport" activeClassName='tab_active'>工作经历</Link></li>
                <li><Link to="home/tech" activeClassName='tab_active'>技术积累</Link></li>
            </ul>
        )
    }
}
