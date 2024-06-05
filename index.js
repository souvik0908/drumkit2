//var a=document.querySelectorAll("button").addEventListener("click",handleclick);
for (let i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",handleclick(i));
    
}

function handleclick(i){
    var audioname='./sounds/' + document.querySelectorAll("button")[i];
    var audio = new Audio(audioname);
    audio.play();

}