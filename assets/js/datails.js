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
  // Ajoutez d'autres jeux ici...
};

// Fonction pour sauvegarder les jeux dans localStorage
function saveGamesToStorage() {
  let myJSON = JSON.stringify(games);
  localStorage.setItem("productData", myJSON);
}

// Sauvegarde des jeux au démarrage si non présent dans localStorage
if (!localStorage.getItem("productData")) {
  saveGamesToStorage();
}

// Gestion du clic sur chaque élément de jeu sur la page principale
document.querySelectorAll(".game-item").forEach((item) => {
  item.addEventListener("click", () => {
    const gameId = item.getAttribute("data-id");

    if (gameId) {
      localStorage.setItem("selectedGame", gameId); // Sauvegarde l'ID du jeu sélectionné
      window.location.href = "game-details.html"; // Redirige vers la page des détails
    } else {
      console.error("Aucun ID de jeu trouvé pour cet élément.");
    }
  });
});

// Code à exécuter uniquement sur la page game-details.html
if (window.location.pathname.includes("game-details.html")) {
  // Récupère l'ID du jeu sélectionné et les données des jeux
  const selectedGameId = localStorage.getItem("selectedGame");
  const gamesData = JSON.parse(localStorage.getItem("productData") || "{}");

  if (selectedGameId && gamesData[selectedGameId]) {
    const game = gamesData[selectedGameId];

    // Affiche les détails du jeu sur la page
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
    // Message d'erreur si le jeu n'est pas trouvé
    document.getElementById("game-details").innerText =
      "Jeu non trouvé. Veuillez réessayer.";
    console.error("Jeu non trouvé dans les données ou ID de jeu non valide.");
  }
}
