const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});


/*change navigation style on scroll*/
window.addEventListener('scroll', event=>{
    let nav = document.querySelector('nav');
    (window.scrollY>=44) ?nav.classList.add('scroll')
        : nav.classList.remove('scroll');
});

window.addEventListener('scroll', event=>{
    let navigationLinks = document.querySelectorAll('nav ul li a');
    let fromTop = window.scrollY;

    navigationLinks.forEach(link=>{
       if (link.hash != "" && link.hash !="#") {
           let section = document.querySelector(link.hash);
           if (section.offsetTop <= fromTop &&
               section.offsetTop + section.offsetHeight > fromTop
           ) {
               link.classList.add('active');
           } else {
               link.classList.remove('active');
           }
       }
    })
});