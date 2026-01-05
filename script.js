document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('mobile-overlay');

    // Sezione di riferimento per scrolled: prima prova #hero, altrimenti #perche-scegliermi
    const sectionReference = document.getElementById('hero') || document.getElementById('perche-scegliermi');

    // Effetto scrolled fluido
    const updateNavbarOnScroll = () => {
        let scrollThreshold = 50; // default se non trova alcuna sezione
        if (sectionReference) {
            scrollThreshold = sectionReference.offsetTop + sectionReference.offsetHeight - 60;
        }

        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Chiamata iniziale
    updateNavbarOnScroll();
    window.addEventListener('scroll', updateNavbarOnScroll);

    // Toggle menu mobile
    menuToggle.addEventListener('click', () => {
        overlay.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });

    // Chiudi menu al click sui link
    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });

});

    // Scroll fluido
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Inizializzazione AOS se presente
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }




// Funzione per nascondere banner
const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');

function hideBanner() {
    banner.classList.remove('show');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 600); // aspetta la fine della transizione
}

function showBanner() {
    banner.style.display = 'flex'; // necessario per flex box
    // piccola pausa per triggerare la transizione
    setTimeout(() => {
        banner.classList.add('show');
    }, 50);
}

// Se non ha accettato, mostra il banner
if (localStorage.getItem('cookieAccepted') !== 'true') {
    showBanner();
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', 'true');
    hideBanner();
});


//scroll per cronistoria
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");

    const showOnScroll = () => {
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                item.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});

//scroll sezione studi
document.addEventListener("scroll", () => {
    const section = document.querySelector(".study-text-section");
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
        section.classList.add("show");
    }
});

// ====== SWIPER (solo se presente nella pagina) ======
if (typeof Swiper !== 'undefined' && document.querySelector('.mySwiper')) {
    new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
}


//scroll sezione progetti e lavoro
document.addEventListener("scroll", () => {
    const section = document.querySelector(".projects-section");
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
        section.classList.add("show");
    }
});


const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

let index = 0;

function updateCarousel() {
    const width = items[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < items.length - 1) {
        index++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-active");
                } else {
                    entry.target.classList.remove("is-active");
                }
            });
        },
        {
            threshold: 0.6
        }
    );

    cards.forEach(card => observer.observe(card));
});

const portfolioCards = document.querySelectorAll('.portfolio-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.6
});

portfolioCards.forEach(card => observer.observe(card));

/* Parallax leggero allo scroll */
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelector('.wave-top').style.transform = `translateY(${scrollY * 0.2}px)`;
    document.querySelector('.wave-bottom').style.transform = `translateY(${scrollY * -0.15}px)`;
});

