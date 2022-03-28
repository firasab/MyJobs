import React from "react";
import { StatusBar } from 'expo-status-bar';


 

import { WelcomeContainer, InnerContainer,  PageTitle, SubTitle, StyledFormArea, StyledButton, Buttontext,  Avatar,StyledProfileButton, StyledScheduleButton, DivStyled, StyledSignInOutButton, StyledHoursReportButton } from './../components/style';


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
                <DivStyled>
                <StyledProfileButton onPress={() => {}}>
                        <Buttontext>
                            Worker Profile
                        </Buttontext>
                    </StyledProfileButton>
                    <StyledScheduleButton onPress={() => {}}>
                        <Buttontext>
                            Work Schedule
                        </Buttontext>
                    </StyledScheduleButton>
                    </DivStyled>
                    <DivStyled>
                <StyledHoursReportButton onPress={() => {}}>
                        <Buttontext>
                            Hours Report
                        </Buttontext>
                    </StyledHoursReportButton>
                    <StyledSignInOutButton onPress={() => {}}>
                        <Buttontext>
                            SignIn/SignOut
                        </Buttontext>
                    </StyledSignInOutButton>
                    </DivStyled>
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