import { Logotip } from "./logo.styled";
import { Row } from "../../styles/styles.styled";

export function Logo({ scale, imgUrl }) {

    return (
        <Logotip imgUrl={imgUrl} scale={scale} />
    )
}