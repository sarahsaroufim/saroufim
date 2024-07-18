// cycle sentences

const sentences = [
    "my name is sarah saroufim",
    "the one and only",
    "i'm from lebanon",
    "i'm in new york right now",
    "my favorite color is yellow",
    "i wear black almost all of the time",
    "my compliments are sincere",
    "just take a big bite",
    "i laugh loudly",
    "i cry quietly",
    "i don't shine if you don't shine",
    "i had the same birthday wish for 10 years",
    "ordinarily extraordinary",
    "mostly confident",
    "i really care",
    "elle est d'ailleurs",
    "there are no small parts, only small actors",
    "the abyss also looks into you",
    "yes, i can imagine",
    "i know just what you mean",
    "not penny's boat",
    "nintendo baby",
    "just cause you feel it",
    "doesn't mean it's there",
    "checkmate",
    "i made you cookies",
    "i've never had an interesting haircut",
    "animals love me",
    "thank you for being here",
    "text me anytime",
    "casually poetic",
    "i could be romantic",
    "you're always a day away",
    "habibi",
    "so long, funny girl",
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