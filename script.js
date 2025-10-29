console.log(2 * 3);

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
let stored = true;
let CardsContainer = document.getElementById("cards-container");
let data;
Depense.addEventListener("click", () => {
  let montant = document.getElementById("montant");
  let Description = document.getElementById("Description");
  let date = document.getElementById("date");
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
  
  if (!CardContainer) {
    CardContainer = document.createElement("div");
    CardContainer.id = "CardContainer";
    CardContainer.classList =
      "grid grid-cols-2 pl-5 pr-5 gap-5 justify-around items-center rounded-lg h-fit w-screen mt-10";
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
  let Date = document.createElement("p");
  Date.classList = "text-md text-white pl-3 pt-1";
  Date.innerHTML = date.value;
  DepenseCard.appendChild(Date);
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
  let depenseArray;
  if (localStorage.getItem("depenseItems")) {
    depenseArray = JSON.parse(localStorage.getItem("depenseItems"));
  } else {
    depenseArray = [];
  }
  let data = {
    montant: montant.value,
    description: Description.value,
    date: date.value,
    id: CardContainer,
    sold: Sold.textContent,
    depensed: depensed.textContent,
    returned: returned.textContent,
  };

  depenseArray.push(data);
  localStorage.setItem("depenseItems", JSON.stringify(depenseArray));
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
      "grid grid-cols-2 pl-5 pr-5 gap-5 justify-around items-center rounded-lg h-fit w-screen mt-10 ";
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
  let depensed = document.getElementById("depensed");
  let Sold = document.getElementById("Sold");
  Sold.textContent =
    parseInt(Sold.textContent) +
    (parseInt(returned.textContent) - parseInt(depensed.textContent));

  let RevenueArray;
  if (localStorage.getItem("revenueItems")) {
    RevenueArray = JSON.parse(localStorage.getItem("revenueItems"));
  } else {
    RevenueArray = [];
  }
  data = {
    montant: montant.value,
    description: Description.value,
    date: date.value,
    id: CardContainer,
    depensed: depensed.textContent,
    returned: returned.textContent,
    sold: Sold.textContent,
  };

  RevenueArray.push(data);
  localStorage.setItem("revenueItems", JSON.stringify(RevenueArray));
  stored = true;
});

window.addEventListener("DOMContentLoaded", () => {
  let RevenueArray = localStorage.getItem("revenueItems");
  if (localStorage.getItem("revenueItems")) {
    RevenueArray = JSON.parse(localStorage.getItem("revenueItems"));
  } else {
    RevenueArray = [];
  }
  if (RevenueArray.length === 0) return;

  let CardsContainer = document.getElementById("cards-container");
  let CardContainer = document.createElement("div");
  CardContainer.id = "CardContainer";
  CardContainer.classList =
    "grid grid-cols-2 pl-5 pr-5 gap-5 justify-around items-center rounded-lg h-fit w-screen mt-10";
  CardsContainer.replaceChildren(CardContainer);

  RevenueArray.forEach((data) => {
    let RevenueCard = document.createElement("div");
    RevenueCard.classList =
      " shadow-[0px_0px_5px_green] bg-green-500 rounded-lg h-25 self-center";

    let p = document.createElement("p");
    p.classList = "text-md text-white pl-3 pt-1";
    p.textContent = data.description;

    let DateP = document.createElement("p");
    DateP.classList = "text-md text-white pl-3 pt-1";
    DateP.textContent = data.date;

    let h1 = document.createElement("h1");
    h1.textContent = "+" + data.montant;
    h1.classList =
      "pl-2 font-Georgia text-white font-black text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)]";

    RevenueCard.appendChild(p);
    RevenueCard.appendChild(DateP);
    RevenueCard.appendChild(h1);
    CardContainer.appendChild(RevenueCard);
    let depensed = document.getElementById("depensed");
    depensed.textContent = parseInt(data.depensed);
    let returned = document.getElementById("returned");
    returned.textContent =
      parseInt(returned.textContent) + parseInt(data.returned);
    console.log(returned.textContent);
    let Sold = document.getElementById("Sold");
    Sold.textContent = parseInt(data.returned) - parseInt(data.depensed);
    console.log(Sold.textContent);
  });

  let depenseArray = localStorage.getItem("depenseItems");
  if (localStorage.getItem("depenseItems")) {
    depenseArray = JSON.parse(localStorage.getItem("depenseItems"));
  } else {
    depenseArray = [];
  }
  if (depenseArray.length === 0) return;

  CardContainer.id = "CardContainer";
  CardContainer.classList =
    "grid grid-cols-2 pl-5 pr-5 gap-5 justify-around items-center rounded-lg h-fit w-screen mt-10";
  CardsContainer.replaceChildren(CardContainer);

  depenseArray.forEach((data) => {
    let DepenseCard = document.createElement("div");
    DepenseCard.classList =
      "bg-red-500 shadow-[0px_0px_5px_red] rounded-lg h-25 self-center";

    let p = document.createElement("p");
    p.classList = "text-md text-white pl-3 pt-1";
    p.textContent = data.description;

    let DateP = document.createElement("p");
    DateP.classList = "text-md text-white pl-3 pt-1";
    DateP.textContent = data.date;

    let h1 = document.createElement("h1");
    h1.textContent = "-" + data.montant;
    h1.classList =
      "pl-2 font-Georgia text-white font-black text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)]";

    DepenseCard.appendChild(p);
    DepenseCard.appendChild(DateP);
    DepenseCard.appendChild(h1);
    CardContainer.appendChild(DepenseCard);

    let depensed = document.getElementById("depensed");
    depensed.textContent = parseInt(data.depensed);
  });
  let Sold = document.getElementById("Sold");
  data = {
    montant: montant.value,
    description: Description.value,
    date: date.value,
    id: CardContainer,
    depensed: depensed.textContent,
    returned: returned.textContent,
    sold: Sold.textContent,
  };
  Sold.textContent = parseInt(data.returned) - parseInt(data.depensed);
  console.log(Sold.textContent);
  console.log(parseInt(data.depensed));
});
