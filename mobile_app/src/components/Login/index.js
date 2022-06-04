import {Image, Text, View } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import Message from '../common/Message';
import { Octicons, Ionicons} from '@expo/vector-icons';
import {  LeftIcon, StyledInputLable, StyledTextInput, RightIcon } from '../components/style';
import  {useState} from "react";

 
const LoginComponent = ({ 
  error,
  form,
  onChange,
  loading,
  onSubmit,
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <Container>
         <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
    />
      <View>

          <Text style={styles.title}>Welcome to MyJobs</Text>
          <Text style={styles.subTitle}>Please Login here</Text>
       
          <View style={styles.form}>

          { error && !error.error && ( 
            <Message 
            danger 
            onDismiss={() => {}}
            message="invalid credentials"/> 
            )}
          {error?.error && <Message danger onDismiss message={error?.error} /> }
          

            <MyTextInput 
            label="Username"
            placeholder=" Enter your Username "
            value={form.phoneNumber || null}
            keyboardType="numeric"
            onChangeText={(value) => {
            onChange({name: 'phoneNumber', value});}}
            icon="person"
              
           
            
          />

          <MyTextInput 
            label="Password"
            placeholder="Enter Password"
            icon="lock"
            iconPosition="right"
            keyboardType="numeric"
            onChangeText={(value) => {
              onChange({name: 'password', value});
            }}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword = {setHidePassword}
            
           />
            </View>
     
      <CustomButton disabled={loading} onPress={onSubmit } loading={loading}  primary  title="Login"  />
    
      </View>
      </Container>

    )
    }


    const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
      return (
          <View>
              <LeftIcon>
                  <Octicons name={icon} size={30}  />
              </LeftIcon>
              <StyledInputLable> {label} </StyledInputLable>
              <StyledTextInput {...props} />
              {isPassword && (
                  <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                      <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye' } size={30}  />
                  </RightIcon>
              )}
          </View>
          );
  
  }

export default LoginComponent;