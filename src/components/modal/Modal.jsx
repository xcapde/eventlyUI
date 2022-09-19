import { OpacityBackground, Row, Title } from '../../styles/styles.styled';
import useModal from "../../hooks/useModal";
import { CloseButton } from '../buttons/CloseButton';
import { ConfirmButton } from '../buttons/CheckButton';
import { ModalCnt } from './modal.styled';

export const Modal = ({message, modalIsAsking, setModalIsActive}) => {

    return(
        <OpacityBackground>
            <ModalCnt>
                <Row>
                <Title>{message}MODAL</Title>
                {!modalIsAsking && <CloseButton callback={setModalIsActive(false)}/>}
                </Row>
                {/* {!isAsking &&
                <Row>
                    <CloseButton content={'Cancel'} callback={showModal}/>
                    <ConfirmButton content={'Confirm'} callback={callback}/>
                </Row>
                } */}
            </ModalCnt>
        </OpacityBackground>
    )
}