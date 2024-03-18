import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import HomeScreen from '../Screens/HomeScreen';
import MyCourse from '../Screens/MyCourse';
import LeaderBoard from '../Screens/LeaderBoard';
import ProfileScreen from '../Screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';


const Tab=createBottomTabNavigator();


export default function TabNavigation(){
  
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>

        <Tab.Screen name="Home" component={HomeScreenNavigation} 
        options={{
          tabBarIcon:({color,size})=>(
            <FontAwesome name="home" size={size} color="black" />
          )}}
        />
 
        <Tab.Screen name="My Tasks" component={MyCourse}
        options={{
          tabBarIcon:(color,size)=>(
            <FontAwesome5 name="tasks" size={24} color={color} />
        )}} />

       
        <Tab.Screen name="Leaderboard" component={LeaderBoard} 
        options={{
          tabBarIcon:(color,size)=>(
            <MaterialIcons name="leaderboard" size={24} color={color} />
        )}} />

        

        <Tab.Screen name="Profile" component={ProfileScreen}
         options={{
          tabBarIcon:({color,size})=>(
            <Ionicons name="man" size={size} color="black"/>
          )}}/>

      </Tab.Navigator>
    )
}
