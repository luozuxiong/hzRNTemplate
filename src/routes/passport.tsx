import React from 'react';
import {Icon} from '@ant-design/react-native';
import RouteConfig from '../lib/interface/route';
import Passport from '../screens/passport/Index';
import Header from './../screens/passport/parts/Header';
import {
  View,
  Text,
  ImageBackground,
  PixelRatio,
  StyleSheet,
} from 'react-native';
import {
  dpi,
  unitHeight,
  unitWidth,
  statusBarHeight,
} from './../lib/utils/screen';

const passport: RouteConfig = {
  name: 'passport',
  options: {
    header: (props) => <Header props={props} />,
  },
  component: Passport,
};

export default [passport];
