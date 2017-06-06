import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Dimensions, Image } from 'react-native'

const { height, width } = Dimensions.get('screen')
class MainBlock extends Component {
  render() {
    return (
      <View style={{
        height: 0.337 * height, flexDirection: 'row', width: 100 + '%', marginTop: 20,
        backgroundColor: 'transparent'
      }}>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 0.337 * height }}>
          <Text style={{ fontSize: 23, color: '#ffffff' }}>Hà Nội</Text>
          <Text style={{ fontSize: 15, color: '#fff' }}>Cloudy</Text>
          <Text style={{ fontSize: 85, color: '#fff' }}>30°</Text>
        </View>
        <View style={{ flex: 1.3, backgroundColor: 'transparent' }}>
          <Image source={require('./../../img/moon_blizzard.png')} resizeMode={'cover'} style={{ width: 0.55 * width, height: 0.6 * width }} />
        </View>
      </View>
    )
  }
}

export default MainBlock