
var database = [
    {
        image: "https://www.unilad.co.uk/wp-content/uploads/2018/08/the-sixth-sense-1.jpg",
        quote: "I See Dead People.", 
        person: "Haley Joel Osment" 
    }, 
    {
        image: "https://pmcvariety.files.wordpress.com/2018/11/frankenstein-movie-1931.jpg?w=1000",
        quote: "It's alive! It's alive!",
        person: "Aaron Eckhart"
    },
    {
        image: "http://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2018/08/the-shining_1280x720.jpg",
        quote: "Heeere's Johnny!",
        person: "Jack Torrance", 
    }
]

var mainDiv = document.querySelector('.main'); 
var quoteDiv = document.querySelector('.quote'); 
var personDiv = document.querySelector('.person'); 

function selectRandom() {
    var randomNumber = Math.floor(Math.random() * database.length);
    return randomNumber; 
}

function refreshPage() {
    var randomNumber = selectRandom();
    var randomObject = database[randomNumber];
    console.log(randomObject);
    quoteDiv.innerHTML = randomObject.quote; 
    personDiv.innerHTML = randomObject.person;

    mainDiv.style.backgroundImage = `url(${randomObject.image})` 
}

refreshPage();  