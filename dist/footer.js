export function footerComponent() {
    const footer = document.createElement("footer");
    footer.style.borderTop = "solid 1px #ccc";
    footer.style.padding = "10px";
    footer.textContent = "© 2026 Juan. Todos los derechos reservados.";
    return footer;
}
