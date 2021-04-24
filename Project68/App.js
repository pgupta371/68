import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Facebook from './screens/facebook';
import Insta from './screens/insta';

export default class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: Facebook },
  Instagram: { screen: Insta },
});

const AppContainer = createAppContainer(TabNavigator);
