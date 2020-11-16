import * as React from 'react'
import { Text, Button } from "react-native"
export default ({ navigation }) => {
    return <Button title="跳转到个人中心" onPress={() => navigation.navigate('family')}>
    </Button>
}