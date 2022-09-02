import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BottomTxt } from '../components/forms/form.styled';
import { LoginSignupForm } from '../components/forms/LoginSignupForm';
import { Logo } from '../components/logo/Logo';
import { Sidebar } from '../components/navs/Sidebar';
import { Page, View, Wrapper } from '../styles/styles.styled';
import formatUtil from '../utils/format';

export const LoginSignup = () => {

    let location = formatUtil.cutString(useLocation().pathname);

    return (
        <Page>
            <Sidebar />
            <View>
                <Wrapper id="wrapper" justifyContent={'flex-start'} gap={'2%'} backgroundColor={'var(--primaryColor)'}>
                    <Logo />
                    <LoginSignupForm location={location} />
                    {/* <SecondaryTxt>Forgot your password?</SecondaryTxt> */}
                    <BottomTxt>
                        {location === 'log in' ?
                            <React.Fragment>Not a member? <Link to='/sign-up'>Sign Up</Link></React.Fragment>
                            : <React.Fragment>Have an account? <Link to='/log-in'>Log In</Link></React.Fragment>}
                    </BottomTxt>
                </Wrapper>
                {/* <HighlightsBox></HighlightsBox> */}
            </View>
            <noscript>tab</noscript>
        </Page>
    )
}