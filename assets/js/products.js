let text = localStorage.getItem("productData");
games = JSON.parse(text);

for (let n = 1; n <= Object.keys(games).length; n++) {
    document.getElementById("productsPageList").innerHTML+=`
                    <a href=""><div class="text-2xl">
                        <img src="${games[Object.keys(games)[n-1]].images}" width="280px" height="373px" alt="${games[Object.keys(games)[n-1]].shortDescription}">
                        <p class="text-gray-600"> Édition </p>
                        <p class="text-white">${games[Object.keys(games)[n-1]].title}</p>
                        <div class="flex gap-2">
                            <p class="bg-[#ff0000] w-20 text-center rounded-md text-white">-20%</p>
                            <p class="text-gray-600 text-xs content-center">${games[Object.keys(games)[n-1]].price} $US </p>
                            <p class="text-white ">34,99 $US</p>
                        </div>
                    </div></a>`
}