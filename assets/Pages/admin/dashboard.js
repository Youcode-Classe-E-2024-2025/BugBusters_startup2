let text = localStorage.getItem("productData");
games = JSON.parse(text);
document.getElementById("total-games").innerText =Object.keys(games).length