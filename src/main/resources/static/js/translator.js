translate = function(english) {

    var translation = '';
    var englisharray = english.split('');
    for (var i = 0; i < englisharray.length; i++) {
        var englishletter = englisharray[i];
        var translatedletters = '';
        switch (englishletter.toLowerCase()) {
            case "a":
                translatedletters = "ha";
                break;
            case "b":
                translatedletters = "he";
                break;
            case "c":
                translatedletters = "hi";
                break;
            case "d":
                translatedletters = "ho";
                break;
            case "e":
                translatedletters = "hu";
                break;
            case "f":
                translatedletters = "hy";
                break;
            case "g":
                translatedletters = "la";
                break;
            case "h":
                translatedletters = "le";
                break;
            case "i":
                translatedletters = "li";
                break;
            case "j":
                translatedletters = "lo";
                break;
            case "k":
                translatedletters = "lu";
                break;
            case "l":
                translatedletters = "ly";
                break;
            case "m":
                translatedletters = "ga";
                break;
            case "n":
                translatedletters = "ge";
                break;
            case "o":
                translatedletters = "gi";
                break;
            case "p":
                translatedletters = "go";
                break;
            case "q":
                translatedletters = "gu";
                break;
            case "r":
                translatedletters = "gy";
                break;
            case "s":
                translatedletters = "ra";
                break;
            case "t":
                translatedletters = "re";
                break;
            case "u":
                translatedletters = "ri";
                break;
            case "v":
                translatedletters = "ro";
                break;
            case "w":
                translatedletters = "ru";
                break;
            case "x":
                translatedletters = "ry";
                break;
            case "y":
                translatedletters = "sa";
                break;
            case "z":
                translatedletters = "se";
                break;
            default:
                translatedletters = englishletter;
                break;
        }
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
        if (zhoarray.length > i+1) {
        	zholetter = zholetter + zhoarray[i+1];
        }
        switch (zholetter.toLowerCase()) {
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
                translatedletters = "f";
                break;
            case "la":
                translatedletters = "g";
                break;
            case "le":
                translatedletters = "h";
                break;
            case "li":
                translatedletters = "i";
                break;
            case "lo":
                translatedletters = "j";
                break;
            case "lu":
                translatedletters = "k";
                break;
            case "ly":
                translatedletters = "l";
                break;
            case "ga":
                translatedletters = "m";
                break;
            case "ge":
                translatedletters = "n";
                break;
            case "gi":
                translatedletters = "o";
                break;
            case "go":
                translatedletters = "p";
                break;
            case "gu":
                translatedletters = "q";
                break;
            case "gy":
                translatedletters = "r";
                break;
            case "ra":
                translatedletters = "s";
                break;
            case "re":
                translatedletters = "t";
                break;
            case "ri":
                translatedletters = "u";
                break;
            case "ro":
                translatedletters = "v";
                break;
            case "ru":
                translatedletters = "w";
                break;
            case "ry":
                translatedletters = "x";
                break;
            case "sa":
                translatedletters = "y";
                break;
            case "se":
                translatedletters = "z";
                break;
            default:
                translatedletters = zhoarray[i];
                i=i-1;
                break;                
        }
        englishtranslation = englishtranslation + translatedletters;
    }
    return englishtranslation;
};