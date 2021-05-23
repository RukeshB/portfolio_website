const deg = 6;
const hr = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
setInterval(()=>{
    var day = new Date();
    var hh = day.getHours() * 30;
    var mm = day.getMinutes() * deg;
    var ss = day.getSeconds() *deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
})