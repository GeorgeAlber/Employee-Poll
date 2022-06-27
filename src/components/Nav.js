import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../redux/actions/authedUser";

const Nav = ({ dispatch, authedUser }) => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li data-testid="navLink-1">
            <Link to="/">Home</Link>
          </li>
          <li data-testid="navLink-2">
            <Link to="leaderboard">Leaderboard</Link>
          </li>
          <li data-testid="navLink-3">
            <Link to="add">New</Link>
          </li>
        </ul>
        <ul className="__user-info">
          <li>
            {authedUser?.img && (
              <img
                src={authedUser.img}
                className="avatar"
                alt={authedUser.id}
              />
            )}
          </li>
          {authedUser?.id && <li>{authedUser.id}</li>}
          <li data-testid="navLink-4">
            <Link to="" onClick={() => dispatch(logoutAuthedUser())}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(Nav);
