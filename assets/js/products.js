let text = localStorage.getItem("productData");
games = JSON.parse(text);

for (let n = 1; n <= Object.keys(games).length; n++) {
    document.getElementById("productsPageList").innerHTML+=`
                    <a class="justify-items-center" href=""><div class="text-xl">
                        <img src="${games[Object.keys(games)[n-1]].images}" width="250px" class="aspect-[280/373] border border-gray-500" alt="${games[Object.keys(games)[n-1]].shortDescription}">
                        <p class="text-gray-600"> Édition </p>
                        <p class="text-white">${games[Object.keys(games)[n-1]].title}</p>
                        <div class="flex justify-between">
                            <p class="bg-[#ff0000] w-20 text-center rounded-md text-white">-${games[Object.keys(games)[n-1]].discount}%</p>
                            <p class="text-gray-600 text-xs content-center">${games[Object.keys(games)[n-1]].price} $US </p>
                            <p class="text-white ">${((1-(games[Object.keys(games)[n-1]].discount/100))*games[Object.keys(games)[n-1]].price).toFixed(2)} $US</p>
                        </div>
                    </div></a>`
}