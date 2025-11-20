// script.js

document.addEventListener('DOMContentLoaded', function () {
    // 1) Hizmet kartları: tıklanamaz olsun
    document.querySelectorAll('.service-card1').forEach(function (card) {
        card.style.cursor = 'default'; // el işareti çıkmasın
        card.addEventListener('click', function (e) {
            e.preventDefault();        // hiçbir yere gitmesin
        });
    });

    // 2) Katılımcı hizmetleri listesi: (istersen bunları da kilitler)
    document.querySelectorAll('.exhibitor-services-list a').forEach(function (link) {
        link.style.cursor = 'default';
        link.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
});












// Projeler sayfalama
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.portfolio-card');
    const buttons = document.querySelectorAll('.portfolio-page-btn');
    const section = document.querySelector('#work'); // Projeler bölümü

    function showPage(page) {
        cards.forEach(card => {
            const cardPage = card.getAttribute('data-page');
            if (cardPage === String(page)) {
                card.classList.remove('is-hidden');
            } else {
                card.classList.add('is-hidden');
            }
        });

        buttons.forEach(btn => {
            if (btn.getAttribute('data-page') === String(page)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Başlangıçta 1. sayfa
    showPage(1);

    // Buton click
    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            const page = this.getAttribute('data-page');
            showPage(page);

            // --- Sayfanın projeler bölümüne kayması ---
            if (section) {
                const offset = 80; // sabit navbar yüksekliği kadar yukarıdan dursun
                const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
            }
        });
    });
});








document.addEventListener("DOMContentLoaded", function () {
    var navToggle = document.querySelector(".nav-toggle");
    var navbar = document.querySelector(".navbar");

    // Hamburger: menüyü aç/kapat
    if (navToggle && navbar) {
        navToggle.addEventListener("click", function () {
            navbar.classList.toggle("menu-open");
        });
    }

    // Ana dropdown başlıkları (Etkinlik Hizmetleri, Hakkımızda)
    var dropdownTriggers = document.querySelectorAll(".nav-item.has-dropdown > a");

    dropdownTriggers.forEach(function (link) {
        link.addEventListener("click", function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // sayfa değiştirmesin
                var parent = this.parentElement;
                parent.classList.toggle("is-open");
            }
        });
    });

    // Alt seviye dropdown’lar (Prodüksiyon, Sergi & Stand Tasarımları)
    var subDropdownTriggers = document.querySelectorAll(".dropdown-item.has-submenu > a");

    subDropdownTriggers.forEach(function (link) {
        link.addEventListener("click", function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                var parent = this.parentElement;
                parent.classList.toggle("is-open");
            }
        });
    });

    // Mobilde bir linke tıklanınca menüyü kapat (aynı sayfa içi anchor için de işe yarar)
    var navLinks = document.querySelectorAll(".nav-center a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 768 && navbar && navbar.classList.contains("menu-open")) {
                navbar.classList.remove("menu-open");
            }
        });
    });

    // Ekran genişleyince (tablet / desktop) açık menüyü kapat
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768 && navbar && navbar.classList.contains("menu-open")) {
            navbar.classList.remove("menu-open");
        }
    });
});
