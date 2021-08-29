var typing = document.querySelector(".typing");
var count = 0;
var index = 0;
var letter = "";
var text = "Developer";

setTimeout(function(){setInterval(function(){
    letter = text.slice(0,++index);
    typing.textContent = letter;

    if(letter.length === text.length)
    {
        index = 0;
    }
},600)}, 3000);
