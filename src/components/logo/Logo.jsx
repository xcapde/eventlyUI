import { Logotip } from "./logo.styled";
import LogoColor from "../../assets/logo/LogoColor.png";


export function Logo({ scale }) {

    return (
        <Logotip imgUrl={LogoColor} scale={scale} />
    )
}