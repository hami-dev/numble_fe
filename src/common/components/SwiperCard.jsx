import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { Card, Caption1, Colors, Badge, Icon, CoverRatio } from "@class101/ui";

import TimedealCountDown from "./TimedealCountDown";

function SwiperCard(props) {
    var customParseFormat = require("dayjs/plugin/customParseFormat");
    dayjs.extend(customParseFormat);
    return (
        <CardWrapper>
            <Card
                title={props.data.title}
                textAlign={"left"}
                coverImage={props.data.img}
                coverImageRatio={
                    props.isLongHeight
                        ? CoverRatio.RATIO_3X4
                        : CoverRatio.RATIO_4X3
                }
                to={"/"}
                exernal
                extraTop={
                    <>
                        {props.isTimeDeal && <TimedealCountDown />}
                        <Caption1
                            textAlign={"left"}
                            fontWeight={600}
                            color={Colors.gray900}
                        >
                            {props.data.creator}
                        </Caption1>
                    </>
                }
                extraBottom={
                    !props.isEvent ? (
                        <>
                            <div
                                style={{
                                    marginLeft: "-4px",
                                    lineHeight: "0",
                                    textAlign: "left",
                                }}
                            >
                                {props.data?.coupon && (
                                    <Badge
                                        className="coupon_badge"
                                        color="white"
                                        backgroundColor="#6300d8"
                                    >
                                        {props.data?.coupon}만원 쿠폰
                                    </Badge>
                                )}
                                <Badge
                                    icon={
                                        <Icon.Heart
                                            fillColor={Colors.gray400}
                                        />
                                    }
                                    backgroundColor="transparent"
                                    color={Colors.gray400}
                                    size="sm"
                                >
                                    {props.data?.like}
                                </Badge>
                                <Badge
                                    icon={
                                        <Icon.Like fillColor={Colors.gray400} />
                                    }
                                    backgroundColor="transparent"
                                    color={Colors.gray400}
                                    size="sm"
                                >
                                    {props.data?.thumsUp}%
                                </Badge>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                <Caption1
                                    textAlign={"left"}
                                    fontWeight={"Bold"}
                                    color={Colors.orange700}
                                >
                                    {Math.round(
                                        (100 * props.data.price?.salePrice) /
                                            props.data.price?.originalPrice
                                    )}
                                    %
                                </Caption1>
                                <Caption1
                                    textAlign={"left"}
                                    fontWeight={"Bold"}
                                >
                                    월 {props.data.price?.salePrice}원
                                </Caption1>
                                <Caption1
                                    textAlign={"left"}
                                    color={Colors.gray600}
                                >
                                    ({props.data.price?.installment}개월)
                                </Caption1>
                            </div>
                        </>
                    ) : (
                        <div
                            style={{
                                display: "flex",
                            }}
                        >
                            <Caption1
                                textAlign={"left"}
                                fontWeight={"Bold"}
                                color={Colors.orange700}
                            >
                                D-
                                {dayjs().diff(
                                    dayjs(
                                        props.data.period.startDate,
                                        "YY-MM-DD"
                                    ),
                                    "day"
                                )}
                            </Caption1>
                            <Caption1 textAlign={"left"} fontWeight={"Bold"}>
                                {props.data.period.startDate} ~{" "}
                                {props.data.period.finishDate}
                            </Caption1>
                        </div>
                    )
                }
            />
        </CardWrapper>
    );
}

export default SwiperCard;

const CardWrapper = styled.div`
    .coupon_badge {
        position: absolute;
        top: 10px;
        left: 10px;
    }
`;

const CardImg = styled.img`
    width: 100%;
    object-fit: cover;
    opacity: 1;
`;
