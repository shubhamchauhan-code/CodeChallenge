import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/Colors';
import Dimension from '../../Utils/Dimension'
const styles = StyleSheet.create({
    container: {
       flex: 1,
        justifyContent: 'center',
    },
    splashStyle:{
        flex:1,
        justifyContent:'center'
    },
    logoStyle: {
        width: Dimension.getWidth(50),
        height: Dimension.getHeight(50),
        alignSelf:'center'
    },
})

export default styles