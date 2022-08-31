import { Link, useLocation } from 'react-router-dom';
import { BottomTxt, HighlightsBox, SecondaryTxt } from '../components/forms/form.styled';
import { LoginSignupForm } from '../components/forms/LoginSignupForm';
import { Logo } from '../components/logo/Logo';
import { Page, Wrapper } from '../styles/styles.styled';
import { stringFormat } from '../utils/stringUtil';

export const LoginSignup = () => {

    let location = stringFormat.cutString(useLocation().pathname);

    return (
        <Page>
            <Wrapper id="wrapper" gap={'2%'} backgroundColor={'var(--primaryColor)'}>
                <Logo />
                <LoginSignupForm location={location} />
                <br />
                {/* <SecondaryTxt>Forgot your password?</SecondaryTxt> */}
                <br />
                <BottomTxt>
                    Not a member? <Link to={location === 'log in' ? '/sign-up' : '/log-in'}> {location === 'log in' ? 'sign in' : 'log in'} </Link>
                </BottomTxt>
            </Wrapper>
            {/* <HighlightsBox>
            </HighlightsBox> */}
        </Page>
    )
}