let button = document.getElementById("plus");
button.addEventListener("click", () => {
  let card = document.getElementById("popup-container");
  card.style.visibility = "visible";
});

let close = document.getElementById("close");
close.addEventListener("click", () => {
  let card = document.getElementById("popup-container");
  card.style.visibility = "hidden";
});
let Depense = document.getElementById("Depense");
let Revenue = document.getElementById("Revenue");

let rCount = 1;
let dCount = 0;
let num = 0;
let stored = true;
let CardsContainer = document.getElementById("cards-container");
let data;
Depense.addEventListener("click", () => {
  let montant = document.getElementById("montant");
  let titre = document.getElementById("Titre");
  let Description = document.getElementById("Description");
  let date = document.getElementById("date");
  console.log("lll");
  if (montant.value == "" || titre.value == "" || date.value == "") {
    Swal.fire({
      title: "please enter the fields that are required",
      icon: "warning",
      confirmButtonText: "Okay",
    });
    montant.value = "";
    return;
  }
  if (montant.value <= 0 || montant.value == "") {
    console.log("lll2");
    Swal.fire({
      title: "please enter a valid number",
      icon: "warning",
      confirmButtonText: "Okay",
    });
    console.log("hi");
    montant.value = "";
    return;
  } else if (montant.value > 0) {
    Swal.fire({
      title: "your oreration was seccessful",
      icon: "success",
      confirmButtonText: "Okay",
    });
    let card = document.getElementById("popup-container");
    card.style.visibility = "hidden";

    let CardsContainer = document.getElementById("cards-container");
    let CardContainer = document.getElementById("CardContainer");

    if (!CardContainer) {
      CardContainer = document.createElement("div");
      CardContainer.id = "CardContainer";
      CardContainer.classList =
        "grid grid-cols-2 grid-rows-1 pl-5 pr-5 gap-5 justify-around items-start rounded-lg h-fit w-screen mt-10";
      CardsContainer.replaceChildren(CardContainer);
    }
    let DepenseCard = document.createElement("div");
    DepenseCard.id = "DC" + parseInt((dCount += 2));
    console.log(DepenseCard.id);
    DepenseCard.classList =
      "bg-red-500 shadow-[0px_0px_10px_red] rounded-lg h-30 relative z-[-1]";

    let tp = document.createElement("p");
    tp.classList = "text-md text-white pl-3 pt-1 font-black";
    tp.innerHTML = titre.value;

    let dp = document.createElement("p");
    dp.classList = "text-md text-white pl-3 pt-1";
    dp.innerHTML = Description.value;

    let Date = document.createElement("p");
    Date.classList = "text-md text-white pl-3 pt-1";
    Date.innerHTML = date.value;

    let h1 = document.createElement("h1");
    h1.innerHTML = "-" + montant.value + " DH";
    console.log("lll");
    h1.classList =
      "pl-2 font-Georgia text-white font-black text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)]";

    let trash = document.createElement("i");
    trash.classList = "fa-solid fa-trash absolute right-5 bottom-3";
    trash.id = "trash";

    let modifie = document.createElement("i");
    modifie.classList = "fa-solid fa-pen absolute right-5 bottom-10";
    modifie.id = "modifie";
    DepenseCard.appendChild(modifie);
    DepenseCard.appendChild(trash);
    DepenseCard.appendChild(h1);
    DepenseCard.appendChild(tp);
    DepenseCard.appendChild(dp);
    DepenseCard.appendChild(Date);

    CardContainer.appendChild(DepenseCard);

    let depensed = document.getElementById("depensed");
    depensed.textContent =
      parseInt(depensed.textContent) + parseInt(montant.value);
    console.log(parseInt(depensed.textContent) + parseInt(montant.value));

    let returned = document.getElementById("returned");
    let Sold = document.getElementById("Sold");
    Sold.textContent =
      parseInt(returned.textContent) - parseInt(depensed.textContent);
    if (Sold.textContent > 0) {
      Sold.textContent = "+" + Sold.textContent;
    }

    let depenseArray;
    if (localStorage.getItem("depenseItems")) {
      depenseArray = JSON.parse(localStorage.getItem("depenseItems"));
    } else {
      depenseArray = [];
    }
    let data = {
      montant: montant.value,
      titre: titre.value,
      description: Description.value,
      date: date.value,
      id: DepenseCard.id,
      sold: Sold.textContent,
      depensed: depensed.textContent,
      returned: returned.textContent,
    };

    depenseArray.push(data);
    localStorage.setItem("depenseItems", JSON.stringify(depenseArray));
  }
});

Revenue.addEventListener("click", () => {
  let montant = document.getElementById("montant");
  let titre = document.getElementById("Titre");
  let Description = document.getElementById("Description");
  let date = document.getElementById("date");

  if (montant.value == "" || titre.value == "" || date.value == "") {
    Swal.fire({
      title: "please enter the fields that are required",
      icon: "warning",
      confirmButtonText: "Okay",
    });
    montant.value = "";
    return;
  }

  let value = montant.value;
  if (value < 0 || value == "") {
    Swal.fire({
      title: "please enter a valid number",
      icon: "warning",
      confirmButtonText: "Okay",
    });
    montant.value = "";
    return;
  } else if (value > 0) {
    Swal.fire({
      title: "your operation was seccessful",
      icon: "success",
      confirmButtonText: "Okay",
    });
    let card = document.getElementById("popup-container");
    card.style.visibility = "hidden";
    let CardsContainer = document.getElementById("cards-container");
    let CardContainer = document.getElementById("CardContainer");
    if (!CardContainer) {
      CardContainer = document.createElement("div");
      CardContainer.id = "CardContainer";
      CardContainer.classList =
        "grid grid-cols-2 pl-10 pr-10 gap-5 justify-around items-start rounded-lg h-fit w-screen mt-10 ";
      CardsContainer.replaceChildren(CardContainer);
    }
    let RevenueCard = document.createElement("div");
    RevenueCard.id = "RC" + parseInt((rCount += 2));
    console.log(RevenueCard.id);
    RevenueCard.classList =
      " shadow-[0px_0px_10px_green] bg-green-500 rounded-lg h-30 relative";

    let h1 = document.createElement("h1");
    h1.innerHTML = "+" + montant.value + " DH";
    h1.classList =
      "pl-2 font-Georgia text-white font-black pb-4 text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)]";

    let pt = document.createElement("p");
    pt.classList = "text-xl text-white pl-3 pt-1 font-black";
    pt.innerHTML = titre.value;

    let pd = document.createElement("p");
    pd.classList = "text-md text-white pl-3 pt-1";
    pd.innerHTML = Description.value;
    let pDate = document.createElement("p");
    pDate.classList = "text-md text-white pl-3 pt-1";
    pDate.innerHTML = date.value;
    let trash = document.createElement("i");
    trash.classList = "fa-solid fa-trash absolute right-5 bottom-3";
    trash.id = "trash";

    let modifie = document.createElement("i");
    modifie.classList = "fa-solid fa-pen absolute right-5 bottom-10";
    modifie.id = "modifie";
    RevenueCard.appendChild(modifie);
    RevenueCard.appendChild(trash);
    RevenueCard.appendChild(h1);
    RevenueCard.appendChild(pt);
    RevenueCard.appendChild(pDate);
    RevenueCard.appendChild(pd);

    CardContainer.appendChild(RevenueCard);

    let returned = document.getElementById("returned");
    returned.textContent =
      parseInt(returned.textContent) + parseInt(montant.value);
    let depensed = document.getElementById("depensed");
    let Sold = document.getElementById("Sold");
    Sold.textContent =
      parseInt(returned.textContent) - parseInt(depensed.textContent);
    if (Sold.textContent > 0) {
      Sold.textContent = "+" + Sold.textContent;
    }

    let RevenueArray;
    if (localStorage.getItem("revenueItems")) {
      RevenueArray = JSON.parse(localStorage.getItem("revenueItems"));
    } else {
      RevenueArray = [];
    }
    data = {
      montant: montant.value,
      titre: titre.value,
      description: Description.value,
      date: date.value,
      id: RevenueCard.id,
      depensed: depensed.textContent,
      returned: returned.textContent,
      sold: Sold.textContent,
    };
    console.log(data.id);

    RevenueArray.push(data);
    localStorage.setItem("revenueItems", JSON.stringify(RevenueArray));
    stored = true;
  }
});
let montant = document.getElementById("montant");
let titre = document.getElementById("Titre");
let Description = document.getElementById("Description");
let date = document.getElementById("date");

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
    "grid grid-cols-2 pl-5 pr-5 gap-5 justify-around items-start rounded-lg h-fit w-screen mt-10";
  CardsContainer.replaceChildren(CardContainer);

  RevenueArray.forEach((data) => {
    let RevenueCard = document.createElement("div");
    RevenueCard.classList =
      " shadow-[0px_0px_10px_green] bg-green-500 rounded-lg h-30 self-center relative";

    let h1 = document.createElement("h1");
    h1.textContent = "+" + data.montant + " DH";
    h1.classList =
      "pl-2 font-Georgia text-white font-black text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)]";
    let pt = document.createElement("p");
    pt.classList = "text-xl text-white pl-3 pt-1 font-black";
    pt.textContent = data.titre;

    let pd = document.createElement("p");
    pd.classList = "text-md text-white pl-3 pt-1";
    pd.textContent = data.description;

    let DateP = document.createElement("p");
    DateP.classList = "text-md text-white pl-3 pt-1";
    DateP.textContent = data.date;
    let trash = document.createElement("i");
    trash.classList = "fa-solid fa-trash absolute right-5 bottom-3";
    trash.id = "trash";
    let modifie = document.createElement("i");
    modifie.classList = "fa-solid fa-pen absolute right-5 bottom-10";
    modifie.id = "modifie";
    RevenueCard.appendChild(modifie);
    RevenueCard.appendChild(trash);
    RevenueCard.appendChild(h1);
    RevenueCard.appendChild(pt);
    RevenueCard.appendChild(pd);
    RevenueCard.appendChild(DateP);

    CardContainer.appendChild(RevenueCard);
    let depensed = document.getElementById("depensed");
    depensed.textContent = parseInt(data.depensed);
    let returned = document.getElementById("returned");
    returned.textContent = parseInt(data.returned);
    console.log(returned.textContent);
    let Sold = document.getElementById("Sold");
    Sold.textContent = parseInt(data.returned) - parseInt(data.depensed);
    if (Sold.textContent > 0) {
      Sold.textContent = "+" + Sold.textContent;
    }
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
    "grid grid-cols-2 pl-5 pr-5 gap-5 justify-around items-start rounded-lg h-fit w-screen mt-10";
  CardsContainer.replaceChildren(CardContainer);

  depenseArray.forEach((data) => {
    let DepenseCard = document.createElement("div");
    DepenseCard.classList =
      "bg-red-500 shadow-[0px_0px_10px_red] rounded-lg h-30 self-center relative";
    DepenseCard.id = data.id;

    let h1 = document.createElement("h1");
    h1.textContent = "-" + data.montant + " DH";
    h1.classList =
      "pl-2 font-Georgia text-white font-black text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)] ";

    let pt = document.createElement("p");
    pt.classList = "text-xl text-white pl-3 pt-1 font-black";
    pt.textContent = data.titre;

    let pd = document.createElement("p");
    pd.classList = "text-md text-white pl-3 pt-1";
    pd.textContent = data.description;

    let DateP = document.createElement("p");
    DateP.classList = "text-md text-white pl-3 pt-1";
    DateP.textContent = data.date;
    let trash = document.createElement("i");
    trash.classList = "fa-solid fa-trash absolute right-5 bottom-3";
    trash.id = "trash";
    let modifie = document.createElement("i");
    modifie.classList = "fa-solid fa-pen absolute right-5 bottom-10";
    modifie.id = "modifie";
    DepenseCard.appendChild(modifie);
    DepenseCard.appendChild(trash);
    DepenseCard.appendChild(h1);
    DepenseCard.appendChild(pt);
    DepenseCard.appendChild(pd);
    DepenseCard.appendChild(DateP);

    CardContainer.appendChild(DepenseCard);

    let depensed = document.getElementById("depensed");
    depensed.textContent = parseInt(data.depensed);
  });
  let Sold = document.getElementById("Sold");
  data = {
    montant: montant.value,
    description: Description.value,
    date: date.value,
    id: dCount,
    depensed: depensed.textContent,
    returned: returned.textContent,
    sold: Sold.textContent,
  };
  Sold.textContent = parseInt(data.returned) - parseInt(data.depensed);
  if (Sold.textContent > 0) {
    Sold.textContent = "+" + Sold.textContent;
  }
  console.log(Sold.textContent);
  console.log(parseInt(data.depensed));
});

let editedCardId = null;

document.getElementById("cards-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen")) {
    const modifiePop = document.getElementById("modifie-container");
    modifiePop.classList.remove("hidden");

    editedCardId = e.target.parentElement.id;
    console.log(editedCardId)
  }
});
document.getElementById("confirm")

function confirm(){
  if (!editedCardId) return;

  const card = document.getElementById(editedCardId);
  const isRevenue = card.classList.contains("bg-green-500");
  const key = isRevenue ? "revenueItems" : "depenseItems";
  const array = JSON.parse(localStorage.getItem(key)) || [];

  const updated = array.map((item) =>
    item.id === editedCardId
      ? {
          ...item,
          titre: newTitre.value,
          description: newDescription.value,
          date: newDate.value,
          montant: newMontant.value,
        }
      : item
  );

  localStorage.setItem(key, JSON.stringify(updated));

  // Update DOM
  card.querySelector("p:nth-child(4)").textContent = newDate.value;
  card.querySelector("p:nth-child(3)").textContent = newDescription.value;
  card.querySelector("p:nth-child(2)").textContent = newTitre.value;
  card.classList.contains("bg-green-500")? "+" : "-") + newMontant.value + " DH";

  // Close popup
  document.getElementById("modifie-container").classList.add("hidden");
}
document.getElementById("cards-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    const card = e.target.parentElement;
    console.log(card)
    const isRevenue = card.classList.contains("bg-green-500");
    const key = isRevenue ? "revenueItems" : "depenseItems";
    const array = JSON.parse(localStorage.getItem(key)) || [];

    const updated = array.filter((item) => item.id !== card.id);
    localStorage.setItem(key, JSON.stringify(updated));

    card.remove();
  }
});
