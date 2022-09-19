import { DetailText, OpacityBackground, Row, View } from '../../styles/styles.styled';
import { CloseButton } from '../buttons/CloseButton';
import { ModalCnt, ButtonsControl, ModalAskingCnt } from './modal.styled';
import { PrimaryButton, SecondaryButton } from '../buttons';

export const Modal = ({message, modalIsAsking, setModalIsActive}) => {

    // const action = () => {
    //     {message.includes('join')?
    //         alert('join')
    //         : message.includes('delete')?
    //             alert('delete') 
    //         : alert('other')
    //         }
    //     setModalIsActive(false)
    // }

    return(       
        <View index='var(--index-modal)'>
                {modalIsAsking &&<OpacityBackground/>}
                
                {modalIsAsking? 
                <ModalAskingCnt>
                    <DetailText textAlign='center'>{message}</DetailText>
                    <ButtonsControl>
                        <SecondaryButton content={'Cancel'} callback={()=>setModalIsActive(false)}/>
                        {/* <PrimaryButton content={'Confirm'} callback={()=>action()}/> */}
                        <PrimaryButton content={'Confirm'}/>
                    </ButtonsControl>
                </ModalAskingCnt>
                :
                <ModalCnt>
                    <Row gap='2rem' justifyContent="center">
                    <DetailText>{message}</DetailText>
                    <CloseButton callback={()=>setModalIsActive(false)}/>
                    </Row>
                </ModalCnt>
                }
        </View>
    )
}