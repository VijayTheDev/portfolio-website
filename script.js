// Add some JavaScript code here

// Use a window selector to execute a function when the window loads
window.onload = function() {
    // Get the header element by its tag name
    var header = document.getElementsByTagName("header")[0];
    // Get the menu element by its class name
    var menu = document.getElementsByClassName("menu")[0];
    // Get all the menu links by their tag name
    var menuLinks = document.getElementsByTagName("a");
    // Get all the section elements by their tag name
    var sections = document.getElementsByTagName("section");

    // Define a function to change the active menu link based on the scroll position
    function changeActiveLink() {
        // Get the current scroll position of the window
        var scrollPosition = window.pageYOffset;
        // Loop through each section element
        for (var i = 0; i < sections.length; i++) {
            // Get the id of the section element
            var sectionId = sections[i].id;
            // Get the offset top of the section element
            var sectionTop = sections[i].offsetTop;
            // Get the offset height of the section element
            var sectionHeight = sections[i].offsetHeight;
            // Check if the scroll position is within the range of the section element
            if (scrollPosition >= sectionTop - header.offsetHeight && scrollPosition < sectionTop + sectionHeight - header.offsetHeight) {
                // Loop through each menu link element
                for (var j = 0; j < menuLinks.length; j++) {
                    // Remove the active class from all menu links
                    menuLinks[j].classList.remove("active");
                }
                // Add the active class to the menu link that matches the section id
                document.querySelector(".menu li a[href*=" + sectionId + "]").classList.add("active");
            }
        }
    }

    // Define a function to toggle the menu visibility on small screens
    function toggleMenu() {
        // Check if the menu has a show class
        if (menu.classList.contains("show")) {
            // Remove the show class from the menu
            menu.classList.remove("show");
        } else {
            // Add the show class to the menu
            menu.classList.add("show");
        }
    }

    // Add an event listener to the window to call the changeActiveLink function when scrolling
    window.addEventListener("scroll", changeActiveLink);

    // Add an event listener to the logo to call the toggleMenu function when clicking
    logo.addEventListener("click", toggleMenu);
}
