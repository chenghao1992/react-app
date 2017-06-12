import React, {Component} from 'react';
import { connect } from 'react-redux'
import styles from '../../styles/Home.less'
import {enterDispatch} from '../../actions/Home/Home'
import SimpleSlider from './slider'
import Info from './Info'
class Life extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const { dispatch,list } = this.props;
        console.log('list----------',list)
        dispatch(enterDispatch())
    }
    render(){
        const { dispatch,list } = this.props
        console.log('list----------',list)
        return (
            <div>
                <SimpleSlider data={list}/>
                <Info/>
            </div>
        )
    }
}
export default connect(
    state=>({
        list:state.Home.list
    })
)(Life)