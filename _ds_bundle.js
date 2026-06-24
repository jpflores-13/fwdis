/* @ds-bundle: {"format":3,"namespace":"FromWhereDoesItSTEMDesignSystem_8769d8","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"EpisodeCard","sourcePath":"components/core/EpisodeCard.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"TerminalWindow","sourcePath":"components/core/TerminalWindow.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"3915a63a9ac9","components/core/Badge.jsx":"f0af3e09d704","components/core/Button.jsx":"7c06f596a1a3","components/core/EpisodeCard.jsx":"93ac251834bc","components/core/Input.jsx":"3d616c7e6b2c","components/core/TerminalWindow.jsx":"b02e5ffac8d3","ui_kits/website/EpisodeGrid.jsx":"14437e84b6ad","ui_kits/website/Footer.jsx":"35e4f97e3ccb","ui_kits/website/Header.jsx":"871f192868f2","ui_kits/website/Hero.jsx":"1c373485dc6e","ui_kits/website/Player.jsx":"24f1d6df6ef0","ui_kits/website/data.jsx":"226d033e52aa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FromWhereDoesItSTEMDesignSystem_8769d8 = window.FromWhereDoesItSTEMDesignSystem_8769d8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular guest/host avatar with heavy ink ring. size in px. */
function Avatar({
  src,
  alt = "",
  size = 56,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      border: "var(--border-w) solid var(--ink)",
      background: "var(--marigold)",
      overflow: "hidden",
      flex: "0 0 auto",
      ...style
    }
  }, rest), src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "grayscale(1) contrast(1.05)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small uppercase mono tag. tone: "ink" | "outline" | "marigold". */
function Badge({
  tone = "ink",
  children,
  style,
  ...rest
}) {
  const tones = {
    ink: {
      background: "var(--ink)",
      color: "var(--marigold)",
      border: "var(--border-w) solid var(--ink)"
    },
    marigold: {
      background: "var(--marigold)",
      color: "var(--ink)",
      border: "var(--border-w) solid var(--ink)"
    },
    outline: {
      background: "transparent",
      color: "var(--ink)",
      border: "var(--border-w) solid var(--ink)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-caption)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary action button with the brand's hard "drawn" offset shadow.
 * variant: "solid" (ink) | "marigold" | "ghost". size: "md" | "lg".
 */
function Button({
  variant = "solid",
  size = "md",
  children,
  style,
  ...rest
}) {
  const sizes = {
    md: {
      padding: "10px 20px",
      fontSize: "0.95rem"
    },
    lg: {
      padding: "14px 28px",
      fontSize: "1.05rem"
    }
  };
  const variants = {
    solid: {
      background: "var(--ink)",
      color: "var(--marigold)"
    },
    marigold: {
      background: "var(--marigold)",
      color: "var(--ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      border: "var(--border-w) solid var(--ink)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-drawn-sm)",
      cursor: "pointer",
      transition: "transform .08s ease, box-shadow .08s ease",
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = "translate(3px,3px)";
      e.currentTarget.style.boxShadow = "0 0 0 var(--ink)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-drawn-sm)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = "var(--shadow-drawn-sm)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/EpisodeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Episode list/grid card. Shows episode number, title, guest, blurb,
 * and an optional duotone cover. Built for the podcast website + kit.
 */
function EpisodeCard({
  number,
  title,
  guest,
  topic,
  blurb,
  cover,
  avatar,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    style: {
      background: "var(--cream)",
      border: "var(--border-w) solid var(--ink)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-drawn)",
      overflow: "hidden",
      cursor: onClick ? "pointer" : "default",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), cover && /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "var(--border-w) solid var(--ink)",
      aspectRatio: "16/9",
      background: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "grayscale(1) contrast(1.05)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, number != null && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "ink"
  }, "EP. ", number), topic && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "outline"
  }, topic)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "1.3rem",
      lineHeight: 1.2,
      color: "var(--ink)"
    }
  }, title), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-small)",
      color: "var(--ink-700)",
      lineHeight: 1.5
    }
  }, blurb), guest && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      paddingTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatar,
    alt: guest,
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-caption)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      color: "var(--ink)"
    }
  }, guest))));
}
Object.assign(__ds_scope, { EpisodeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EpisodeCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text input, terminal styling, with optional mono label. */
function Input({
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--type-caption)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      marginBottom: 6,
      color: "var(--ink)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "11px 14px",
      fontFamily: "var(--font-mono)",
      fontSize: "0.95rem",
      color: "var(--ink)",
      background: "var(--white)",
      border: "var(--border-w) solid var(--ink)",
      borderRadius: "var(--radius-sm)",
      outline: "none",
      ...style
    },
    onFocus: e => e.currentTarget.style.boxShadow = "var(--shadow-drawn-sm)",
    onBlur: e => e.currentTarget.style.boxShadow = "none"
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/TerminalWindow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The signature brand motif: a hand-drawn retro window frame with an
 * "X — □" titlebar. Wrap any content; use variant="ink" for the classic
 * black-on-marigold look or variant="paper" for inverted.
 */
function TerminalWindow({
  title,
  variant = "ink",
  controls = true,
  children,
  style,
  ...rest
}) {
  const ink = variant === "ink";
  const palette = ink ? {
    bg: "var(--ink)",
    fg: "var(--marigold)",
    bar: "var(--ink)",
    line: "var(--marigold)"
  } : {
    bg: "var(--cream)",
    fg: "var(--ink)",
    bar: "var(--cream)",
    line: "var(--ink)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: palette.bg,
      color: palette.fg,
      border: "var(--border-w) solid var(--ink)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-drawn)",
      fontFamily: "var(--font-mono)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "8px 12px",
      borderBottom: `var(--border-w) solid ${palette.line}`
    }
  }, controls && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      letterSpacing: "0.1em",
      fontSize: "0.85rem"
    }
  }, "X \xA0\u2014\xA0 \u25A1"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: `2px solid ${palette.line}`,
      borderBottom: `2px solid ${palette.line}`,
      height: 7
    }
  }), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-caption)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)"
    }
  }, children));
}
Object.assign(__ds_scope, { TerminalWindow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TerminalWindow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EpisodeGrid.jsx
try { (() => {
const {
  EpisodeCard
} = window.FromWhereDoesItSTEMDesignSystem_8769d8;
function EpisodeGrid({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--c-grid)",
      borderTop: "var(--border-w) solid var(--ink)",
      borderBottom: "var(--border-w) solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "48px 24px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-marker)",
      fontSize: "2.4rem",
      color: "var(--ink)",
      margin: 0
    }
  }, "Latest episodes"), /*#__PURE__*/React.createElement(window.SectionLabel, null, "12 pages \xB7 60 episodes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, window.EPISODES.map(ep => /*#__PURE__*/React.createElement(EpisodeCard, {
    key: ep.number,
    number: ep.number,
    topic: ep.topic,
    title: ep.title,
    guest: ep.guest,
    blurb: ep.blurb,
    onClick: () => onOpen(ep)
  })))));
}
Object.assign(window, {
  EpisodeGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EpisodeGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  Button,
  Input
} = window.FromWhereDoesItSTEMDesignSystem_8769d8;
function Newsletter() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "56px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink)",
      border: "2.5px solid var(--ink)",
      borderRadius: 2,
      boxShadow: "var(--shadow-drawn)",
      padding: "40px",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 36,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-marker)",
      fontSize: "2.2rem",
      color: "var(--marigold)",
      margin: "0 0 10px"
    }
  }, "Get to the roots"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--cream)",
      fontSize: "1.05rem",
      lineHeight: 1.6,
      margin: 0
    }
  }, "New episodes, guest spotlights, and behind-the-mic notes. No spam \u2014 just science journeys.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--marigold)",
      padding: 20,
      border: "2.5px solid var(--marigold)",
      borderRadius: 2
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--ink)",
      textTransform: "uppercase",
      letterSpacing: ".12em",
      fontSize: ".85rem"
    }
  }, "\u2713 You're on the list!") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@school.edu"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    onClick: () => setSent(true)
  }, "Join the list")))));
}
function Footer() {
  const social = ["Bluesky", "Instagram", "Spotify", "GitHub", "ORCID"];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--c-footer)",
      borderTop: "var(--border-w) solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "32px 24px",
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-marker)",
      fontSize: "1.3rem",
      color: "var(--ink)"
    }
  }, "from where does it STEM?"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: ".76rem",
      textTransform: "uppercase",
      letterSpacing: ".12em",
      color: "var(--ink)",
      textDecoration: "none",
      border: "2.5px solid var(--ink)",
      borderRadius: 2,
      padding: "6px 10px"
    }
  }, s))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: ".7rem",
      color: "var(--ink-700)",
      width: "100%"
    }
  }, "Hosted by JP Flores \xB7 \xA9 2026 \xB7 Storytelling for the next generation of scientists.")));
}
Object.assign(window, {
  Newsletter,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Button,
  Badge,
  Avatar,
  TerminalWindow
} = window.FromWhereDoesItSTEMDesignSystem_8769d8;
function Header({
  onHome
}) {
  const links = ["Episodes", "About", "Categories", "Contact"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "var(--c-header)",
      borderBottom: "var(--border-w) solid var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "14px 24px",
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      all: "unset",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      color: "var(--ink)",
      border: "2.5px solid var(--ink)",
      borderRadius: 2,
      padding: "3px 7px",
      fontSize: ".8rem"
    }
  }, "X \u2014 \u25A1"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-marker)",
      fontSize: "1.35rem",
      color: "var(--ink)",
      lineHeight: 1
    }
  }, "from where does it STEM?")), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 4,
      alignItems: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: ".82rem",
      textTransform: "uppercase",
      letterSpacing: ".12em",
      color: "var(--ink)",
      textDecoration: "none",
      padding: "8px 12px"
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "solid"
  }, "Listen \u25B8"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  Badge
} = window.FromWhereDoesItSTEMDesignSystem_8769d8;
function Hero() {
  const platforms = ["Spotify", "Apple", "Pocket Casts", "RSS"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "64px 24px 40px",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, "Storytelling for the next generation of scientists"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-marker)",
      fontSize: "clamp(2.6rem,5vw,4.2rem)",
      lineHeight: 1.02,
      color: "var(--ink)",
      margin: "20px 0 18px"
    }
  }, "From where", /*#__PURE__*/React.createElement("br", null), "does it STEM?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "1.15rem",
      lineHeight: 1.6,
      color: "var(--ink-700)",
      maxWidth: 520,
      margin: "0 0 26px"
    }
  }, "Studying STEM can be daunting and inaccessible \u2014 especially for students in underrepresented communities. We capture stories of resilience and scientific journeys, getting down to the roots to ask the real question."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg"
  }, "\u25B8 Play latest episode"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, platforms.map(p => /*#__PURE__*/React.createElement(Badge, {
    key: p,
    tone: "outline"
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, ["from where", "does it", "STEM?"].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--ink)",
      border: "2.5px solid var(--ink)",
      borderRadius: 2,
      boxShadow: "var(--shadow-drawn)",
      overflow: "hidden",
      marginLeft: i * 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 11px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--marigold)",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: ".78rem"
    }
  }, "X \u2014 \u25A1"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: "2px solid var(--marigold)",
      borderBottom: "2px solid var(--marigold)",
      height: 6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 20px 20px",
      fontFamily: "var(--font-marker)",
      color: "var(--marigold)",
      fontSize: i === 2 ? "3rem" : "2rem",
      lineHeight: 1
    }
  }, t)))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Player.jsx
try { (() => {
const {
  Button,
  Badge,
  Avatar
} = window.FromWhereDoesItSTEMDesignSystem_8769d8;
function Player({
  ep,
  onBack
}) {
  const [playing, setPlaying] = React.useState(true);
  const [pos, setPos] = React.useState(34);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      padding: "40px 24px 72px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      all: "unset",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: ".8rem",
      textTransform: "uppercase",
      letterSpacing: ".14em",
      color: "var(--ink)",
      marginBottom: 22,
      display: "inline-block"
    }
  }, "\u2190 All episodes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink"
  }, "EP. ", ep.number), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, ep.topic)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-marker)",
      fontSize: "clamp(2rem,4vw,3rem)",
      lineHeight: 1.05,
      color: "var(--ink)",
      margin: "0 0 18px"
    }
  }, ep.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 48
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: 48,
    style: {
      marginLeft: -22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: ".82rem",
      color: "var(--ink)",
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, ep.guest), " \xB7 guest"), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: .7
    }
  }, "w/ ", ep.cohost, " \xB7 co-host"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink)",
      border: "2.5px solid var(--ink)",
      borderRadius: 2,
      boxShadow: "var(--shadow-drawn)",
      overflow: "hidden",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--marigold)",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: ".78rem"
    }
  }, "X \u2014 \u25A1"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: "2px solid var(--marigold)",
      borderBottom: "2px solid var(--marigold)",
      height: 6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--marigold)",
      fontFamily: "var(--font-mono)",
      fontSize: ".7rem",
      letterSpacing: ".1em"
    }
  }, "NOW PLAYING")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 22px 24px",
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(p => !p),
    style: {
      all: "unset",
      cursor: "pointer",
      width: 56,
      height: 56,
      borderRadius: 999,
      background: "var(--marigold)",
      border: "2.5px solid var(--marigold)",
      color: "var(--ink)",
      display: "grid",
      placeItems: "center",
      fontSize: "1.3rem",
      flex: "0 0 auto"
    }
  }, playing ? "❚❚" : "▸"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: "rgba(251,168,80,.25)",
      borderRadius: 999,
      overflow: "hidden",
      cursor: "pointer"
    },
    onClick: e => {
      const r = e.currentTarget.getBoundingClientRect();
      setPos(Math.round((e.clientX - r.left) / r.width * 100));
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pos + "%",
      height: "100%",
      background: "var(--marigold)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8,
      fontFamily: "var(--font-mono)",
      fontSize: ".72rem",
      color: "var(--marigold)"
    }
  }, /*#__PURE__*/React.createElement("span", null, Math.floor(pos * 0.5), ":", String(pos % 60).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, ep.len))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "1.12rem",
      lineHeight: 1.7,
      color: "var(--ink-700)"
    }
  }, ep.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid"
  }, "Request transcript"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Share")));
}
Object.assign(window, {
  Player
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Player.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
// Shared episode data + small layout pieces for the website UI kit.
const EPISODES = [{
  number: 60,
  topic: "Bioengineering",
  title: "Shaping the Future of Bioengineering",
  guest: "Dr. Kaitlyn Sadtler",
  cohost: "Sydney Floryanzia",
  len: "52 min",
  blurb: "Dr. Kaitlyn Sadtler is pushing the boundaries of biomedical science. Co-hosted with HHMI Gilliam Fellow and ChemE PhD candidate Sydney Floryanzia, we talk research, the twists and turns of their journeys, and the power of collaboration."
}, {
  number: 59,
  topic: "Marine Biology",
  title: "Making Waves in Science, SciComm & Representation",
  guest: "Jaida Elcock",
  cohost: "Danny Olivares-Cordero",
  len: "47 min",
  blurb: "Jaida Elcock is a marine biologist studying basking sharks. With HHMI Gilliam Fellow Danny Olivares-Cordero, we dive into their journeys and what keeps them hooked on the ocean's mysteries."
}, {
  number: 58,
  topic: "Science Writing",
  title: "Bridging Science & Story",
  guest: "Sabrina Imbler",
  cohost: "Angelique Allen",
  len: "55 min",
  blurb: "Science writer Sabrina Imbler wrote one of my favorite books of all time: How Far the Light Reaches. We discussed journalism and ways to make science more accessible and engaging."
}, {
  number: 57,
  topic: "Outreach",
  title: "Educating Communities through Global Experiences",
  guest: "Zingfa Wala",
  cohost: "Julissa Larios",
  len: "44 min",
  blurb: "Both work at the Organization of Tropical Studies and are passionate about science outreach, education, and community."
}, {
  number: 56,
  topic: "Representation",
  title: "Inspiring the Next Generation of Filipino Scientists",
  guest: "Dr. Sheila Teves",
  cohost: "Dr. Lawrence David",
  len: "61 min",
  blurb: "Words cannot explain how fun it was chatting with other Filipino scientists. #representationmatters"
}, {
  number: 55,
  topic: "Neuroscience",
  title: "Curiosity, Mentorship & the Long Road",
  guest: "Dr. Maya Okafor",
  cohost: "Enya Dewars",
  len: "49 min",
  blurb: "On finding mentors who see you, and why the path through science is rarely a straight line."
}];
function SectionLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.78rem",
      textTransform: "uppercase",
      letterSpacing: "0.16em",
      color: "var(--ink)",
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 0,
      borderTop: "2.5px solid var(--ink)"
    }
  }), children);
}
Object.assign(window, {
  EPISODES,
  SectionLabel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.EpisodeCard = __ds_scope.EpisodeCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.TerminalWindow = __ds_scope.TerminalWindow;

})();
