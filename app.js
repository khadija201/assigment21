// string with loop
var city= prompt("enter city name ")
var arryc=["karachi ","islamabad"]
for (var i = 0; i < arryc.length; i++ ){
    console.log(arryc[i])
}

var name="mr . john";
console.log(name.slice (0,4))

var firstname =prompt("enter your name")
console.log(firstname)

var mobile=prompt("enter your favorite mobile")
for (var i=0; i<mobile.length; i++){
    console.log(mobile)
}
var city="the pakistan is largest city .. hydarbad is famous "
for (var i=0; i<city.length; i++){
if (city.slice(i,i+8)==="hydarbad"){
    city= city.slice(0,i)+"islamabad";
    console.log(city)
}
}
var num="33.33"
for (var i=0; i<num.length; i++ ){
if (num.slice(i,i+5)==="33.33"){
num= num.slice(0,i)+"3333";
console.log(num)
}
}

var baker=prompt("which bakrey ..which want you order")
var arrybaker=["cake","apple pie","biscuite","chipes","patties"]
var baker="not avalible "
for(var i=0; i<arrybaker.length; i++){
    if (arrybaker[i]){
        baker="avalible"
    }
}
if (baker ==="avalible"){
    console.log("found avalible")
}
// #
var myString = "Hello, World!";
var upperCaseString = myString.toUpperCase();
alert(upperCaseString);

// #

var cityName = "kaRacHi";
var capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(capitalizedName)

// changing case
var userinput=prompt("enter your name")
userinput=userinput.toLowerCase();
var name=["ali","AHMED","SAFT"]
for (var i=0 ; i<= 4 ; i++){
    if (userinput === name[i]){
        user="found"
    }
}
// #
var cityname=prompt("enter your city")
cityname=cityname.toUpperCase();
var city=["karachi","peshawar","islamabad"]
for (var i=0 ; i <= 4 ; i++){
    if (cityname === city[i]){
        alert("it is cleanest city")
    }
}
// #

var animal = "elephant";
var middleIndex = Math.floor(animal.length / 2);
var seg = animal.slice(middleIndex - 2, middleIndex + 2);
console.log(seg);
// #

var myString = "Hello, World!";
var numberOfCharacters = myString.length;
var slicedString = myString.slice(1, -3);
console.log("Number of characters:", numberOfCharacters);
console.log("Sliced string:", slicedString)

// #
var text = "Programming languages go in and out of fashion, but JavaScript seems to be here to stay. It's versatile, powerful, and widely used.";

var lastIndexOfGo = text.lastIndexOf("go");
if (lastIndexOfGo !== -1) {
    var indx = lastIndexOfGo;
    while (text[indx - 1] === " ") {
        indx--;
    }
    console.log("Index of the first character of the last instance of 'go':", indx);
} else {
    console.log("'go' not found in the string.");
}

// #

function isValidUsername(username) {
    for (let i = 0; i < username.length; i++) {
        const charCode = username.charCodeAt(i);
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            return false; 
        }
    }
    return true; 
}
let username = prompt("Enter your username:");
while (!isValidUsername(username)) {
    username = prompt("Please enter a valid username without special symbols like [@ . , !]:");
}
// #

var text = "Programming languages go in and out of fashion, but JavaScript seems to be here to stay. It's versatile, powerful, and widely used.";

var lastIndexOfGo = text.lastIndexOf("go");
if (lastIndexOfGo !== -1) {
    var indx = lastIndexOfGo;
    while (text[indx - 1] === " ") {
        indx--;
    }
    console.log("Index of the first character of the last instance of 'go':", indx);
} else {
    console.log("'go' not found in the string.");
}

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem(item) {
    
    var lowerItem = item.toLowerCase();
    var lowerArray = A.map(function(element) {
        return element.toLowerCase();
    });

    
    var found = lowerArray.includes(lowerItem);

    return found;
}

// #
var userInput = prompt("Enter an item to search in the list:");
var itemFound = searchItem(userInput);
if (itemFound) {
    console.log("\"" + userInput + "\" is found in the list.");
} else {
    console.log("\"" + userInput + "\" is not found in the list.");
}































































































