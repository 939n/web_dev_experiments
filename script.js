var timerr = 60;
var hitrn = '';
var score = 0;
function makebubble() {
    var clutter = "";

    for (i = 0; i <= 80; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;

    }

    document.querySelector(".pbtm").innerHTML = clutter;
}

function runtimer() {
    var  timerint = setInterval(function () {
        if (timerr > 0) {
            timerr--;
            document.querySelector("#timer").textContent = timerr;
        }
        else {
            clearInterval(timerint);    
        document.querySelector(".pbtm").innerHTML= `<h1> Game Over </h1> `;

        }
    }, 1000);
}
function newhit() {
   hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitter").textContent = hitrn;

}
function getscore() {
    score += 10;
    document.querySelector('#score').textContent = score;
    if (score>30){

    }
}
document.querySelector(".pbtm")
.addEventListener("click",function(dets){
    var clicked = Number(dets.target.textContent)
    if (clicked === hitrn){
        getscore();
        newhit();
        makebubble();
    }
    
});  
makebubble();
runtimer();
newhit();
getscore();
