document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = form.querySelector('input[type="email"]');
    const textareaInput = form.querySelector('textarea');
    const checkbox = form.querySelector('input[type="checkbox"]');
    const sidebarButton = document.querySelector(".bg-gray-600");  
    let cont = []
    function savecontinfo() {
        let myJSON = JSON.stringify(cont);
        localStorage.setItem("cont", myJSON);
    }
      
    if (!localStorage.getItem("cont")) { //if no local storage make one
        savecontinfo();
    }
    let text = localStorage.getItem("cont");
    cont = JSON.parse(text);

    form.addEventListener("submit", (event) => {
        event.preventDefault();  
        if (validateForm(emailInput, textareaInput, checkbox)) {
            showSuccessMessage();
        } else {
            alert("Veuillez remplir correctement tous les champs !");
        }
    });

    function validateForm(email, textarea, checkbox) {
        const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value);
        const textareaValid = textarea.value.trim() !== "";
        const checkboxValid = checkbox.checked;
        let continfo={
            email: email.value,
            desc: textarea.value
        }
        cont.push(continfo)
        savecontinfo();
        return emailValid && textareaValid && checkboxValid;
    }
    function showSuccessMessage() {
        form.style.display = "none";
        const successMessage = document.createElement("div");
        successMessage.classList.add("text-center", "text-white", "bg-green-600", "p-4", "rounded", "mt-4");
        successMessage.innerHTML = "Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.";
        const mainContent = document.querySelector(".w-4/5");
        mainContent.appendChild(successMessage);
    }
    sidebarButton.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });
});
