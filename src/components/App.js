import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { handleInitialData } from "../redux/actions/shared";
import Nav from "./Nav";
import Dashboard from "./dashboard/Dashboard";
import Leaderboard from "./leaderboard/Leaderboard";
import NewPoll from "../components/poll/NewPoll";
import PollPage from "./poll/PollPage";
import Login from "./login/Login";
import LoadingBar from "react-redux-loading-bar";
import ErrorPage from "./ErrorPage";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        {props.loading === true ? (
          <Login />
        ) : (
          <div>
            <Nav />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/leaderboard" exact element={<Leaderboard />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/questions/:id" element={<PollPage />} />
              <Route path="/add" element={<NewPoll />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({ loading: authedUser === null });

export default connect(mapStateToProps)(App);
