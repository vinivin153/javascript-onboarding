function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

function getUserFrieds(user, friends) {
  const userFriends = new Set();
  friends.forEach((friend) => {
    const [friend1, friend2] = friend;
    if (friend1 === user) {
      userFriends.add(friend2);
    } else if (friend2 === user) {
      userFriends.add(friend1);
    }
  });
  return userFriends;
}

function setWithKnowScore(recommendScore, friend) {
  if (recommendScore[friend]) {
    recommendScore[friend] += 10;
  } else {
    recommendScore[friend] = 10;
  }
  return recommendScore;
}

module.exports = problem7;
