// Sauvegarde les données des jeux dans localStorage si elles n'existent pas déjà
const games = {
  game20: {
    title: "Far Cry 6",
    category: "Action-Adventure",
    images: ["../../imges/products/20.webp"],
    shortDescription:
      "Join the fight for freedom in the Caribbean island of Yara.",
    longDescription:
      "Far Cry 6 transports players to Yara, a fictional tropical paradise under the oppressive rule of a dictator...",
    price: 59.99,
    discount: 25,
    discountQuantity: 200,
  },
  // ajoutez d'autres jeux ici...
};

// fonction pour sauvegarder les jeux dans localStorage
function saveGamesToStorage() {
  let myJSON = JSON.stringify(games);
  localStorage.setItem("productData", myJSON);
}

// sauvegarde des jeux au demarrage si non present dans localStorage
if (!localStorage.getItem("productData")) {
  saveGamesToStorage();
}

// gestion du clic sur chaque element de jeu sur la page principale
document.querySelectorAll(".game-item").forEach((item) => {
  item.addEventListener("click", () => {
    const gameId = item.getAttribute("data-id");

    if (gameId) {
      localStorage.setItem("selectedGame", gameId); // sauvegarde l'ID du jeu selectionner
      window.location.href = "game-details.html"; // redirige vers la page des details
    } else {
      console.error("Aucun ID de jeu trouvé pour cet élément.");
    }
  });
});

// code a executer uniquement sur la page game-details.html
if (window.location.pathname.includes("game-details.html")) {
  // recupere l'ID du jeu selectionne et les donnees des jeux
  const selectedGameId = localStorage.getItem("selectedGame");
  const gamesData = JSON.parse(localStorage.getItem("productData") || "{}");

  if (selectedGameId && gamesData[selectedGameId]) {
    const game = gamesData[selectedGameId];

    // affiche les details du jeu sur la page
    document.getElementById("game-title").innerText =
      game.title || "Titre non disponible";
    document.getElementById("game-image").src =
      game.images && game.images[0] ? game.images[0] : "default-image.jpg";
    document.getElementById("short-description").innerText =
      game.shortDescription || "Description courte non disponible";
    document.getElementById("long-description").innerText =
      game.longDescription || "Description longue non disponible";
    document.getElementById("price").innerText = game.price
      ? `$${game.price.toFixed(2)}`
      : "Prix non disponible";
    document.getElementById("discount").innerText = game.discount
      ? `${game.discount}% off`
      : "Pas de réduction";
  } else {
    // message d'erreur si le jeu n'est pas trouver
    document.getElementById("game-details").innerText =
      "jeu non trouver. Veuillez reessayer.";
    console.error("jeu non trouve dans les donnees ou ID de jeu non valide.");
  }
}
