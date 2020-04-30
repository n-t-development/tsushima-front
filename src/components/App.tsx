import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import { useState } from "react";
import { HeaderImageSlider } from "./HeaderImageSlider";
import { Access } from "./Access";
import { Spot } from "./Spot";
import { Board } from "./Board";
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
const page404 = () => <div><h1>404</h1>存在しないページです</div>  //<= ヒットしなかった時用のページを追加

const Root = styled.div`
    width: 100vw;
`;
export const MenuModal = () => {

}
export const App = () => {
    return (
        <Root>
            <HeaderImageSlider />
        </Root>
    )
}

export default App