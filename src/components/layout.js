import styles from '../styles/app.less'
import React, {Component} from 'react';
import FooterNav from '../components/FooterNav'

export default class LayoutIndex  extends Component{
    render() {
        return (
           <div>
               <div className="header">
                   程浩
               </div>
               <div className="content">{this.props.children}</div>
               <div className="footer">
                   <FooterNav/>
               </div>
           </div>
        )

    }
}
