import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';
import SymptomChecker from './SymptomChecker';
import Consult from './Consult';

const { Navigator, Screen } = createMaterialTopTabNavigator();


const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title='SYMPTOM CHECKER'/>
    <Tab title='CONSULT'/>
  </TabBar>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <TopTabBar {...props} />}>
    <Screen name='Symptom Checker' component={SymptomChecker}/>
    <Screen name='Consult' component={Consult}/>
  </Navigator>
);

const WellCheck = () => {
  return (
  <NavigationContainer independent>
    <TabNavigator/>
  </NavigationContainer>
  );
};
export default WellCheck;