document.addEventListener("DOMContentLoaded", () => {
  const menuBox = document.getElementById("menuBox");
  const menuIcon = document.getElementById("menuIcon");

  if (!menuBox || !menuIcon) {
    console.warn("menuBox or menuIcon not found!");
    return;
  }

  menuIcon.addEventListener("click", () => {
    menuBox.classList.toggle("open-menu");

    const isOpen = menuBox.classList.contains("open-menu");
    menuIcon.src = isOpen
      ? "./media-assets/nav/close.png"
      : "./media-assets/nav/menu.png";
  });
});
