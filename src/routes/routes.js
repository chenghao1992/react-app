/**
 *	路由
 */
import Home from '../components/Home'
const Routes = {
    path: '/',
    component: Home,
    indexRoute :{onEnter: (nextState, replace) => replace('/home')},
    childRoutes: []

};

export default Routes;