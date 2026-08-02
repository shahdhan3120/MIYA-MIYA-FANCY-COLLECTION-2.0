import {
  db
} from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// ---------- LOGIN ----------
window.login = function () {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "SHAHDHAN" && password === "MIYA1234") {

        document.getElementById("loginBox").style.display = "none";
        document.getElementById("app").style.display = "block";

        document.getElementById("date").valueAsDate = new Date();

        loadRecords();

    } else {

        document.getElementById("loginError").innerHTML =
        "❌ Wrong Username or Password";

    }

};
const shop = document.getElementById("shopCollection");
const photo = document.getElementById("photoCollection");
const purchase = document.getElementById("purchase");
const water = document.getElementById("water");

function updateSummary(){

const shopValue = Number(shop.value)||0;
const photoValue = Number(photo.value)||0;
const purchaseValue = Number(purchase.value)||0;
const waterValue = Number(water.value)||0;

const totalCollection = shopValue + photoValue;

const totalExpense = purchaseValue + waterValue;

const profit = totalCollection-totalExpense;

document.getElementById("totalCollection").innerHTML=totalCollection;

document.getElementById("totalExpense").innerHTML=totalExpense;

document.getElementById("profit").innerHTML=profit;

}

shop.addEventListener("input",updateSummary);
photo.addEventListener("input",updateSummary);
purchase.addEventListener("input",updateSummary);
water.addEventListener("input",updateSummary);
