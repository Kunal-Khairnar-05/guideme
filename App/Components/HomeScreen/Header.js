import React from 'react'
import { View, Text, TextInput} from 'react-native'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../utils/Colors'
import Coin from '../../../assets/images/bitcoin.png'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
   
   const {isLoaded,isSignedIn,user}=useUser();
    return isLoaded&&(

        <View>
    <View style={[{justifyContent:'space-between'},styles.rowStyle]}>
      <View style={styles.rowStyle}>  

            <Image source={{uri:user?.imageUrl}}
            
            style={{width:50,height:50,borderRadius:99}}/>
            <View>

                <Text style={{color:Colors.WHITE,fontFamily:'outfit'}}>Welcome</Text>

                <Text style={styles.mainText}>{user?.fullName}</Text>
                    
                </View>
      </View>

      <View style={styles.rowStyle}>

    <Image source={Coin} style={{width:35,height:35,borderRadius:99}}/>  
            <Text style={styles.mainText}>3455</Text>
        </View>
    </View>

<View style={{backgroundColor:Colors.WHITE,paddingLeft:20,

paddingRight:5,
borderRadius:99,
marginTop:25,
display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

<TextInput placeholder='Search Career Paths ' style={{fontFamily:'outfit',
fontSize:18}}/>
<Ionicons name="search-circle-sharp" size={50} color={Colors.PRIMARY} />


</View>




    </View>
    )
  }

   const styles = StyleSheet.create({
    mainText:{
        color:Colors.WHITE,fontSize:20,
                    fontFamily:'outfit',
    },
    rowStyle:{
        display:'flex',flexDirection:'row',gap:10,
        alignItems:'center'
    }
   })

