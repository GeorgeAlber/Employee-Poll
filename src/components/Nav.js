import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = ({ authedUser }) => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="add">New</Link>
          </li>
        </ul>
        <ul className="__user-info">
          <li>
            {authedUser?.img && <img src={authedUser.img} className="avatar" />}
          </li>
          {authedUser?.id && <li>{authedUser.id}</li>}
          <li>
            <Link to="">Logout</Link>
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
