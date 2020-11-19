import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Tabs } from '@ant-design/react-native';
const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' },
];
const style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
};
export default class Passport extends Component {
    tabs = [
        {
            title: '短信登陆',
            value: 1,
        },
        {
            title: '密码登陆',
            value: 2,
        },
    ];
    render() {
        return (
            <View style={styles.wrapper}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    content: {
        width: "100%",
        height: '100%',
        position: 'absolute',
        top: undefined,
        bottom: undefined
    },
});
