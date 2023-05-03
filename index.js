for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        action(this.innerHTML);
        // this.style.color="white";
        anime(this.innerHTML);
    });
}

document.addEventListener("keypress",function(event){
    action(event.key);
    anime(event.key);
});

function action(key){
    switch(key){
        case "w":
            var w_aud= new Audio("sounds\\tom-1.mp3");
            w_aud.play();
            break;
        case "a":
            var a_aud= new Audio("sounds\\tom-2.mp3");
            a_aud.play();
            break;
        case "s":
            var s_aud= new Audio("sounds\\tom-3.mp3");
            s_aud.play();
            break;
        case "d":
            var d_aud= new Audio("sounds\\tom-4.mp3");
            d_aud.play();
            break;
        case "j":
            var j_aud= new Audio("sounds\\crash.mp3");
            j_aud.play();
            break;
        case "k":
            var k_aud= new Audio("sounds\\kick-bass.mp3");
            k_aud.play();
            break;
        case "l":
            var l_aud= new Audio("sounds\\snare.mp3");
            l_aud.play();
        default: break;
    }
}

function anime(key){
    var i_pressed= document.querySelector("."+key);
    i_pressed.classList.add("pressed");
    setTimeout(function(){
        i_pressed.classList.remove("pressed");
    },100);
}