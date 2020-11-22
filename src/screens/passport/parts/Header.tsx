import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {unitHeight, unitWidth} from '../../../lib/utils/screen';
import {Tabs, InputItem} from '@ant-design/react-native';
function Header(props) {
  const tabs = [
    {
      title: '短信登陆',
      value: 1,
    },
    {
      title: '密码登陆',
      value: 2,
    },
  ];
  return (
    <View style={{flex: 1, position: 'absolute', zIndex: 10}}>
      <ImageBackground
        style={{
          width: 750 * unitWidth,
          height: 532 * unitHeight,
          zIndex: 1,
        }}
        imageStyle={{
          position: 'absolute',
          zIndex: 1,
        }}
        source={require(`./../../../../assets/images/xxhdpi/login_head_image.png`)}>
        <View style={style.navigation}>
          <View style={style.navigationContent}>
            {/* <Icon name='left' /> */}
            <Text style={style.title}>登陆/注册</Text>
          </View>
        </View>
        <View style={style.wrapper}>
          <View style={style.tabs}>
            <Tabs
              tabs={tabs}
              style={{
                backgroundColor: '#fff',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
              renderTabBar={(tabProps) => {
                return (
                  <View style={style.tabBar}>
                    {tabProps.tabs.map((tab, i) => (
                      <TouchableOpacity
                        key={tab.value}
                        onPress={() => {
                          const {goToTab, onTabClick} = tabProps;
                          // tslint:disable-next-line:no-unused-expression
                          onTabClick && onTabClick(tabs[i], i);
                          // tslint:disable-next-line:no-unused-expression
                          goToTab && goToTab(i);
                        }}>
                        <Text style={style.tabTitle}>{tab.title}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                );
              }}>
              <View style={style.tabContent}>
                <InputItem placeholder="请输入用户名" />
                <InputItem placeholder="请输入密码" />
              </View>
              <View style={style.tabContent}>
                <Text>2</Text>
              </View>
            </Tabs>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const style = StyleSheet.create({
  navigation: {
    marginLeft: 20,
    marginTop: 22,
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    zIndex: 4,
  },
  navigationContent: {
    flex: 1,
    flexDirection: 'row',
    borderStartColor: 'red',
    height: 45,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    position: 'absolute',
    zIndex: 5,
    flex: 1,
    top: unitWidth * 530,
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 30 * unitWidth,
    paddingRight: 30 * unitWidth,
  },
  tabs: {
    flex: 1,
    borderRadius: 20,
    height: 100,
  },
  tabBar: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: unitHeight * 10,
    paddingBottom: unitHeight * 10,
    height: unitHeight * 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabTitle: {
    fontSize: 16,
  },
});

export default Header;
