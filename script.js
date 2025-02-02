/*! 
// Snow.js - v0.0.3 
// kurisubrooks.com 
*/ 
 
// Amount of Snowflakes 
var snowMax = 1000; 
 
// Snowflake Colours 
var snowColor = ["#DDD", "#EEE"]; 
 
// Snow Entity 
var snowEntity = "&#x2022;"; 
 
// Falling Velocity 
var snowSpeed = 0.75 
 
// Minimum Flake Size 
var snowMinSize = 5; 
 
// Maximum Flake Size 
var snowMaxSize = 20; 
 
// Refresh Rate (in milliseconds) 
var snowRefresh = 50; 
 
// Additional Styles 
var snowStyles = "cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;"; 
 
/* 
// End of Configuration 
// ---------------------------------------- 
// Do not modify the code below this line 
*/ 
 
var snow = [], 
 pos = [], 
 coords = [], 
 lefr = [], 
 marginBottom, 
 marginRight; 
 
function randomise(range) { 
 rand = Math.floor(range * Math.random()); 
 return rand; 
} 
 
function initSnow() { 
 var snowSize = snowMaxSize - snowMinSize; 
 marginBottom = document.body.scrollHeight - 5; 
 marginRight = document.body.clientWidth - 15; 
 
 for (i = 0; i <= snowMax; i++) { 
  coords[i] = 0; 
  lefr[i] = Math.random() * 15; 
  pos[i] = 0.03 + Math.random() / 10; 
  snow[i] = document.getElementById("flake" + i); 
  snow[i].style.fontFamily = "inherit"; 
  snow[i].size = randomise(snowSize) + snowMinSize; 
  snow[i].style.fontSize = snow[i].size + "px"; 
  snow[i].style.color = snowColor[randomise(snowColor.length)]; 
  snow[i].style.zIndex = 1000; 
  snow[i].sink = snowSpeed * snow[i].size / 5; 
  snow[i].posX = randomise(marginRight - snow[i].size); 
  snow[i].posY = randomise(2 * marginBottom - marginBottom - 2 * snow[i].size); 
  snow[i].style.left = snow[i].posX + "px"; 
  snow[i].style.top = snow[i].posY + "px"; 
 } 
 
 moveSnow(); 
} 
 
function resize() { 
 marginBottom = document.body.scrollHeight - 5; 
 marginRight = document.body.clientWidth - 15; 
} 
 
function moveSnow() { 
 for (i = 0; i <= snowMax; i++) { 
  coords[i] += pos[i]; 
  snow[i].posY += snow[i].sink; 
  snow[i].style.left = snow[i].posX + lefr[i] * Math.sin(coords[i]) + "px"; 
  snow[i].style.top = snow[i].posY + "px"; 
 
  if (snow[i].posY >= marginBottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginRight - 3 * lefr[i])) { 
   snow[i].posX = randomise(marginRight - snow[i].size); 
   snow[i].posY = 0; 
  } 
 } 
 
 setTimeout("moveSnow()", snowRefresh); 
} 
 
for (i = 0; i <= snowMax; i++) { 
 document.write("<span id='flake" + i + "' style='" + snowStyles + "position:absolute;top:-" + snowMaxSize + "'>" + snowEntity + "</span>"); 
} 
 
window.addEventListener('resize', resize); 
window.addEventListener('load', initSnow); 

// Кері санақтың аяқталатын уақыты
let countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Кері санақты жаңартатын функция
let x = setInterval(function() {
    
    // Қазіргі уақытты алу
    let now = new Date().getTime();
    
    // Уақыт айырмасын есептеу
    let distance = countdownDate - now;
    
    // Күндер, сағаттар, минуттар, секундтарды есептеу
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Нәтижені көрсететін элементті жаңарту
    document.getElementById("time").innerHTML = days + " day " + hours + " hour " + minutes + " minute " + seconds + " second";

    // Егер санақ аяқталса, мәтінді өзгерту
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Уақыт аяқталды!";
    }
}, 1000);
