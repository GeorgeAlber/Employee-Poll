import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("data", () => {
  it("should not save the given invalid question", function () {
    const res = _saveQuestion({});

    expect(res).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("should not save the given invalid answer", function () {
    const res = _saveQuestionAnswer({});

    expect(res).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});
