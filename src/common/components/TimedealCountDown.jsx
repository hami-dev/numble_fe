import React from "react";
import styled from "styled-components";
import { Colors, Badge } from "@class101/ui";

function TimedealCountDown() {
    return (
        <CountDownWrapper>
            <Badge
                backgroundColor={Colors.black}
                color={Colors.white}
                style={{
                    width: "100%",
                }}
            >
                <span>타임딜 종료까지</span>
                <span>00:00:00</span>
            </Badge>
        </CountDownWrapper>
    );
}

const CountDownWrapper = styled.div`
    margin-bottom: 8px;
`;

export default TimedealCountDown;
