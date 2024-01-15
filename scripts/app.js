function toggleMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}

function closeMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display = "none";
}