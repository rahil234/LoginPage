const email_ph = document.querySelector("#email_box").placeholder;
const pass_ph = document.querySelector("#pass_box").placeholder;
document
  .querySelector("#email_box")
  .addEventListener(
    "focus",
    () => (document.querySelector("#email_box").placeholder = "")
  );
document
  .querySelector("#email_box")
  .addEventListener(
    "focusout",
    () => (document.querySelector("#email_box").placeholder = email_ph)
  );
document.querySelector("#pass_box").addEventListener("focus", () => {
  document.querySelector("#pass_box").placeholder = "";
  document.querySelector("#see_pass").style.visibility = "visible";
});
document.querySelector("#pass_box").addEventListener("focusout", () => {
  document.querySelector("#pass_box").placeholder = pass_ph;
  if (document.querySelector("#pass_box").value === "") {
    document.querySelector("#see_pass").style.visibility = "hidden";
  }
});

let holdstart = () => {
  console.log("enent trig");
  document.querySelector("#see_pass").setAttribute("class", "bi bi-eye-fill");
  document.querySelector("#pass_box").setAttribute("type", "text");
};

let holdend = () => {
  document.querySelector("#see_pass").setAttribute("class", " bi bi-eye-slash");
  document.querySelector("#pass_box").setAttribute("type", "password");
  document.querySelector("#pass_box").focus();
};

document.querySelector("#see_pass").addEventListener("touchstart", holdstart);
document.querySelector("#see_pass").addEventListener("mousedown", holdstart);
document.querySelector("#see_pass").addEventListener("touchend", holdend);
document.querySelector("#see_pass").addEventListener("mouseup", holdend);
