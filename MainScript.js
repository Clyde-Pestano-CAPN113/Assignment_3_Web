// Fake authentication
const authUsername = "StudentName";
document.getElementById('auth-button').addEventListener('click', function () {
  const inputUsername = document.getElementById('username').value;
  const authMessage = document.getElementById('auth-message');
  //Checks to see if the user name matches then it hides auth-contanier and displays quiz-container
  if (inputUsername === authUsername) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
  } else {
    authMessage.innerHTML = "Invalid username, try again! (check the github README)";
    authMessage.style.color = 'red';
  }
});

// Quiz logic
document.getElementById('submit-quiz').addEventListener('click', function () {
  let score = 0;
  //Creating an array of all the answers for each question
  const answers = {
    q1: 'a',
    q2: 'b',
    q3: 'a',
    q4: 'a',
    q5: 'a'
  };
  // Check answers
  const q1Answer = document.querySelector('input[name="q1"]:checked');
  const q2Answer = document.querySelector('input[name="q2"]:checked');
  const q3Answer = document.querySelector('input[name="q3"]:checked');
  const q4Answer = document.querySelector('input[name="q4"]:checked');
  const q5Answer = document.querySelector('input[name="q5"]:checked');
  if (q1Answer && q1Answer.value === answers.q1) {
    score++;
    q1Answer.parentElement.style.color = 'green';
  } else if (q1Answer) {
    q1Answer.parentElement.style.color = 'red'; 
  }

  if (q2Answer && q2Answer.value === answers.q2) {
    score++;
    q2Answer.parentElement.style.color = 'green';
  } else if (q2Answer) {
    q2Answer.parentElement.style.color = 'red';
  }

  if (q3Answer && q3Answer.value === answers.q3) {
    score++;
    q3Answer.parentElement.style.color = 'green';
  } else if (q3Answer) {
    q3Answer.parentElement.style.color = 'red';
  }
  if (q4Answer && q4Answer.value === answers.q4) {
    score++;
    q4Answer.parentElement.style.color = 'green';
  } else if (q4Answer) {
    q4Answer.parentElement.style.color = 'red';
  }
  if (q5Answer && q5Answer.value === answers.q5) {
    score++;
    q5Answer.parentElement.style.color = 'green';
  } else if (q5Answer) {
    q5Answer.parentElement.style.color = 'red';
  }
  // Display score
  document.getElementById('score').innerHTML = ""
  document.getElementById('score').innerHTML = `You scored ${score} out of 5`;

});