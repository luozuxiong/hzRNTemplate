import { color } from 'react-native-reanimated';
import RouteConfig from './../lib/interface/route'
import Passport from './../screens/passport/Index'
const passport: RouteConfig = {
    name: 'passport',
    options: {
        title: '登陆/注册',
        headerBackAccessibilityLabel: '',
        headerTitleStyle: {
            color: '#fff'
        },
        headerStyle: {
            backgroundColor: '#6076FF',

        }
    },
    component: Passport
}

export default [
    passport
];
