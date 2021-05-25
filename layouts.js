
function eraser(item, mode){
    eraseItem = document.getElementsByClassName(item);
    switch(mode){
    case true:
       
    eraseItem[0].style.display = "none";



    break;
    case false:
    eraseItem[0].style.display = "flex";
    if(item == "main"){
        eraseItem[0].style.display = "block"
    }
    break;}
}





document.getElementById("headerShow").addEventListener("click", function(){eraser('header', true);});
document.getElementById("headerShow").addEventListener("click", function(){eraser('header', false);});

document.getElementById("footerShow").addEventListener("click", function(){eraser('footer', true);});
document.getElementById("mainShow").addEventListener("click", function(){eraser('main', true);});


function clickTime(){
    document.getElementById("headerShow").removeEventListener("click", function(){eraser('header', false);});

    document.getElementById("headerShow").addEventListener("click", function(){eraser('header', false);})}
