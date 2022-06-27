import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

jest.useRealTimers();

describe("data", () => {
  it("it will not save valid question", async () => {
    const question = {
      author: "tylermcginnis",
      optionOneText: "test1",
      optionTwoText: "test2",
    };

    const res = await _saveQuestion(question);
    expect(res.id).toBeTruthy();
    expect(res.author).toBe("tylermcginnis");
    expect(res.optionOne.text).toBe("test1");
    expect(res.optionTwo.text).toBe("test2");
  });

  it("it will save valid answer", async () => {
    const answer = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    const res = await _saveQuestionAnswer(answer);
    expect(res).toBeTruthy();
  });

  it("it will not save invalid question", function () {
    const res = _saveQuestion({});

    expect(res).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("it will not save invalid answer", function () {
    const res = _saveQuestionAnswer({});

    expect(res).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});
