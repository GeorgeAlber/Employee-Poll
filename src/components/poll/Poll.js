import { useState } from "react";
import { connect } from "react-redux";
import { formatPoll, formatDate } from "../../utils/helpers";
import { useNavigate, Link } from "react-router-dom";
import { handleAnswerPoll } from "../../redux/actions/polls";

const Poll = (props) => {
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, poll } = props;

    dispatch(handleAnswerPoll(selected, poll.id));

    navigate("/");
  };

  if (props.poll === null) {
    return <p>This tweet doesn't exist</p>;
  }

  const {
    name,
    avatar,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    optionOnePercentage,
    optionTwoPercentage,
    hasAnswered,
    numberOfVotes,
    parent,
  } = props.poll;

  return (
    <div className="__poll-container">
      <div className="tweet-info center">
        <h4>Poll by {name}</h4>
        <img src={avatar} alt={`Avatar of ${name}`} className="poll_avatar" />
        <div>
          <h5>Would You Rather</h5>
          <form className="new-tweet" onSubmit={handleSubmit}>
            <div className="__options_container">
              <div className="__option-container">
                {hasAnswered && (
                  <ul>
                    <li>No of Votes : {optionOneVotes}</li>
                    <li>
                      Percentage :{" "}
                      {optionOnePercentage ? optionOnePercentage.toFixed() : 0}{" "}
                      %
                    </li>
                  </ul>
                )}
                <p>{optionOne.text}</p>
                <button
                  className="btn __btn-option"
                  onClick={() => setSelected("optionOne")}
                  disabled={hasAnswered}
                >
                  Click
                </button>
              </div>
              <div className="__option-container">
                {hasAnswered && (
                  <ul>
                    <li>No of Votes : {optionTwoVotes}</li>
                    <li>
                      Percentage :{" "}
                      {optionTwoPercentage ? optionTwoPercentage.toFixed() : 0}{" "}
                      %
                    </li>
                  </ul>
                )}
                <p>{optionTwo.text}</p>
                <button
                  className="btn __btn-option"
                  onClick={() => setSelected("optionTwo")}
                  disabled={hasAnswered}
                >
                  Click
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, polls }, { id }) => {
  const poll = polls[id];
  //   const parentTweet = tweet ? polls[tweet.replyingTo] : null;

  return {
    authedUser,
    poll: formatPoll(poll, users[poll.author], authedUser.id),
  };
};
export default connect(mapStateToProps)(Poll);
