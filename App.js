
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import NowPlaying from './NowPlaying';
import TopRated from './TopRated';

const Tabs = TabNavigator({
  NowPlaying: {
    screen: NowPlaying
  },
  TopRated: {
    screen: TopRated
  }
},
  {
    initialRouteName: 'NowPlaying',
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: 'darkgreen',
      inactiveTintColor: "black",
      inactiveBackgroundColor: "green",
      labelStyle: {
        fontSize: 16,
        padding: 20
      }
    }
  }, 
  {
    navigationOptions: ({ navigation }) => ({
      title: 'aaaa'
    })
  }
);

class App extends React.Component {
  render() {
      return (
          <Tabs></Tabs>
          // <View></View>
      );
  }
}

export default App;
