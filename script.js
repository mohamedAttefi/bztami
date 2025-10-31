
let button = document.getElementById("plus");
button.addEventListener("click", () => {
  let card = document.getElementById("popup-container");
  card.style.visibility = "visible";
});

let closePopup = document.getElementById("close");
console.log(closePopup);
closePopup.addEventListener("click", () => {
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
  let a = Math.floor(Math.random() * 1000);
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
    DepenseCard.id = "DC" + a;
    console.log(DepenseCard.id);
    DepenseCard.classList =
      "bg-red-500 shadow-[0px_0px_10px_red] rounded-lg h-30 relative z-[-1]";

    let tp = document.createElement("p");
    tp.classList = "text-md text-white pl-3 pt-1 font-black titre";
    tp.innerHTML = titre.value;

    let dp = document.createElement("p");
    dp.classList = "text-md text-white pl-3 pt-1 description";
    dp.innerHTML = Description.value;

    let Date = document.createElement("p");
    Date.classList = "text-md text-white pl-3 pt-1 date";
    Date.innerHTML = date.value;

    let h1 = document.createElement("h1");
    h1.innerHTML = "-" + montant.value + " DH";
    console.log("lll");
    h1.classList =
      "pl-2 font-Georgia text-white font-black text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)] montant";
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

  setTimeout(() => {
    location.reload();
  }, 7000);
});

Revenue.addEventListener("click", () => {
  let a = Math.floor(Math.random() * 1000);
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
    RevenueCard.id = "RC" + a;
    console.log(RevenueCard.id);
    RevenueCard.classList =
      " shadow-[0px_0px_10px_green] bg-green-500 rounded-lg h-30 relative";

    let h1 = document.createElement("h1");
    h1.innerHTML = "+" + montant.value + " DH";
    h1.classList =
      "pl-2 font-Georgia text-white font-black pb-4 text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)] montant";

    let pt = document.createElement("p");
    pt.classList = "text-xl text-white pl-3 pt-1 font-black titre";
    pt.innerHTML = titre.value;

    let pd = document.createElement("p");
    pd.classList = "text-md text-white pl-3 pt-1 description";
    pd.innerHTML = Description.value;
    let pDate = document.createElement("p");
    pDate.classList = "text-md text-white pl-3 pt-1 date";
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
  }

  setTimeout(() => {
    location.reload();
  }, 7000);
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
    RevenueCard.id = data.id;

    let h1 = document.createElement("h1");
    h1.textContent = "+" + data.montant + " DH";
    h1.classList =
      "pl-2 font-Georgia text-white font-black text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)] montant";
    let pt = document.createElement("p");
    pt.classList = "text-xl text-white pl-3 pt-1 font-black titre";
    pt.textContent = data.titre;

    let pd = document.createElement("p");
    pd.classList = "text-md text-white pl-3 pt-1 description";
    pd.textContent = data.description;

    let DateP = document.createElement("p");
    DateP.classList = "text-md text-white pl-3 pt-1 date";
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

  depenseArray.forEach((data) => {
    let DepenseCard = document.createElement("div");
    DepenseCard.classList =
      "bg-red-500 shadow-[0px_0px_10px_red] rounded-lg h-30 self-center relative z-1";
    DepenseCard.id = data.id;

    let h1 = document.createElement("h1");
    h1.textContent = "-" + data.montant + " DH";
    h1.classList =
      "pl-2 font-Georgia text-white font-black text-2xl text-shadow-[0px_3px_3px_rgb(0,0,0,0.3)] montant";
    let pt = document.createElement("p");
    pt.classList = "text-xl text-white pl-3 pt-1 font-black titre";
    pt.textContent = data.titre;
    let pd = document.createElement("p");
    pd.classList = "text-md text-white pl-3 pt-1 description";
    pd.textContent = data.description;
    let DateP = document.createElement("p");
    DateP.classList = "text-md text-white pl-3 pt-1 date";
    let trash = document.createElement("i");
    trash.classList = "fa-solid fa-trash absolute right-5 bottom-3";
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
  console.log("xi");
  if (e.target.classList.contains("fa-pen")) {
    const modifiePop = document.getElementById("modifie-container");
    modifiePop.classList.remove("hidden");

    editedCardId = e.target.parentElement.id;
    console.log(editedCardId);
  }
});
document.getElementById("close-modifie").addEventListener("click", (e) => {
  const modifiePop = document.getElementById("modifie-container");
  modifiePop.classList.add("hidden");
});
document.getElementById("annule").addEventListener("click", (e) => {
  const modifiePop = document.getElementById("modifie-container");
  modifiePop.classList.add("hidden");
});

function confirmModification() {
  if (!editedCardId) return;
  console.log(editedCardId);

  const newTitre = document.getElementById("Titre-modifie");
  const newDate = document.getElementById("date-modifie");
  const newDescription = document.getElementById("Description-modifie");
  const newMontant = document.getElementById("montant-modifie");

  const card = document.getElementById(editedCardId);

  const oldTitre = card.querySelector(".titre");
  console.log(oldTitre);
  const oldDate = card.querySelector(".date");
  const oldDescription = card.querySelector(".description");
  const oldMontant = card.querySelector(".montant");

  if (newTitre.value.trim() !== "") oldTitre.textContent = newTitre.value;
  console.log(oldTitre.textContent);
  if (newDate.value.trim() !== "") oldDate.textContent = newDate.value;
  if (newDescription.value.trim() !== "")
    oldDescription.textContent = newDescription.value;
  if (newMontant.value.trim() !== "")
    oldMontant.textContent =
      (card.classList.contains("bg-red-500") ? "-" : "+") +
      newMontant.value +
      " DH";

  const key = card.classList.contains("bg-green-500")
    ? "revenueItems"
    : "depenseItems";

  const array = JSON.parse(localStorage.getItem(key)) || [];
  const updatedArray = array.map((item) =>
    item.id === editedCardId
      ? {
          ...item,
          titre: newTitre.value || item.titre,
          date: newDate.value || item.date,
          description: newDescription.value || item.description,
          montant: newMontant.value || item.montant,
        }
      : item
  );

  localStorage.setItem(key, JSON.stringify(updatedArray));

  document.getElementById("modifie-container").classList.add("hidden");

  location.reload();
}

document.getElementById("cards-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    Swal.fire({
      title: "do you really want to delete this?",
      titleColor: "red",
      icon: "warning",
      confirmButtonText: "yes",
      showCancelButton: true
    }).then((result) => {
      if(result.isConfirmed){
        const card = e.target.parentElement;
    console.log("card");
    const isRevenue = card.classList.contains("bg-green-500");
    const key = isRevenue ? "revenueItems" : "depenseItems";
    const array = JSON.parse(localStorage.getItem(key)) || [];

    const updated = array.filter((item) => toString(item.id) !== toString(card.id));
    localStorage.setItem(key, JSON.stringify(updated));

    card.remove();
    if(array == []){location.reload}
      }
      else{
        Swal.fire({
      title: "your items are safe",
      icon: "success",
      confirmButtonText: "Okay",
    });
      }
    })
    
  }
});

let revenueItems = JSON.parse(localStorage.getItem("revenueItems")) || [];
let depenseItems = JSON.parse(localStorage.getItem("depenseItems")) || [];

let dataTodownload = {
  revenueItems,
  depenseItems,
};

const jsonData = JSON.stringify(dataTodownload, null, 2);

const blob = new Blob([jsonData], { type: "application/json" });
const url = URL.createObjectURL(blob);

const a = document.createElement("a");
document.body.appendChild(a);
a.textContent = "DOWNLOAD HERE YOUR INFOS HERE";
a.classList = "absolute top-[13%] left-[1%] text-blue-500 link z-[1]";
a.addEventListener("click", () => {
  a.href = url;
  a.download = "localStorageData.json";
  a.remove();
});

const icon = document.getElementById("icon");

document.addEventListener("mousemove", (e) => {
  icon.style.left = `${e.clientX}px`;
  icon.style.top = `${e.clientY}px`;
});
