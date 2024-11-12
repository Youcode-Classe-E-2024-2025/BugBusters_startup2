function gameAdd() {
    const newGame = {
        title: document.forms["addForm"]["addTitle"].value,
        category: "Action-Adventure",
        images: [document.forms["addForm"]["fileUpload"].files[0].name],
        shortDescription: document.forms["addForm"]["addShortInfo"].value,
        longDescription: document.forms["addForm"]["addLongDescription"].value,
        price: document.forms["addForm"]["addPrice"].value,
        discount: document.forms["addForm"]["addDescount"].value,
        discountQuantity: 180
    };
    games.push(newGame);
    saveGamesToStorage();
}

function delGame(index) {
    games.splice(index, 1);
    saveGamesToStorage();
    renderGameList();
}

function vGame(index) {
    const game = games[index];
    document.forms["editForm"]["editTitle"].value = game.title;
    document.forms["editForm"]["editShortInfo"].value = game.shortDescription;
    document.forms["editForm"]["editLongDescription"].value = game.longDescription;
    document.forms["editForm"]["editPrice"].value = game.price;
    document.forms["editForm"]["editDescount"].value = game.discount;
}

function editGame(index) {
    games[index] = {
        title: document.forms["editForm"]["editTitle"].value,
        category: "Action-Adventure",
        images: games[index].images,  // Keep the images unchanged
        shortDescription: document.forms["editForm"]["editShortInfo"].value,
        longDescription: document.forms["editForm"]["editLongDescription"].value,
        price: document.forms["editForm"]["editPrice"].value,
        discount: document.forms["editForm"]["editDescount"].value,
        discountQuantity: 180
    };
    saveGamesToStorage();
    renderGameList();
}

function renderGameList() {
    document.getElementById("pmList").innerHTML = '';
    games.forEach((game, index) => {
        document.getElementById("pmList").innerHTML += `
            <div class="flex bg-white text-black text-3xl rounded-3xl p-6 h-min">
                <div class="justify-items-center">
                    <img class="ml-3" src="${game.images}" alt="${game.shortDescription}" width="100">
                </div>
                <div class="min-w-[42rem] ml-6">
                    <div class="grid gap-3">
                        <div>
                            <p class="text-3xl font-medium">${game.title}</p>
                            <p class="text-xl">Type:<span class="ml-2">${game.category}</span></p>
                            <p class="text-xl">Price:<span class="ml-2">${game.price} $US</span></p>
                        </div>
                        <div class="flex text-xl gap-10">
                            <button class="delete-btn" data-index="${index}">Delete</button>
                            <button onclick="blureditToggel(), vGame(${index})" class="edit-btn" data-index="${index}">Edit</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            delGame(index);
        });
    });
    
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            document.getElementById("editGameBtn").setAttribute("data-index", index);
        });
    });
}

function saveGamesToStorage() {
    localStorage.setItem("productData", JSON.stringify(games));
}
renderGameList();