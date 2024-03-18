import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screens/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import React from 'react';
import { AppLoading } from 'expo';
import TabNavigation from './App/Navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  return (
   <ClerkProvider publishableKey={"pk_test_ZHJpdmVuLXBpa2EtNTIuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
    <View style={styles.container}>
  
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
       
       
        <SignedOut>
        <LoginScreen />
        </SignedOut>
    
      </View>
    
    </ClerkProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30
  
  },
});
