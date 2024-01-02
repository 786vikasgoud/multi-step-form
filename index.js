let objet = {
  planname: "",
  period: "",
  price: "",
  service: [],
};
let amount = 0;
let alertselected = 0;
//   document.getElementsByClassName("page-1")[0].style.display = "none";
let page = [];
for (let i = 1; i <= 5; i++) {
  page.push(document.getElementsByClassName(`page-${i}`)[0]);
}
// circle colour

let circle = document.querySelectorAll(".circle");

circle[0].style.backgroundColor = "hsl(206, 94%, 87%)";
// console.log(circle[0]);

//

let back = document.getElementsByClassName("back1")[0];
// back.style.display = "none";
back.style.opacity = 0;

var next = document.getElementsByClassName("next1");
next[0].addEventListener("click", nextPage);

var clickCount = 0;
function nextPage(e) {
  if (clickCount === 0) {
    circle[clickCount].style.backgroundColor = "rgba(255, 0, 0, 0)";
    displayCard2();
    clickCount++;
  } else if (clickCount === 1) {
    circle[clickCount].style.backgroundColor = "rgba(255, 0, 0, 0)";
    if (alertselected === 0) {
      alert("please select the plan");
      return;
    }
    displayCard3();
    clickCount++;
  } else if (clickCount === 2) {
    circle[clickCount].style.backgroundColor = "rgba(255, 0, 0, 0)";
    displayCard4();
    clickCount++;
  } else if (clickCount === 3) {
    circle[clickCount].style.backgroundColor = "rgba(255, 0, 0, 0)";
    displayCard5();
  }
}

function displayCard2() {
  page[0].style.display = "none"; //1
  page[1].style.display = "block"; //2
  back.style.display = "block";
  back.style.opacity = 100;
  circle[1].style.backgroundColor = "hsl(206, 94%, 87%)";
}
function displayCard3() {
  page[1].style.display = "none";
  page[2].style.display = "block";
  circle[2].style.backgroundColor = "hsl(206, 94%, 87%)";

  // next[0].innerText = "Next step";
}
function displayCard4() {
  page[2].style.display = "none";
  createCard4();
  next[0].innerText = "conform";
  page[3].style.display = "block";
  circle[3].style.backgroundColor = "hsl(206, 94%, 87%)";
}
function displayCard5() {
  page[3].style.display = "none";
  page[4].style.display = "block";
  next[0].style.display = "none";
  back.style.display = "none";
  circle[3].style.backgroundColor = "hsl(206, 94%, 87%)";
}

back.addEventListener("click", backstep);
function backstep() {
  if (clickCount === 0) {
    back.style.opacity = 0;
    page[0].style.display = "block";
  } else if (clickCount === 1) {
    circle[clickCount].style.backgroundColor = "rgba(255, 0, 0, 0)";
    clickCount--;
    circle[clickCount].style.backgroundColor = "hsl(206, 94%, 87%)";
    page[1].style.display = "none";
    page[0].style.display = "block";
    back.style.opacity = 0;
  } else if (clickCount === 2) {
    circle[clickCount].style.backgroundColor = "rgba(255, 0, 0, 0)";
    clickCount--;
    circle[clickCount].style.backgroundColor = "hsl(206, 94%, 87%)";
    page[2].style.display = "none";
    page[1].style.display = "block";
  } else if (clickCount === 3) {
    circle[clickCount].style.backgroundColor = "rgba(255, 0, 0, 0)";
    clickCount--;
    circle[clickCount].style.backgroundColor = "hsl(206, 94%, 87%)";
    page[3].style.display = "none";
    page[2].style.display = "block";
    next[0].innerText = "Next step";
  } else if (clickCount === 4) {
    circle[clickCount].style.backgroundColor = "rgba(255, 0, 0, 0)";
    clickCount--;
    circle[clickCount].style.backgroundColor = "hsl(206, 94%, 87%)";
    page[4].style.display = "none";
    page[3].style.display = "block";
  }
}

/////////////////////////

//event listen for toggle
document
  .getElementsByClassName("switch")[0]
  .addEventListener("change", switched);

var yearly = document.getElementsByClassName("yearly");
Array.from(yearly).forEach((year) => {
  year.style.display = "none";
});

var offers = document.getElementsByClassName("offer");
Array.from(offers).forEach((offer) => {
  offer.style.display = "none";
});

let alpa = true;
function switched(e) {
  if (e.target.checked) {
    alpa = false;
    var prices = document.getElementsByClassName("price");
    Array.from(prices).forEach((price) => {
      price.style.display = "none";
    });

    var yearly = document.getElementsByClassName("yearly");
    Array.from(yearly).forEach((year) => {
      year.style.display = "block";
    });

    var offers = document.getElementsByClassName("offer");
    Array.from(offers).forEach((offer) => {
      offer.style.display = "block";
    });
  } else {
    var prices = document.getElementsByClassName("price");
    Array.from(prices).forEach((price) => {
      price.style.display = "block";
    });

    var yearly = document.getElementsByClassName("yearly");
    Array.from(yearly).forEach((year) => {
      year.style.display = "none";
    });

    var offers = document.getElementsByClassName("offer");
    Array.from(offers).forEach((offer) => {
      offer.style.display = "none";
    });
  }
}

let plan = document.querySelectorAll(".selected")[0];
plan.addEventListener("click", planselected);
function planselected(e) {
  let name = e.target.className;
  alertselected = 1;
  //
  let chbackground = document.querySelectorAll(".selected");
  let chang = document.getElementsByClassName(e.target.className);
  // console.log(chbackground[0].children[1]);
  for (let i = 0; i < 3; i++) {
    chbackground[0].children[i].style.backgroundColor = "white";
  }
  chang[0].style.backgroundColor = "hsl(229, 24%, 87%)";
  //

  if (name === "plan Advanceplan") {
    Advanceplan();
  } else if (name === "plan Arcadeplan") {
    Arcadeplan();
  } else if (name === "plan Proplan") {
    Proplan();
  }
}
function Advanceplan() {
  if (alpa === true) {
    objet.planname = "Advance";
    objet.period = "Monthly";
    objet.price = "$12/mo";
  } else {
    objet.planname = "Advance";
    objet.period = "Yearly";
    objet.price = "$120/yr";
  }
  //   console.log(objet);
}
function Arcadeplan() {
  if (alpa === true) {
    objet.planname = "Arcade";
    objet.period = "Monthly";
    objet.price = "$9/mo";
  } else {
    objet.planname = "Arcade";
    objet.period = "Yearly";
    objet.price = "$90/yr";
  }
  //   console.log(objet);
}
function Proplan() {
  if (alpa === true) {
    console.log("mo");
    objet.planname = "Pro";
    objet.period = "Monthly";
    objet.price = "$15/mo";
  } else {
    console.log("yr");
    objet.planname = "Pro";
    objet.period = "Yearly";
    objet.price = "$150/yr";
  }
}

let services = document.querySelectorAll(".services")[0];
services.addEventListener("change", selectedservices);
function selectedservices(e) {
  if (e.target.checked) {
    objet.service.push(e.target.id);
  } else {
    var value = e.target.id;
    for (let i = 0; i < objet.service.length; i++) {
      if (objet.service[i] === value) {
        objet.service.splice(i, 1);
      }
    }
  }
}
function createCard4() {
  let page4 = document.querySelector(".page-4");
  let planname = document.querySelector(".plan-name");
  let planprice = document.querySelector(".plan-price");
  let name = objet.planname;
  let period = objet.period;
  let price = objet.price;
  planname.innerText = `${name}(${period})`;
  planprice.innerText = `+${price}`;

  let servicename = document.querySelectorAll(".service-name");
  let serviceprice = document.querySelectorAll(".service-price");

  for (let i = 0; i < objet.service.length; i++) {
    servicename[i].innerText = objet.service[i];
    let X = objet.service[i][0];
    if (period === "Monthly") {
      if (X[0] === "O") {
        serviceprice[i].innerText = "+$1/mo";
        amount = amount + 1;
      } else if (X[0] === "L") {
        serviceprice[i].innerText = "+$2/mo";
        amount = amount + 2;
      } else if (X[0] === "C") {
        serviceprice[i].innerText = "+$2/mo";
        amount = amount + 2;
      }
    } else if (period === "Yearly") {
      if (X[0] === "O") {
        serviceprice[i].innerText = "+$10/yr";
        amount = amount + 10;
      } else if (X[0] === "L") {
        serviceprice[i].innerText = "+$20/yr";
        amount = amount + 20;
      } else if (X[0] === "C") {
        serviceprice[i].innerText = "+$20/yr";
        amount = amount + 20;
      }
    }
  }

  let total = document.getElementsByClassName("total");
  let totalprice = document.getElementsByClassName("totalprice");
  console.log("total.innerText");
  total[0].innerText = `Total ${period}`;

  let am = "";
  for (let i = 0; i < price.length; i++) {
    if (price[i] >= 0 && price[i] <= 9) {
      am = am + price[i];
      console.log(price[i]);
    }
  }
  let check = amount;
  amount = amount + Number(am);
  if (check > 9) {
    am = `+$${amount}/yr`;
  } else {
    am = `+$${amount}/mo`;
  }
  totalprice[0].innerText = am;
}
