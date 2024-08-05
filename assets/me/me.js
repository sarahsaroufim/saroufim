// cycle sentences

const sentences = [
    "this feels familiar",
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
    "show me what you got",
    "i don't shine if you don't shine",
    "i had the same birthday wish for 10 years",
    "mostly confident",
    "i had a feeling",
    "i knew it",
    "you have your lebanon and its dilemma",
    "i have my lebanon and its beauty",
    "i really care",
    "i couldn't love you more",
    "elle est d'ailleurs",
    "the abyss also looks into you",
    "yes, i can imagine",
    "i know just what you mean",
    "not penny's boat",
    "a tattoo of a bird",
    "la vie n'est jamais aussi belle que dans tes rêves",
    "wait, you can see me?",
    "it's dangerous to go alone",
    "nintendo baby",
    "just cause you feel it",
    "doesn't mean it's there",
    "a frozen lemonade with mint",
    "checkmate",
    "i guess we'll never know",
    "i made you your favorite",
    "remember who you are",
    "i've never had an interesting haircut",
    "our princess is in another castle",
    "animals love me",
    "thank you for being here",
    "text me anytime",
    "tell me more",
    "casually poetic",
    "ordinarily extraordinary",
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