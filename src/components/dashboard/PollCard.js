import { connect } from "react-redux";
import { formatPoll, formatDate } from "../../utils/helpers";
import { Link } from "react-router-dom";

const PollCard = (props) => {
  if (props.poll === null) {
    return <p>This tweet doesn't exist</p>;
  }

  const { name, timestamp, id } = props.poll;

  return (
    <div className="tweet">
      <div className="tweet-info center">
        <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>

          <Link to={`/questions/${id}`} className="btn">
            show
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, polls }, { id }) => {
  const poll = polls[id];

  return {
    authedUser,
    poll: formatPoll(poll, users[poll.author], authedUser.id),
  };
};
export default connect(mapStateToProps)(PollCard);
