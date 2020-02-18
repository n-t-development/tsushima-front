import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
const topPage = () => <div><h1>Top Page</h1>ここがトップページです</div>
const Spot = () => <div><h1>Spot</h1>Spot</div>
const Access = () => <div><h1>Access</h1>Access</div>
const page404 = () => <div><h1>404</h1>存在しないページです</div>
const Header = () => {
    const liStyle = {
        display: 'inline',
        width: '100px'
    }

    return (
        <Router>
            <div style={{ width: '500px', textAlign: 'left' }}>
                <ul style={{ display: 'flex' }}>
                    <li style={liStyle}><Link to='/'>top</Link></li>
                    <li style={liStyle}><Link to='/spot'>page1</Link></li>
                    <li style={liStyle}><Link to='/access'>page2</Link></li>
                </ul>

                <div style={{ marginLeft: '50px' }}>
                    <Switch>
                        <Route path='/' exact component={topPage} />
                        <Route path='/spot' exact component={Spot} />
                        <Route path='/access' exact component={Access} />
                        <Route exact component={page404} />
                    </Switch>
                </div>
            </div>
        </Router>)
}

export default Header