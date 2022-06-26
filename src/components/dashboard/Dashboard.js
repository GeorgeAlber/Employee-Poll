import { connect } from "react-redux";
import PollCard from "./PollCard";

const Dashboard = (props) => {
  return (
    <div>
      <div className="__dashboard-container">
        <h3 className="center">New Questions</h3>
        <ul className="dashboard-list">
          {props.unansweredPolls.map((id) => (
            <li key={id}>
              <PollCard id={id} />
            </li>
          ))}
        </ul>
      </div>
      <div className="__dashboard-container">
        <h3 className="center">Done</h3>
        <ul className="dashboard-list">
          {props.answeredPolls.map((id) => (
            <li key={id}>
              <PollCard id={id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ polls, authedUser }) => {
  let answeredPolls = [];
  let unansweredPolls = [];

  Object.values(polls).map((poll) => {
    return poll.optionOne.votes.includes(authedUser.id) ||
      poll.optionTwo.votes.includes(authedUser.id)
      ? answeredPolls.push(poll.id)
      : unansweredPolls.push(poll.id);
  });

  return {
    answeredPolls: answeredPolls,
    unansweredPolls: unansweredPolls,
  };
};

export default connect(mapStateToProps)(Dashboard);
