import React, { useRef, useState } from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCard from "common/components/SwiperCard";

import SwiperCore, { Pagination, Navigation } from "swiper";

function CarouselComponent({
    data,
    cardCount,
    isLongHeight,
    isTimeDeal,
    isEvent,
}) {
    SwiperCore.use([Pagination, Navigation]);

    return (
        <SwiperWrapper>
            <Swiper
                slidesPerView={cardCount}
                spaceBetween={24}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <SwiperCard
                            data={item}
                            isLongHeight={isLongHeight}
                            isTimeDeal={isTimeDeal}
                            isEvent={isEvent}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperWrapper>
    );
}

const SwiperWrapper = styled.div`
    .mySwiper {
        /* max-width: 1176px; */
        /* margin; 0 auto; */
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: transparent;
    }
`;

export default CarouselComponent;
