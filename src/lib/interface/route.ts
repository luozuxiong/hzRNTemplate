
import { StackNavigationOptions } from "@react-navigation/stack/lib/typescript/src/types"
export default interface RouteConfig {
    name: string,
    options?: StackNavigationOptions,
    component: React.ComponentType<any>
}
