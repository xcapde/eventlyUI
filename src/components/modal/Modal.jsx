import { DetailText, OpacityBackground, Row, View } from '../../styles/styles.styled';
import { ModalCnt, ButtonsControl, ModalAskingCnt } from './modal.styled';
import { CancelButton, PrimaryButton, SecondaryButton } from '../buttons';

export const Modal = ({message, modalIsAsking, setModalIsActive, callback}) => {

    return(       
        <View index='var(--index-modal)'>
                {modalIsAsking &&<OpacityBackground/>}
                
                {modalIsAsking? 
                <ModalAskingCnt>
                    <DetailText textAlign='center'>{message}</DetailText>
                    <ButtonsControl>
                        <SecondaryButton content={'Cancel'} callback={()=>setModalIsActive(false)}/>
                        <PrimaryButton content={'Confirm'} callback={()=>callback()}/>
                        {/* <PrimaryButton content={'Confirm'}/> */}
                    </ButtonsControl>
                </ModalAskingCnt>
                :
                <ModalCnt>
                    <Row gap='2rem' justifyContent="center">
                    <DetailText>{message}</DetailText>
                    <CancelButton callback={()=>setModalIsActive(false)}/>
                    </Row>
                </ModalCnt>
                }
        </View>
    )
}