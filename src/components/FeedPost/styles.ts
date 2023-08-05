import { StyleSheet } from "react-native";
import fonts from '../../theme/fonts'
import colors from '../../theme/colors'

export default StyleSheet.create({
post : {
    //flex : 1
},
header : {
    flexDirection : 'row',
    alignItems : "center",
    marginBottom : 10,
    marginHorizontal : 2,
},
useravatar :{
    width : 50 , 
    aspectRatio : 1,
    borderRadius : 25,
    marginRight : 5 , 
},
username : {
    fontWeight : fonts.weight.semi,
    fontSize : fonts.size.md,
}, 
threedots : {
    fontWeight : fonts.weight.full,
    marginLeft : 'auto'
},
postimage : {
    width : '100%',
    aspectRatio : 1,
},
footer:{
    marginTop : 5,
    marginHorizontal : 2,
},
iconcontainer : {
    flexDirection : 'row',
},
icon : {
    marginRight : 2,
},
text : {
    color : colors.black,
    fontSize : fonts.size.md,
    marginBottom : 5,
},
bold : {
    fontWeight : fonts.weight.semi,
},
comment : {
    flexDirection : 'row',
},
commenttext : {
    flex : 1,
    color : colors.black,
    fontSize : fonts.size.md,
},

})