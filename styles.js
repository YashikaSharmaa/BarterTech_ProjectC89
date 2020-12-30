import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#233D4D',
        justifyContent: 'center',
        width:'100%',
        height:'100%'
    },
    box:{
        backgroundColor:'#233D4D', 
        justifyContent: 'center'
    },
    item:{
        alignItems:'center',
    },
    list:{
        width:'90%',
        alignSelf:'center',
        marginBottom:RFValue(30)
    },
    listButton:{
        width:RFValue(60),
        height:RFValue(40),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:RFValue(10),
        backgroundColor:"#FE7F2D",
        marginBottom:RFValue(30),
        marginTop:RFValue(30),
        alignSelf:'center'
    },
    loginBox:{
        width: RFValue(300),
        height: RFValue(40),
        borderBottomWidth: RFValue(1.5),
        borderColor : '#FCCA46',
        fontSize: RFValue(20),
        margin:RFValue(10),
        paddingLeft:RFValue(10)
    },
    modalTitle :{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:RFValue(30),
        color:'#FE7F2D',
        margin:RFValue(50),
        fontWeight:'bold'
    },
    modalContainer:{
        flex:1,
        borderRadius:RFValue(20),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#619B8A",
        marginRight:RFValue(30),
        marginLeft : RFValue(30),
        marginTop:RFValue(50),
        marginBottom:RFValue(80),
    },
    formTextInput:{
        width:"75%",
        height:RFValue(35),
        alignSelf:'center',
        borderColor:'#FCCA46',
        borderRadius:RFValue(10),
        borderWidth:RFValue(1),
        marginTop:RFValue(20),
        padding:RFValue(5),
        marginBottom:RFValue(20)
    },
    registerButton:{
        width:RFValue(200),
        height:RFValue(40),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:RFValue(10),
        marginTop:RFValue(30),
        backgroundColor:'#FCCA46',
    },
    registerButtonText:{
        color:'#619B8A',
        fontSize:RFValue(15),
        fontWeight:'bold'
    },
    cancelButton:{
        width:RFValue(200),
        height:RFValue(30),
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(5),
        alignSelf:'center',
    },
    button:{
        width:RFValue(300),
        height:RFValue(50),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:RFValue(25),
        backgroundColor:"#FE7F2D",
        shadowColor: "#000",
        shadowOffset: {
            width: RFValue(0),
            height: RFValue(8),
        },
        shadowOpacity: RFValue(0.30),
        shadowRadius: RFValue(10.32),
        elevation: RFValue(16),
        padding: RFValue(10),
        marginBottom:RFValue(30),
        alignSelf:'center'
    },
    buttonText:{
        color:'#233D4D',
        fontWeight:'200',
        fontSize:RFValue(20)
    },
    logoutText:{
        color:'#FE7F2D',
        fontWeight:'200',
        fontSize:RFValue(20),
        marginLeft:RFValue(30)
    },
    drawer:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:RFValue(30)
    },
    logout:{
        justifyContent:'center',
        padding:RFValue(10),
        height:RFValue(30),
        width:'100%'
    },
    formContainer:{
        flex:1,
        width:'100%',
        alignItems: 'center'
    },
    picker:{
        width:'80%',
        height:RFValue(35),
        alignSelf:'center',
        backgroundColor:'#FCCA46',
        marginTop:RFValue(20),
        marginBottom:RFValue(20)
    },
    GiveOrWant:{
        fontWeight:'bold',
        fontSize:RFValue(20),
        color:'#233D4D',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#29b6f6',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: RFValue(15),
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: RFValue(100),
    },
    backRightBtnRight: {
        backgroundColor: '#29b6f6',
        right: 0,
    },
    backTextWhite: {
        color: '#FFF',
        fontWeight:'bold',
        fontSize:RFValue(15)
    },
    imageContainer:{
        width: RFValue(120),
        height: RFValue(120),
        marginLeft:'25%',
        marginTop:'25%',
        borderRadius: RFValue(60),
    }
});

export default styles