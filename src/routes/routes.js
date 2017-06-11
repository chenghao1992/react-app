/**
 *	路由
 */
import Layout from '../components/layout'
import Home from '../components/Home'
const Routes = {
    path: '/',
    component: Layout,
    indexRoute :{onEnter: (nextState, replace) => replace('/home')},
    childRoutes: [
        {
            path: '/home',
            component:Home
        },
    ]

};

export default Routes;