let button = document.getElementById("plus");
button.addEventListener("click", () => {
  let card = document.getElementById("popup-container");
  card.style.visibility = "visible";
});
let Depense = document.getElementById("Depense");
let Revenue = document.getElementById("Revenue");

let rCount = 0;
let dCount = 0;
let num = 0;

Depense.addEventListener("click", () => {
  let montant = document.getElementById("montant");
  let Description = document.getElementById("Description");
  let date = document.getElementById("date")
  console.log("lll");
  if (montant.value <= 0 || montant.value == "") {
    console.log("lll2");
    Swal.fire({
      title: "please enter a valid number",
      icon: "warning",
      confirmButtonText: "Okay",
    });
    montant.value = "";
    return;
  } else {
    Swal.fire({
      title: "your oreration was seccessful",
      icon: "success",
      confirmButtonText: "Okay",
    });
    let card = document.getElementById("popup-container");
    card.style.visibility = "hidden";
  }

  let CardsContainer = document.getElementById("cards-container");
  let CardContainer = document.getElementById("CardContainer");
  if (!CardContainer) {
    CardContainer = document.createElement("div");
    CardContainer.id = "CardContainer";
    CardContainer.classList =
      "flex flex-col gap-5 items-center rounded-lg h-fit w-screen mt-10";
    CardsContainer.replaceChildren(CardContainer);
  }
  let DepenseCard = document.createElement("div");
  DepenseCard.id = "RC" + ++rCount;
  DepenseCard.classList =
    "bg-red-500 shadow-[0px_0px_5px_red] rounded-lg h-25 w-100";

  let p = document.createElement("p");
  p.classList = "text-md text-white pl-3 pt-1";
  p.innerHTML = Description.value;
  DepenseCard.appendChild(p);
  let Date= document.createElement("p")
  Date.classList = "text-md text-white pl-3 pt-1";
  Date.innerHTML = date.value
  DepenseCard.appendChild(Date)
  let h1 = document.createElement("h1");
  h1.innerHTML = "-" + montant.value;
  console.log("lll");
  h1.classList =
    "pl-2 font-Georgia text-white font-black text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)]";
  DepenseCard.appendChild(h1);

  CardContainer.appendChild(DepenseCard);

  let depensed = document.getElementById("depensed");
  depensed.textContent =
    parseInt(depensed.textContent) + parseInt(montant.value);
  console.log(parseInt(depensed.textContent) + parseInt(montant.value));

  console.log(depensed.textContent);

  let returned = document.getElementById("returned");
  let Sold = document.getElementById("Sold");
  Sold.textContent =
    parseInt(returned.textContent) - parseInt(depensed.textContent);
});

Revenue.addEventListener("click", () => {
  let montant = document.getElementById("montant");
  let value = montant.value;
  if (value < 0 || value == "") {
    Swal.fire({
      title: "please enter a valid number",
      icon: "warning",
      confirmButtonText: "Okay",
    });
    montant.value = "";
  } else {
    Swal.fire({
      title: "your oreration was seccessful",
      icon: "success",
      confirmButtonText: "Okay",
    });
    let card = document.getElementById("popup-container");
    card.style.visibility = "hidden";
  }

  let CardsContainer = document.getElementById("cards-container");
  let CardContainer = document.getElementById("CardContainer");
  if (!CardContainer) {
    CardContainer = document.createElement("div");
    CardContainer.id = "CardContainer";
    CardContainer.classList =
      "flex flex-col gap-5 items-center rounded-lg h-fit w-screen mt-10 ";
    CardsContainer.replaceChildren(CardContainer);
  }
  let RevenueCard = document.createElement("div");
  RevenueCard.id = "RC" + ++rCount;
  RevenueCard.classList =
    " shadow-[0px_0px_5px_green] bg-green-500 rounded-lg h-25 w-100";

  let p = document.createElement("p");
  p.classList = "text-md text-white pl-3 pt-1";
  p.innerHTML = Description.value;
  RevenueCard.appendChild(p);
  let h1 = document.createElement("h1");
  h1.innerHTML = "+" + montant.value;
  h1.classList =
    "pl-2 font-Georgia text-white font-black pb-4 text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)]";
  RevenueCard.appendChild(h1);
  CardContainer.appendChild(RevenueCard);

  let returned = document.getElementById("returned");
  returned.textContent =
    parseInt(returned.textContent) + parseInt(montant.value);
  console.log(parseInt(returned.textContent) + parseInt(montant.value));

  let depensed = document.getElementById("depensed");
  let Sold = document.getElementById("Sold");
  Sold.textContent =
    parseInt(returned.textContent) - parseInt(depensed.textContent);
});
