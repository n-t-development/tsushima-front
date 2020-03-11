import * as React from "react";
import { Access } from './Access'
import { Home } from './Home'
import { useTransition, animated } from 'react-spring';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { Header } from "./Header";
import { Spot } from "./Spot";
import { Root, Wrap, LinkBox, StyleLink } from "../elements";
import styled from "styled-components";
export interface AppProps { compiler: string; framework: string; }
const menuItems =
    [
        { 'name': 'Home', 'path': '/top' },
        { 'name': '観光情報', 'path': '/spot' },
        { 'name': '対馬市の特産品', 'path': '/specialty' },
        { 'name': 'アクセス', 'path': '/access' },
        { 'name': '口コミ情報', 'path': '/reviews' },
        { 'name': 'サイト運用者情報', 'path': '/profile' },
    ]

export const App = () => {
    return (
        <Root>
            <Router>
                {/* <button onClick={() => isOpenModal()}>{buttonText}</button>
            {isOpen && ( */}
                {/* )
            } */}
                {/* <Menu open={open} setOpen={setOpen} id={menuId} /> */}
                {/* <Header /> */}
                <div><p>対馬</p></div>
                <div>
                    <Wrap>
                        {menuItems.map(menuItem => (
                            <StyleLink to={menuItem.path}>{menuItem.name}</StyleLink>
                        ))}
                    </Wrap>
                </div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/spot">
                        <Spot />
                    </Route>
                    <Route path="/access">
                        <Access />
                    </Route>
                    <Route path="/top">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Root>
    );
}
