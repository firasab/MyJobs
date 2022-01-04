import React from 'react'
import { Text, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import { StyleSheet } from 'react-native'

const About = (props) => {
 

  return (
    <Background>
      <Logo />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Welcome to MyJobs App! Enjoy!</Text>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
    overflow: 'hidden',
  },
})
export default About