const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginFormSection = document.getElementById('loginFormSection');
const resetPasswordSection = document.getElementById('resetPasswordSection');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const backToLoginLink = document.getElementById('backToLoginLink');
const resetPasswordForm = document.getElementById('resetPasswordForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = emailInput.value;
    const password = passwordInput.value;
    if (email && password) {
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            alert("Connexion réussie !");
        
        } else {
            alert("Email ou mot de passe incorrect.");
        }
    } else {
        alert('Veuillez remplir tous les champs');
    }
});


forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginFormSection.classList.add('hidden');
    resetPasswordSection.classList.remove('hidden');
});


backToLoginLink.addEventListener('click', function(event) {
    event.preventDefault();
    resetPasswordSection.classList.add('hidden');
    loginFormSection.classList.remove('hidden');
});


resetPasswordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const resetEmail = document.getElementById('resetEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;


    if (newPassword !== confirmNewPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail !== resetEmail) {
        alert("Cet email n'est pas enregistré.");
        return;
    }

    localStorage.setItem('userPassword', newPassword);
    alert("Votre mot de passe a été réinitialisé avec succès.");

    resetPasswordSection.classList.add('hidden');
    loginFormSection.classList.remove('hidden');
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = emailInput.value;
    const password = passwordInput.value;


    if (email && password) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        console.log('Email et mot de passe enregistrés :', email, password);
    } else {
        alert('Veuillez remplir tous les champs');
    }
});
