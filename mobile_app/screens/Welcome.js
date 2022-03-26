import React from "react";
import { StatusBar } from 'expo-status-bar';


 

import { WelcomeContainer, InnerContainer,  PageTitle, SubTitle, StyledFormArea, StyledButton, Buttontext,  Avatar } from './../components/style';


//colors 


const Welcome = () => {


    return (
        <>
            <StatusBar style="dark"/>
            <InnerContainer>
               
                <WelcomeContainer>
                <PageTitle Welcome={true} > Welcome Back! </PageTitle>
                <Avatar resizeMode="cover" source={require('./../assets/img/logo2.png')}/>  
                <SubTitle Welcome={true} >Worker name</SubTitle>
                
                <StyledButton onPress={() => {}}>
                        <Buttontext>
                            Profile
                        </Buttontext>
                    </StyledButton>
                <StyledFormArea>
                     <StyledButton onPress={() => {}}>
                        <Buttontext>
                            Logout
                        </Buttontext>
                    </StyledButton>
                </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
} 



export default Welcome;