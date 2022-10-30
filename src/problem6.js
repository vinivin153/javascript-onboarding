function problem6(forms) {
  const allConsecutiveLetters = {};
  const duplicateEamil = new Set();

  forms.forEach((user) => {
    const [email, nickname] = user;
    const userConsecutiveLetters = getConsecutiveLetters(nickname);

    userConsecutiveLetters.forEach((letter) => {
      if (letter in allConsecutiveLetters) {
        duplicateEamil.add(allConsecutiveLetters[letter]);
        duplicateEamil.add(email);
      } else if (!(letter in allConsecutiveLetters)) {
        allConsecutiveLetters[letter] = email;
      }
    });
  });

  return duplicateEamil;
}

function getConsecutiveLetters(nickname) {
  const consecutiveLetters = [];
  for (let i = 0; i < nickname.length - 1; i++) {
    consecutiveLetters.push(nickname.substr(i, 2));
  }
  return consecutiveLetters;
}

module.exports = problem6;
