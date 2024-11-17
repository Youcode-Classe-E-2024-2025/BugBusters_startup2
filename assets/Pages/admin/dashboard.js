let text = localStorage.getItem("productData");
games = JSON.parse(text);
let inst = localStorage.getItem("gamlib");
let install = JSON.parse(inst)
let j =0;
document.getElementById("total-games").innerText =Object.keys(games).length
document.getElementById("total-inst").innerText =Object.keys(install).length
for(let i=0;i<install.length-1;i++){
    j+=install[i].price;
}
document.getElementById("total-inco").innerText =install[j].price+" $"