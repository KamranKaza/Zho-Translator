translate = function(english) {

    var translation = '';
    var englisharray = english.split('');
    for (var i = 0; i < englisharray.length; i++) {
        var englishletter = englisharray[i];
        var translatedletters = '';
        switch (englishletter) {
            case "A":
            case "a":
                translatedletters = "ha";
                break;
            case "B":
            case "b":
                translatedletters = "he";
                break;
            case "C":
            case "c":
                translatedletters = "hi";
                break;
            case "D":
            case "d":
                translatedletters = "ho";
                break;
            case "E":
            case "e":
                translatedletters = "hu";
                break;
            case "F":
            case "f":
                translatedletters = "hy";
                break;
            case "G":
            case "g":
                translatedletters = "la";
                break;
            case "H":
            case "h":
                translatedletters = "le";
                break;
            case "I":
            case "i":
                translatedletters = "li";
                break;
            case "J":
            case "j":
                translatedletters = "lo";
                break;
            case "K":
            case "k":
                translatedletters = "lu";
                break;
            case "L":
            case "l":
                translatedletters = "ly";
                break;
            case "M":
            case "m":
                translatedletters = "ga";
                break;
            case "N":
            case "n":
                translatedletters = "ge";
                break;
            case "O":
            case "o":
                translatedletters = "gi";
                break;
            case "P":
            case "p":
                translatedletters = "go";
                break;
            case "Q":
            case "q":
                translatedletters = "gu";
                break;
            case "R":
            case "r":
                translatedletters = "gy";
                break;
            case "S":
            case "s":
                translatedletters = "ra";
                break;
            case "T":
            case "t":
                translatedletters = "re";
                break;
            case "U":
            case "u":
                translatedletters = "ri";
                break;
            case "V":
            case "v":
                translatedletters = "ro";
                break;
            case "W":
            case "w":
                translatedletters = "ru";
                break;
            case "X":
            case "x":
                translatedletters = "ry";
                break;
            case "Y":
            case "y":
                translatedletters = "sa";
                break;
            case "Z":
            case "z":
                translatedletters = "se";
                break;
            default:
                console.log("didn't translate this letter ");
                translatedletters = englishletter;
                break;
        }
        console.log("changed " + englishletter + " into " + translatedletters);
        // but i didn't add the new letters to the translation yet
        translation = translation + translatedletters;
    }
    return translation;
};

reverseTranslate = function(zho) {
    var englishtranslation = '';
    var zhoarray = zho.split('');
    for (var i = 0; i < zhoarray.length;i=i+2) {
        var zholetter = zhoarray[i];
        var translatedletters = '';
        switch (zholetter) {
            case "ha":
                translatedletters = "a";
                break;
            case "he":
                translatedletters = "b";
                break;
            case "hi":
                translatedletters = "c";
                break;
            case "ho":
                translatedletters = "d";
                break;
            case "hu":
                translatedletters = "e";
                break;
            case "hy":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            case "ha":
                translatedletters = "a";
                break;
            default:
                console.log("didn't translate this letter ");
                translatedletters = zholetter;
                break;

        }
        //do something with new letters
    }
    return englishtranslation;
};