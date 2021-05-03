import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Linking, ActivityIndicator } from 'react-native'
import styles from './styles'
import { COLORS } from '../../Utils/Colors'
import HTMLView from 'react-native-htmlview';
import LinearGradient from 'react-native-linear-gradient'
import { ICONS } from '../../Utils/Images';

export default class SongDetails extends React.Component {
    constructor(props) {
        super(props)
        let dataCollection = JSON.parse(props.route.params.dataCollection)
        this.state = {
            jsonData: dataCollection,
            loading: true
        }
    }
    _onLoadEnd = () => {
        this.setState({
            loading: false
        })
    }
    render() {
        const { jsonData, loading } = this.state
        return (
            <View style={styles.container}>

                <View style={styles.headerStyle}>

                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={styles.headerBackIconTouchableStyle}>
                        <Image source={ICONS.LeftArrow} resizeMode='contain' style={styles.headerBackIconStyle} />
                    </TouchableOpacity>
                    <ActivityIndicator
                        style={styles.activityIndStyle}
                        animating={loading}
                    />
                    <Text style={styles.headertextStyle}>
                        Song Details
                    </Text>
                </View>

                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[COLORS.WhiteColor, COLORS.WhiteColor, COLORS.PrimaryColor,]}
                    style={styles.containerLinearGradient}>


                    <Image onLoadEnd={this._onLoadEnd} source={{ uri: jsonData.artworkUrl100 }} resizeMode='contain' style={styles.imgStyle} />

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.midView}>
                            {jsonData.wrapperType && <Text style={styles.wrapperTextStyle}>{jsonData.wrapperType}</Text>}
                            {jsonData.trackName && <Text style={styles.trackTextStyle}>{jsonData.trackName}</Text>}
                            {jsonData.releaseDate && <Text style={styles.releaseTextStyle}>release Date : <Text style={styles.detailText}>{jsonData.releaseDate}</Text></Text>}
                            {jsonData.collectionName && <Text style={styles.textStyle}>Collection : <Text style={styles.detailText}>{jsonData.collectionName}</Text></Text>}
                            {jsonData.primaryGenreName && <Text style={styles.textStyle}>Primary Genre : <Text style={styles.detailText}>{jsonData.primaryGenreName}</Text></Text>}
                            {jsonData.collectionArtistName && <Text style={styles.textStyle}>collection Artist : <Text style={styles.detailText}>{jsonData.collectionArtistName}</Text></Text>}
                            {jsonData.collectionPrice && <Text style={styles.textStyle}>Collection Price : <Text style={styles.detailText}>{jsonData.collectionPrice} {jsonData.currency}</Text></Text>}
                            {jsonData.trackCount && <Text style={styles.textStyle}>Track Count : <Text style={styles.detailText}>{jsonData.trackCount}</Text></Text>}

                            <View style={styles.btnRowView}>
                                {jsonData.artistViewUrl && <TouchableOpacity style={styles.btnStyle} onPress={() => { Linking.openURL(jsonData.artistViewUrl) }}>
                                    <Text style={styles.btnText}>Artist</Text>
                                </TouchableOpacity>}
                                {jsonData.trackViewUrl && <TouchableOpacity style={styles.btnStyle2} onPress={() => { Linking.openURL(jsonData.trackViewUrl) }}>
                                    <Text style={styles.btnText2}>Track</Text>
                                </TouchableOpacity>}
                                {jsonData.collectionViewUrl && <TouchableOpacity style={styles.btnStyle} onPress={() => { Linking.openURL(jsonData.collectionViewUrl) }}>
                                    <Text style={styles.btnText}>Collection</Text>
                                </TouchableOpacity>}
                                {jsonData.previewUrl &&
                                    <TouchableOpacity style={styles.btnStyle2} onPress={() => { Linking.openURL(jsonData.previewUrl) }}>
                                        <Text style={styles.btnText2}>Preview</Text>
                                    </TouchableOpacity>}

                            </View>
                            {jsonData.description &&
                                <View>
                                    <Text style={styles.desTextStyle}>Description</Text>
                                    <HTMLView
                                        value={jsonData.description}
                                    />
                                </View>
                            }

                            {jsonData.copyright && <Text style={styles.copyrightStyle}>Copyright {jsonData.copyright}</Text>}
                        </View>
                    </ScrollView>
                </LinearGradient>

            </View>
        )
    }

}