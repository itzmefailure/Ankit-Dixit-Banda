document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- Scroll Animation ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.hidden, .hidden-delay, .hidden-delay-2');
    animatedElements.forEach(el => observer.observe(el));

    // --- Modal (Popup) Logic ---
    const modalBtns = document.querySelectorAll('.open-modal');
    const closeBtns = document.querySelectorAll('.close-btn');
    const modals = document.querySelectorAll('.modal');

    // Open specific modal
    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            modal.classList.add('show-modal');
            document.body.style.overflow = 'hidden'; // Prevents background scrolling
        });
    });

    // Close modal when X is clicked
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.classList.remove('show-modal');
            });
            document.body.style.overflow = 'auto'; // Restores background scrolling
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove('show-modal');
                document.body.style.overflow = 'auto';
            }
        });
    });

});
// 5. Scroll to Top Button Logic
    const scrollTopBtn = document.getElementById("scrollToTopBtn");

    // Jab user 300px niche scroll kare, tab button dikhaye
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show-btn");
        } else {
            scrollTopBtn.classList.remove("show-btn");
        }
    });

    // Button par click karne par upar jaye
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
    // Jab poori website load ho jayegi, tab loader gayab ho jayega
    window.addEventListener("load", function() {
        const loader = document.getElementById("loader-wrapper");
        
        // Halka sa delay de rahe hain taaki animation ka maza aaye (0.5 seconds)
        setTimeout(function() {
            loader.classList.add("loader-hidden");
        }, 500); 
    });
