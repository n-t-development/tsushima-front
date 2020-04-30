import * as React from "react";
import { Root, HeaderField, LinkBox, StyleLink, MenuField } from "./elements";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { useRef, useState } from "react";
import { useTransition, animated } from 'react-spring';

const menuItems =
    [
        { 'name': 'Home', 'path': '/' },
        { 'name': 'Spot', 'path': '/spot' },
        { 'name': 'Access', 'path': '/access' },
    ]

export const Header: React.FC = () => {
    const [iOpen, setIsOpen] = useState(false);

    const handleBtnClick = () => setIsOpen(!iOpen);

    const transitions = useTransition(iOpen, null, {
        from: { opacity: 0, transform: 'translateY(-10%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(10%)' },
    });


    return (
        <Root >
            <HeaderField>
                <button onClick={handleBtnClick}>Menu</button>
            </HeaderField>
            {transitions.map(({ item, key, props }) => {
                return (
                    item && (
                        <MenuField>
                            <animated.div
                                style={{
                                    ...props, position: 'relative', height: '100%',
                                }}
                                className="menu"
                                key={key}
                            >
                                {menuItems.map(menuItem => (
                                    <LinkBox>
                                        <StyleLink to={menuItem.path}>{menuItem.name}</StyleLink>
                                    </LinkBox>
                                ))}
                            </animated.div>
                        </MenuField>
                    )
                );
            })}
        </Root >
    )
}