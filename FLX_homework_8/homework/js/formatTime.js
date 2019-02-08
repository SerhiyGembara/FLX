function formatTime (a) {
    var d = Math.floor(a / 1440);
    var h = Math.floor((a - d*1440) / 60);
    var m = a - h*60 - d*1440 ; 
    return d+" day(s) "+h+" hour(s) "+m+" minute(s) ";
}
formatTime()