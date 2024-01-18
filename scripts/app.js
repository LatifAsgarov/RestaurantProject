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

document.addEventListener('DOMContentLoaded', function() {
    var homeLink = document.getElementById('homeLink');
    var dropdownContent = document.getElementById('dropdownContent');
    var navItem = homeLink.closest('li'); // Assuming the 'Home' link is within an 'li' element

    // Show the dropdown menu on mouse over
    homeLink.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
        dropdownContent.style.top = homeLink.offsetTop +  100 + 'px';
    });

    // Hide the dropdown menu when mouse leaves the nav item area
    navItem.addEventListener('mouseleave', function(e) {
        if(e.toElement.id == 'dropdownContent') {
            return
        }
        dropdownContent.style.display = 'none';
    });

    dropdownContent.addEventListener('mouseleave', function(e) { 
        dropdownContent.style.display = 'none';
    })
});

document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var headerText1 = document.getElementById('headerText1');
    var headerText2 = document.getElementById('headerText2');

    var slides = [
        { image: '/images/bg-image1.jpeg', textDiv: headerText1 },
        { image: '/images/bg-image2.jpeg', textDiv: headerText2 }
    ];

    var currentIndex = 0;

    setInterval(function() {
        
        headerText1.classList.remove('active');
        headerText2.classList.remove('active');

        // Move to the next slide
        currentIndex = (currentIndex + 1) % slides.length;
        header.style.backgroundImage = 'url(' + slides[currentIndex].image + ')';
        
        // Show the corresponding text div
        slides[currentIndex].textDiv.classList.add('active');
    }, 3000); // Change every 3000 milliseconds (3 seconds)
});
