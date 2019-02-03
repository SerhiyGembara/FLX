var a = prompt ( "Please enter a", "Write here");
var b = prompt ( "Please enter b", "Write here");
var c = prompt ( "Please enter c", "Write here");
var D = (b * b) - 4 * (a * c);
if (a===isNaN || b===isNaN || c===isNaN) {
    alert ("Invalid input data");
} else if (b === 0 && c === 0) {
    alert ("x=0");
} else if (D < 0) {
    alert ("No solution");
} else if (D === 0) {
    var x = ((- b + Math.sqrt(D)) / (2 * a));
    alert ("x =" + x);
} else if (D > 0) {
    var x1 = ((- b + Math.sqrt(D)) / (2 * a));
    var x2 = ((- b - Math.sqrt(D)) / (2 * a));
    alert ("x1 =" + x1+"\n"+"x2 =" + x2);
} else {
    alert ("Invalid input data")
}

