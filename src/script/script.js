let email_ph = document.getElementById("email_box").placeholder;
let pass_ph = document.getElementById("pass_box").placeholder;

function changeIcon(icon) {
  icon.classList.toggle("bi-eye");
  if (document.getElementById("pass_box").type == "text") {
    document.getElementById("pass_box").type = "password";
  } else {
    document.getElementById("pass_box").type = "text";
  }
}

function textFocus(element) {
  element.placeholder = "";
}

function textOutFocus(element) {
  if (element.value == "") {
    if (element.type == "text") {
      element.placeholder = email_ph;
    } else if (element.type == "password") {
      element.placeholder = pass_ph;
    }
  }
}
