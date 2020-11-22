import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Tabs} from '@ant-design/react-native';
import {unitWidth} from './../../lib/utils/screen';
const tabs = [
  {title: 'First Tab'},
  {title: 'Second Tab'},
  {title: 'Third Tab'},
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
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    zIndex: 6,
    top: 600 * unitWidth,
    backgroundColor: 'red',
    // color: 'red',
    // marginTop: 1000,
    // marginTop: 1000,
  },
});
