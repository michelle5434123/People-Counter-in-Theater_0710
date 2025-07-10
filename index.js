//document.getElementById("count-el").innerText = 5
let countEL=document.getElementById('count-el');
let saveEL=document.getElementById('history-el');
console.log(saveEL);
console.log(countEL);

var count = 0;
function increment() {
    count +=1;
    countEL.textContent = count;
}

function save() {
    var show = count + " - ";
    saveEL.textContent += show;
    count = 0;
    countEL.textContent = 0;
}