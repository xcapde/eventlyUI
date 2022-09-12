import { Logotip } from "./logo.styled";
import LogoWhite from "../../assets/logo/LogoWhiteSimple.png";


export function WhiteLogo({ scale }) {

    return (
        <Logotip imgUrl={LogoWhite} scale={scale} />
    )
}