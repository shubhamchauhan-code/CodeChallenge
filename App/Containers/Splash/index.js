import React from 'react'
import { View, Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../Utils/Colors'
import { ICONS } from '../../Utils/Images'
import styles from './styles'

export default class Splash extends React.Component {
  constructor() {
    super()
    this.state = {
      fadeIn: new Animated.Value(0)
    }
  }
  componentDidMount() {
    this.fadeInMethod()
    setTimeout(() => {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'SongsList' }]
      });
    }, 3000)
  }
  fadeInMethod = () => {
    this.state.fadeIn.setValue(0)
    Animated.timing(
      this.state.fadeIn,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start(() => { console.log('fadeIn') })
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[COLORS.PrimaryDarkColor, COLORS.ShadeColor]}
          style={styles.splashStyle}
        >
          <Animated.Image style={[styles.logoStyle, { opacity: this.state.fadeIn }]}
            resizeMode={'contain'}
            source={ICONS.Logo} />
        </LinearGradient>
      </View>
    )
  }

}

