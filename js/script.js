
var btn = $('#top-btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


var counted = 0;
        $(window).scroll(function () {

            var oTop = $('#counter').offset().top - window.innerHeight;
            if (counted == 0 && $(window).scrollTop() > oTop) {
                $('.count').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },

                        {

                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                counted = 1;
            }

        });
        
        $('.product-carousel2').owlCarousel({
            loop: true,
            margin: 15,
            nav: false, 
            dots: true, 
            autoplay: true, 
            autoplayTimeout: 3000, 
            autoplayHoverPause: true, 
            responsive: {
                0: {
                    items: 1
                },
                475: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });


        $('.client-carousel').owlCarousel({
            loop: true,
            margin: 15,
            nav: false, 
            dots: false, 
            autoplay: true, 
            autoplayTimeout: 3000, 
            autoplayHoverPause: true, 
            responsive: {
                0: {
                    items: 1
                },
               375: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })

        
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 15,
            nav: false, 
            dots: false, 
            autoplay: true, 
            autoplayTimeout: 3000,
            autoplayHoverPause: true, 
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        })



const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
  if(!menu.classList.contains("active")){
    return;
  }
  if(e.target.closest(".menu-item-has-children")){
     const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
   hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
   toggleMenu();
})
closeMenu.addEventListener("click",() =>{
   toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
  toggleMenu();
})
function toggleMenu(){
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
  if(this.innerWidth >991){
    if(menu.classList.contains("active")){
      toggleMenu();
    }

  }
}



        // (c) 2020-2023 Written by Simon Köhler in Panama
        // simonkoehler.com

        // Wait for the DOM (Document Object Model) to be fully loaded
        document.addEventListener('DOMContentLoaded', function (event) {

            // Hamburger menu
            var navbarToggler = document.querySelectorAll('.navbar-toggler')[0];
            navbarToggler.addEventListener('click', function (e) {
                e.target.children[0].classList.toggle('active');
            });

            // Select the <html> element
            var html = document.querySelectorAll('html')[0];

            // Select the first element with the attribute 'data-bs-toggle-theme'
            var themeToggle = document.querySelectorAll('*[data-bs-toggle-theme]')[0];

            // Set the default theme to 'dark' for the <html> element
            html.setAttribute('data-bs-theme', 'dark');

            // Check if a themeToggle element is found
            if (themeToggle) {
                // Add a click event listener to the themeToggle element
                themeToggle.addEventListener('click', function (event) {
                    // Prevent the default behavior of the click event
                    event.preventDefault();

                    // Check the current theme attribute value of the <html> element
                    if (html.getAttribute('data-bs-theme') === 'dark') {
                        // If the current theme is 'dark', change it to 'light'
                        html.setAttribute('data-bs-theme', 'light');
                    } else {
                        // If the current theme is not 'dark', change it back to 'dark'
                        html.setAttribute('data-bs-theme', 'dark');
                    }
                });
            }
        });
        
        
