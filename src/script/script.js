var ph
var pt

function changeIcon(icon) {
    icon.classList.toggle("bi-eye")
    if (document.getElementById("pass_box").type=="text"){
        document.getElementById("pass_box").type="password"
    }
    else{
        document.getElementById("pass_box").type="text"
    }
    pt = document.getElementById("pass_box").type
    console.log(pt)
}

function textFocus(element){
    ph = element.placeholder
    element.placeholder= ""
}
let textOutFocus = function(element){
    if(element.value==""){
        element.placeholder= ph
    }
} 