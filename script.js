"use strict";

// Scroll suave para navegación interna
document.addEventListener("DOMContentLoaded", () => {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Año actual en el footer
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Click en tarjeta de producto para consulta mayorista
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      // Si se hizo clic en un enlace interno de la tarjeta, no interceptar
      if (event.target.closest("a")) return;

      const name =
        card.dataset.productName ||
        card.querySelector("h3")?.textContent?.trim() ||
        "este producto";

      const wholesaleText = `Hola, quiero consultar compra mayorista del producto ${name}`;
      const whatsappUrl = `https://wa.me/5493434728653?text=${encodeURIComponent(
        wholesaleText
      )}`;

      window.open(whatsappUrl, "_blank");
    });
  });
});

