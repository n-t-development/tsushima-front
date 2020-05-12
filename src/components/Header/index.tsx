import * as React from "react";
import { Root, LinkBox, StyleLink, LinkItem, TopImageBox, Img, Text } from "./elements";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Access } from "../Access";
import { Board } from "../Board";
import { Spot } from "../Spot";
import { Top } from "../Top";


export const Header: React.FC = () => {


    return (
        <Root >
            <TopImageBox>
                <Text>（仮）対馬オリジナルサイト</Text>
            </TopImageBox>
            <LinkBox >
                <LinkItem>
                    <StyleLink to={'/'}>{'Top'}</StyleLink>
                </LinkItem>
                <LinkItem>
                    <StyleLink to={'/spot'}>{'Spot'}</StyleLink>
                </LinkItem>
                <LinkItem>
                    <StyleLink to={'/board'}>{'Board'}</StyleLink>
                </LinkItem>
                <LinkItem>
                    <StyleLink to={'/access'}>{'Access'}</StyleLink>
                </LinkItem>
            </LinkBox>
            <Route exact path='/' component={Top} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/spot" component={Spot} />
            <Route exact path="/access" component={Access} />
        </Root >
    )
}
Header.displayName = 'Memo(Header)';