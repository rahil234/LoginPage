var ph
var pt
// function changeIcon(icon) {
//     icon.classList.toggle("bi-eye")
//     pt = document.getElementById("passbox").value
//     pt = document.getElementById("email").value.indexOf("@");
//     console.log(pt)
//     if (pt=="text"){
//         document.getElementById("passbox").type="password"
//     }
//     else{
//         document.getElementById("passbox").type="text"
//     }
// }

function textFocus(element){
    ph = element.placeholder
    element.placeholder= ""
}
let textOutFocus = function(element){
    if(element.value==""){
        element.placeholder= ph
    }
}
function changeIcon(icon) {
document.addEventListener('DOMContentLoaded', function () {
        icon.classList.toggle("bi-eye")
        pt = document.getElementById("passbox").value
        // pt = document.getElementById("email").value.indexOf("@");
        console.log(pt)
    });
}  