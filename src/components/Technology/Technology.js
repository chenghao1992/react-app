import React from 'react';
import {Link} from 'react-router'
import styles from '../../styles/technology.less'
const Technology=()=>{
    return(
        <div>
            <div className="technology">
                <h4>技术收藏:</h4>
                <ul>
                    <li><Link to="jqPage">jquery</Link></li>
                    <li><Link to="jqPage">css</Link></li>
                    <li><Link to="jqPage">html</Link></li>
                    <li><Link to="jqPage">react</Link></li>
                    <li><Link to="jqPage">angular</Link></li>
                    <li><Link to="jqPage">less</Link></li>
                    <li><Link to="jqPage">vue</Link></li>
                    <li><Link to="jqPage">redux</Link></li>
                </ul>
            </div>
            <Link to="testPage" style={{color:'blue'}}>测试页面</Link>
        </div>
    )
}

export default Technology;