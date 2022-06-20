import { useState } from "react";
import { connect } from "react-redux";
import { handleSetAuthedUser } from "../../redux/actions/authedUser";
import authedUser from "../../redux/reducers/authedUser";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ dispatch, users, authedUser }) => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.filter((user) => user.id === selected);

    dispatch(handleSetAuthedUser(selected, user[0].avatarURL));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };

  return (
    <div className="center __login-container">
      <h3>Employee Polls</h3>
      <h4>Log In</h4>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <label>Username</label>
        <select
          select={users[0]}
          className="__login-select"
          onChange={handleChange}
        >
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.id}
            </option>
          ))}
        </select>
        <label>Password</label>
        <input
          type="password"
          value="asdasdsad"
          className="__login-select"
          disabled
        />
        <button className="btn __login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => ({
  users: Object.values(users),
  authedUser: authedUser,
});
export default connect(mapStateToProps)(Login);
