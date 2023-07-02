let cs = document.querySelector("#container-slider");
let ca = document.querySelector("#container-about");


let menu = document.querySelector("#m-bar");
let navbar = document.querySelector(".navbar");
let navbaru = document.querySelector(".navbaru");
let logo = document.querySelector(".logo");
let ini = document.querySelector(".ini");
let abo =  document.querySelector(".abo");
let ser =  document.querySelector(".serv");
let cur =  document.querySelector(".cur");
let bmenu = document.querySelector(".bmenu");
let equ = document.querySelector(".Equ"); 
let foot = document.querySelector(".cont");
//document.querySelector(".opened");
let e1 = document.querySelector("#e1");
let e2 = document.querySelector("#e2");
let e3 = document.querySelector("#e3");
let e4 = document.querySelector("#e4");
let e5 = document.querySelector("#e5");
let e6 = document.querySelector("#e6");
let aux = "";
function omenu() {
    if (navbar.className == "navbar active") {
        navbar.className = "navbar";
        navbaru.className = "navbaru";
        logo.className = "logo";
        bmenu.textContent = "|||";
    } 
}

menu.onclick = () => {

    if (navbar.className == "navbar active") {
        navbar.className = "navbar";
        navbaru.className = "navbaru";
        logo.className = "logo";
        bmenu.textContent = "|||";
    } else {
        navbar.className = "navbar active";
        navbaru.className = "navbaru active";
        logo.className = "logo active";
        bmenu.textContent = "x";
    }

}

ini.onclick = () => {
    omenu();
    document.querySelector(".opened").className = "nopened"; 
    e1.className = "opened";
}
abo.onclick = () => {
    omenu();
    document.querySelector(".opened").className = "nopened";
    e2.className = "opened";
    
}
ser.onclick = () => {
    omenu();
    document.querySelector(".opened").className = "nopened";
    e3.className = "opened";
    
}
cur.onclick = () => {
    omenu();
    document.querySelector(".opened").className = "nopened";
    e4.className = "opened";
    
}
equ.onclick = () => {
    omenu();
    document.querySelector(".opened").className = "nopened";
    e5.className = "opened";
    
}
foot.onclick = () => {
    omenu();
    document.querySelector(".opened").className = "nopened";
    e6.className = "opened";
    
}


////////////////////


if(document.querySelector('#container-slider')){
  setInterval('fntExecuteSlide("next")',5000);
}
//------------------------------ LIST SLIDER -------------------------
if(document.querySelector('.listslider')){
  let link = document.querySelectorAll(".listslider li a");
  link.forEach(function(link) {
     link.addEventListener('click', function(e){
        e.preventDefault();
        let item = this.getAttribute('itlist');
        let arrItem = item.split("_");
        fntExecuteSlide(arrItem[1]);
        return false;
     });
   });
}

function fntExecuteSlide(side){
   let parentTarget = document.getElementById('slider');
   let elements = parentTarget.getElementsByTagName('li');
   let curElement, nextElement;

   for(var i=0; i<elements.length;i++){

       if(elements[i].style.opacity==1){
           curElement = i;
           break;
       }
   }
   if(side == 'prev' || side == 'next'){

       if(side=="prev"){
           nextElement = (curElement == 0)?elements.length -1:curElement -1;
       }else{
           nextElement = (curElement == elements.length -1)?0:curElement +1;
       }
   }else{
       nextElement = side;
       side = (curElement > nextElement)?'prev':'next';

   }
   //RESALTA LOS PUNTOS
   let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
   elementSel[curElement].classList.remove("item-select-slid");
   elementSel[nextElement].classList.add("item-select-slid");
   elements[curElement].style.opacity=0;
   elements[curElement].style.zIndex =0;
   elements[nextElement].style.opacity=1;
   elements[nextElement].style.zIndex =1;
}

//////////////////////////////////
//https://m.me/100057326115738?text=Hello%20and%20Welcome
//LOGICA MENSAJE
let txtMensaje = document.querySelector("#txtMensaje");
let btnEnviar = document.querySelector(".btnEnviar");
let mensaje = "";
let url;

btnEnviar.onclick = () => {
    mensaje = txtMensaje.value;
    document.querySelector("a[id^='envio']").href="https://m.me/100057326115738?text="+mensaje;
    txtMensaje.value = "";
}



