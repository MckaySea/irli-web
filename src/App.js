import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import AddLitInfo from "./pages/AddLitInfo";
import AddTutorial from "./components/add-tutorial.component";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AddLitInfo' component={AddLitInfo} />
          <Route path='/About' component={About} />
          <Route path='/SignInPage' component={SignInPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
