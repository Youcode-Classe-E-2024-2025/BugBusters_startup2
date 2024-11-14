
let text = localStorage.getItem("productData");
games = JSON.parse(text);

function displayItems() {
    const productsList = document.getElementById("productsPageList");
    productsList.innerHTML = ''; 

    const gamesArray = Object.values(games);

    gamesArray.forEach(game => {
        productsList.innerHTML += `
            <a onclick="detailGen(${game})" class="justify-items-center transition duration-300 ease-in-out hover:scale-110" href="">
                <div class="text-xl">
                    <img src="${game.images}" width="250px" class="aspect-[280/373] border border-gray-500" alt="${game.shortDescription}">
                    <p class="text-gray-600"> Édition </p>
                    <p class="text-white">${game.title}</p>
                    <div class="flex justify-between">
                        <p class="bg-[#ff0000] w-20 text-center rounded-md text-white">-${game.discount}%</p>
                        <p class="text-gray-600 text-xs content-center">${game.price} $US</p>
                        <p class="text-white">${((1 - (game.discount / 100)) * game.price).toFixed(2)} $US</p>
                    </div>
                </div>
            </a>`;
            console.log(game);
    });
}

function detailGen(game){
    return game ;

}


function sortItemsByPrice() {
   
    const gamesArray = Object.values(games);

   
    gamesArray.sort((a, b) => a.price - b.price);

 
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

