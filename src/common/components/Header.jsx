import React from "react";
import styled from "styled-components";
import { Subtitle1, Input, Body2, Body1, Icon } from "@class101/ui";

function Header() {
    return (
        <div>
            <HeaderTop>
                <Logo>CLASS101</Logo>
                <Page>
                    <Subtitle1>클래스</Subtitle1>
                    <Subtitle1>스토어</Subtitle1>
                </Page>
                <Input placeholder="찾으시는 취미가 있으신가요?" />
                <Page>
                    <Body2>크리에이터 지원</Body2>
                    <Body2>기업교육</Body2>
                    <Body2>로그인</Body2>
                </Page>
            </HeaderTop>
            <HeaderNav>
                <Page>
                    <Body1>전체 카테고리</Body1>
                    <Body1>새해 다짐격파</Body1>
                    <Body1>1월 가입혜택</Body1>
                    <Body1>이벤트</Body1>
                    <Body1>바로 수강</Body1>
                    <Body1>신규 클래스</Body1>
                    <Body1>오픈 예정</Body1>
                </Page>
                <Page>
                    <Body2>시그니처</Body2>
                    <Body2>키즈</Body2>
                    <Body2>원포인트 클래스</Body2>
                </Page>
            </HeaderNav>
        </div>
    );
}

const HeaderTop = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 2fr 1.5fr;
`;

const Logo = styled.div`
    font-size: 25px;
    font-weight: 700;
`;

const Page = styled.div`
    display: flex;
    gap: 24px;
`;

const HeaderNav = styled.div`
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Header;
