
/*jshint esversion: 6 */

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
    var minSentence = 5;
    var maxSentence = 25;
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