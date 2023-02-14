var button = document.getElementById("button");
var rainbow = ["red","orange","yellow","green","blue","indigo","violet","black"];
function change(){
    document.body.style.background = rainbow[Math.floor(8 * Math.random())];
}
button.addEventListener("click", change);

