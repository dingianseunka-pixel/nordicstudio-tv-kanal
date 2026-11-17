// Favoriter med localStorage
(function () {
  const KEY = "tvkanal_favorites";

  function getFavorites() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveFavorites(list) {
    localStorage.setItem(KEY, JSON.stringify(list));
  }

  function isFavorite(id) {
    return getFavorites().includes(id);
  }

  function toggleFavorite(id) {
    const list = getFavorites();
    const idx = list.indexOf(id);
    if (idx >= 0) list.splice(idx, 1);
    else list.push(id);
    saveFavorites(list);
    return isFavorite(id);
  }

  window.Favorites = { getFavorites, isFavorite, toggleFavorite };
})();
