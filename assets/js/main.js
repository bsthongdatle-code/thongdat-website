(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("hoc-bai-thoi-theme");
  if (savedTheme) root.dataset.theme = savedTheme;

  document.querySelectorAll("[data-theme-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const themes = ["", "blue", "green", "rose", "dark"];
      const current = root.dataset.theme || "";
      const next = themes[(themes.indexOf(current) + 1) % themes.length];
      if (next) root.dataset.theme = next;
      else delete root.dataset.theme;
      localStorage.setItem("hoc-bai-thoi-theme", next);
    });
  });

  const menuButton = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector(".top-nav");
  if (menuButton && nav) menuButton.addEventListener("click", () => nav.classList.toggle("open"));

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const search = document.querySelector("[data-resource-search]");
  if (search) search.addEventListener("input", () => {
    const q = search.value.trim().toLocaleLowerCase("vi");
    document.querySelectorAll("[data-resource]").forEach(card => {
      card.hidden = !card.textContent.toLocaleLowerCase("vi").includes(q);
    });
  });

  const upload = document.querySelector("[data-photo-upload]");
  const grid = document.querySelector("[data-photo-grid]");
  if (upload && grid) {
    upload.addEventListener("change", () => {
      [...upload.files].forEach(file => {
        if (!file.type.startsWith("image/")) return;
        const url = URL.createObjectURL(file);
        const item = document.createElement("div");
        item.className = "photo-item";
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Ảnh được chọn";
        const remove = document.createElement("button");
        remove.type = "button";
        remove.textContent = "Xóa";
        remove.addEventListener("click", () => { URL.revokeObjectURL(url); item.remove(); });
        item.append(img, remove);
        grid.append(item);
      });
      upload.value = "";
    });
  }
})();
