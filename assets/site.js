// site.js
// Безопасный базовый файл
// Можно расширять позже

document.addEventListener("DOMContentLoaded", () => {
  // Плавное появление страницы
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.4s ease";

  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });
});
