import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/Colors';
import Dimension from '../../Utils/Dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WhiteColor
    },
    headerStyle:{
        top:0,
        left:0,
        right:0,
        height: Dimension.getHeight(9),
       backgroundColor: COLORS.PrimaryDarkColor,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    containerLinearGradient:{
        flex:1,
        backgroundColor: COLORS.WhiteColor
    },
    imgStyle:{
        width: Dimension.getWidth(40),
        height: Dimension.getHeight(20),
        alignSelf:'center',
        marginTop: Dimension.getHeight(2), 
    },
    headerBackIconTouchableStyle:{
        position:'absolute',
        left:0,
        top:Dimension.getHeight(2.2)
    },
    headerBackIconStyle:{
        color: COLORS.WhiteColor,
        marginLeft:Dimension.getWidth(2),
        width: Dimension.getWidth(6),
        height: Dimension.getHeight(5)
    },
    headertextStyle:{
        fontSize: Dimension.normalize(18),
        color: COLORS.WhiteColor,
        textAlign:'center',
        fontWeight:'bold'
    },
    activityIndStyle:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    detailHeadText:{
        marginVertical: Dimension.getHeight(1),
        marginLeft: 20,
        fontSize: Dimension.normalize(16),
        fontWeight: 'bold',
        alignSelf:'center'
    },
   
    midView:{
        paddingHorizontal: Dimension.getWidth(4),
        paddingVertical: Dimension.getHeight(3)
    },
    rowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: Dimension.getHeight(2)
    },
    wrapperTextStyle:{
        fontSize: Dimension.normalize(16),
        fontWeight: 'bold',
        textTransform:'uppercase',
        color: COLORS.PrimaryDarkColor,
        alignSelf:'center',
        
    },
    releaseTextStyle:{
        marginTop: Dimension.getHeight(1.5),
        marginBottom: Dimension.getHeight(1),
        fontSize: Dimension.normalize(13),
        textTransform:'capitalize',
        fontWeight: 'bold',
        color: COLORS.PrimaryColor
    },
    trackTextStyle:{   
        fontSize: Dimension.normalize(15),
        textTransform:'capitalize',
        fontWeight: 'bold',
        color: COLORS.PrimaryColor,
        alignSelf:'center'
    },
    textStyle:{
        marginBottom: Dimension.getHeight(1),
        fontSize: Dimension.normalize(13),
        textTransform:'capitalize',
        fontWeight: 'bold',
        color: COLORS.PrimaryColor
    },
    detailText:{
        fontSize: Dimension.normalize(11),
        fontWeight:'normal',
        color:COLORS.ShadeColor
    },
    btnRowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: Dimension.getHeight(1)
    },
    btnStyle:{
        backgroundColor: COLORS.ShadeColor,
        elevation:15,
        borderRadius:6,
        width: Dimension.getWidth(20),
        paddingVertical:8,
    },
    btnStyle2:{
        backgroundColor: COLORS.PrimaryColor,
        elevation:15,
        borderRadius:6,
        paddingVertical: 8,
        width: Dimension.getWidth(20),
    },
    btnText:{
        color: COLORS.BlackColor,
        fontSize: Dimension.normalize(12),
        fontWeight:'bold',
        alignSelf:'center'
    },
    btnText2:{
        color: COLORS.WhiteColor,
        fontSize: Dimension.normalize(12),
        fontWeight:'bold',
        alignSelf:'center'
    },
    desTextStyle:{
        marginTop: Dimension.getHeight(2),
        fontSize: Dimension.normalize(13),
        textTransform:'capitalize',
        fontWeight: 'bold',
        color: COLORS.PrimaryColor
    },
    copyrightStyle:{
        fontSize: Dimension.normalize(10),
        position:'absolute',
        bottom:0, 
        alignSelf:'center',
        fontStyle: 'italic'
    }
   
})

export default styles