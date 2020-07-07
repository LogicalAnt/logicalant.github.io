import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Education } from "./pages/Education";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Skill } from "./pages/Skill";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
