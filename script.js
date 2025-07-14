let a = [ "A", "B" ]
let guess = 1;
let position = 0;

for(let i = 0; i < a.length; i++) {
    document.getElementById(a[i]).addEventListener("click",() => handleLetter(a[i]))
}

document.getElementById("enter").addEventListener("click",() => handleEnter())

//runs on each click of a letter
function handleLetter(letter){
   console.log(letter)
}

//runs on each click of the enter button
function handleEnter() {
    interval = setInterval(revealBox,1000);
}

function revealBox(){
    position++;
    document.getElementById("r" + guess + position).style.background = "green";
    if(position == 5){
        clearInterval(interval);
        position = 0;
        guess++;
    }
}

function chooseWord(){
    
}