import { Logotip } from "./logo.styled";
import EventlyLogo from "../../assets/logo/evently.png"
import { Row } from "../../styles/styles.styled";

export function Logo() {
    return (
        <Row>
            <Logotip imgUrl={EventlyLogo} />
        </Row>
    )
}