import RouteConfig from './../lib/interface/route'
import Passport from './../screens/passport/Index'
const passport: RouteConfig = {
    name: 'passport',
    options: {
        title: '登陆/注册',
        headerBackAccessibilityLabel: '',
        headerStyle: {
            backgroundColor: '#054'
        }
    },
    component: Passport
}

export default [
    passport
];
