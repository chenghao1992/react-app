/**
 *	路由
 */
import Layout from '../components/layout'
import Home from '../components/Home/Home'

const Routes = {
    path: '/',
    component: Layout,
    indexRoute :{onEnter: (nextState, replace) => replace('/home')},
    childRoutes: [
        {
            path: '/home',
            component:Home,
            indexRoute :{onEnter: (nextState, replace) => replace('/home/life')},
            childRoutes:[
                {
                    path: 'life',
                    getComponent (nextState, cb) {
                        require.ensure([], (require)=>{
                            cb(null, require('../components/Home/Life').default)
                        })
                    }
                },
                {
                    path: 'sport',
                    getComponent (nextState, cb) {
                        require.ensure([], (require)=>{
                            cb(null, require('../components/Home/Sport').default)
                        })
                    }
                },
                {
                    path: 'tech',
                    getComponent (nextState, cb) {
                        require.ensure([], (require)=>{
                            cb(null, require('../components/Home/Tech').default)
                        })
                    }
                },
            ]
        },
        {
            path: '/detail',
            getComponent (nextState, cb) {
                require.ensure([], (require)=>{
                    cb(null, require('../components/Detail/Detail').default)
                })
            }
        },
        {
            path: '/technology',
            getComponent (nextState, cb) {
                require.ensure([], (require)=>{
                    cb(null, require('../containers/Technology/defaultPage').default)
                })
            }
        },
    ]

};

export default Routes;