// Display the question on the screen
var questionElement = document.querySelector(".question")
var inputElement = document.querySelector(".input")
var resultElement = document.querySelector(".result")
var scoreElement = document.querySelector(".score")
var refreshElement = document.querySelector(".refresh")

var score = 0;
scoreElement.innerHTML = `Score: ${score}`

function generateRandomNumber() {
    return Math.floor(Math.random() * 100)
}

var answer;
var newQuestion;

function generateAdditionQuestion() {
    // Get two random numbers
    var randomNumber1 = generateRandomNumber()
    var randomNumber2 = generateRandomNumber()

    // Add the two random numbers
    answer = randomNumber1 + randomNumber2

    // Generate the question for HTML
    newQuestion = `${randomNumber1} + ${randomNumber2} =`
    questionElement.innerHTML = newQuestion
}

refreshElement.addEventListener("click", handleRefreshClick)

function handleRefreshClick() {
    event.preventDefault()
    generateAdditionQuestion()
    inputElement.disabled = false
    inputElement.focus()
}

// When user presses enter, get user input
inputElement.addEventListener("keyup", handleInput)

function handleInput() {
    if(event.key == "Enter") {
        var input = inputElement.value
        if(input == answer) {
            resultElement.innerHTML = "Correct :)"
            resultElement.style.color = "green"
            score++
            scoreElement.innerHTML = `Score: ${score}`
            inputElement.value = ""
            inputElement.disabled = true
            
        } else {
            resultElement.innerHTML = "Incorrect :("
            resultElement.style.color = "red"
            score = 0
            scoreElement.innerHTML = `Score: ${score}`
            inputElement.value = ""
            inputElement.disabled = true
        }
    }
}

generateAdditionQuestion()