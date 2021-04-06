import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";
import HomePage from "./pages/HomePage/HomePage";
import StagesPage from "./pages/StagesPage/StagesPage";
import Schedule from "./pages/Schedule/Schedule";
import aMap from './pages/Map/Map'

const Acts = () => (
  <Jumbotron>
    <h1 className="head">Acts</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/map" component={aMap} />
        <Route path="/stages" component={StagesPage} />
        <Route path="/acts" component={Acts} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </div>
  );
}

export default App;
