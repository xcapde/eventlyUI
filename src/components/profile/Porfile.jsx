import { Col, Page, Wrapper } from "../../styles/styles.styled"
import { Footer } from "../footer/Footer"
import { CalendarCnt, HeaderCnt, InformationCnt } from "./profile.styled"

export const Profile = () => {

    return (
        <Page> 
            <Wrapper>
                <HeaderCnt>
                    <Col>
                        to desktop smaller 5% aprox fusion with calendar
                        USER NAME
                        EVENTS COUNTER
                    </Col>
                    PROFILE OPTIONS
                </HeaderCnt>                         
                <CalendarCnt> 
                    to desktop BIG 25% aprox
                    CALENDAR DATE TODAY
                    CALENDAR VIEW WITH TODAT MARKED
                </CalendarCnt>
                <InformationCnt> 
                    to desktop 2 columns: 1 w/ list of events + 1 w/ event detail or defaul ilustration
                    COMPACT VIEW OF NEXT EVENTS AND EXPANDING CARD
                        - HORIZONTAL COLORFULL CARD W/ TITLE HOUR PARTICIPANTS...
                    EXPANDING VIEW
                        - TITLE
                        - DATE Big DAY and small column MonthYear AND HOUR
                        - DESCRIPTION
                        - LOCATION
                        - PARTICIPANTS
                </InformationCnt>
            </Wrapper>            
            <Footer/>
        </Page>
    )
}