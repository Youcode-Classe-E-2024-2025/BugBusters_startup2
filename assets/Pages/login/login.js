// Récupérer les éléments du formulaire
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginFormSection = document.getElementById('loginFormSection');
const resetPasswordSection = document.getElementById('resetPasswordSection');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const backToLoginLink = document.getElementById('backToLoginLink');
const resetPasswordForm = document.getElementById('resetPasswordForm');

// Fonction pour la gestion de la connexion
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission par défaut

    const email = emailInput.value;
    const password = passwordInput.value;

    // Vérifier si les champs sont remplis
    if (email && password) {
        // Vérifier les informations dans localStorage
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            alert("Connexion réussie !");
            // Vous pouvez rediriger l'utilisateur vers une autre page après connexion
            // window.location.href = "page_accueil.html";
        } else {
            alert("Email ou mot de passe incorrect.");
        }
    } else {
        alert('Veuillez remplir tous les champs');
    }
});

// Ajouter un événement pour la réinitialisation du mot de passe
forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginFormSection.classList.add('hidden');
    resetPasswordSection.classList.remove('hidden');
});

// Ajouter un événement pour revenir à la page de connexion
backToLoginLink.addEventListener('click', function(event) {
    event.preventDefault();
    resetPasswordSection.classList.add('hidden');
    loginFormSection.classList.remove('hidden');
});

// Fonction pour gérer la réinitialisation du mot de passe
resetPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission par défaut

    const resetEmail = document.getElementById('resetEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;

    // Vérifier si les mots de passe correspondent
    if (newPassword !== confirmNewPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    // Vérifier si l'email existe dans le localStorage
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail !== resetEmail) {
        alert("Cet email n'est pas enregistré.");
        return;
    }

    // Réinitialiser le mot de passe dans localStorage
    localStorage.setItem('userPassword', newPassword);
    alert("Votre mot de passe a été réinitialisé avec succès.");

    // Revenir à la page de connexion
    resetPasswordSection.classList.add('hidden');
    loginFormSection.classList.remove('hidden');
});

// Si l'utilisateur soumet le formulaire de connexion, on stocke les informations dans localStorage
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission par défaut

    const email = emailInput.value;
    const password = passwordInput.value;

    // Vérifier si les champs sont remplis
    if (email && password) {
        // Stocker les informations dans localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        console.log('Email et mot de passe enregistrés :', email, password);
    } else {
        alert('Veuillez remplir tous les champs');
    }
});
