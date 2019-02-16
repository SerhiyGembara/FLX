function findTypes () {
for (var i=0; i < arguments.length; i++) {
arguments[i] = typeof arguments[i];
}
return arguments;
}
function executeforEach (a,b,c) {
    var arr = [a,b,c];
    arr.forEach (function (Element) {
        console.log (Element)
    })
}
function mapArray (a,b,c) {
    var arr = [a,b,c];
    var narr = [];
     arr.forEach (function (Element) {
        narr.push( Element + 3 );  
    })
    console.log (narr);
}
function filterArray (a,b,c) {
    var arr = [a,b,c];
    var narr = arr.filter (function (Element) {
        return Element > 3 ;  
    })
    console.log (narr);
}
function getAmountOfAdultPeople (a,b,c,d) {
var arr = [a,b,c,d]
  var narr = arr.filter (function (Element) {
    return Element.age > 18 ; 
    })
console.log (narr.length);
}

function getGreenAdultBananaLovers (a,b,c,d) {
    var arr = [a,b,c,d]
    arr.filter (function (Element) {
          if (Element.age > 18 && Element.favoriteFruit === "banana" && Element.eyeColor === "green") {
            console.log (Element.name);
        }
        return (arr);
    })
}
function key (a) {
    var arr = (a);
    console.log (Object.keys(arr));
} 
function values (a) {
    var arr = (a);
    console.log (Object.values(arr));
}
function showFormattedDate () {
    var date = new Date ();
    var monthName = {0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",
        5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"}; 
    var day = date.getDate();
    var monthIndex = date.getMonth()
    var month = monthName[monthIndex];
    var year = date.getFullYear();
    console.log ("Date: "+day+" of "+month+", "+year);
}
function isEvenYear () {
    var date = new Date ();
    var year = date.getFullYear()
    var a = year%2 === 0;
    console.log (a);
}
function isEvenMonth () {
    var date = new Date ();
    var month = date.getMonth()
    var a = month%2 !== 0;
    console.log (a);
}

findTypes ();
executeforEach ();
mapArray ();
filterArray ();
getAmountOfAdultPeople ();
getGreenAdultBananaLovers ();
key ();
values ();
showFormattedDate ();
isEvenYear ();
isEvenMonth ();







