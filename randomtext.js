
/*jshint esversion: 6 */
window.onload = function(){
    elements = document.querySelectorAll('.randomtext');
        elements.forEach(element => {
        fillElement(element);
    });
};

function clickGenerate(){
    var textField = document.getElementById("textField");
    
    // generate paragraph markers as html
    textField.innerHTML = getRandomText(Math.random() * 40 + 32) + "<BR><BR>" + textField.innerHTML;
}

function fillTaggedElements(){
    elements = document.querySelectorAll('.randomtext');
    elements.forEach(element => {
        fillElement(element);
    });
}

function fillElement(element){
    element.textContent = getRandomText(parseInt(element.textContent));            
}

function getRandomText(nofWords){
    var wordOptions = ["condor", "walamby", "mofro", "condoritite", "miliball", 
    "frofram", "corocoro", "morzom", "baracko", "scambaric", "ultram", "orzo", 
    "umpilion", "yomizi", "quimbiton", "ethrofamion", "gracidide", "et", "ito", 
    "amba", "ifram", "ulu", "weth", "wimby", "coco", "mint", "zumi", "quid", 
    "xocorundi", "umbo", "tilitoli", "hocka", "ichigo", "nim", "nam", "omborit",
    "wo", "timbault", "ravenist", "paucomfit", "azinis", "som", "diot", "cro",
    "vaziram", "bilibong", "napfram", "sosoz", "diamatric", "gogoramicate", 
    "wocket", "joffram", "fru", "romo", "pax", "haprimanimus", "tagilide", "mo"];
    // shorter words will appear more often
    var relativeWordLengths=[];
    var totalWordLength = 0.0;
    relativeWordLengths.length = wordOptions.length;
    for (i = 0; i < wordOptions.length; i++) {
        relativeWordLengths[i] = 1 / wordOptions[i].length;
        totalWordLength += relativeWordLengths[i];
    }
    // build a paragraph
    var returnval = "";
    var sentenceLength = 0;
    var minSentence = 1;
    var maxSentence = 20;
    for (i = 0; i < nofWords; i++){
        var random = Math.random() * totalWordLength;
        var relativeWordLengthsoFar = 0;
        for (j = 0; j < wordOptions.length; j++)
        {
            relativeWordLengthsoFar += relativeWordLengths[j];
            if (relativeWordLengthsoFar > random){
                // get a random number between 0 and the total number of letters in all words
                if (sentenceLength == 0){
                    returnval += capitalizeFirstLetter(wordOptions[j]);
                }
                else {
                    returnval += wordOptions[j];
                }
                sentenceLength += 1;
                if (sentenceLength - minSentence > Math.random() * (maxSentence - minSentence)){
                    returnval += ".  ";
                    sentenceLength = 0;
                }
                else{
                    returnval += " ";
                }
                break;
            }
        }
    }
    if (sentenceLength > 0) returnval = returnval.slice(0, returnval.length - 1) + ".";
    return returnval;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomWord (syllables) {
    var word = "";
    var startingConsonants = 
    "b bl br bw c ch chr cl cr d dr f fr fl fw g gn gr gl gw h j k kl kr kw l m n \
     p ph pl pr pw q qu r r rw s st str sl sk skr sc scr sch sh sn sm sp spr sq squ \
     st str sw sz t th tr tl tw v vl vr w wr x y z".split(" ");
    var vowels = "a e i o u y".split(" ");
    var doubleVowels = "aa ae ai ao au ay ea ee ei eo eu ey ia ie ii oa oe oi oo ou ua ue ui uu"
    .split(" ").concat(vowels);
    var endingConsonants = 
    "b c ch ck ct d f ft g h j k ks l lm lk lp ls lt ls lst m mp mb mt n ng p pt pmt \
    q r rb rd rf rft rg rk rl rk rp rm rn rs rst rt rx rv s sh sk sm sp st sht t ts v w wl x z";
    for (i = 0; i < syllables; i++) {
        var syl = "";
        sylType = Math.floor(Math.random() * 4);
        switch (sylType) {
        case 0:
            syl = getRandom(startingConsonants) + getRandom(vowels) + getRandom(endingConsonants);
        case 1:
            syl = getRandom(startingConsonants) + getRandom(doubleVowels) + getRandom(endingConsonants);
        case 2:
            syl = getRandom(startingConsonants) + getRandom(vowels);
        case 3:
            syl = getRandom(vowels) + getRandom(endingConsonants);
        }
        word += syl;
    }
    return word;
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}