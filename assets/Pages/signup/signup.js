// Récupérer les éléments du formulaire
const signupForm = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]');

// Fonction pour gérer l'inscription
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission par défaut du formulaire

    // Récupérer les valeurs des champs
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Vérifier si tous les champs sont remplis
    if (!email || !password || !confirmPassword) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }
    // Vérifier si l'email est valide
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer un email valide.");
        return;
    }
    // Pour plus de sécurité, utilisez une méthode de stockage sécurisé dans la vraie vie (par exemple via une API).
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Afficher un message de confirmation
    alert("Inscription réussie !");
    
    // Attendre un peu avant de rediriger l'utilisateur
    setTimeout(function() {
        window.location.href = "assets\Pages\login\login.html"; // Redirige vers la page de connexion
    }, 1000); // délai de 1 seconde
});
