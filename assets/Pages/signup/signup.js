const signupForm = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;


    if (!email || !password || !confirmPassword) {
        alert("Veuillez remplir tous les champs.");
        return;
    }
    
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

    // Récupérer la liste des utilisateurs existants depuis le localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Créer un objet utilisateur avec les informations du formulaire
    const newUser = {
        email: email,
        password: password
    };

    // Ajouter le nouvel utilisateur au tableau
    users.push(newUser);

    // Sauvegarder à nouveau le tableau des utilisateurs dans le localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Afficher un message de confirmation
    alert("Inscription réussie !");

    // Attendre un peu avant de rediriger l'utilisateur
    setTimeout(function() {
        window.location.href = "../login/login.html"; // Redirige vers la page de connexion
    }, 1000); // délai de 1 seconde
});
