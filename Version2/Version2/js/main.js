// toggle icon member 
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.addEventListener('click', function() {
    
    if (menuIcon.innerHTML.includes('fa-x')) {
        menuIcon.innerHTML = '<i class="fa-solid fa-bars" style="color: rgb(255, 255, 255);"></i>';
    } else {
        menuIcon.innerHTML = '<i class="fa-solid fa-x fa-2xs" style="color: rgb(255, 255, 255);"></i>';
    }
    navbar.classList.toggle('active');
});


// scroll section 
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
            // active section from aniamtion on scroll 
            sec.classList.add('show-animate');
        }
        // if want to use Animation that repeats on scroll use this 
        else{
            sec.classList.remove('show-animate');
            
        }
    });

        let header=document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 100);

        // remove toggle icon and navbar when click navbar links (scroll)

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                        menuIcon.innerHTML = '<i class="fa-solid fa-bars" style="color: rgb(0, 0, 0);"></i>';
                        navbar.classList.remove('bx-x');
                        navbar.classList.remove('active');
            });
        });


        // Animation footer on scroll 

        
       let footer = document.querySelector('footer');
       footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
    

    
}