const searchParams = new URLSearchParams(window.location.search);
const someParam = searchParams.get("id");
console.log(someParam);
let text = localStorage.getItem("productData");
games = JSON.parse(text);
console.log(Object.values(games)[someParam].title);


document.getElementById("gamedetail").innerHTML += `
    <div class="flex">
          <!-- Game Image -->
          <img
            src="${Object.values(games)[someParam].images[0]}"
            alt="Game Cover"
            class="w-80 h-auto rounded-lg mr-8"
          />
          <!-- Game Details -->
          <div>
            <h1 class="text-4xl mb-4">${
              Object.values(games)[someParam].title
            }</h1>

            <div class="space-y-2 text-2xl w-72">
              <p>Edition: Ultimate</p>
              <p>Platform: PC</p>
              <p>Bonuses: Story mode boosts, in-game items, bonus cash</p>
              <p>Release Date: Available Now</p>
            </div>

            <!-- Price Section -->
            <div class="flex items-center mt-4 space-x-3">
              <span class="bg-red-600 text-white px-2 py-1 rounded text-3xl p-3"
                >-${Object.values(games)[someParam].discount}%</span
              >
              <span class="line-through text-gray-400">${
                Object.values(games)[someParam].price
              } $US</span>
              <span class="text-2xl">${(
                (1 - Object.values(games)[someParam].discount / 100) *
                Object.values(games)[someParam].price
              ).toFixed(2)} $US</span>
            </div>

            <!-- Buttons -->
            <div class="flex space-x-4 mt-4">
              <button
                class="w-full bg-black hover:bg-gray-900 text-white py-2 px-4 rounded text-2xl"
              >
                Add To Cart
              </button>
              <button
                class="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-2xl"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <!-- Description Section -->
        <h2 class="text-3xl mt-10">Description</h2>
        <p class="text-2xl mt-4 ml-10 ">
          Red Dead Redemption 2 takes you on an epic journey through the
          American frontier, blending rich storytelling with groundbreaking
          gameplay in an expansive, living world. Set in 1899, as the era of
          outlaws nears its end, you step into the boots of Arthur Morgan, a
          hardened member of the Van der Linde gang, who must navigate loyalty,
          survival, and betrayal in the face of lawmen, rival gangs, and the
          relentless push of civilization. Experience breathtaking
          environments—from snow-capped mountains to lush forests, bustling
          towns to vast plains—and a world filled with complex characters and
          countless stories to uncover. Engage in thrilling shootouts, master
          horseback riding, and test your survival skills as you hunt, fish, and
          scavenge to sustain yourself and your gang. Key Features: Deep
          Storyline: Witness Arthur’s struggle between his loyalty to the gang
          and his own ideals as he’s forced to confront the life he’s chosen.
          Expansive Open World: Discover one of the most immersive and dynamic
          open worlds ever created, filled with unpredictable weather, diverse
          wildlife, and lifelike ecosystems. Player Choices Matter: Your
          decisions shape Arthur’s journey and the world around him, influencing
          the way NPCs react, relationships unfold, and even the fate of the Van
          der Linde gang. Realistic Gameplay Mechanics: Enjoy an unprecedented
          level of detail in everything from hunting and crafting to shootouts
          and interactions, creating a gameplay experience that’s both realistic
          and rewarding. Multiplayer Mode - Red Dead Online: Dive into Red Dead
          Online, where you can team up with other players, complete missions,
          and experience the wild frontier with friends in an evolving online
          world. Whether you’re out to explore the untamed wilderness or engage
          in the heart-stopping action, Red Dead Redemption 2 offers an
          unforgettable journey that redefines the boundaries of open-world
          gaming. Prepare to live the outlaw experience like never before!
        </p>
`;