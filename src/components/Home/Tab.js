import React, {Component} from 'react';
import styles from '../../styles/Home.less'
import {Link} from 'react-router'
export default class Tab extends Component{
    render(){
        return (
            <ul className={styles.h_tab}>
                <li><Link to="home/life" activeClassName='tab_active'>爱生活</Link></li>
                <li><Link to="home/sport" activeClassName='tab_active'>爱运动</Link></li>
                <li><Link to="home/tech" activeClassName='tab_active'>爱技术</Link></li>
            </ul>
        )
    }
}
