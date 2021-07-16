import React, {Component} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Songs from "./Songs";
import Artists from "./Artists";
import Albums from "./Albums";
import Genres from "./Genres";

class App extends Component {
    render() {
        return(
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/songs" component={Songs} />
                        <Route path="/artists" component={Artists} />
                        <Route path="/albums" component={Albums} />
                        <Route path="/genres" component={Genres} />
                    </Switch>
                </Router>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
