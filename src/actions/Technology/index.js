import Uitls from '../../utils/myfetch'

export const changeStatus=(status)=>({
    type:'changeStatus',
    status
})

export const changeTest1=(a)=>({
    type:'changeTest1',
    a
})

// export function testFetch(){
//     // fetch login
//     console.log('fetch')
//     return dispatch => {
//         fetch('../mock/package.json?name="ch"&age=24',{
//             method: 'get',
//         })
//             .then(response => response.json())
//             //请求成功后执行
//             .then((data)=>{
//                 console.log('data:',data)
//                 dispatch({
//                     type:'asyncTest',
//                     data
//                 })
//             })
//             //请求失败后执行
//             .then(console.log('请求出错了'))
//             .catch(function(ex) {
//                 console.log('parsing failed', ex)
//             })
//     }

// }

export function testFetch(){
    console.log('fetch')
    return dispatch => {
        Uitls.get('https://www.reddit.com/r/frontend.json',{name:'ch',age:24},function (data) {
            console.log('data:',data);
            dispatch({
                        type:'asyncTest',
                        data
                    })
        },function () {
            console.log('请求出错了')
        })
    }

}