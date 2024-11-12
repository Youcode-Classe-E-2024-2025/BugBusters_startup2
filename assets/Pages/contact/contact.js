// contact.js

document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments nécessaires
    const form = document.querySelector("form");
    const emailInput = form.querySelector('input[type="email"]');
    const textareaInput = form.querySelector('textarea');
    const checkbox = form.querySelector('input[type="checkbox"]');
    const sidebarButton = document.querySelector(".bg-gray-600");  // Le bouton "Contact" dans la barre latérale
    const sidebar = document.querySelector(".w-1/5");

    // Gestion de la soumission du formulaire
    form.addEventListener("submit", (event) => {
        event.preventDefault();  // Annuler l'envoi du formulaire pour traiter la validation et l'affichage
        if (validateForm(emailInput, textareaInput, checkbox)) {
            showSuccessMessage();
        } else {
            alert("Veuillez remplir correctement tous les champs !");
        }
    });

    // Fonction pour valider les champs du formulaire
    function validateForm(email, textarea, checkbox) {
        const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value);
        const textareaValid = textarea.value.trim() !== "";
        const checkboxValid = checkbox.checked;
        return emailValid && textareaValid && checkboxValid;
    }

    // Fonction pour afficher un message de succès après soumission du formulaire
    function showSuccessMessage() {
        // Masquer le formulaire
        form.style.display = "none";

        // Créer un message de succès
        const successMessage = document.createElement("div");
        successMessage.classList.add("text-center", "text-white", "bg-green-600", "p-4", "rounded", "mt-4");
        successMessage.innerHTML = "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.";
        
        // Ajouter le message à la page
        const mainContent = document.querySelector(".w-4/5");
        mainContent.appendChild(successMessage);
    }

    // Toggle Sidebar Visibility (Masquer/afficher la barre latérale)
    sidebarButton.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });
});
