// Videospelare med HLS-stöd (hls.js) och native fallback
(function () {
  let hlsInstance = null;

  function getVideoEl() {
    return document.getElementById("video");
  }

  function destroyHls() {
    if (hlsInstance) {
      hlsInstance.destroy();
      hlsInstance = null;
    }
  }

  function playChannel(channel) {
    const video = getVideoEl();
    if (!video || !channel) return;

    destroyHls();
    video.pause();
    video.removeAttribute("src");
    video.load();

    const url = channel.url;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      video.play().catch(() => {});
    } else if (window.Hls && window.Hls.isSupported()) {
      hlsInstance = new window.Hls({ lowLatencyMode: true });
      hlsInstance.loadSource(url);
      hlsInstance.attachMedia(video);
      hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      hlsInstance.on(window.Hls.Events.ERROR, (_e, data) => {
        if (data.fatal) {
          console.warn("HLS-fel:", data.type, data.details);
        }
      });
    } else {
      video.src = url;
      video.play().catch(() => {});
    }

    updatePlayerInfo(channel);
    highlightActive(channel.id);
  }

  function updatePlayerInfo(channel) {
    const title = document.getElementById("player-title");
    const meta = document.getElementById("player-meta");
    if (title) title.textContent = channel.name;
    if (meta) meta.textContent = `${channel.flag} ${channel.country} · ${channel.category}`;
  }

  function highlightActive(id) {
    document.querySelectorAll(".channel-card").forEach((card) => {
      card.classList.toggle("active", card.dataset.id === id);
    });
  }

  window.Player = { playChannel };
})();
