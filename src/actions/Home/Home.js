import Uitls from '../../utils/myfetch'


export function enterDispatch(){
    console.log('fetch')
    return dispatch => {
        //请求本地数据是从index.html页面为初始目录
        Uitls.get('./src/data/Home/package.json',{name:'ch'},function (data) {
            console.log('data:',data);
            dispatch({
                type:'enterDispatch',
                data
            })
        },function () {
            console.log('请求出错了')
        })
    }

}