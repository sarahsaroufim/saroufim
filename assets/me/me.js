// cycle sentences

const sentences = [
    "my name is sarah saroufim",
    "i'm from lebanon",
    "i'm a product designer",
    "i'm an artist",
    "i really care",
    "i'm in new york right now",
    "my favorite color is yellow",
    "i wear black almost all of the time",
    "my compliments are sincere",
    "you look really good btw",
    "i love sharing my food",
    "i laugh loudly",
    "i cry quietly",
    "i had the same birthday wish for 10 years",
    "ordinarily extraordinary",
    "mostly confident",
    "there are no small projects only small designers",
    "yes, i can imagine",
    "i know just what you mean",
    "i actually hate waiting",
    "ask me about zelda",
    "i'm a sucker for a xylophone",
    "i brought cookies",
    "you can have your world, i have mine",
    "of course you're invited",
    "i've never had an interesting haircut",
    "animals love me",
    "thank you for being here",
    "text me anytime",
    "casually poetic",
    "i can be very romantic",
    "bhebbak ya habibi",
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