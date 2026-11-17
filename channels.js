// Kanaldata: gratis publika HLS-strömmar från hela världen
// OBS: Strömmar kan sluta fungera – listan är ett urval av öppna kanaler.
window.CHANNELS = [
  { id: "dw-en", name: "DW English", country: "Tyskland", flag: "🇩🇪", region: "Europa", category: "Nyheter", url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8" },
  { id: "france24-en", name: "France 24 English", country: "Frankrike", flag: "🇫🇷", region: "Europa", category: "Nyheter", url: "https://static.france24.com/live/F24_EN_LO_HLS/live_web.m3u8" },
  { id: "euronews-en", name: "Euronews English", country: "EU", flag: "🇪🇺", region: "Europa", category: "Nyheter", url: "https://rakuten-euronews-1-eu.rakuten.wurl.tv/playlist.m3u8" },
  { id: "aljazeera-en", name: "Al Jazeera English", country: "Qatar", flag: "🇶🇦", region: "Mellanöstern", category: "Nyheter", url: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8" },
  { id: "nhk-world", name: "NHK World Japan", country: "Japan", flag: "🇯🇵", region: "Asien", category: "Nyheter", url: "https://nhkwtvglobal-i.akamaihd.net/hls/live/2003458/nhkwtvglobal/index.m3u8" },
  { id: "cna-sg", name: "CNA", country: "Singapore", flag: "🇸🇬", region: "Asien", category: "Nyheter", url: "https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index.m3u8" },
  { id: "abc-au", name: "ABC News Australia", country: "Australien", flag: "🇦🇺", region: "Oceanien", category: "Nyheter", url: "https://c.mjh.nz/abc-news.m3u8" },
  { id: "bloomberg", name: "Bloomberg TV", country: "USA", flag: "🇺🇸", region: "Nordamerika", category: "Ekonomi", url: "https://bloomberg-bloombergtv-1-us.plex.wurl.tv/playlist.m3u8" },
  { id: "nasa", name: "NASA TV", country: "USA", flag: "🇺🇸", region: "Nordamerika", category: "Vetenskap", url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8" },
  { id: "redbull", name: "Red Bull TV", country: "Österrike", flag: "🇦🇹", region: "Europa", category: "Sport", url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8" },
  { id: "tagesschau", name: "Tagesschau 24", country: "Tyskland", flag: "🇩🇪", region: "Europa", category: "Nyheter", url: "https://tagesschau.akamaized.net/hls/live/2020115/tagesschau/tagesschau_1/master.m3u8" },
  { id: "sky-news", name: "Sky News", country: "Storbritannien", flag: "🇬🇧", region: "Europa", category: "Nyheter", url: "https://linear417-gb-hls1-prd-ak.cdn.skycdp.com/100e/Content/HLS_001_1080/Live/channel(skynews)/index.m3u8" },
  { id: "rt", name: "RT", country: "Ryssland", flag: "🇷🇺", region: "Europa", category: "Nyheter", url: "https://rt-glb.rttv.com/live/rtnews/playlist.m3u8" },
  { id: "trt-world", name: "TRT World", country: "Turkiet", flag: "🇹🇷", region: "Mellanöstern", category: "Nyheter", url: "https://tv-trtworld.medya.trt.com.tr/master.m3u8" },
  { id: "cgtn", name: "CGTN", country: "Kina", flag: "🇨🇳", region: "Asien", category: "Nyheter", url: "https://livedoc.cgtn.com/500d/prog_index.m3u8" },
  { id: "arirang", name: "Arirang TV", country: "Sydkorea", flag: "🇰🇷", region: "Asien", category: "Kultur", url: "https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8" },
  { id: "tv5monde", name: "TV5Monde", country: "Frankrike", flag: "🇫🇷", region: "Europa", category: "Kultur", url: "https://ott.tv5monde.com/Content/HLS/Live/Channel(TV5MONDE)/index.m3u8" },
  { id: "fashion-tv", name: "Fashion TV", country: "Frankrike", flag: "🇫🇷", region: "Europa", category: "Livsstil", url: "https://fash1043.cloudycdn.services/slive/_definst_/ftv_ftv_midnite_k1_mp4_720p_1_720p/chunklist.m3u8" },
  { id: "nasa-iss", name: "ISS Live", country: "Rymden", flag: "🛰️", region: "Rymden", category: "Vetenskap", url: "https://iss.streaming.mediaservices.windows.net/1f8d1e0e-2b0e-4b8a-9c1e-2f0e0e0e0e0e/ISS.m3u8" },
  { id: "radio-canada", name: "ICI RDI", country: "Kanada", flag: "🇨🇦", region: "Nordamerika", category: "Nyheter", url: "https://rcavlive.akamaized.net/hls/live/704025/xcanrdi/master.m3u8" }
];
