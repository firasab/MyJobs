import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';

//formik 
import { Formik } from "formik";

//icons
import { Octicons, Ionicons} from '@expo/vector-icons';
 

import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea, LeftIcon, StyledInputLable, StyledTextInput, RightIcon, Colors, StyledButton, Buttontext } from './../components/style';
import {View} from 'react-native';

//colors 
const { brand, darkLight} = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo2.png')}/> 
                <PageTitle> Welcome!</PageTitle>
                <SubTitle>Login to your account</SubTitle>
              
                <Formik initialValues={{ id: '', phoneNumber: '' }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                >
                {({handleChange, handleBlur, handleSubmit, values }) => 
                (<StyledFormArea> 
                    <MyTextInput 
                    label= "ID "
                    icon="person"
                    placeholder="Enter Your ID number"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('id')}
                    onBlur={handleBlur('id')}
                    value={values.id}
                    keyboardType="email-address"
                    />
                     <MyTextInput 
                    label= "Password "
                    icon="lock"
                    placeholder="* * * * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword = {setHidePassword}
                    />
                    <StyledButton onPress={handleSubmit}>
                        <Buttontext>
                            Login
                        </Buttontext>
                    </StyledButton>
                </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
} 

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30}  color={brand}/>
            </LeftIcon>
            <StyledInputLable> {label} </StyledInputLable>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye' } size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
        );

}

export default Login;