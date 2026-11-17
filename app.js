// Huvudfil som kopplar ihop sidans moduler
(function () {
  function renderChannels(container, channels, onSelect) {
    if (!container) return;
    container.innerHTML = "";

    if (!channels.length) {
      container.innerHTML = '<p class="empty">Inga kanaler matchar din sökning.</p>';
      return;
    }

    channels.forEach((channel) => {
      const card = document.createElement("article");
      card.className = "channel-card holo";
      card.dataset.id = channel.id;

      const favOn = window.Favorites && window.Favorites.isFavorite(channel.id);

      card.innerHTML = `
        <span class="flag">${channel.flag}</span>
        <span class="name">${channel.name}</span>
        <span class="meta">${channel.country} · ${channel.category}</span>
        <button class="fav-btn ${favOn ? "on" : ""}" title="Favorit" aria-label="Favorit">★</button>
      `;

      card.addEventListener("click", (e) => {
        if (e.target.classList.contains("fav-btn")) return;
        onSelect(channel);
      });

      const favBtn = card.querySelector(".fav-btn");
      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const on = window.Favorites.toggleFavorite(channel.id);
        favBtn.classList.toggle("on", on);
      });

      container.appendChild(card);
    });
  }

  function populateSelect(select, values) {
    if (!select) return;
    values.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      select.appendChild(opt);
    });
  }

  function initHome() {
    const grid = document.getElementById("channel-grid");
    if (!grid || !window.CHANNELS) return;

    const searchInput = document.getElementById("search");
    const regionSelect = document.getElementById("region-filter");
    const categorySelect = document.getElementById("category-filter");

    populateSelect(regionSelect, window.Search.uniqueValues(window.CHANNELS, "region"));
    populateSelect(categorySelect, window.Search.uniqueValues(window.CHANNELS, "category"));

    function update() {
      const filtered = window.Search.filterChannels(window.CHANNELS, {
        query: searchInput ? searchInput.value : "",
        region: regionSelect ? regionSelect.value : "",
        category: categorySelect ? categorySelect.value : ""
      });
      renderChannels(grid, filtered, (channel) => {
        window.Player.playChannel(channel);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    [searchInput, regionSelect, categorySelect].forEach((el) => {
      if (el) el.addEventListener("input", update);
    });

    update();

    // Starta första kanalen automatiskt
    if (window.CHANNELS.length) {
      window.Player.playChannel(window.CHANNELS[0]);
    }
  }

  function initAllChannels() {
    const grid = document.getElementById("channel-grid");
    if (!grid || !window.CHANNELS) return;

    const searchInput = document.getElementById("search");
    const regionSelect = document.getElementById("region-filter");
    const categorySelect = document.getElementById("category-filter");

    populateSelect(regionSelect, window.Search.uniqueValues(window.CHANNELS, "region"));
    populateSelect(categorySelect, window.Search.uniqueValues(window.CHANNELS, "category"));

    function update() {
      const filtered = window.Search.filterChannels(window.CHANNELS, {
        query: searchInput ? searchInput.value : "",
        region: regionSelect ? regionSelect.value : "",
        category: categorySelect ? categorySelect.value : ""
      });
      renderChannels(grid, filtered, (channel) => {
        window.location.href = `index.html?channel=${encodeURIComponent(channel.id)}`;
      });
    }

    [searchInput, regionSelect, categorySelect].forEach((el) => {
      if (el) el.addEventListener("input", update);
    });

    update();
  }

  function initFavorites() {
    const grid = document.getElementById("channel-grid");
    if (!grid || !window.CHANNELS) return;

    function update() {
      const favIds = window.Favorites.getFavorites();
      const favChannels = window.CHANNELS.filter((c) => favIds.includes(c.id));
      renderChannels(grid, favChannels, (channel) => {
        window.location.href = `index.html?channel=${encodeURIComponent(channel.id)}`;
      });
    }

    update();
    window.addEventListener("storage", update);
  }

  function initFromQuery() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("channel");
    if (!id || !window.CHANNELS) return;
    const channel = window.CHANNELS.find((c) => c.id === id);
    if (channel) window.Player.playChannel(channel);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    if (page === "home") {
      initHome();
      initFromQuery();
    } else if (page === "channels") {
      initAllChannels();
    } else if (page === "favorites") {
      initFavorites();
    }
  });
})();
