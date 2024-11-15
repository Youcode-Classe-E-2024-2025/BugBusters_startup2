const searchParams = new URLSearchParams(window.location.search);
const someParam = searchParams.get("id");
console.log(someParam);
let text = localStorage.getItem("productData");
games = JSON.parse(text);
console.log(Object.values(games)[someParam].title);

document.getElementById("gamedetail").innerHTML += `
    <div class="flex flex-row gap-11 mr-16">
      <!-- game image carousel -->
      <div id="carousel" class="relative w-80 overflow-hidden">
        <div id="carousel-inner" class="flex transition-transform duration-500">
          ${[1, 2, 3]
            .map(
              () =>
                `<img src="${
                  Object.values(games)[someParam].images[0]
                }" alt="game class="w-80 h-auto rounded-lg"/>`
            )
            .join("")}
        </div>

        <!-- navigation buttons -->
        <button id="prevBtn" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-l">
          &lt;
        </button>
        <button id="nextBtn" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-r">
          &gt;
        </button>
      </div>

      <!-- Game Details -->
      <div>
        <h1 class="text-4xl mb-4">${Object.values(games)[someParam].title}</h1>
        <div class="space-y-2 text-2xl w-96">
          <p>Edition: Ultimate</p>
          <p>Platform: PC</p>
          <p>Bonuses: Story mode boosts, ingame items, bonus cash</p>
          <p>Release Date: Available Now </p>
        </div>

        <!-- price section -->
        <div class="flex items-center mt-4 space-x-3">
          <span class="bg-red-600 text-white px-2 py-1 rounded text-3xl p-3">
            -${Object.values(games)[someParam].discount}%
          </span>
          <span class="line-through text-gray-400">
            ${Object.values(games)[someParam].price} $US
          </span>
          <span class="text-2xl">
            ${(
              (1 - Object.values(games)[someParam].discount / 100) *
              Object.values(games)[someParam].price
            ).toFixed(2)} $US
          </span>
        </div>

        <!-- buttons -->
        <div class="flex space-x-4 mt-4">
          <button class="w-full bg-black hover:bg-gray-900 text-white py-2 px-4 rounded text-2xl">
            Add To Cart
          </button>
          <button class="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-2xl">
            Buy Now
          </button>
        </div>
      </div>
    </div>

    <!-- description section -->
    <h2 class="text-3xl mt-10">Description</h2>
    <p class="text-2xl mt-4 ml-10">
      ${Object.values(games)[someParam].longDescription}
    </p>
`;


const carouselInner = document.getElementById("carousel-inner");
const images = document.querySelectorAll("#carousel-inner img");
const totalImages = images.length;
let currentIndex = 0;
const firstClone = images[0].cloneNode(true);
const lastClone = images[totalImages - 1].cloneNode(true);
carouselInner.appendChild(firstClone);
carouselInner.insertBefore(lastClone, images[0]);
carouselInner.style.transform = `translateX(-320px)`;

function updateCarousel(direction) {
  if (direction === "next") {
    currentIndex++;
  } else {
    currentIndex--;
  }

  carouselInner.style.transition = "transform 0.5s ease-in-out";
  carouselInner.style.transform = `translateX(-${320 * (currentIndex + 1)}px)`;

  setTimeout(() => {
    if (currentIndex === totalImages) {
      currentIndex = 0;
      carouselInner.style.transition = "none";
      carouselInner.style.transform = `translateX(-320px)`;
    } else if (currentIndex < 0) {
      currentIndex = totalImages - 1;
      carouselInner.style.transition = "none";
      carouselInner.style.transform = `translateX(-${320 * totalImages}px)`;
    }
  }, 500);
}

document.getElementById("prevBtn").addEventListener("click", () => {
  updateCarousel("prev");
});
document.getElementById("nextBtn").addEventListener("click", () => {
  updateCarousel("next");
});
