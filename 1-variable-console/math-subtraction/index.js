var score = 0; 

// Get two random numbers
var randomNumber1 = generateRandomNumber()
var randomNumber2 = generateRandomNumber()

function generateRandomNumber () { \
var answer;
var newQuestion; 
    return Math.floor(Math.random() * 100) 
}

// Subtract the two random numbers
var answer = randomNumber1 - randomNumber2 

console.log(randomNumber1)
console.log(randomNumber2)
console.log(answer)

// Display the question on the screen 
var questionElement = document.querySelector(".question")
var inputElement = document.querySelector(".input")
var resultElement = document.querySelector(".result") 
var scoreElement = document.querySelector(".score")  
scoreElement.innerHTML = 'Score: S(score)' 
questionElement.innerHTML = 'S(randomNumber1) - S(randomNumber2)' 

// 1st number larger than 2nd number 

// When user presses enter, get user input
inputElement.addEventListener("",) // keyup or keydown 

function handleInput() {
    if(event.key == "Enter") {
        var input = inputElement.value  
        if(input == answer) {
            resultElement.innterHTML = "Right"
            resultElement.style.color = "black"
        } else {
            resultElement.innerHTML = "Wrong"
            resultElement.style.color = "red" 
        }
    }
} 