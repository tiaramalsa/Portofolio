const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id'),
            navLink = document.querySelector(".nav ul a[href*='" + sectionId + "']");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
            navLink.classList.add('btn');
        } else {
            navLink.classList.remove('active-link');
            navLink.classList.remove('btn');
        }
    });
}

function scrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
    });
    
    scrollActive();
}

window.addEventListener('scroll', scrollActive);

const navLinks = document.querySelectorAll('.nav ul a');
navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
});
