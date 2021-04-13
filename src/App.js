import React, { useEffect } from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage/HomePage";
import StagesPage from "./pages/StagesPage/StagesPage";
import SingleStagePage from './pages/SingleStagePage/SingleStagePage'
import Schedule from "./pages/Schedule/Schedule";
import ActsPage from './pages/ActsPage/ActsPage'
import aMap from './pages/Map/Map'
import NewsFeed from "./components/NewsFeed/NewsFeed";
import PlannerNav from "./components/PlannerNav/PlannerNav";

import { Switch, Route } from "react-router-dom";
import { getNews } from "./store/news/actions";
import { selectNews } from "./store/news/selectors";
import { Card, Col, Container, Row } from "react-bootstrap";
import { selectUser } from "./store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import NewsFeedForm from "./components/NewsFeedForm/NewsFeedForm";
import ManageCrew from "./pages/ManageCrew/ManageCrew";
import GolfKarts from "./components/GolfKarts/GolfKarts";



function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const newsFeed = useSelector(selectNews)
  const user = useSelector(selectUser)
  //console.log('this is the user',user)

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    dispatch(getNews())
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      {user.isPlanner ? <PlannerNav /> : null}
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Container>
        <Row>
          <Col xs lg="10">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/map" component={aMap} />
        <Route path="/stages/" component={StagesPage} />
        <Route path="/stage/:stageId" component={SingleStagePage} />
        <Route path="/acts/:actId?" component={ActsPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/newsFeed" component={NewsFeedForm} />
        <Route path="/crew" component={ManageCrew} />
        <Route path="/golfKarts" component={GolfKarts} />
      </Switch>
          </Col>
          <Col>
                <Row >
                    <Col className='text-center' >
                        <Card.Title style={{fontSize: 40}}>News Feed</Card.Title>                    
                    </Col>
                </Row>
                    <Row >
                        {newsFeed ? newsFeed.map((news, index) => {
                            return (
                                <NewsFeed 
                                    key={index}
                                    id={news.id}
                                    title={news.title}
                                    description={news.description}
                                    link={news.link}
                                    image={news.img}
                                />
                        )}):null}
                    </Row>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
