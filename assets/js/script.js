function blurToggel(){
    document.getElementById("PM").classList.toggle("blur-md");
    document.getElementById("add_form").classList.toggle("hidden");
    document.getElementById("remblur_btn").classList.toggle("hidden");
};
function blureditToggel(){
    document.getElementById("PM").classList.toggle("blur-md");
    document.getElementById("edit_form").classList.toggle("hidden");
    document.getElementById("remblur_btn").classList.toggle("hidden");
};

let games = {
    game1: {
        title: "Star Wars Jedi",
        category: "Action",
        images:["../../imges/products/1.webp","../imges/products/ST2.webp","../imges/products/ST3.webp"],
        shortDescription: "Embark on a captivating journey through the Star Wars universe as a Jedi Padawan.",
        longDescription: "Play as a young Jedi who narrowly escaped the Jedi purge, journeying across various planets in the galaxy. Master the art of lightsaber combat and unleash powerful Force abilities as you fight Imperial forces, ancient foes, and uncover mysteries from the galaxy’s past. Encounter allies and enemies alike in a quest to rebuild the Jedi Order, all while exploring ancient forests, windy cliffs, and haunting jungles in stunningly crafted environments.",
        price: 49.99,
        discount: 10,
        discountQuantity: 100
    },
    game2: {
        title: "Counter-Strike 2 (CS2)",
        category: "Shooter",
        images:["../../imges/products/2.webp","../imges/products/CS2.webp","../imges/products/CS3.webp"],
        shortDescription: "Dive into an immersive, tactical shooting experience with enhanced visuals and mechanics.",
        longDescription: "Counter-Strike 2 offers a redefined experience of the renowned first-person shooter series. Players are challenged to engage in intense strategic battles where teamwork and accuracy are crucial. Featuring improved graphics, physics, and updated mechanics, CS2 brings a fresh look to classic maps and introduces new gameplay elements that reward skill and strategic thinking. Whether you’re defusing bombs or rescuing hostages, each match is a battle of wits and reflexes in this competitive shooter.",
        price: 29.99,
        discount: 15,
        discountQuantity: 200
    },
    game3: {
        title: "GTA 5",
        category: "Open World",
        images:["../../imges/products/3.webp","../imges/products/GT52.webp","../imges/products/GT53.webp"],
        shortDescription: "Explore the iconic open-world adventure of Los Santos and Blaine County.",
        longDescription: "GTA 5 is a sprawling action-adventure game set in the dynamic and immersive world of Los Santos. Follow three diverse protagonists as they navigate the criminal underworld, each with unique skills and intertwining storylines. With endless activities, from car chases and heists to leisure activities like golf and scuba diving, GTA 5 offers an unparalleled experience in open-world storytelling and freedom. Experience high-stakes missions, gripping heists, and a richly detailed world that feels alive.",
        price: 59.90,
        discount: 20,
        discountQuantity: 150
    },
    game4: {
        title: "Red Dead Redemption 2",
        category: "Adventure",
        images:["../../imges/products/4.webp","../imges/products/RE2.webp","../imges/products/RE3.webp"],
        shortDescription: "Embark on an unforgettable journey through America's untamed frontier.",
        longDescription: "Play as Arthur Morgan, an outlaw seeking redemption and survival in the rugged American heartland. Red Dead Redemption 2 offers a meticulously crafted open world filled with intricate character interactions, immersive environments, and realistic wildlife. As a member of the Van der Linde gang, experience the rise and fall of a group of outlaws battling lawmen, rival gangs, and their own struggles in a changing world. The game’s breathtaking graphics, attention to detail, and emotional depth make it a masterpiece of storytelling and exploration.",
        price: 39.99,
        discount: 25,
        discountQuantity: 80
    },
    game5: {
        title: "Assassin's Creed",
        category: "Action-Adventure",
        images:["../../imges/products/5.webp","../imges/products/AS2.webp","../imges/products/AS3.webp"],
        shortDescription: "Travel back in time and step into the role of a master assassin in epic historical settings.",
        longDescription: "Assassin’s Creed allows you to relive historical events through the eyes of a skilled assassin. Each entry takes you to a different period and place, from ancient Egypt to revolutionary Paris, where you’ll meet historical figures and uncover hidden secrets. Use stealth, strategy, and agility to dismantle powerful enemies and reshape history. The franchise combines rich storytelling, breathtaking locations, and advanced gameplay mechanics, making it a captivating journey through the past.",
        price: 45.00,
        discount: 10,
        discountQuantity: 120
    },
    game6: {
        title: "Rise of the Tomb Raider",
        category: "Action-Adventure",
        images:["../../imges/products/6.webp","../imges/products/RI2.webp","../imges/products/RI3.webp"],
        shortDescription: "Embark on a thrilling adventure with Lara Croft as she uncovers ancient mysteries.",
        longDescription: "Join Lara Croft in her quest to uncover the secrets of a lost city in Siberia. In Rise of the Tomb Raider, Lara must use her survival instincts, weaponry, and archaeological skills to face deadly challenges, treacherous weather, and powerful enemies. This game offers an emotional journey, breathtaking landscapes, and puzzles that challenge players’ minds. With stunning visuals and an immersive storyline, this is one of the finest Tomb Raider adventures yet.",
        price: 35.00,
        discount: 15,
        discountQuantity: 90
    },
    game7: {
        title: "Fortnite",
        category: "Battle Royale",
        images:["../../imges/products/7.webp","../imges/products/FO2.webp","../imges/products/FO3.webp"],
        shortDescription: "Jump into a vibrant battle royale experience full of adventure and challenges.",
        longDescription: "Fortnite is a fast-paced, multiplayer game that combines battle royale excitement with unique building mechanics. Drop into an ever-changing world, explore diverse locations, and engage in dynamic combat with other players to become the last one standing. Customize your character, team up with friends, and experience seasonal events that bring fresh content and storylines. Known for its colorful graphics, crossovers with pop culture, and creative possibilities, Fortnite has redefined online multiplayer gaming.",
        price: 0.00,
        discount: 0,
        discountQuantity: 0
    },
    game8: {
        title: "Dragon Age: The Velguard",
        category: "RPG",
        images:["../../imges/products/8.webp","../imges/products/DR2.webp","../imges/products/DR3.webp"],
        shortDescription: "Enter a world of magic and myth, where your choices shape the fate of nations.",
        longDescription: "Dragon Age: The Velguard transports players to Thedas, a world filled with magic, political intrigue, and looming threats. Craft your hero's path, ally with powerful warriors, and decide the future of kingdoms as you navigate complex relationships and confront dark forces. With deep lore, expansive exploration, and strategic combat, The Velguard offers an unforgettable RPG experience where your decisions matter.",
        price: 49.99,
        discount: 20,
        discountQuantity: 100
    },
    game9: {
        title: "Rabbids Volcano Panic",
        category: "Party",
        images:["../../imges/products/9.webp","../imges/products/RA2.webp","../imges/products/RA3.webp"],
        shortDescription: "Join the chaotic Rabbids in a frantic race for survival on a volcanic island.",
        longDescription: "Rabbids Volcano Panic invites players to escape an erupting island with hilarious challenges and unpredictable obstacles. Join the mischievous Rabbids as they race to survive, dodge lava flows, and cause chaos. This action-packed, family-friendly game offers a fun mix of strategy, humor, and fast-paced gameplay, providing a unique take on the Rabbids’ antics in a tropical volcanic setting.",
        price: 19.99,
        discount: 10,
        discountQuantity: 70
    },
    game10: {
        title: "Hitman 2",
        category: "Stealth",
        images:["../../imges/products/10.webp","../imges/products/HI2.webp","../imges/products/HI3.webp"],
        shortDescription: "Step into the shoes of the world’s most dangerous assassin, Agent 47.",
        longDescription: "In Hitman 2, play as the infamous Agent 47 and travel across the globe to eliminate high-profile targets with stealth and precision. Each mission offers sandbox environments that allow you to approach challenges creatively, using disguises, weaponry, and the environment to your advantage. With multiple ways to complete each mission, Hitman 2 rewards strategic thinking and gives players unparalleled freedom in how they execute their objectives.",
        price: 29.99,
        discount: 25,
        discountQuantity: 50
    },
    game11: {
        title: "Fall Guys",
        category: "Party",
        images:["../../imges/products/11.webp","../imges/products/FA2.webp","../imges/products/FA3.webp"],
        shortDescription: "Join the wacky battle royale where everyone’s racing to the finish!",
        longDescription: "Fall Guys is a chaotic and colorful party game where players compete in a series of wacky, obstacle-filled courses. With quirky costumes and physics-based challenges, each round is a hilarious race to survive. Battle with friends or players worldwide as you bounce, dive, and tumble through unpredictable mini-games, all in an attempt to claim the crown!",
        price: 19.99,
        discount: 20,
        discountQuantity: 150
    },
    game12: {
        title: "Enshrouded",
        category: "Survival",
        images:["../../imges/products/12.webp","../imges/products/EN2.webp","../imges/products/EN3.webp"],
        shortDescription: "Survive in a mysterious world shrouded in fog and danger.",
        longDescription: "Enshrouded is a survival game that thrusts players into a desolate, fog-covered landscape filled with unknown threats. Gather resources, craft equipment, and explore eerie, abandoned locations as you uncover the secrets of the fog. With immersive atmospheres and challenging survival mechanics, Enshrouded provides a unique experience for those who seek mystery and suspense.",
        price: 34.99,
        discount: 15,
        discountQuantity: 120
    },
    game13: {
        title: "GTA 6",
        category: "Open World",
        images:["../../imges/products/13.webp","../imges/products/GT2.webp","../imges/products/GT3.webp"],
        shortDescription: "Experience the next evolution in open-world crime adventures.",
        longDescription: "GTA 6 brings a new city to explore, more freedom, and intense storytelling to the iconic open-world series. Dive into a criminal underworld full of heists, chases, and encounters with unique characters. With advanced graphics, a massive map, and expanded customization, GTA 6 redefines the sandbox experience, offering endless entertainment and discoveries.",
        price: 69.99,
        discount: 10,
        discountQuantity: 300
    },
    game14: {
        title: "Horizon Chase Turbo",
        category: "Racing",
        images:["../../imges/products/14.webp","../imges/products/HO01.webp","../imges/products/HO02.webp"],
        shortDescription: "Race through vibrant tracks in this retro-inspired arcade racer.",
        longDescription: "Horizon Chase Turbo is a throwback to classic arcade racing games, featuring colorful graphics, upbeat music, and thrilling speeds. Drive through diverse environments worldwide, unlock new cars, and compete against friends in split-screen mode. With straightforward controls and an exhilarating sense of speed, it’s a must-play for fans of retro racing.",
        price: 24.99,
        discount: 15,
        discountQuantity: 200
    },
    game15: {
        title: "Rocket League",
        category: "Sports",
        images:["../../imges/products/15.webp","../imges/products/RO2.webp","../imges/products/RO3.webp"],
        shortDescription: "Play the unique mix of soccer and high-flying car action.",
        longDescription: "Rocket League combines the thrill of soccer with rocket-powered vehicles in a high-energy, competitive arena. Customize your car, team up with friends, and perfect your aerial moves to score goals and climb the ranks. Known for its accessibility and skill depth, Rocket League offers endless replayability and an exciting esports community.",
        price: 19.99,
        discount: 25,
        discountQuantity: 220
    },
    game16: {
        title: "FC25",
        category: "Sports",
        images:["../../imges/products/16.webp","../imges/products/FC2.webp","../imges/products/FC3.webp"],
        shortDescription: "Experience the excitement of football like never before in FC25.",
        longDescription: "FC25 brings the thrill of football to life with stunning graphics, realistic physics, and advanced AI. Play as your favorite teams in high-stakes matches, compete in tournaments, and rise through the ranks. Featuring an expansive career mode, online multiplayer, and in-depth team management, FC25 is perfect for football enthusiasts who crave a realistic and immersive experience.",
        price: 59.99,
        discount: 15,
        discountQuantity: 180
    },
    game17: {
        title: "Valorant",
        category: "Shooter",
        images:["../../imges/products/17.webp","../imges/products/VA2.webp","../imges/products/VA3.webp"],
        shortDescription: "Join the tactical shooter that blends precise gunplay with unique abilities.",
        longDescription: "Valorant is a competitive team-based shooter where strategy, reflexes, and teamwork are essential. Choose from a diverse roster of agents, each with unique abilities that can turn the tide of battle. With multiple game modes, ranked play, and a thriving eSports community, Valorant is known for its tactical depth and exciting, high-stakes matches.",
        price: 0.00,
        discount: 0,
        discountQuantity: 0
    },
    game18: {
        title: "Minecraft",
        category: "Sandbox",
        images:["../../imges/products/18.webp","../imges/products/MI2.webp","../imges/products/MI3.webp"],
        shortDescription: "Explore, build, and survive in a sandbox world limited only by your imagination.",
        longDescription: "Minecraft offers a vast, procedurally generated world where players can mine resources, build structures, and explore landscapes from mountains to ocean depths. Whether you're surviving in challenging biomes, constructing intricate builds, or exploring dungeons, Minecraft provides endless opportunities for creativity and adventure in solo or multiplayer modes.",
        price: 26.95,
        discount: 5,
        discountQuantity: 100
    },
    game19: {
        title: "Devil May Cry 5",
        category: "Action",
        images:["../../imges/products/19.webp","../imges/products/DE2.webp","../imges/products/DE3.webp"],
        shortDescription: "Join Dante and Nero in their fight against demonic forces in this stylish action game.",
        longDescription: "Devil May Cry 5 delivers intense, high-octane combat with a cinematic story that follows demon hunters Dante, Nero, and newcomer V. Master their unique fighting styles to defeat powerful enemies, using a blend of swordplay, firearms, and stylish combos. With jaw-dropping visuals and a heart-pounding soundtrack, Devil May Cry 5 offers an unforgettable experience in the hack-and-slash genre.",
        price: 39.99,
        discount: 20,
        discountQuantity: 150
    },
    game20: {
        title: "Far Cry 6",
        category: "Action-Adventure",
        images:["../../imges/products/20.webp","../imges/products/FA2.webp","../imges/products/FA3.webp"],
        shortDescription: "Join the fight for freedom in the Caribbean island of Yara.",
        longDescription: "Far Cry 6 transports players to Yara, a fictional tropical paradise under the oppressive rule of a dictator. As Dani Rojas, a guerilla fighter, players engage in chaotic battles, explore lush environments, and recruit allies in a revolution to liberate the nation. With diverse weapons, vehicles, and a vast open world, Far Cry 6 offers an action-packed experience.",
        price: 59.99,
        discount: 25,
        discountQuantity: 200
    },
    game21: {
        title: "Assassin's Creed Valhalla",
        category: "Action-Adventure",
        images:["../../imges/products/21.webp","../imges/products/AS2.webp","../imges/products/AS3.webp"],
        shortDescription: "Step into the boots of a Viking warrior and conquer new lands in this epic saga.",
        longDescription: "In Assassin's Creed Valhalla, you play as Eivor, a fierce Viking warrior tasked with leading their clan from Norway to the shores of England. Navigate brutal battles, explore a vast open world, and experience the brutality and beauty of the Viking era. Use stealth, combat skills, and cunning to navigate political intrigue and mythical elements. Customize your skills and weapons, raid settlements, and forge your own Viking legend.",
        price: 59.99,
        discount: 15,
        discountQuantity: 150
    },
    game22: {
        title: "Elden Ring",
        category: "RPG",
        images:["../../imges/products/22.webp","../imges/products/EL2.webp","../imges/products/EL3.webp"],
        shortDescription: "Embark on a journey through a dark fantasy world filled with mystery and danger.",
        longDescription: "Elden Ring invites players to explore an expansive open world set in a rich, dark fantasy universe. Developed by FromSoftware and set in a world crafted by George R.R. Martin, Elden Ring offers challenging combat, deep lore, and a dynamic world filled with terrifying creatures, dungeons, and ancient ruins. Discover hidden secrets, battle brutal foes, and carve your own path in this epic RPG adventure.",
        price: 69.99,
        discount: 10,
        discountQuantity: 120
    },
    game23: {
        title: "Black Myth: Wukong",
        category: "Action RPG",
        images:["../../imges/products/23.webp","../imges/products/WU2.webp","../imges/products/WU3.webp"],
        shortDescription: "Control the legendary Monkey King and navigate a stunning, mythical world.",
        longDescription: "Black Myth: Wukong is an action RPG based on the classic Chinese myth of the Monkey King. Players control Sun Wukong, the powerful and cunning hero, as he battles mythical creatures and explores a world inspired by ancient Chinese lore. Featuring breathtaking visuals, innovative combat, and deep narrative choices, this game brings the legend of Wukong to life like never before.",
        price: 49.99,
        discount: 20,
        discountQuantity: 180
    },
    game24: {
        title: "Control",
        category: "Action",
        images:["../../imges/products/24.webp","../imges/products/CO2.webp","../imges/products/CO3.webp"],
        shortDescription: "Unravel the mysteries of the Federal Bureau of Control in a surreal, mind-bending adventure.",
        longDescription: "Control is an action-adventure game set in a secret government agency called the Federal Bureau of Control, where paranormal phenomena are studied. You play as Jesse Faden, a woman seeking answers to her past while unraveling the mysteries of the Bureau. The game features telekinetic powers, a highly interactive environment, and a gripping narrative filled with strange occurrences and conspiracy theories.",
        price: 39.99,
        discount: 20,
        discountQuantity: 140
    },
    game25: {
        title: "Portal 2",
        category: "Puzzle",
        images:["../../imges/products/25.webp","../imges/products/PO2.webp","../imges/products/PO3.webp"],
        shortDescription: "Solve puzzles and navigate an intelligent world with the iconic portal gun.",
        longDescription: "Portal 2 is a physics-based puzzle game where players use the innovative portal gun to solve complex challenges in a mysterious, test-filled world. With an engaging storyline, witty dialogue, and an immersive experience, the game is renowned for its creative puzzles, humor, and exploration. Players must think critically and strategically to navigate through rooms filled with obstacles and mysterious AI entities.",
        price: 9.99,
        discount: 10,
        discountQuantity: 220
    },
    game26: {
        title: "Uncharted 4",
        category: "Action-Adventure",
        images:["../../imges/products/26.webp","../imges/products/UN2.webp","../imges/products/UN3.webp"],
        shortDescription: "Join Nathan Drake in his final treasure-hunting adventure, filled with action and breathtaking visuals.",
        longDescription: "Uncharted 4: A Thief’s End follows the legendary treasure hunter Nathan Drake as he comes out of retirement for one last adventure. Join Drake and his companions as they track down a fabled pirate treasure while evading dangerous foes. With cinematic action sequences, stunning visuals, and a compelling storyline, Uncharted 4 delivers an unforgettable experience filled with suspense, thrills, and mystery.",
        price: 39.99,
        discount: 25,
        discountQuantity: 160
    },
    game27: {
        title: "Forza Horizon 5",
        category: "Racing",
        images:["../../imges/products/27.webp","../imges/products/FO2.webp","../imges/products/FO3.webp"],
        shortDescription: "Race through the vibrant landscapes of Mexico in this thrilling open-world driving game.",
        longDescription: "Forza Horizon 5 brings the open-world racing franchise to the stunning backdrop of Mexico, offering a vast landscape to explore. Race across deserts, cities, jungles, and coastlines in a variety of vehicles ranging from classic cars to off-road monsters. With dynamic weather, seasonal changes, and highly customizable cars, Forza Horizon 5 provides an exhilarating racing experience for both casual players and hardcore enthusiasts.",
        price: 59.99,
        discount: 10,
        discountQuantity: 190
    },
    game28: {
        title: "Apex Legends",
        category: "Battle Royale",
        images:["../../imges/products/28.webp","../imges/products/AP2.webp","../imges/products/AP3.webp"],
        shortDescription: "Join the fast-paced battle royale with unique legends and strategic gameplay.",
        longDescription: "Apex Legends is a fast-paced battle royale game where players choose from a roster of Legends, each with unique abilities, to battle for survival in a dynamic arena. With its emphasis on teamwork, strategic gameplay, and quick decision-making, Apex Legends offers an exhilarating experience. Teams of three fight to be the last squad standing, utilizing innovative mechanics such as respawning teammates and tactical pings to communicate and outlast opponents.",
        price: 0.00,
        discount: 0,
        discountQuantity: 0
    },
    game29: {
        title: "ARK: Survival Evolved",
        category: "Survival",
        images:["../../imges/products/29.webp","../imges/products/AR2.webp","../imges/products/AR3.webp"],
        shortDescription: "Survive in a world filled with dinosaurs, crafting, and brutal challenges.",
        longDescription: "ARK: Survival Evolved is a survival game set on an island populated by dinosaurs and other prehistoric creatures. Players must gather resources, build shelters, tame wild creatures, and fight off other survivors and beasts to stay alive. With a focus on exploration and cooperation, ARK offers both solo and multiplayer experiences, with evolving challenges and the opportunity to craft and build massive structures in a harsh, untamed world.",
        price: 19.99,
        discount: 15,
        discountQuantity: 110
    },
    game30: {
        title: "Call of Duty: Warzone",
        category: "Shooter",
        images:["../../imges/products/30.webp","../imges/products/COD2.webp","../imges/products/COD3.webp"],
        shortDescription: "Engage in thrilling large-scale combat in this free-to-play battle royale.",
        longDescription: "Call of Duty: Warzone is a free-to-play battle royale where up to 150 players fight to be the last one standing in a massive, ever-shrinking map. With a focus on fast-paced action, strategic loot, and squad-based gameplay, Warzone offers players the opportunity to parachute into a warzone, scavenge for weapons, and engage in intense firefights. The game also features innovative mechanics like the Gulag, where eliminated players get a second chance to return to the battle.",
        price: 0.00,
        discount: 0,
        discountQuantity: 0
    },
    game31: {
        title: "Call of Duty: Modern Warfare 2",
        category: "Shooter",
        images:["../../imges/products/31.webp","../imges/products/COD2.webp","../imges/products/COD3.webp"],
        shortDescription: "Return to the action-packed world of Modern Warfare with new missions and multiplayer modes.",
        longDescription: "Call of Duty: Modern Warfare 2 is the latest installment in the iconic series, featuring intense, cinematic single-player campaigns and deep multiplayer modes. Players will engage in high-stakes covert operations, fight through global hotspots, and experience cutting-edge warfare technology. The game also introduces new mechanics for team-based tactics, enhanced visuals, and innovative new modes to keep players engaged.",
        price: 59.99,
        discount: 20,
        discountQuantity: 130
    },
    game32: {
        title: "Spider-Man",
        category: "Action-Adventure",
        images:["../../imges/products/32.webp","../imges/products/SP2.webp","../imges/products/SP3.webp"],
        shortDescription: "Swing through the streets of New York City as the iconic superhero in this thrilling adventure.",
        longDescription: "Marvel's Spider-Man puts players in the webbed shoes of Peter Parker as he defends New York from criminals and super-villains. With fluid combat, dynamic web-swinging, and a gripping story, players will experience the life of a superhero, balancing everyday struggles with epic battles. The game features an open-world environment where players can explore iconic landmarks and take on a wide range of missions.",
        price: 49.99,
        discount: 15,
        discountQuantity: 180
    }
};


function saveGamesToStorage() {
    let myJSON = JSON.stringify(games);
    localStorage.setItem("productData", myJSON);
}

if (!localStorage.getItem("productData")) { //if no local storage make one
    saveGamesToStorage();
}

const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');

burgerMenu?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});