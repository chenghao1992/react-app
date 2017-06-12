/**
 * Created by 12718 on 2017/6/11.
 */

const Home=(state={list:[{title:'',url:''}]},action)=>{
    switch (action.type) {
        case 'enterDispatch':
            return {
                ...state,
                list:action.data,
            }

        default:
            return {
                ...state
            }
    }
}

export default Home;