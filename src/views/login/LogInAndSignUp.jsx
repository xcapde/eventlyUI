import { Link } from "react-router-dom";
import { Logo } from "../logo/Logo";
import { Button, HighlightsBox, Input, LoginBox, LoginCnt, InputsBox, BottomTxt, SecondaryTxt } from "./LogInAndSignUp.styled";



export function LogInAndSignUp(){

    return(
        <LoginCnt>
            <LoginBox>             
                <Logo/>
                <InputsBox>
                    <Input placeholder="Name"/>
                    <Input placeholder="Password"/>
                    <Button>LOG IN</Button>
                    <SecondaryTxt>Forgot your password?</SecondaryTxt>
                </InputsBox>                
                <BottomTxt> 
                    Not a member? <Link to={"/signup"}> Register now </Link>
                </BottomTxt>
            </LoginBox>            

            <HighlightsBox>
            </HighlightsBox>

        </LoginCnt>
    )
}