import { useState } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../../redux/actions/polls";
import { useNavigate } from "react-router-dom";

const NewPoll = ({ dispatch, id }) => {
  const navigate = useNavigate();
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  const handleChangeVal1 = (e) => {
    const val1 = e.target.value;

    setVal1(val1);
  };

  const handleChangeVal2 = (e) => {
    const val2 = e.target.value;

    setVal2(val2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddPoll(val1, val2));

    setVal1("");
    setVal2("");
    if (!id) {
      navigate("/");
    }
  };

  return (
    <div>
      <h3 className="center">Would you Rather</h3>
      <h5 className="center">Create Your Own Poll</h5>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <label className="center" htmlFor="option-one-input">
          First option
        </label>
        <input
          value={val1}
          className="__option-input"
          placeholder="Option One"
          type="text"
          name="option-one-input"
          onChange={handleChangeVal1}
        />
        <label className="center" htmlFor="option-two-input">
          Second option
        </label>
        <input
          value={val2}
          className="__option-input"
          placeholder="Option Two"
          type="text"
          name="option-two-input"
          onChange={handleChangeVal2}
        />
        <button
          className="btn"
          type="submit"
          disabled={!(val1 !== "" && val2 !== "")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
