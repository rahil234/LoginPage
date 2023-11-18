const email_ph = document.querySelector("#email_box").placeholder;
const pass_ph = document.querySelector("#pass_box").placeholder;
document
  .querySelector("#email_box")
  .addEventListener(
    "focus",
    () => (document.querySelector("#email_box").placeholder = "")
  );
document
  .querySelector("#pass_box")
  .addEventListener(
    "focus",
    () => (document.querySelector("#pass_box").placeholder = "")
  );
document
  .querySelector("#email_box")
  .addEventListener(
    "focusout",
    () => (document.querySelector("#email_box").placeholder = email_ph)
  );
document
  .querySelector("#pass_box")
  .addEventListener(
    "focusout",
    () => (document.querySelector("#pass_box").placeholder = pass_ph)
  );

document.querySelector("#see_pass").addEventListener("click", () => {
  if (
    document.querySelector("#see_pass").getAttribute("class") == "bi bi-eye-slash"
  ) {
    document.querySelector("#see_pass").setAttribute("class", " bi bi-eye-fill");
    document.querySelector("#pass_box").setAttribute("type", "text");
    document.querySelector("#pass_box").focus();
  } else {
    document.querySelector("#see_pass").setAttribute("class", "bi bi-eye-slash");
    document.querySelector("#pass_box").setAttribute("type", "password");
    document.querySelector("#pass_box").focus();
  }
});
