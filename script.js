document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("welcome-overlay");
    if (!sessionStorage.getItem("overlayShown")) {
        overlay.style.display = "flex"; 
        setTimeout(() => {
            overlay.style.display = "none";
        }, 3000);
        sessionStorage.setItem("overlayShown", "true");
    } else {
        overlay.style.display = "none"; 
    }
});
