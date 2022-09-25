import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BottomTxt } from '../../components/forms/form.styled';
import { LoginSignupForm } from '../../components/forms/LoginSignupForm';
import { Page } from '../../styles/styles.styled';
import formatUtil from '../../utils/format';
import { LinkButton } from '../../components/buttons';
import { Logo } from '../../components/logo/Logo';
import { NavRail } from '../../components/navs';
import { authService } from '../../services/API/authService';
import { AuthService } from '../../services/AuthService';
import { Footer } from '../../components/footer/Footer';
import { LoginView, LogoCntrl } from './loginsSignup.styled';
import { Modal } from "../../components/modal/Modal";
import useModal from "../../hooks/useModal";

export const LoginSignup = () => {



    let location = formatUtil.cutString(useLocation().pathname);
    const navigate = useNavigate();
    const { modalIsActive, modalIsAlert, message, setModalIsActive, runAlertModal } = useModal();

    const signup = (data) => {
        authService.signup(data).then(res => {
            if (res.error) {
                runAlertModal(res.error);
                return;
            }
            navigate("/log-in")
        })
    };

    const login = (data) => {
        authService.login(data).then(res => {
            if (res.error) {
                runAlertModal(res.error)
                return;
            }
            const authUser = {
                token: res.token,
                username: res.username,
                id: res.id,
            };
            AuthService.saveAuthUser(authUser);
            navigate('/home');
        })

    };


    return (
        <Page>
            <NavRail />
            {modalIsActive && <Modal message={message} modalIsAlert={modalIsAlert} setModalIsActive={setModalIsActive} />}
            <noscript>arreglar desktop</noscript>
            <LoginView>
                <LogoCntrl>
                    <Logo scale={'200%'} />
                </LogoCntrl>
                <LoginSignupForm location={location} login={login} signup={signup} />
                <BottomTxt>
                    {location === 'log in' ?
                        <React.Fragment>Not a member? <LinkButton callback={() => navigate('/sign-up')} content="Sign Up" /></React.Fragment>
                        : <React.Fragment>Have an account? <LinkButton callback={() => navigate('/log-in')} content="Log In" /></React.Fragment>}
                </BottomTxt>
                <Footer />
            </LoginView>
        </Page>
    )
}