console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  
  // const checkBox = event.target.elements.tos
  const formData = new FormData(event.target)
  const formObject = Object.fromEntries(formData)
  console.log("event",event);
  console.log("target", event.target)
  console.log("elemets", event.target.elements)
  console.log(event.target.elements.tos)
  console.log(event.target.elements.tos.checked)
  // console.log(for)

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
