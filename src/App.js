import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import "./App.css";
import Charts from "./Components/Charts";

import Lista from "./Components/Lista";
import Completecoin from "./Components/Completecoin";
import Fullcoin from "./Components/Fullcoin";

const App = (props) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lista" component={Lista} />
        <Route exact path="/charts" component={Charts} />
        <Route exact path="/fullcoin/:id" component={Fullcoin} />
        <Route exact path="/Completecoin" component={Completecoin} />
      </Switch>
    </div>
  );
};

export default App;
