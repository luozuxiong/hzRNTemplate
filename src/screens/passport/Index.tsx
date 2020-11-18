import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {Tabs} from '@ant-design/react-native';
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
    return (
      <View style={styles.wrapper}>
        <ImageBackground
          resizeMode="contain"
          style={styles.content}
          imageStyle={{
            alignSelf: 'flex-end',
            resizeMode: 'contain',
          }}
          source={require('./../../../assets/images/xhdpi/login_head_image.png')}>
          <Tabs tabs={this.tabs}>
            <View>
              <Text>Content of First Tab</Text>
            </View>
            <View>
              <Text>Content of Second Tab</Text>
            </View>
          </Tabs>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    height: 800,
    backgroundColor: 'red',
    bottom: 0,
  },
});
