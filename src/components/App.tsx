import * as React from "react";
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