import { Animal, IAnimal } from "./syntax-examples.ts";

let animal: IAnimal = {
  species: "Cat",
  legs: 4,
};

let bunny = new Animal(animal);

console.log(bunny.getDetails());

window.onload = function () {
  const titleEl = document.getElementById("txtTitle") as HTMLInputElement;
  const amountEl: HTMLInputElement = document.getElementById(
    "txtAmount"
  ) as HTMLInputElement;
  const dateEl: HTMLInputElement = document.getElementById(
    "txtDate"
  ) as HTMLInputElement;
  const btnEl: HTMLButtonElement = document.getElementById(
    "btnSubmit"
  ) as HTMLButtonElement;

  const listContainerEl: HTMLUListElement = document.getElementById(
    "list-container"
  ) as HTMLUListElement;

  btnEl.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Title : ", titleEl.value);
    console.log("Amount : ", amountEl.value);
    console.log("Date: ", dateEl.value);
    const listEl = document.createElement("li");
    listEl.innerHTML = `
      <h3>${titleEl.value}</h3>
      <p>Amount : ${amountEl.value}</p>
      <p>Date : ${dateEl.value}</p>
    `;
    listContainerEl.appendChild(listEl);
  });
};
