var p = prompt ("Please enter the price", "Write here");
var d = prompt ("Please enter the discount", "Write here");
if (p >= 0 && p <= 9999999 && d >= 0 && d <= 99) {
    var np = p - (p * (d/100));
    var s = p -np;
    var rp = Math.round(np*100)/100;
    var rs = Math.round(s*100)/100;
    alert ("Price without discount: "+p+"\nDiscount: "+d+"%"+"\nPrice with discount: "+rp+"\nSaved: "+rs);
} else {
    alert ("Invalid input data");
}
