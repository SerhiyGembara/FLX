function reverseNumber (a) {
    if (a<0) {
    a = (a*-1) +"" ; 
    return Number(a.split("").reverse().join(""))*-1;
    } else {
        a = a +"" ; 
    return Number(a.split("").reverse().join(""));
    }
}
reverseNumber ()