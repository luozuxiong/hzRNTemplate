import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Tabs } from '@ant-design/react-native'
export default class Passport extends Component {
    tabs = [
        {
            title: '短信登陆',
            value: 1
        },
        {
            title: '密码登陆',
            value: 2
        }
    ]
    render() {
        return (
            <View style={styles.wrapper}>
                <Tabs tabs={this.tabs}>
                    <View>
                        <Text>3</Text>
                    </View>
                    <View>
                        <Text>2</Text>
                    </View>
                </Tabs>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {}
});