import * as React from "react";
import { Root, Img, SwiperWrapper } from "./elements";
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';


export const HeaderImageSlider = () => {
    const [swiper, setSwiper] = React.useState(null);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    return (
        <div >
            <SwiperWrapper>
                <Swiper getSwiper={setSwiper}>
                    <Img src={'./../img/IMG_0598.jpeg'}></Img>
                    <Img src={'./../img/IMG_0600.jpeg'}></Img>
                    <Img src={'./../img/IMG_0601.jpeg'}></Img>
                    <Img src={'./../img/IMG_0602.jpeg'}></Img>
                    <Img src={'./../img/IMG_0604.jpeg'}></Img>
                </Swiper>
                <button onClick={goPrev}>Prev</button>
                <button onClick={goNext}>Next</button>
            </SwiperWrapper>
        </div>
    )
}

HeaderImageSlider.displayName = 'Memo(HeaderImageSlider)';