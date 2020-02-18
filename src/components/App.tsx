import * as React from "react";
<<<<<<< HEAD
import { Access } from './Access'
import { Home } from './Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Header } from "./Header";
import { Spot } from "./Spot";
export interface AppProps { compiler: string; framework: string; }
export const App = () => {
    // const [isOpen, setIsOpen] = React.useState(false);
    // const [buttonText, setButtonText] = React.useState('メニュー');
    // const isOpenModal = () => {
    //     if (isOpen) {
    //         setIsOpen(false);
    //         setButtonText('メニュー');
    //     } else {
    //         setIsOpen(true);
    //         setButtonText('×');
    //     }
    // }
    return (
        <Router>
            {/* <button onClick={() => isOpenModal()}>{buttonText}</button>
            {isOpen && ( */}
            {/* )
            } */}
            <Header />
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/spot">
                    <Spot />
                </Route>
                <Route path="/access">
                    <Access />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
=======
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
const page1 = () => <div><h1>page1</h1>1枚目のページです</div>
const page2 = () => <div><h1>page2</h1>2枚目のページです</div>
const page3 = () => <div><h1>page3</h1>3枚目のページです</div>
const page404 = () => <div><h1>404</h1>存在しないページです</div>  //<= ヒットしなかった時用のページを追加
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
`
const App = () => {
    const liStyle = {
        display: 'inline',
        width: '100px'
    }

    return (
        <Router>
            <div style={{ width: '500px', textAlign: 'left' }}>
                <ul style={{ display: 'flex' }}>
                    <li style={liStyle}><Link to='/'>top</Link></li>
                    <li style={liStyle}><Link to='/page1'>page1</Link></li>
                    <li style={liStyle}><Link to='/page2'>page2</Link></li>
                    <li style={liStyle}><Link to='/page3'>page3</Link></li>
                </ul>

                <div style={{ marginLeft: '50px' }}>
                    <Switch>
                        <Route path='/' exact component={topPage} />
                        <Route path='/page1' exact component={page1} />
                        <Route path='/page2' exact component={page2} />
                        <Route path='/page3' exact component={page3} />
                        <Route exact component={page404} />
                    </Switch>
                </div>
            </div>
        </Router>)
}

export default App
>>>>>>> 4853b07d27ac203e580aa278c11b4fbad882e905
