const link = document.querySelector(".meta-link");
const actionsForm = document.forms.actions;
const checkbox = actionsForm.toggle;
const select = actionsForm.type;

link.addEventListener("click", (event) => event.preventDefault());

checkbox.addEventListener("change", (event) => {
  const checked = event.target.checked;
  const thumb = document.querySelector(".thumb");

  if (checked) {
    thumb.innerHTML = '<img src="./images/paper.png" alt="paper" />';
  } else {
    thumb.innerHTML = "";
  }
});

select.addEventListener("change", (event) => {
  const value = event.target.value;
  link.setAttribute("href", `file${value}`);
});
