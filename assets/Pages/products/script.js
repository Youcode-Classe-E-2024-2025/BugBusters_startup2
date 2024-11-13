let text = localStorage.getItem("productData");
games = JSON.parse(text);

for (let n = 1; n <= Object.keys(games).length; n++) {
    document.getElementById("productsPageList").innerHTML+=
                `<section id="productsPageList" class="flex justify-center align-middle w-full flex-wrap">
                    <div class="w-72 mx-10 mb-10 text-2xl">
                        <img src="${games[Object.keys(games)[n-1]].images}" alt="${games[Object.keys(games)[n-1]].shortDescription}">
                        <p class="text-gray-600"> Édition </p>
                        <p class="text-white">${games[Object.keys(games)[n-1]].title}</p>
                        <div class="flex gap-2">
                            <p class="bg-[#ff0000] w-20 text-center rounded-md text-white">-20%</p>
                            <p class="text-gray-600 text-xs content-center">${games[Object.keys(games)[n-1]].price} $US </p>
                            <p class="text-white ">34,99 $US</p>
                        </div>
                    </div>
                </section>`
}
// document.getElementById("pmList").innerHTML = '';
for (let n = 1; n <= Object.keys(games).length; n++) {
    document.getElementById("pmList").innerHTML += `
        <div class="flex bg-white text-black text-3xl rounded-3xl p-6 h-min">
            <div class="justify-items-center">
                <img class="ml-3" src="" alt="" width="100">
             </div>
            <div class="min-w-[42rem] ml-6">
                <div class="grid gap-3">
                    <div>
                        <p class="text-3xl font-medium"></p>
                        <p class="text-xl">Type:<span class="ml-2">${games[Object.keys(games)[n-1]].category}</span></p>
                        <p class="text-xl">Price:<span class="ml-2"> $US</span></p>
                    </div>
                    <div class="flex text-xl gap-10">
                        <button class="delete-btn" data-id="${Object.keys(games)[n-1]}">Delete</button>
                        <button onclick="blureditToggel(),vGame(this.getAttribute('data-id'))" class="edit-btn" data-id="${Object.keys(games)[n-1]}">Edit</button>
                    </div>
                </div>
            </div>
        </div>`;
}