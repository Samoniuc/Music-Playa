import React, {Component} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Songs from "./Songs";
import Artists from "./Artists";

class App extends Component {
    render() {
        return(
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/songs" component={Songs} />
                        <Route path="/artists" component={Artists} />
                    </Switch>
                </Router>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
