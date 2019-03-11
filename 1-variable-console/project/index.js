
var database = [
    {
        image: "https://t1.daumcdn.net/cfile/tistory/2150183D56ECAFB40E",
        quote: "흐어어흐어어어", 
        person: "유병재", 
    }, 
    {
        image: "http://jjalbang.today/jjOw.jpg", 
        quote: "내 말이 틀려 ***들아?",
        person: "유병재", 
    },
    {
        image: "https://i.pinimg.com/originals/88/78/4f/88784ff8094549f92d8b36a36af55e5a.jpg", 
        quote: "그렇게 됬으니까 입 조심 좀 부탁드린다고", 
        person: "유병재", 
    },
    {
        image: "http://jjalbang.today/jjJC.jpg",
        quote: "으아아아아악!",
        person: "유병재", 
    },
    {
        image: "http://jjalbang.today/jj1pQ.png",
        quote: "너 왜 반말...?",
        person: "유병재",
    },
    {
        image: "https://pds.joins.com//news/component/htmlphoto_mmdata/201801/05/b2cdb9e8-7b74-4aae-a992-12981cc246ad.jpg", 
        quote: "듣는 순간 기분 나쁜 말: '기분 나빠하지 말고 들어'",
        person: "유병재", 
    },
    {
        image: "https://image.ytn.co.kr/general/jpg/2016/0512/201605121201363042_t.jpg", 
        quote: "아프면 환자지 뭐가 청춘이냐?!!", 
        person: "유병재", 
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