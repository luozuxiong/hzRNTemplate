import React from 'react';
import { Text, Button } from 'react-native'
export default ({ navigation }) => {
    return <Button title="跳转到产品详情" onPress={() => navigation.navigate('detail')}>
    </Button>
}