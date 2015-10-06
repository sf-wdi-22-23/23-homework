var randomHomeDetailsObject = {"style": "Eichler", "sqft": 1800, "oven": "electric", "date built": 1952, "garage": false};

// for (var key in randomHomeDetailsObject){
// 		console.log(key);
//         //console.log("My house " + key + " is " + randomHomeDetailsObject[key]);
// }


var myFirstJSON =
    {"language basics":
        [{"Spanish":
            {
                                    "letters":["a", "b", "c","ch","d","e","f","g","h","i","j","k","l","ll","m","n","&ntilde;","o","p",
                                    "q","r","rr","s","t","u","v","w","x","y","z"],
                                    "numbers":["uno","dos","tres","quatro","cinco","seis","siete","ocho","nueve","diez",
                                    "once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho",
                                    "diecinueve","veinte"]
            }
                      },
        {"Japanese":
            {
                                    "letters":["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so",
                                    "ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","hu","he","ho","ma",
                                    "mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","n"],
                                    "numbers": ["ichi","ni","san","shi","go","roku","shichi","hachi","kyuu","jyuu",
                                    "jyuui chi","jyuu ni","jyuu san","jyuu yon","jyuu go","jyuu roku","jyuu nana",
                                    "jyuu hachi","jyuu kyuu","ni jyuu"]
            }
        }]
    };


// for (var type in myFirstJSON) {
// 	console.log((myFirstJSON[type][0][".Spanish"][".letters"]).toString());
// }

// for (var key in myFirstJSON){
//     for (var i = 0; i < myFirstJSON['language basics'][0]['Spanish']['letters'].length; i++){
//         console.log(myFirstJSON['language basics'][0]['Spanish']['letters'][i]);
//     }
// }


// Looping Exercise 2. 

function languageBasics(language, type) {

	for(var key in myFirstJSON) {
		if (language === 'Spanish') {
			array = 0;
		} else {
			array = 1;
		}
	} console.log((myFirstJSON[key][array][language][type]).toString());
}

languageBasics('Japanese', 'numbers');















