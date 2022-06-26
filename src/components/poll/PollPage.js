import { connect } from "react-redux";
import Poll from "./Poll";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = (props) => {
  return (
    <div>
      <Poll id={props.id} />
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls, users }, props) => {
  const { id } = props.router.params;
  return {
    id,
  };
};

export default withRouter(connect(mapStateToProps)(PollPage));
