export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatPoll(poll, author, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = poll;
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
    answerOptionOne: poll.optionOne.votes.includes(authedUser),
    answerOptionTwo: poll.optionTwo.votes.includes(authedUser),
  };
}

export function formatLeader(polls, user) {
  return {
    id: user.id,
    name: user.name,
    img: user.avatarURL,
    answerdPolls: Object.values(polls).filter(
      (a) =>
        a.optionOne.votes.includes(user.id) ||
        a.optionTwo.votes.includes(user.id)
    ).length,
    askedPolls: Object.values(polls).filter((a) => a.author === user.id).length,
  };
}
