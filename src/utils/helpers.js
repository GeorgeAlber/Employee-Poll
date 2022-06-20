export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatPoll(poll, author, authedUser, parentTweet) {
  const { id, answered, optionOne, optionTwo, timestamp } = poll;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    avatar: avatarURL,
    timestamp,
    optionOne,
    optionTwo,
    optionOneVotes: poll.optionOne.votes.length,
    optionTwoVotes: poll.optionTwo.votes.length,
    optionOnePercentage:
      (poll.optionOne.votes.length /
        (poll.optionOne.votes.length + poll.optionTwo.votes.length)) *
      100,
    optionTwoPercentage:
      (poll.optionTwo.votes.length /
        (poll.optionOne.votes.length + poll.optionTwo.votes.length)) *
      100,
    hasAnswered:
      poll.optionOne.votes.includes(authedUser) ||
      poll.optionTwo.votes.includes(authedUser),
  };
}

export function formatLeader(polls, user) {
  // const answerdPolls = Object.values(polls)
  //   .map((poll) => poll.answered.includes(user.id))
  //   .filter((value) => value === true).length;

  return {
    id: user.id,
    name: user.name,
    img: user.avatarURL,
    answerdPolls: Object.keys(user.answers).length,
    askedPolls: user.questions.length,
  };
}
