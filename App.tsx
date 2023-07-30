import React from "react"
import { View, Text } from 'react-native'
import colors from './src/theme/colors'
import fonts from './src/theme/fonts'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

const Instagram = () => {

  return (
    <View style = {{ flex : 1 , alignItems : 'center', justifyContent:'center'}} >
      <Text style = {{ color : colors.primary }}>
        this is my first App 
        <AntDesignIcon name = "stepforward" size = { fonts.size.md}  color={colors.accent} />
      </Text>
      
    </View>

  )
}
export default Instagram