import { NavigationRouteContext, RouterConfigOptions } from "@react-navigation/native";
import RouteConfig from '../lib/interface/route'
import Family from '../screens/mysafe/family'

const family: RouteConfig = {
    name: 'family',
    component: Family
}

export default [
    family
]