// Sökning och filtrering av kanaler
(function () {
  function normalize(str) {
    return (str || "").toLowerCase().trim();
  }

  function filterChannels(channels, { query = "", region = "", category = "" } = {}) {
    const q = normalize(query);
    return channels.filter((c) => {
      const matchQuery =
        !q ||
        normalize(c.name).includes(q) ||
        normalize(c.country).includes(q) ||
        normalize(c.category).includes(q);
      const matchRegion = !region || c.region === region;
      const matchCategory = !category || c.category === category;
      return matchQuery && matchRegion && matchCategory;
    });
  }

  function uniqueValues(channels, key) {
    return [...new Set(channels.map((c) => c[key]))].sort();
  }

  window.Search = { filterChannels, uniqueValues };
})();
