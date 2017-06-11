import React, {Component} from 'react';
import { connect } from 'react-redux'
import styles from '../../styles/Home.less'
import {enterDispatch} from '../../actions/Home/Home'
class Life extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const { dispatch,list } = this.props;
        console.log(list)
        dispatch(enterDispatch())
    }
    render(){
        const { dispatch,list } = this.props
        return (
            <div>
                {list.map((value,index)=>{
                    return (<p className={styles.text} key={index}>{value.text}</p>)
                })}
            </div>
        )
    }
}
export default connect(
    state=>({
        list:state.Home.list
    })
)(Life)