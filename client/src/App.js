import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Views/About";
import MyCloset from "./Views/MyCloset";
import Closet from "./Views/Closet";
import Home from "./Views/Home";
import LogIn from "./Views/LogIn";
import SignUp from "./Views/SignUp";
import Outfit from "./Views/Outfit";
import Nav from "./Components/Nav";
import NoMatch from "./Views/NoMatch";
import ClothingDetail from "./Views/ClothingDetail";
import { getSession } from "./utils/Session";
import "./normalize.css";
import "./App.css";

import { PrivateRoute } from "./Helpers/PrivateRoute";

class App extends Component {
  state = {
    session: undefined
  };

  componentDidMount() {
    let obj = getSession();

    if (obj) {
      this.setState({ session: obj.id });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Nav session={this.state.session} />
          <Switch>
            <Route exact path="/LogIn" component={LogIn} />
            <Route exact path="/About" component={About} />
            <Route exact path="/SignUp" component={SignUp} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/Home" component={Home} />
            <PrivateRoute exact path="/MyCloset" component={MyCloset} />
            <PrivateRoute exact path="/Closet" component={Closet} />
            <PrivateRoute
              exact
              path="/ClothingDetail"
              component={ClothingDetail}
            />
            <PrivateRoute exact path="/Outfit" component={Outfit} />
            <PrivateRoute path="/Outfit/:clothingType/:id" component={Outfit} />
            <PrivateRoute
              path="/ClothingDetail/:clothingType"
              component={ClothingDetail}
            />
            <PrivateRoute path="/Closet/:id" component={Closet} />

            <Route component={NoMatch} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
