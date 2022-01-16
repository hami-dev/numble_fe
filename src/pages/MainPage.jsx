import React, { Component } from "react";
import styled from "styled-components";
import { Section } from "@class101/ui";

import CarouselComponent from "common/components/Carousel";
import Header from "common/components/Header";

import todaySpecialData from "Json/todaySpecial.json";
import mdRecommend from "Json/mdRecommend.json";
import popularEvent from "Json/popularEvent.json";
import openSoon from "Json/openSoon.json";

function MainPage() {
    return (
        <MainWrapper>
            <Header />
            <Section title="오늘의 특가! TIME DEAL">
                <CarouselComponent
                    data={todaySpecialData.time_deal}
                    cardCount="4"
                    isTimeDeal
                />
            </Section>
            <SectionSpacer />
            <Section title="MD 추천 클래스">
                <CarouselComponent
                    data={mdRecommend.md_recommend}
                    cardCount="4"
                    isLongHeight
                    isRecommend
                />
            </Section>
            <SectionSpacer />

            <Section title="진행중인 인기 이벤트">
                <CarouselComponent
                    data={popularEvent.popular_event}
                    cardCount="3"
                    isEvent
                />
            </Section>
            <SectionSpacer />

            <Section title="오픈 예정 클래스">
                <CarouselComponent
                    data={openSoon.open_soon}
                    cardCount="4"
                    isOpenSoon
                />
            </Section>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
    max-width: 1176px;
    margin: 0 auto;
`;

const SectionSpacer = styled.div`
    margin-top: 36px;
`;

export default MainPage;
