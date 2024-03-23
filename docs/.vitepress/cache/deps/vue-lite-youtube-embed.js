import {
  computed,
  defineComponent,
  h,
  ref
} from "./chunk-V634PGSD.js";

// node_modules/vue-lite-youtube-embed/node_modules/vue-demi/lib/index.mjs
var isVue2 = false;

// node_modules/vue-lite-youtube-embed/dist/index.mjs
var I = (e) => e ? Object.entries(e).reduce((l, [t, r]) => (t = t.charAt(0).toUpperCase() + t.slice(1), t = `on${t}`, { ...l, [t]: r }), {}) : null;
var S = (e, l = {}, t) => {
  if (isVue2)
    return h(e, l, t);
  let { props: r, domProps: o, on: i, attrs: u, ...s } = l, d = I(i), c = { ...s, ...r, ...o, ...d, ...u };
  return h(e, c, t);
};
var n = S;
function m(e, l) {
  var t;
  if (e === null)
    throw new Error("iframe element not instantiated.");
  (t = e.contentWindow) == null || t.postMessage(`{"event":"command","func":"${l}","args":""}`, "*");
}
function p(e) {
  return n("link", { attrs: { rel: "preconnect", href: e } });
}
var q = defineComponent({ props: { announce: { type: String, required: false, default: "Watch" }, id: { type: String, required: true }, title: { type: String, required: true }, activatedClass: { type: String, required: false, default: "lyt-activated" }, adNetwork: { type: Boolean, required: false, default: true }, iframeClass: { type: String, required: false, default: "" }, cookie: { type: Boolean, required: false, default: false }, params: { type: String, required: false, default: "" }, playerClass: { type: String, required: false, default: "lty-playbtn" }, playlist: { type: Boolean, required: false, default: false }, playlistCoverId: { type: String, required: false, default: "" }, poster: { type: String, required: false, default: "hqdefault" }, wrapperClass: { type: String, required: false, default: "yt-lite" }, muted: { type: Boolean, required: false, default: false }, thumbnail: { type: String, required: false }, webp: { type: Boolean, required: false, default: false }, rel: { type: String, required: false, default: "preload" }, aspectHeight: { type: Number, required: false, default: 9 }, aspectWidth: { type: Number, required: false, default: 16 } }, emits: ["iframeAdded"], setup(e, { emit: l, expose: t }) {
  let r = ref(false), o = ref(false), i = ref(null), u = computed(() => encodeURIComponent(e.id)), s = computed(() => `&${e.params}` || ""), d = computed(() => e.muted ? "&mute=1" : ""), c = computed(() => e.webp ? "webp" : "jpg"), g = computed(() => e.webp ? "vi_webp" : "vi"), $ = computed(() => typeof e.playlistCoverId == "string" ? encodeURIComponent(e.playlistCoverId) : null), b = computed(() => e.thumbnail || (e.playlist ? `https://i.ytimg.com/${g.value}/${$.value}/${e.poster}.${c.value}` : `https://i.ytimg.com/${g.value}/${u.value}/${e.poster}.${c.value}`)), f = computed(() => e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com"), k = computed(() => e.playlist ? `${f.value}/embed/videoseries?autoplay=1&enablejsapi=1&list=${u.value}${d.value}${s.value}` : `${f.value}/embed/${u.value}?autoplay=1&enablejsapi=1&state=1${d.value}${s.value}`);
  function v() {
    o.value || (o.value = true, l("iframeAdded"));
  }
  function h2() {
    r.value || (r.value = true);
  }
  t({ getPlayerInstance() {
    return i.value;
  }, stopVideo() {
    m(i.value, "stopVideo");
  }, pauseVideo() {
    m(i.value, "pauseVideo");
  }, playVideo() {
    m(i.value, "playVideo");
  }, warmConnections: h2, addIframe: v });
  let w = () => [n("link", { attrs: { rel: e.rel, href: b.value, as: "image" } }), r.value ? p(f.value) : null, r.value ? p("https://www.google.com") : null, e.adNetwork ? p("https://static.doubleclick.net") : null, e.adNetwork ? p("https://googleads.g.doubleclick.net") : null, n("article", { on: { pointerover: h2, click: v }, class: `${e.wrapperClass} ${o.value ? e.activatedClass : ""}`, attrs: { "data-title": e.title }, style: { backgroundImage: `url(${b.value})`, "--aspect-ratio": `${e.aspectHeight / e.aspectWidth * 100}%` } }, [n("button", { class: e.playerClass, attrs: { type: "button", "aria-label": `${e.announce} ${e.title}` } }), o.value ? n("iframe", { ref: i, class: e.iframeClass, attrs: { title: e.title, width: 560, height: 315, frameborder: 0, allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen: true, src: k.value } }) : null])];
  return isVue2 ? () => n("Fragment", {}, w()) : () => w();
} });
var j = q;
export {
  j as default
};
/*! Bundled license information:

vue-lite-youtube-embed/dist/index.mjs:
  (*!
   * Original code by Ibrahim Cesar
   * MIT Licensed, Copyright 2022 Ibrahim Cesar, see https://github.com/ibrahimcesar/react-lite-youtube-embed/blob/main/LICENSE for details
   *
   * Credits to the team:
   * https://github.com/ibrahimcesar/react-lite-youtube-embed/blob/main/src/lib/index.tsx
   *)
*/
//# sourceMappingURL=vue-lite-youtube-embed.js.map
