

function blurToggel(ev){
    document.getElementById("PM").classList.toggle("blur-md");
    document.getElementById("add_form").classList.toggle("hidden");
    document.getElementById("remblur_btn").classList.toggle("hidden");
    ev.preventDefault()
};