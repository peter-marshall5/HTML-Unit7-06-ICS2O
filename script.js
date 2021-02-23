let myAge
let answer

function age () {
  myAge = Math.floor(Math.random() * 90) + 5
  while (myAge !== answer) {
    answer = parseInt(prompt('What is my guess?'))
    if (myAge === answer) {
      if (confirm('You got it right! Do you want to play again?')) {
        age()
      }
    } else if (answer > myAge) {
      alert('You guessed too big. Please try again.')
    } else if (answer < myAge) {
      alert('You guessed too small. Please try again.')
    } else {
      alert('Invalid answer. Please try again.')
    }
  }
}

age()
