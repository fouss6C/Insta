import React from "react"
import { View } from 'react-native'
import FeedPost from "./src/components/FeedPost"

const Instagram = () => {

  return (
    <View style = {{ flex : 1, top : 50}} >
      <FeedPost />
    </View>
  )
}
export default Instagram