var ph
function changeIcon(icon) {
    icon.classList.toggle("bi-eye")
    if (document.getElementById("passbox").type=="text"){
        document.getElementById("passbox").type="password"
    }
    else{
        document.getElementById("passbox").type="text"
    }
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