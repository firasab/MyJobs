import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { passwordValidator } from '../helpers/passwordValidator'
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const passwordError = passwordValidator(password.value)
    if (passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.navigate('MyJob')

    //sendRequest();
  }


  
  function sendRequest() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ username: email.value,password:password.value })
      };
      fetch('https://5b3a87aa4914.ngrok.io/api/worker/login/',requestOptions)
      .then(data=>data.json())
      .then(data=>{check(data)})
      .catch(error=>console.error(error))
          
  }
  return (
    <Background>
      <Logo />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
     
        
        keyboardType="numeric"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
      
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default LoginScreen
