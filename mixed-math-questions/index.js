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

function generateMultiplicationQuestion() {
    // Get two random numbers
    var randomNumber1 = generateRandomNumber() 
    var randomNumber2 = generateRandomNumber()

    // Multiply the two random numbers
    answer = randomNumber1 * randomNumber2

    // Generate the question for HTML
    newQuestion = `${randomNumber1} * ${randomNumber2} =`
    questionElement.innerHTML = newQuestion
}

refreshElement.addEventListener("click", handleRefreshClick)

function handleRefreshClick() {
    event.preventDefault()
    generateMultiplicationQuestion()
    inputElement.disabled = false
    inputElement.focus() 
}

inputElement.addEventListener("keyup", handleInput)

function handleInput() {
    if(event.key == "Enter") {
        var input = inputElement.value
        if(input == answer) {
            resultElement.innerHTML = "Right"
            resultElement.style.color = "green"
            score++
            scoreElement.innerHTML = `Score: ${score}`
            inputElement.value = ""
            inputElement.disabled = true
            
        } else {
            resultElement.innerHTML = "Wrong"
            resultElement.style.color = "red"
            score = 0
            scoreElement.innerHTML = `Score: ${score}`
            inputElement.value = ""
            inputElement.disabled = true
        }
    }
}

generateMultiplicationQuestion()

function generateMultiplicationQuestion() {
    // Get two random numbers
    var randomNumber1 = generateRandomNumber() 
    var randomNumber2 = generateRandomNumber()