import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/Colors';
import Dimension from '../../Utils/Dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WhiteColor
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: Dimension.getHeight(8)
    },
    activityIndStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    headerStyle: {
        top: 0,
        left: 0,
        right: 0,
        height: Dimension.getHeight(30),
        paddingTop: Dimension.getHeight(1.5),
        borderBottomLeftRadius: Dimension.getWidth(10),
        borderBottomRightRadius: Dimension.getWidth(10),
        backgroundColor: COLORS.PrimaryDarkColor,
    },
    logoStyle: {
        width: Dimension.getWidth(25),
        height: Dimension.getHeight(15),
        alignSelf: 'center',
    },
    flatListStyle: {
        backgroundColor: 'white',
        borderBottomLeftRadius: Dimension.getWidth(10),
        borderTopRightRadius: Dimension.getWidth(10),
    },
    headertextStyle: {
        fontSize: Dimension.normalize(22),
        color: COLORS.WhiteColor,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    listCard: {
        flex: 1,
        backgroundColor: COLORS.WhiteColor,
        elevation: 20,
        alignSelf: 'center',
        width: Dimension.getWidth(95),
         paddingTop: Dimension.getHeight(3),
        borderTopRightRadius: Dimension.getWidth(10),
        marginTop: Dimension.getHeight(-7)
    },
    card: {
        padding: 10,
        backgroundColor: COLORS.WhiteColor,
        elevation: 15,
        marginBottom: 20,
        flexDirection: 'row',
        width: Dimension.getWidth(90),
        alignSelf: 'center',
        alignItems: 'center'
    },
    rightSideView: {
        width: Dimension.getWidth(60),
        marginLeft: Dimension.getWidth(2),
    },
    songImage: {
        width: Dimension.getWidth(20),
        height: Dimension.getHeight(10)
    },
    titleText: {
        fontSize: Dimension.normalize(12),
        color: COLORS.PrimaryColor
    },
    artistText: {
        fontSize: Dimension.normalize(12),
        fontWeight: 'bold',
        color: COLORS.PrimaryDarkColor
    },
    rowView: {
        flexDirection: 'row',
        marginTop: 5,
    },
    textStyle: {
        fontSize: Dimension.normalize(12),
        fontWeight: 'bold',
        marginLeft: Dimension.getWidth(6),
        color: COLORS.PrimaryDarkColor
    }

})

export default styles