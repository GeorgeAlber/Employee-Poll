import { useEffect } from "react";
import { connect } from "react-redux";
import { formatLeader } from "../../utils/helpers";
import { receiveUsers } from "../../redux/actions/users";

const Leaderboard = (props) => {
  useEffect(() => {
    props.dispatch(receiveUsers());
  });

  return (
    <div>
      <table className="__leader-container">
        <tbody>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
          {props.users.map((user) => (
            <tr
              key={user.id}
              className={props.authedUser.id === user.id ? "active_user" : ""}
            >
              <td className="__leader-info">
                <img className="avatar" src={user.img} alt={user.name} />
                <div>
                  <p>{user.name}</p>
                  <p>{user.id}</p>
                </div>
              </td>
              <td className="center">{user.answerdPolls}</td>
              <td className="center">{user.askedPolls}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, polls }) => {
  let user = Object.values(users).map((user) => formatLeader(polls, user));
  return {
    authedUser: authedUser,
    users: user.sort(
      (a, b) => b.answerdPolls + b.askedPolls - (a.answerdPolls + a.askedPolls)
    ),
  };
};

export default connect(mapStateToProps)(Leaderboard);
