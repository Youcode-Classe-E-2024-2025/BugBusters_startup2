
/////////////////////////// start of PMp /////////////////////////

// Object.keys(games)[Object.keys(games).length-1] gets the last key string in object
function gameAdd(){
    let gameIndex= Number(Object.keys(games)[Object.keys(games).length-1].substr(4)); // removes the first 4 string coverts the rest to a number
    let newIndex = gameIndex;
    newIndex++;
    let newKey= "game"+newIndex;
    let newGame={[newKey]:{
        title: document.forms["addForm"]["addTitle"].value,
        category: "Action-Adventure",
        images:[document.forms["addForm"]["fileUpload"].files[0].name],
        shortDescription: document.forms["addForm"]["addShortInfo"].value,
        longDescription: document.forms["addForm"]["addLongDescription"].value,
        price: document.forms["addForm"]["addPrice"].value,
        discount: document.forms["addForm"]["addDescount"].value,
        discountQuantity: 180}
    }
    Object.assign(games,newGame);
    saveGamesToStorage()


}

function delGame(gamid) {
    delete games[gamid];
    saveGamesToStorage();
    renderGameList();
}
function vGame(gamid){
    document.forms["editForm"]["editTitle"].value =games[gamid].title;
    document.forms["editForm"]["editShortInfo"].value =games[gamid].shortDescription;
    document.forms["editForm"]["editLongDescription"].value =games[gamid].longDescription;
    document.forms["editForm"]["editPrice"].value =games[gamid].price;
    document.forms["editForm"]["editDescount"].value =games[gamid].discount;
    
}
function editGame(gamid){
    games[gamid]={
        title: document.forms["editForm"]["editTitle"].value,
        category: "Action-Adventure",
        images:games[gamid].images,
        shortDescription: document.forms["editForm"]["editShortInfo"].value,
        longDescription: document.forms["editForm"]["editLongDescription"].value,
        price: document.forms["editForm"]["editPrice"].value,
        discount: document.forms["editForm"]["editDescount"].value,
        discountQuantity: 180
    }
    saveGamesToStorage();
    renderGameList();
};
function renderGameList() {
    document.getElementById("pmList").innerHTML = '';
    for (let n = 1; n <= Object.keys(games).length; n++) {
        document.getElementById("pmList").innerHTML += `
            <div class="flex bg-white text-black text-3xl rounded-3xl p-6 h-min">
                <div class="justify-items-center">
                    <img class="ml-3" src="${games[Object.keys(games)[n-1]].images}" alt="${games[Object.keys(games)[n-1]].shortDescription}" width="100">
                </div>
                <div class="min-w-[42rem] ml-6">
                    <div class="grid gap-3">
                        <div>
                            <p class="text-3xl font-medium">${games[Object.keys(games)[n-1]].title}</p>
                            <p class="text-xl">Type:<span class="ml-2">${games[Object.keys(games)[n-1]].category}</span></p>
                            <p class="text-xl">Price:<span class="ml-2">${games[Object.keys(games)[n-1]].price} $US</span></p>
                        </div>
                        <div class="flex text-xl gap-10">
                            <button class="delete-btn" data-id="${Object.keys(games)[n-1]}">Delete</button>
                            <button onclick="blureditToggel(),vGame(this.getAttribute('data-id'))" class="edit-btn" data-id="${Object.keys(games)[n-1]}">Edit</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const gamid = e.target.getAttribute('data-id');
            delGame(gamid);
        });
    });
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const gamid = e.target.getAttribute('data-id');
            document.getElementById("editGameBtn").setAttribute("data-id",gamid);//sets an attrebute value game1 for exemple
        });
    });
}


let text = localStorage.getItem("productData");
games = JSON.parse(text);
renderGameList();

/////////////////////////// end of PMp //////////////////////
