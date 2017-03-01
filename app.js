import React, { Component } from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <StatusBar hidden={ true }/>

        <ScrollView
          pagingEnabled={ true }>
          <View style={[ styles.screenSize, styles.pageOne ]}/>
          <View style={[ styles.screenSize, styles.pageTwo ]}/>
          <View style={[ styles.screenSize, styles.pageThree ]}/>
          <View style={[ styles.screenSize, styles.pageFour ]}/>
          <View style={[ styles.screenSize, styles.pageFive ]}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  pageOne: {
    backgroundColor: 'cornflowerblue',
  },
  pageTwo: {
    backgroundColor: 'coral',
  },
  pageThree: {
    backgroundColor: 'fuchsia',
  },
  pageFour: {
    backgroundColor: 'peachpuff',
  },
  pageFive: {
    backgroundColor: 'rebeccapurple',
  }
});
