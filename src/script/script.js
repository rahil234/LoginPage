const email_ph = document.querySelector("#email_box").placeholder;
const pass_ph = document.querySelector("#pass_box").placeholder;

let holdstart = () => {
  document.querySelector("#see_pass").setAttribute("src", "src/img/eye-fill.svg");
  document.querySelector("#pass_box").setAttribute("type", "text");
};
let holdend = () => {
  document.querySelector("#see_pass").setAttribute("src", "src/img/eye-slash.svg");
  document.querySelector("#pass_box").setAttribute("type", "password");
  document.querySelector("#pass_box").focus();
};
let see_pass_check = () => {
  if (document.querySelector("#pass_box").value !== "") document.querySelector("#see_pass").style.visibility = "visible"
  else if (document.querySelector("#pass_box").value === "") document.querySelector("#see_pass").style.visibility = "hidden"
}

document.querySelector("#see_pass").addEventListener("touchstart", holdstart);
document.querySelector("#see_pass").addEventListener("mousedown", holdstart);
document.querySelector("#see_pass").addEventListener("touchend", holdend);
document.querySelector("#see_pass").addEventListener("mouseup", holdend);

document.querySelector("#pass_box").addEventListener("keydown", () =>
  setTimeout(see_pass_check, 30)
);

document.querySelector("#email_box").addEventListener("focus", () =>
  document.querySelector("#email_box").placeholder = ""
);
document.querySelector("#email_box").addEventListener("focusout", () =>
  document.querySelector("#email_box").placeholder = email_ph
);
document.querySelector("#pass_box").addEventListener("focus", () => {
  document.querySelector("#pass_box").placeholder = "";
});
document.querySelector("#pass_box").addEventListener("focusout", () => {
  document.querySelector("#pass_box").placeholder = pass_ph;
  if (document.querySelector("#pass_box").value === "") {
    document
      .querySelector("#see_pass")
      .setAttribute("class", " bi bi-eye-slash");
  }
});
document.querySelector("#check").addEventListener("click", () => {
  if (document.querySelector("#check").getAttribute("src") === "src/img/check-square.svg")
    document.querySelector("#check").setAttribute("src", "src/img/check-square-fill.svg")
  else  document.querySelector("#check").setAttribute("src", "src/img/check-square.svg")
});