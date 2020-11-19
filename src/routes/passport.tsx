import React from 'react'
import { Icon } from '@ant-design/react-native'
import RouteConfig from '../lib/interface/route'
import Passport from '../screens/passport/Index'
import { View, Text, ImageBackground, PixelRatio, StyleSheet } from 'react-native';
import { dpi, unitHeight, unitWidth, statusBarHeight } from './../lib/utils/screen'
console.log(statusBarHeight)
const passport: RouteConfig = {
    name: 'passport',
    options: {
        header: props =>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={{
                        width: 750 * unitWidth,
                        height: 532 * unitHeight,

                    }}
                    source={require(`./../../assets/images/xxhdpi/login_head_image.png`)}>
                    <View style={style.navigation}>
                        <View style={style.navigationContent}>
                            <Icon name='left' />
                            <Text style={style.title}>登陆/注册</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View >,
        title: '登陆/注册',
        headerBackAccessibilityLabel: '',
        headerTitleStyle: {
            color: '#fff',
            borderBottomColor: '#6076FF',
        },
        headerStyle: {
            backgroundColor: '#6076FF',
            shadowColor: '#6076FF',

        }
    },
    component: Passport
}

const style = StyleSheet.create({
    navigation: {
        marginLeft: 20,
        marginTop: 44,
        // flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 50,
    },
    navigationContent: {
        flex: 1,
        flexDirection: 'row',
        borderStartColor: 'red',
        height: 45,
        alignItems: 'center'
    },
    title: {
        color: "#fff",
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default [
    passport
];
