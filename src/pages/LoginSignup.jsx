import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BottomTxt } from '../components/forms/form.styled';
import { LoginSignupForm } from '../components/forms/LoginSignupForm';
import { Logo } from '../components/logo/Logo';
import { Sidebar } from '../components/navs/Sidebar';
import { Page, View, Wrapper } from '../styles/styles.styled';
import ColorLogo from "../assets/logo/LogoColor.png"
import formatUtil from '../utils/format';
import { LinkButton } from '../components/buttons/buttons.styled';

export const LoginSignup = () => {

    let location = formatUtil.cutString(useLocation().pathname);

    return (
        <Page>
            <Sidebar />
            <View>
                <Wrapper id="wrapper" justifyContent={'flex-start'} gap={'2%'} backgroundColor={'var(--primaryColor)'}>
                    <Logo scale={'100%'} imgUrl={ColorLogo}/>
                    <LoginSignupForm location={location} />
                    {/* <SecondaryTxt>Forgot your password?</SecondaryTxt> */}
                    <BottomTxt>
                        {location === 'log in' ?
                            <React.Fragment>Not a member? <LinkButton><Link to='/sign-up'>Sign Up</Link></LinkButton></React.Fragment>
                            : <React.Fragment>Have an account? <LinkButton><Link to='/log-in'>Log In</Link></LinkButton></React.Fragment>}
                    </BottomTxt>
                </Wrapper>
                {/* <HighlightsBox></HighlightsBox> */}
            </View>
            <noscript>tab</noscript>
        </Page>
    )
}