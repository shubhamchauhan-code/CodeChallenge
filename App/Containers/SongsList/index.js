import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native'
import DATA from '../../JsonAPI'
import { ICONS } from '../../Utils/Images'
import styles from './styles'

export default class SongsList extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  _onLoadEnd = () => {
    this.setState({
      loading: false
    })
  }

  renderItems(item, index) {
    return (
      <TouchableOpacity style={styles.card} onPress={() => {
        this.props.navigation.navigate('SongDetails',
          { dataCollection: JSON.stringify(item) })
      }}>
        <Image onLoadEnd={this._onLoadEnd} source={{ uri: item.artworkUrl100 }} resizeMode='contain' style={styles.songImage} />
        <View style={styles.rightSideView}>
          <Text style={styles.titleText}>{item.collectionName}</Text>
          <View style={styles.rowView}>
            <Text style={styles.artistText}>{item.artistName}</Text>
          </View>
        </View>
      </TouchableOpacity>

    )
  }

  render() {
    const { loading } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Text style={styles.headertextStyle}>
            Songs
          </Text>
          <Image source={ICONS.Logo} resizeMode='contain' style={styles.logoStyle} />
        </View>
        <View style={styles.listCard}>
          <FlatList
            style={styles.flatListStyle}
            data={DATA.results}
            showsVerticalScrollIndicator={false}
            keyExtractor={(index) => index}
            renderItem={({ item, index }) =>
              this.renderItems(item, index)
            }
          />
          <ActivityIndicator
            style={styles.activityIndStyle}
            animating={loading}
          />
        </View>
      </View>
    )
  }

}