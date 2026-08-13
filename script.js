document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi Lucide Icons
  lucide.createIcons();

  // Mobile Navigation
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  // Pastikan element tersedia
  if (!toggle || !mobileNav) return;

  // Toggle menu mobile
  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", String(isOpen));

    toggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
    );
  });

  // Tutup menu setelah memilih navigasi
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");

      toggle.setAttribute("aria-expanded", "false");

      toggle.setAttribute("aria-label", "Buka menu navigasi");
    });
  });
});
