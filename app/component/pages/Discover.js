import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SimpleText from './SimpleText'
import Icons from 'react-native-vector-icons/FontAwesome'

class Discover extends Component {
  static navigationOptions = {
    title: 'Discover',
    tabBarLabel: 'Discover',
    tabBarIcon: ({ tintColor }) =>
      <Icons name="eercast" size={20} color={tintColor} />,
  }

  render() {
    const { state, navigate } = this.props.navigation
    return (
      <View>
        <Button
          onPress={() => navigate('Moments')}
          title="进入朋友圈"
        />
        <SimpleText banner="Discover" />
      </View>
    )
  }
}

export default Discover
