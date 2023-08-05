import { View , Image , Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicon from 'react-native-vector-icons/Ionicons'
import colors from '../../theme/colors'

import styles from "./styles"
const FeedPost = ()=>{
    return (
        <View style = { styles.post}>
            {/* Header  */}
            <View style = { styles.header }>
                <Image 
                    source = {{ uri : "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg" }}
                    style = { styles.useravatar}
                 />
                <Text style = { styles.username }>
                    username 
                </Text>
                <Entypo
                    name="dots-three-horizontal"
                    size={16}
                    style={styles.threedots}
                />
            </View>
            {/* Content  */}
            <Image
                source = {{ uri : "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg" }}
                style = {styles.postimage}
            />
            {/* Footer  */}
            <View style = {styles.footer }>
                {/* Icon container for the posted image  */}
                <View style = {styles.iconcontainer}>
                    <AntDesign
                        name={'hearto'}
                        size={24}
                        style={styles.icon}
                        color={colors.black}
                    />
                    <Ionicon
                        name="chatbubble-outline"
                        size={24}
                        style={styles.icon}
                        color={colors.black}
                    />
                    <Feather
                        name="send"
                        size={24}
                        style={styles.icon}
                        color={colors.black}
                    />
                    <Feather
                        name="bookmark"
                        size={24}
                        style={{marginLeft: 'auto'}}
                        color={colors.black}
                    /> 
                </View>
                {/* likes  */}
                <Text style = {styles.text}>
                    liked by {' '}
                    <Text style = {styles.bold}> usernameB </Text> and 
                    <Text style = {styles.bold}> 66 Others </Text>
                </Text>

                {/* description  */}
                <Text style = {styles.text}>
                    <Text style = { styles.bold}>
                        username
                    </Text>
                    {' '}this is description of the post here . ssakska ksalks slkkalassala ksslkslksa lsklsak slkslakssalks sakjs
                </Text>

                {/* comments  */}
                <Text> view all 16 comments </Text>
                <View style = {styles.comment}>
                    <Text style={styles.commenttext}>
                        <Text style = {styles.bold }>
                            usernameC
                        </Text> {' '} you are beautifull ! aslkslk alsklsa kalsk alksl ksala hsjhas hajs slksalks asjaskjs laskkals hshsja ajashsah ksdkldska klskladdk 
                    </Text>
                    <AntDesign
                        name={'hearto'}
                        size={16}
                        style={{marginLeft: 'auto'}}
                        color={colors.black}
                    />
                </View>
                {/*  posted date  */}
                <Text> 19 december 2022 </Text>


            </View>

           
        </View>
     )
}

export default FeedPost 