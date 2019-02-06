var a = confirm ("Do you want to play a game?");
var c = 1;
var maxP = 10;
var pr = 0;
var i = 0;
for (;a === true;) {
    var r = parseInt(Math.random() * (( 5* c )+1));
    console.log (r);
    for (i=1;i<=3;i++) {
        var m = 5*c;
        var l = 4-i;
        switch (i) {
            case 1 : var P= maxP * 1;
            break;
            case 2 : P= maxP * 0.5;
            break;
            case 3 : P= maxP * 0.2;
            break;
            default: break;
        } 
        var n = prompt("Enter a number from 0 to "+m+"\nAttempts left: "+l
        +"\nTotal prize: "+pr+"\nPossible prize on current attempt: "+P,"");
    if (Number(r) === Number(n)) {
        break;
    }
    }
    if (i === 1) {
        pr = (maxP * 1) + pr;
        a = confirm ("Congratulation! Your prize is:"+ pr + "$ Do you want to continue?");
        if (a === true) {
            i = 0;
            c = c*2;
            maxP = maxP * 3;
        } else {
            alert ("Thank you for a game. Your prize is: "+pr+"$");
        }
    }
    if (i === 2) {
        pr = (maxP * 0.5) + pr;
        a = confirm ("Congratulation! Your prize is: "+ pr + "$ Do you want to continue?");
        if (a === true) {
            i = 0;
            c = c*2;
            maxP = maxP * 3;
        } else {
            alert ("Thank you for a game. Your prize is: "+pr+"$");
        }
    }
    if (i === 3) {
        pr = (maxP * 0.2) +pr;
        a = confirm ("Congratulation! Your prize is: "+ pr + "$ Do you want to continue?");
        if (a === true) {
            i = 0;
            c = c*2;
            maxP = maxP * 3;
        } else {
            alert ("Thank you for a game. Your prize is: "+pr+"$");
        }
        console.log (pr);
    }
    if (i === 4) {
        
        alert ("Thank you for a game. Your prize is: "+pr+"$")
        c = 1;
        maxP = 10;
        pr = 0;
        a = confirm ("Do you want to play a game?");
    }
} 
if (a === false) {
    alert ("You did not become a millionaire, but can.");
}