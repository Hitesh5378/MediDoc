import { StyleSheet, Text, View ,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'



const Splash = ({navigation}) => {
  useEffect(()=>{
      setTimeout(()=>{
           navigation.navigate('Home')
      },3000)
  },[]);
  
 
  return (
    <View style={{ flex:1,   backgroundColor:'blue' , justifyContent:'center',alignItems:'center'}}>
      <Image  style={{height:100, width:100 , tintColor:'#fff'}} source={require('../images/logo.png')}/>
      <Text style={{fontSize:20, color:'#fff' ,fontWeight:'500', marginTop:18}}>MediDoc</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})