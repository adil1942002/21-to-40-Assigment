// ////////////chaprer 21///////////////
// ////////////Answer 1///////////////
// var userInput = "MUHMMAD ADIL RAZA ATTARI";
// var allLower = userInput.toLowerCase();
// alert(allLower);

// ////////////chaprer 21///////////////
// ////////////Answer 2///////////////
// var x = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe suscipit, nesciunt modi ab fuga eos";
// x = x.toLowerCase();
// console.log(x)

// ////////////chaprer 21///////////////
// ////////////Answer 3///////////////
// var x = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe suscipit, nesciunt modi ab fuga eos";
// x = x.toUpperCase();
// console.log(x)

// ////////////chaprer 21///////////////
// ////////////Answer 4///////////////
// var x = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe suscipit, nesciunt modi ab fuga eos";
// var y = x.toLowerCase();
// console.log(y)

// ////////////chaprer 21///////////////
// ////////////Answer 5///////////////
// var arr = ["ADIL","AHMED","UBAID"];
// for(var i = 0; i < arr.length; i++){
//     }
// var to = i.toLowerCase();
// console.log(to);

// ////////////chaprer 21///////////////
// ////////////Answer 6///////////////
// var a = " Lorem ipsum dolor sit amet consectetur.";
// a = a.toUpperCase();
// alert(a);

// ////////////chaprer 21///////////////
// ////////////Answer 7///////////////

// var b = "kArAcHi";
// var c = b.slice(0,1);
// c = c.toUpperCase();
// var d = b.slice(1)
// d = d.toLowerCase()
// var e = c + d;
// alert(e)

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 1///////////////

// var sameWords = "Aap";
// sameWords = sameWords.slice(1);
// alert(sameWords);

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 2///////////////
// ////////////chaprer 22 - 25///////////////
// ////////////Answer 2///////////////

// var string = "Aap ne ek string mein kitne characters hain.";
// var count = 0;
// Roman Urdu mein characters ko count karne ke liye loop
// for (var i = 0; i < string.length; i++) {
//       var character = string[i];
// console.log(character)
// }

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 3///////////////

// var animal = "elephant";
// var seg = animal.slice(2, 6);
// console.log("Slice hua segment: " + seg);

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 4///////////////

// var string = "Hum ek variable dwara represent kiye gaye string.";
// var count = string.length;

// console.log("String mein characters ki tadad: " + count);

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 5///////////////

// var string = "Variable dwara represent kiye gaye string.";
// var characterCount = string.length;
// var slicedString = string.slice(0, 1) + string.slice(-3);
// console.log("String mein characters ki tadad: " + characterCount);
// console.log("Sliced string: " + slicedString);

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 6///////////////

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log("Index of 'be': " + indx);

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 7///////////////

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log("Index of 'be': " + indx);

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 8///////////////

// var text = "Mujhe jaana tha, lekin mujhe rukna pada.";
// var indx = text.lastIndexOf("go");
// console.log(indx)

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 9///////////////

// var segment = "Ye ek example hai.";
// var indexNum = 5;
// if (segment.indexOf(indexNum) !== -1) {
// alert("If segment with indexNum exists in the string Execute the code here");
// } else {
//  alert("If segment with indexNum does not exist in the strin Execute the code here");
// }

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 10///////////////

// var string = "abcde";
// var character = string.charAt(2);
// console.log(character)

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 11///////////////

// var text = "Meri Urdu hai mujhko maloom nahi";
// var cha = text.charAt(8);
// console.log(cha)

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 12///////////////

// var str = "Yeh ek misaal hai.";
// var x = str.charAt(str.length - 1);
// console.log(x)

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 13///////////////

// var input = "Yeh ek misaal hai.";
// var cha = input.charAt(4);
// console.log(cha)

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 14///////////////

// var myString = "Example string";
// var specificCharacter = "a";
// if (myString.charAt(2) === specificCharacter) {
//         console.log("If 3rd character of myString is not equal to specificCharacter")
//     } else {
//           console.log("If 3rd character of myString is not equal to specificCharacter")
// }

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 15///////////////

// var myString = "Hello, world!";
// var myArray = [];
// for (var i = 0; i < myString.length; i++) {
//   myArray[i] = myString.charAt(i);
// console.log(myArray)
// }
// var reply = "No, I don't agree.";
// var revisedReply = reply.replace("no", "yes");
// console.log(revisedReply)

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 16///////////////

// var str = "I have 1 apple.";
// var newStr = str.replace("1", "one");
// console.log(newStr)

// ////////////chaprer 22 - 25///////////////
// ////////////Answer 17///////////////

// var x = "ahmed";
// var y = x.replaceAll("a", "z");
// console.log(y)

// ////////////chaprer 26///////////////
// ////////////Answer 1///////////////

// var num = 3.7;
// var roundedNum = Math.round(num);
// console.log(roundedNum)

// ////////////chaprer 26///////////////
// ////////////Answer 2///////////////

// var origNum = 3.2;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum)

// ////////////chaprer 26///////////////
// ////////////Answer 3///////////////

// var origNum = 4.8;
// var roundNum = Math.floor(origNum);
// console.log(roundNum)

// ////////////chaprer 26///////////////
// ////////////Answer 4///////////////

// var num = 3.9;
// var roundedNum = Math.round(num);
// console.log(roundedNum)

// ////////////chaprer 26///////////////
// ////////////Answer 5///////////////

// var num = 0.5;
// var roundedNum = Math.floor(num);
// console.log(roundedNum)

// ////////////chaprer 27///////////////
// ////////////Answer 1///////////////

// var randomNum = Math.floor(Math.random() * 50) + 1;
// console.log(randomNum)

// ////////////chaprer 27///////////////
// ////////////Answer 2///////////////

// var randomNum = Math.random();
// console.log(randomNum)

// ////////////chaprer 27///////////////
// ////////////Answer 3///////////////

// Dice roll function to generate random number between 1 and 6
// function rollDice() {
//     var min = 1;
//     var max = 6;
//     var diceNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     return diceNumber;
//   }

//   // Example usage
//   var diceResult = rollDice();
//   console.log("Dice Result:", diceResult);

// ////////////chaprer 27///////////////
// ////////////Answer 4///////////////

// Toss function to generate random head or tail
// function toss() {
//         var randomNumber = Math.random();
//     var result = randomNumber < 0.5 ? "Head" : "Tail";
//     return result;
//   }
  
//   // Example usage
//   var tossResult = toss();
//   console.log("Toss Result:", tossResult);

// ////////////chaprer 28,29///////////////
// ////////////Answer 1///////////////

// var str = "123";
// var num = parseInt(str);
// console.log("Number:", num);

// ////////////chaprer 28,29///////////////
// ////////////Answer 2///////////////

// function convertToInteger(str) {
//     var num = parseInt(str);
//     return num;
//   }

//   // Example usage
//   var result = convertToInteger("123");
//   console.log("Converted Integer:", result);

// ////////////chaprer 28,29///////////////
// ////////////Answer 3///////////////

// var str = "3.14";
// var num = parseFloat(str);
// console.log("Floating-Point Number:", num);

// ////////////chaprer 28,29///////////////
// ////////////Answer 4///////////////

// function canBeConvertedToNumber(str) {
//     if (!isNaN(str)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   // Example usage
//   var str1 = "123";
//   var str2 = "3.14";
//   var str3 = "Hello";

//   console.log("String 1:", canBeConvertedToNumber(str1)); // true
//   console.log("String 2:", canBeConvertedToNumber(str2)); // true
//   console.log("String 3:", canBeConvertedToNumber(str3)); // false

// ////////////chaprer 28,29///////////////
// ////////////Answer 5///////////////

// var num = 123;
// var str = num.toString();

// console.log("String:", str);

// ////////////chaprer 28,29///////////////
// ////////////Answer 6///////////////

// function convertToString(num) {
//     var str = num.toString();
//     return str;
//   }
  
//   // Example usage
//   var result = convertToString(42);
//   console.log("Converted String:", result);

// ////////////chaprer 28,29///////////////
// ////////////Answer 7///////////////

// var str = "3.14";
// var num = parseInt(str);

// console.log("Integer:", num);

// ////////////chaprer 30///////////////
// ////////////Answer 1///////////////

// var num = 3.141592653589793;
// var newNum = num.toFixed(4).toString();

// console.log("Rounded Number as String:", newNum);

// ////////////chaprer 30///////////////
// ////////////Answer 2///////////////

// var num = 3.14159;
// num = parseFloat(num.toFixed(2));

// console.log("Updated Number:", num);

// ////////////chaprer 30///////////////
// ////////////Answer 3///////////////

// var num = 3.14159;

// if (num.toFixed(2).toString().length > 4) {
//   // Code to be executed if the condition is true
//   console.log("Number has more than 4 characters.");
// } else {
//       // Code to be executed if the condition is false
//       console.log("Number has 4 or fewer characters.");
// }

// ////////////chaprer 30///////////////
// ////////////Answer 4///////////////

// var num = 3.14159265358979323846;
// var roundedString = num.toFixed(2).toString();

// alert("Rounded Number: " + roundedString);

