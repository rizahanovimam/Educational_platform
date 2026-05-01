// новое Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const userInfo = document.querySelector('.user-info');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', function() {
            // Переключаем класс active на кнопке (для анимации)
            this.classList.toggle('active');
            // Переключаем класс active на меню
            navLinks.classList.toggle('active');
            userInfo.classList.toggle('active');
        });
    }
});



// FAQ аккордеон
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        faqItem.classList.toggle('active');
    });
});




// Анимация при скролле
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});


