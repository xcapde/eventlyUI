import { ProfileFeed } from "../../components/feeds/ProfileFeed"
import { Navigation } from "../../components/information/Navigation"
import { MainMobile, NavCnt } from "../../pages/profile/profile.styled"

export const VProfileMobile = ({ joined, published, byDate, date, field, callback }) => {

    const tabContent = ["by_Date", "joined", "published"];

    const views = {
        joined: <ProfileFeed events={joined} title={"joined"} />,
        published: <ProfileFeed events={published} title={"published"} />,
        by_Date: <ProfileFeed events={byDate} title={"joined"} date={date} />
    }

    return (
        <MainMobile>
            <NavCnt>
                <Navigation tabContent={tabContent} callback={callback} field={field} />
            </NavCnt>
            {byDate &&
                views[field]
            }
        </MainMobile>
    )
}