import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { SimpleLineIcons } from '@expo/vector-icons';
const BackButton = ({ goBack }) => (
    <SimpleLineIcons name="logout" size={24} color="black" />
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})

export default BackButton
