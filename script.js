document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. MOBILE MENU (HAMBURGER) LOGIC
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // ==========================================
    // 2. AUTO-HIDE FULL-SCREEN WELCOME SPLASH
    // ==========================================
    const welcomeSplash = document.getElementById('welcomeSplash');

    if (welcomeSplash) {
        // Check karte hain ki kya ye user pehli baar aaya hai
        if (!sessionStorage.getItem('welcomeShown')) {
            // Agar pehli baar hai, toh 3.5 seconds (3500ms) baad hata do
            setTimeout(() => {
                // Fade out effect
                welcomeSplash.style.opacity = '0';
                welcomeSplash.style.pointerEvents = 'none';
                
                // Piche ki screen ka scroll wapas on karo
                document.body.style.overflowY = 'auto';
                document.body.classList.remove('overflow-hidden');
                
                // Browser ko bata do ki user ne page dekh liya hai
                sessionStorage.setItem('welcomeShown', 'true');
                
                // Element ko puri tarah screen se hata do
                setTimeout(() => {
                    welcomeSplash.style.display = 'none';
                }, 1000);
            }, 3500); // <-- 3.5 sec timer
        } else {
            // Agar user kisi aur page se wapas Home par aaya hai, toh turant hata do
            welcomeSplash.style.display = 'none';
            document.body.style.overflowY = 'auto';
            document.body.classList.remove('overflow-hidden');
        }
    } else if (document.body.classList.contains('overflow-hidden')) {
        // Safe check for other pages (like About, Batches)
        document.body.style.overflowY = 'auto';
        document.body.classList.remove('overflow-hidden');
    }

    // ==========================================
    // 3. SCROLL REVEAL ANIMATIONS
    // ==========================================
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    reveal();

    // ==========================================
    // 4. SCROLL TO TOP BUTTON
    // ==========================================
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove("opacity-0", "invisible");
                scrollToTopBtn.classList.add("opacity-100", "visible");
            } else {
                scrollToTopBtn.classList.remove("opacity-100", "visible");
                scrollToTopBtn.classList.add("opacity-0", "invisible");
            }
        });
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ==========================================
    // 5. MODAL (SYLLABUS) LOGIC
    // ==========================================
    const openModalBtns = document.querySelectorAll('.open-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal-overlay');

    if (openModalBtns.length > 0) {
        openModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = btn.getAttribute('data-target');
                const targetModal = document.getElementById(targetId);
                if (targetModal) {
                    targetModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal-overlay');
                if (modal) {
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto'; 
                }
            });
        });
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
        });
    }
});