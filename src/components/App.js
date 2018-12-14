import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Teachers from "./Teachers";
import Courses from "./Courses";
import Header from "./Header";
import About from "./About";
import Home from "./Home";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path={"/"} component={Home} />
      <Route path={"/about"} render={() => <About title={"Sup Homes"} />} />
      <Route path={"/teachers"} component={Teachers} />
      <Route path={"/courses"} component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;
