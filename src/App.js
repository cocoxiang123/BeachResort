import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Errorpage from "./pages/Error";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Rooms/" exact component={Rooms} />
        <Route path="/Rooms/:slug" exact component={SingleRoom} />
        <Route component={Errorpage} />
      </Switch>
    </>
  );
}

export default App;
