import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import { Image } from 'react-native'
import OptionItem from './OptionItem'
import { Ionicons } from '@expo/vector-icons';

export default function DetailSection({course}) {
  return (
    <View style={{padding:10,borderRadius:15,backgroundColor:Colors.WHITE}}>
      <Image source={{uri:course?.banner?.url}} 
      style={{width:Dimensions.get('screen').width*0.88,height:190,borderRadius:15}}
      />
      <Text style={{fontSize:22, fontFamily:'outfit-medium',marginTop:10}}>{course.name}</Text>
    </View>
  )
}