import * as React from "react";
import Header from "./Header/Header";

export interface AppProps { compiler: string; framework: string; }

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div>
                <Header />
                <h1>

                </h1>
            </div>
        )
    }
}