
let text = localStorage.getItem("productData");
games = JSON.parse(text);

function displayItems() {
    const productsList = document.getElementById("productsPageList");
    productsList.innerHTML = ''; 

    const gamesArray = Object.values(games);
    t=0
    gamesArray.forEach(game => {
        productsList.innerHTML += `
            <a class="justify-items-center transition duration-300 ease-in-out hover:scale-110" href="">
                <div class="text-xl">
                    <img src="${game.images[0]}" width="250px" class="aspect-[280/373] border border-gray-500" alt="${game.shortDescription}">
                    <p class="text-gray-600"> Édition </p>
                    <p class="text-white">${game.title}</p>
                    <div class="flex justify-between">
                        <p id="sold" class="bg-[#ff0000] w-20 text-center rounded-md text-white">-${game.discount}%</p>
                        <p class="text-gray-600 text-xs content-center line-through">${game.price} $US</p>
                        <p class="text-white">${((1 - (game.discount / 100)) * game.price).toFixed(2)} $US</p>
                    </div>
                </div>
            </a>`;
            t++;
    });
}

function detailGen(ga){
    // console.log(Object.values(games)[ga]);
    const url = `/assets/Pages/product_details/product_details.html?id=${ga}`;  // Create the URL with the ID as a query parameter
    window.location.href = url;  // Redirect to the new page with the ID in the URL
}


function sortItemsByPrice() {
   
    const gamesArray = Object.values(games);

   
    gamesArray.sort((a, b) => ((1 - (a.discount / 100)) * a.price).toFixed(2) - ((1 - (b.discount / 100)) * b.price).toFixed(2));

 
    games = gamesArray.reduce((obj, game, index) => {
        obj[`game${index + 1}`] = game;
        return obj;
    }, {});

    displayItems();
}


function sortItemsByTitle() {
    const gamesArray = Object.values(games);
    gamesArray.sort((a, b) => a.title.localeCompare(b.title));
    games = gamesArray.reduce((obj, game, index) => {
        obj[`game${index + 1}`] = game;
        return obj;
    }, {});

    displayItems();
}

document.getElementById('sortPrex').addEventListener('change', function() {
    const selectedOption = this.value;
    if (selectedOption === 'price') {
        sortItemsByPrice();
    } 
    else if (selectedOption === 'title') {
        sortItemsByTitle();
    }
});

document.getElementById('sortPrex').addEventListener('change', function() {
    const selectedOption = this.value;
    if (selectedOption === 'price') {
        sortItemsByPrice();
    } else if (selectedOption === 'title') {
        sortItemsByTitle();
    }
});

displayItems();


// select 
const sortSelect = document.getElementById('sortPrex');
function toggleSortOptions() {
    const options = sortSelect.getElementsByTagName('option');
    if (sortSelect.value === 'sorte') {
        options[0].style.display = 'none'; 
        options[1].style.display = 'block'; 
        options[2].style.display = 'block'; 
    } else {
        options[0].style.display = 'none';  
        options[1].style.display = 'block';  
        options[2].style.display = 'block';
    }
}
sortSelect.addEventListener('change', toggleSortOptions);
toggleSortOptions();


function searchItems() {
    const searchTerm = document.getElementById("Search").value.trim().toLowerCase();

    if (searchTerm !== "") {
        filterItems(searchTerm);
    } else {
        closePopup();
    }
}

function filterItems(searchTerm) {
    const filteredGames = Object.values(games).filter(game => {
        return game.title.toLowerCase().includes(searchTerm) || game.shortDescription.toLowerCase().includes(searchTerm);
    });

    if (filteredGames.length > 0) {
        showPopup(filteredGames);
    } else {
        closePopup();
    }
}

function showPopup(filteredGames) {
    const resultsList = document.getElementById("searchResultsList");
    resultsList.innerHTML = '';

    filteredGames.forEach(game => {
        const resultItem = document.createElement('li');
        resultItem.classList.add('flex', 'items-center', 'space-x-4');

        resultItem.innerHTML = `
            <img src="${game.images}" class="h-20 w-18 object-cover rounded-md" alt="${game.title}">
            <div>
                <p class="text-lg text-white font-semibold">${game.title}</p>
                <p class="text-sm text-gray-300">${game.shortDescription}</p>
                <p class="text-sm text-red-600">${((1 - (game.discount / 100)) * game.price).toFixed(2)} $US</p>
            </div>
        `;
        resultsList.appendChild(resultItem);
    });

    document.getElementById("searchResultsPopup").classList.add("bg-black", "bg-opacity-90");
    document.getElementById("popupContent").classList.add("bg-gray-800", "text-white");

    document.getElementById("searchResultsPopup").classList.remove("hidden");
}

function closePopup(event = null) {
    if (event && event.target.id === "searchResultsPopup") {
        document.getElementById("searchResultsPopup").classList.add("hidden");
    } else {
        document.getElementById("searchResultsPopup").classList.add("hidden");
    }
}


function cartpopup() {
    document.getElementById("cartPopup").classList.remove("hidden");
}

function closeCartPopup(event) {
    if (event.target === document.getElementById("cartPopup") || event.target.closest('button') === null) {
        document.getElementById("cartPopup").classList.add("hidden");
    }
}

// Example function to add items to cart (You can customize it based on your logic)
function addToCart(item) {
    const cartItemsList = document.getElementById("cartItemsList");
    const newItem = document.createElement("li");
    newItem.textContent = item.name + " - $" + item.price;
    cartItemsList.appendChild(newItem);
}
