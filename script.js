// ---------- LOGIN ----------
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "SHAHDHAN" && password === "MIYA1234") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("app").style.display = "block";

        // Set today's date automatically
        document.getElementById("date").valueAsDate = new Date();
    } else {
        document.getElementById("loginError").innerText =
            "❌ Wrong username or password";
    }
}

// ---------- CALCULATE TOTALS ----------
const shop = document.getElementById("shopCollection");
const photo = document.getElementById("photoCollection");
const purchase = document.getElementById("purchase");
const water = document.getElementById("water");

function updateSummary() {

    const shopValue = Number(shop.value) || 0;
    const photoValue = Number(photo.value) || 0;
    const purchaseValue = Number(purchase.value) || 0;
    const waterValue = Number(water.value) || 0;

    const totalCollection = shopValue + photoValue;
    const totalExpense = purchaseValue + waterValue;
    const profit = totalCollection - totalExpense;

    document.getElementById("totalCollection").innerText = totalCollection;
    document.getElementById("totalExpense").innerText = totalExpense;
    document.getElementById("profit").innerText = profit;
}

shop.addEventListener("input", updateSummary);
photo.addEventListener("input", updateSummary);
purchase.addEventListener("input", updateSummary);
water.addEventListener("input", updateSummary);
