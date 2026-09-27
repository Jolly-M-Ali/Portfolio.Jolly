document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a, .navbar a');
    const tabPages = document.querySelectorAll('.tab-page');
    const themeToggle = document.getElementById('themeToggle');
    const contactForm = document.getElementById('contactForm');

    // 1. فتح وإغلاق قائمة الموبايل الجانبية
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            
            // تغيير شكل الأيقونة
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });
    }

    // 2. التنقل بين الأقسام وإغلاق القائمة
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetHref = link.getAttribute('href');

            if (targetHref && targetHref.startsWith('#')) {
                e.preventDefault();
                const targetId = targetHref.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // إخفاء كل السكاشن وتفعيل السيكشن المطلوب
                    tabPages.forEach(page => page.classList.remove('active'));
                    navLinks.forEach(item => item.classList.remove('active'));

                    targetSection.classList.add('active');
                    link.classList.add('active');

                    // إغلاق قائمة الموبايل
                    if (navMenu) navMenu.classList.remove('active');
                    if (menuBtn) {
                        const icon = menuBtn.querySelector('i');
                        if (icon) {
                            icon.classList.add('fa-bars');
                            icon.classList.remove('fa-xmark');
                        }
                    }

                    window.scrollTo(0, 0);
                }
            }
        });
    });

    // 3. الثيم (Dark/Light)
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const themeIcon = themeToggle.querySelector('i');
            if (themeIcon) {
                themeIcon.classList.toggle('fa-moon');
                themeIcon.classList.toggle('fa-sun');
            }
        });
    }

    // 4. الأنيميشن الخاص بالـ Typed
    if (document.querySelector('.typing-text') && typeof Typed !== 'undefined') {
        new Typed('.typing-text', {
            strings: ['Front-End Developer', 'Back-End Developer', 'Fullstack Developer'],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });
    }
});

document.querySelectorAll('.btn-demo').forEach(button => {
    button.addEventListener('click', function(e) {
        // التأكد من وجود رابط قبل الفتح
        const url = this.getAttribute('href');
        if (url && url !== '#') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    });
});


//experience
function openTab(event, tabName) {
    // إخفاء كل التبويبات التي تحمل كلاس tab-page
    const tabPages = document.getElementsByClassName("tab-page");
    for (let i = 0; i < tabPages.length; i++) {
        tabPages[i].style.display = "none";
    }

    // إزالة كلاس active من جميع الأزرار
    const tabLinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // إظهار السكشن المستهدف فقط
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.style.display = "block";
    }

    // تفعيل الزر الحالي
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }
}








