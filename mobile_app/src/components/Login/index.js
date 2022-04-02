import {Image, Text, View } from 'react-native';
import Container from '../../components/common/Container';
import {  TextInput } from "react-native";
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import envs from '../../config/env';
import Message from '../common/Message';

const LoginComponent = ({ error,
  form,
  onChange,
  loading,
  onSubmit,
}) => {
    
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

    



            <Input 
            label="Username"
            placeholder=" Enter your Username "
            value={form.phoneNumber || null}
            onChangeText={(value) => {
              onChange({name: 'phoneNumber', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={(value) => {
              onChange({name: 'id', value});
            }}
          />
      </View>

      <CustomButton  
            disabled={loading}
            onPress={onSubmit}
            loading={loading} 
            primary 
            title="Login"  />
      </View>
      </Container>

    )
    }

export default LoginComponent;