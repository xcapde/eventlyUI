import { Link } from "react-router-dom"
import { Logo } from "../logo/Logo"
import { Wrapper } from "./navtop.styled"

export const NavTop = () => {

    return (
        <Wrapper>
            <Link to='/home'>
                <Logo scale={'40%'}/>
            </Link>
        </Wrapper>
    )
}