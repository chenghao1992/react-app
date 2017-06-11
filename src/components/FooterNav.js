import React, {Component} from 'react';
import {Link} from 'react-router';
const FooterNav=()=>{
    return (
        <div className="t_nav">
            <div><Link to="/home" activeClassName='active'>个人主页</Link></div>
            <div><Link to="/detail" activeClassName='active'>详细信息</Link></div>
            <div><Link to="/technology" activeClassName='active'>技术园地</Link></div>
        </div>
    )
}

export default FooterNav;