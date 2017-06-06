import React, { Component } from 'react';
import { View, ScrollView, ListView, Text, Dimensions } from 'react-native'
// import list from '../../redux/containers/data.json'
const { height, width } = Dimensions.get('screen')
export const shadow = {
  shadowOffset: {
    width: 0.75,
    height: 0.75,
  },
  shadowColor: 'rgba(0,0,0,0.3)',
  shadowOpacity: 1.0,
}
export const shadow2 = {
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowColor: 'rgba(0,0,0,0.3)',
  shadowOpacity: 1.0,
}
const ListItem = props => (
  <View style={[{
    display: 'flex',
    flexDirection: 'column',
    width: 0.2 * width, borderWidth: 1, borderColor: 'rgb(182, 183, 186)', borderLeftWidth: 0
  }, props.style, shadow2]}>
    <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 5 }}>
      <Text style={{ color: '#fff', marginBottom: 5 }}>{props.time}</Text>
      <Text style={{ color: '#fff', marginBottom: 5 }}>{props.clouds}</Text>
      <Text style={{ color: '#fff', marginBottom: 5 }}>{props.temp}</Text>
    </View>
  </View>
)


class Scroll extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data)
    };
  }
  renderRow(row, sectionId, rowId) {
    let date = new Date(row.dt_txt).getHours()

    return (
      <ListItem
        time={date.toString()}
        clouds={row.clouds.all.toString().concat('%')}
        temp={row.main.temp.toString().concat('°')}
      />
    )
  }
  renderHeader() {
    return (
      <ListItem
        time={'Time: '}
        clouds={'Clouds: '} temp={'Temperature: '}
        style={{ width: 0.25 * width, marginLeft: 5 }} />
    )
  }
  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader}
          horizontal={true}
          style={{ height: 0.16 * height, backgroundColor: 'transparent' }}
        />
      </View>
    )
  }
}

export default Scroll
