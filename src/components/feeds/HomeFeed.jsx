import React from "react";
import { Row, View } from "../../styles/styles.styled";
import { ModuleVerticalSmallCard } from "./ModuleVerticalSmallCard";
import { ModuleTags } from "./ModuleTags";
import { ModuleHorizontalMainCard } from "./ModuleHorizontalMainCard";
import { LinkButton } from "../buttons/LinkButton";
import { ModuleVerticalMainCard } from "./ModuleVerticalMainCard";
import { Wrapper, FeedCnt } from "./feed.styled.jsx";

export const HomeFeed = ({ events, tags, tag, setTag, eventsByTag, setEventsByTag, onlineEvents, offlineEvents, seeAll, setSeeAll, participations }) => {

    return (
        <View id="view">
            <Wrapper>
                <Row height='5vh' justifyContent="flex-end">
                    {tag ?
                        <LinkButton callback={() => { setTag(); setEventsByTag(); setSeeAll(false) }} content={'Clear'} />
                        :
                        !seeAll ?
                            <LinkButton callback={() => { setSeeAll(true); setTag(); setEventsByTag() }} content={'See All'} /> :
                            <LinkButton callback={() => { setSeeAll(false); setTag(); setEventsByTag() }} content={'By type'} />}
                </Row>

                <ModuleTags tags={tags} callback={(data) => { setTag(data); setSeeAll(false) }} />

                <FeedCnt margin="0" gap="0">
                    {!eventsByTag && !seeAll &&
                        <React.Fragment>
                            <ModuleHorizontalMainCard title={'Offline'} events={offlineEvents} participations={participations}  />
                            <ModuleVerticalSmallCard title={'Online'} height={'30%'} widht="100%" events={onlineEvents} />
                        </React.Fragment>
                    }
                    {!seeAll && eventsByTag && <ModuleVerticalMainCard participations={participations} tag={tag} title={`${tag}`} events={eventsByTag} width={'var(--cardAllTags-width)'} height={'var(--cardAllTags-height)'}/>}
                    {seeAll && !eventsByTag && <ModuleVerticalMainCard participations={participations} title={'All'} events={events} width={'var(--cardAllTags-width)'} height={'var(--cardAllTags-height)'}/>}
                </FeedCnt>
            </Wrapper>
        </View >
    )
}