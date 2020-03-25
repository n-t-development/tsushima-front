import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import { useState } from "react";
const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
const page1 = () => <div><h1>page1</h1>1枚目のページです</div>
const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
const page3 = () => <div><h1>page3</h1>3枚目のページです</div>
const page404 = () => <div><h1>404</h1>存在しないページです</div>  //<= ヒットしなかった時用のページを追加

const HeaderMenu = styled.div`
    width: 500px;
    textAlign: left;
`;
const MenuField = styled.ul`
    display: flex;
`;
const MenuItem = styled.li`
    display: 'inline';
    width: '100px';
`;

export const MenuModal = () => {

}
const App = () => {
    const liStyle = {
        display: 'inline',
        width: '100px'
    }
    return (
        <Router>
            <HeaderMenu >
                <MenuField style={{ display: 'flex' }}>
                    <MenuItem style={liStyle}><Link to='/'>top</Link></MenuItem>
                    <MenuItem style={liStyle}><Link to='/page1'>page1</Link></MenuItem>
                    <MenuItem style={liStyle}><Link to='/page2'>page2</Link></MenuItem>
                    <MenuItem style={liStyle}><Link to='/page3'>page3</Link></MenuItem>
                </MenuField>
                <div style={{ marginLeft: '50px' }}>
                    <Switch>
                        <Route path='/' exact component={topPage} />
                        <Route path='/page1' exact component={page1} />
                        <Route path='/page2' exact component={page2} />
                        <Route path='/page3' exact component={page3} />
                        <Route exact component={page404} />
                    </Switch>
                </div>
            </HeaderMenu>
        </Router>)
}

export default App