const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
}); 

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

function my(id){
    return document.getElementById(id);
}
my("More-btn-edu").onclick=function(){
    if(this.value == "Show More") {
        my("hide-edu").style.display="Block";
        this.value="Show Less";
    } else if(this.value == "Show Less") {
        my("hide-edu").style.display="None";
        this.value="Show More";
    }
}
my("More-btn-skl").onclick=function(){
    if(this.value == "Show More") {
        my("hide-skl").style.display="Block";
        this.value="Show Less";
    } else if(this.value == "Show Less") {
        my("hide-skl").style.display="None";
        this.value="Show More";
    }
}
my("More-btn-cert").onclick=function(){
    if(this.value == "Show More") {
        my("hide-cert").style.display="Block";
        this.value="Show Less";
    } else if(this.value == "Show Less") {
        my("hide-cert").style.display="None";
        this.value="Show More";
    }
}


