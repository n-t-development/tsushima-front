import * as React from "react";
import { HeaderField, HeaderBox, LinkBox, StyleLink } from "./elements";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


export const Header = () => {

    return (
        <HeaderField>
            <HeaderBox>
                <LinkBox>
                    <StyleLink to="/">Home</StyleLink>
                </LinkBox>
                <LinkBox>
                    <StyleLink to="/spot">Spot</StyleLink>
                </LinkBox>
                <LinkBox>
                    <StyleLink to="/access">Access</StyleLink>
                </LinkBox>
            </HeaderBox>
        </HeaderField>
    )
}