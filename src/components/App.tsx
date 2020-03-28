import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import { useState } from "react";
import { Home } from "./Home";
import { Access } from "./Access";
import { Spot } from "./Spot";
import { Board } from "./Board";
const page404 = () => <div><h1>404</h1>存在しないページです</div>  //<= ヒットしなかった時用のページを追加

const HeaderMenu = styled.div`
    width: 100vw;
`;
const MenuField = styled.ul`
    display: inline-block;
    text-align: center;
    width: 100vw;
`;
const MenuItem = styled.li`
    display: 'inline';
    width: '100px';
    margin-left: 10px;
`;
const Contents = styled.div`
    display: inline-block;
    text-align: center;
    width: 100vw;
`;
export const MenuModal = () => {

}
export const App = () => {
    const liStyle = {
        display: 'inline',
        width: '100px'
    }
    return (
        <Router>
            <HeaderMenu >
                <MenuField >
                    <MenuItem style={liStyle}><Link to='/'>top</Link></MenuItem>
                    <MenuItem style={liStyle}><Link to='/access'>Access</Link></MenuItem>
                    <MenuItem style={liStyle}><Link to='/Spot'>Spot</Link></MenuItem>
                    <MenuItem style={liStyle}><Link to='/board'>board</Link></MenuItem>
                </MenuField>
                <Contents style={{ marginLeft: '50px' }}>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/access' exact component={Access} />
                        <Route path='/Spot' exact component={Spot} />
                        <Route path='/board' exact component={Board} />
                        <Route exact component={page404} />
                    </Switch>
                </Contents>
            </HeaderMenu>
        </Router>)
}

export default App