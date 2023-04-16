new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    navigation: true,

});
document.querySelector("body").addEventListener("mousemove", eyeball,);

function eyeball(e) {
    var eye = document.querySelectorAll(".eye");

    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        // console.log(eye.getBoundingClientRect().left)

        let radian = Math.atan2(e.pageX - x, e.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)"
    })

    document.querySelector("body").addEventListener("mousemove", eyeball2);
    function eyeball2(e) {
        var ball = document.querySelectorAll(".ball");
        var x2 = e.clientX * 100 / window.innerWidth + "%";
        var y2 = e.clientY * 100 / window.innerHeight + "%";
        for (var i = 0; i < 2; i++) {
            ball[i].style.left = x2;
            ball[i].style.top = y2;
            ball[i].style.transform = "translate(-" + x2 + ",-" + y2 + ")";
        }
    }
}
var three = document.getElementById("three")
console.log("123");

three.onclick = function (e) {

    var bg = [
        
        'url("img/01.png")',
        'url("img/02.png")',
        'url("img/03.png")',
        'url("img/04.png")',
        'url("img/05.png")',
        'url("img/06.png")',
        'url("img/07.png")',
        'url("img/08.png")',
        'url("img/09.png")',
        'url("img/10.png")',
        'url("img/11.png")',
        'url("img/12.png")',

    ]
    var x3 = e.clientX;
    var y3 = e.clientY;
    var splash = document.createElement("span");
    splash.style.left = x3 + "px";
    splash.style.top = y3 + "px";
    var image = bg[Math.floor(Math.random() * 12)]
    splash.style.backgroundImage = image;
    this.appendChild(splash);
    setTimeout(() => {
        splash.remove()
    }, 4000)

}
var four = document.getElementById("four");
var dot = document.querySelector(".dot");
var flag = false;
var word = document.getElementById("word")
four.onmousemove = function (e) {
    var dot = document.querySelector(".dot")
    var x4 = e.pageX;
    var y4 = e.pageY;
    dot.style.left = x4 + "px";
    dot.style.top = y4 + "px";
}
dot.onclick = function () {

    if (!flag) {
        flag = true;
        word.style.backgroundColor = "black";
        dot.style.backgroundColor = "white";
        word.style.color = "white";
        word.style.mixBlendMode = "multiply"
    }
    else {
        flag = false;
        word.style.backgroundColor = "white";
        dot.style.backgroundColor = "black";
        word.style.color = "black";



    }


}
var loading = document.getElementById("loading")

window.addEventListener("load", function () {
    this.setTimeout(function(){loading.style.width = "0";loading.style.opacity = "0"} , 3000)

})
var cookie = document.getElementById('cookie')
var bite = ["polygon(21% 76%, 18% 61%, 18% 44%, 22% 32%, 30% 27%, 38% 23%, 46% 23%, 57% 25%, 68% 31%, 72% 46%, 74% 68%, 71% 86%, 63% 96%, 54% 99%, 46% 91%, 39% 82%, 32% 77%)", "polygon(21% 76%, 18% 61%, 18% 44%, 22% 32%, 30% 27%, 38% 23%, 46% 23%, 57% 25%, 68% 31%, 63% 45%, 67% 60%, 63% 62%, 59% 77%, 52% 70%, 46% 74%, 38% 76%, 32% 77%)", " polygon(29% 68%, 35% 47%, 27% 42%, 34% 35%, 37% 34%, 40% 53%, 51% 44%, 57% 32%, 68% 31%, 63% 45%, 62% 53%, 63% 62%, 59% 77%, 52% 70%, 46% 74%, 38% 76%, 32% 77%)", "circle(0.4% at 50% 50%)"]
var five = document.getElementById("five")
var i = 0;
five.onclick = function () {

    cookie.style.clipPath = bite[i]
    i = i + 1;
    if (i > 3) {
        i = 0;
    }
    console.log(i)
}