import React from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'
import Header from '../Components/HomeScreen/Header'
import Colors from '../utils/Colors'
import Ai from '../../assets/images/Ai.jpg'
import { MaterialIcons } from '@expo/vector-icons';
import CourseList from '../Components/HomeScreen/CourseList'
import FadeInOutText from '../Components/FadeInOutText'

export default function HomeScreen() {
  return (
  <View>
    <View style={{backgroundColor:Colors.PRIMARY,height:250,padding:20}}>

    <Header/>


    </View>
    


 <View style={{marginTop:-70}}>
   <CourseList/>
   </View>

   <View style={{marginTop:10}}>
<View style={{ display: "flex",
                    flexDirection: "row",
                    marginTop:30}}>
<Text style={{   fontFamily:'outfit-bold',
        fontSize:24,
        marginLeft:20,
        marginRight:5,
        color:Colors.BLACK}}>Introducing AI Guide</Text>

<MaterialIcons name="stars" size={30} color="#eecd1e" />
<View style={{marginLeft:15,
marginTop:2,
}}>
<FadeInOutText/>

</View>
</View>
    <TouchableOpacity
        // onPress={onPress}
        style={{display:'flex',
        marginTop:10,

        flexDirection:'row',
        alignItems:'center',gap:10,justifyContent:'center',
        padding:5,
        borderRadius:99
    }}> 
             <Image source={Ai}
             style={{
                width:300, height: 130,
                borderRadius:40, 
                shadowColor: '#ccc', // Shadow color
                shadowOffset: { width: 5, height: 5 }, // Offset (x, y)
                shadowOpacity: 0.5, // Opacity (0-1)
                shadowRadius: 10, // Radius (blur)
             }}/>

           
        </TouchableOpacity>
</View>
    </View>
  
  )
}


