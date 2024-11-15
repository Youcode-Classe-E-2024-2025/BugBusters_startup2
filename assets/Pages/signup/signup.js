const signupForm = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
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
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer un email valide.");
        return;
    }
    
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert("Inscription réussie !");
    setTimeout(function() {
        window.location.href = "assets\Pages\login\login.html"; 
    }, 1000); 
});
