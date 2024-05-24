// show & hide images on hover

function showImage(imageId) {
    var image = document.getElementById(imageId);
    image.style.opacity = "1";
}

function hideImage(imageId) {
    var image = document.getElementById(imageId);
    image.style.opacity = "0";
}


// cycle sentences

const sentences = [
    "where do i start?",
    "fix it before you break it",
    "i need a place to put all of these thoughts",
    "i could tell you, but i'd rather show you",
    "immediately yes",
    "it's all about balance, and how to tip it",
    "i'll be the judge",
    "i'm willing to wait",
    "your right-hand woman",
    "take me to your leader",
    "there's something i have to say",
    "take your time",
    "black & white & gray",
    "i'll be your mirror",
    "you don't have to tell me twice",
    "it's not empty if it's there",
    "what can i know?",
    "what ought i to do?",
    "what may i hope?",
    "it was all worth it in the end",
    "même un artichaut a du cœur",
    "i'm never shy, except for today",
    "rise and shine it's midnight!",
    "life is one fucking beauty contest after another",
    "we'd make a great team you and i",
    "my parents are so proud of me",
    "i had a vision",
    "simply overthinking",
    "pour le meilleur et pour le pire",
    "in the business of alchemy",
    "i make the best of things",
    "someone will learn something from you",
  ];
  
let currentSentenceIndex = 0;
const sentenceElement = document.getElementById('sentence');

function showNextSentence() {
sentenceElement.classList.remove('show');

setTimeout(() => {
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    sentenceElement.textContent = sentences[currentSentenceIndex];
    sentenceElement.classList.add('show');
}, 1000);
}

sentenceElement.textContent = sentences[currentSentenceIndex];
sentenceElement.classList.add('show');
setInterval(showNextSentence, 3000); // interval duration
  