let a=0;
let b= 11;
let c = 3;
function addNew (){
    document.getElementById('iconBtn').onclick = function newPoint () { 
    document.getElementById('delete').onclick = function deletePoint () {
    a=a--;
    }
    if (a<b) {
    let elmnt = document.getElementsByTagName('DIV')[c];
    let cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);
    document.getElementById('line').innerHTML = document.getElementById('inputForm').value;
    a=a++;
    } 
    }
}
