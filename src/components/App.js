import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Teachers from "./Teachers";
import NotFound from "./NotFound";
import Courses from "./Courses";
import Header from "./Header";
import About from "./About";
import Home from "./Home";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/about"} render={() => <About title={"Sup Homes"} />} />
        <Route path={"/teachers"} component={Teachers} />
        <Route path={"/courses"} component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
