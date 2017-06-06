import React, { Component } from 'react';
import { View, Dimensions, Image, Text } from 'react-native'
import Block from '../../modules/MainBlock'
import Scroll from '../../modules/Scroll'
const { height, width } = Dimensions.get('screen')

class Weather extends Component {

  state = {
    dayOfWeek: [],
    weather: { list: [] },
    isLoading: true
  }
  componentDidMount() {
    this.props.actions.getWeather()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      weather: nextProps.state.data,
      dayOfWeek: nextProps.state.dayOfWeek,
      isLoading: false
    })
  }
  render() {
    const { weather, isLoading } = this.state
    if (isLoading) return (<View></View>)
    else
      return (
        <Image source={require('./bg.jpg')} resizeMode='cover' style={{ width: null, height: null }} blurRadius={1}>
          <View style={{ width, display: 'flex', flexDirection: 'column', height }}>
            <Block />
            <Text style={{
              fontSize: 22,
              color: '#fff',
              backgroundColor: 'transparent',
              marginLeft: 5,
              marginBottom: 10
            }}>Hằng ngày</Text>
            <Scroll data={weather.list} />
            <View style={{ height: 0.45 * height }}>

            </View>
          </View>
        </Image>
      )
  }
}

export default Weather