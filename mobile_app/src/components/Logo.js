import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../assets/iconfinder_h-square_1608917.png')} style={styles.image } />
)

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginBottom: 8,
  },
})

export default Logo
