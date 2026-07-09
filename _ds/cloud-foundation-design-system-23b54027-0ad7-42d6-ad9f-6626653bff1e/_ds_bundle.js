/* @ds-bundle: {"format":3,"namespace":"CloudFoundationDesignSystem_23b540","components":[{"name":"MuiButton","sourcePath":"packages/library/components/Button/Button.theme.ts"},{"name":"MuiCard","sourcePath":"packages/library/components/Card/Card.theme.ts"},{"name":"MuiChip","sourcePath":"packages/library/components/Chip/Chip.theme.ts"},{"name":"MuiMenu","sourcePath":"packages/library/components/Menu/Menu.theme.ts"},{"name":"MuiSwitch","sourcePath":"packages/library/components/Switch/Switch.theme.ts"},{"name":"MuiTabs","sourcePath":"packages/library/components/Tabs/Tabs.theme.ts"},{"name":"MuiTooltip","sourcePath":"packages/library/components/Tooltip/Tooltip.theme.ts"}],"sourceHashes":{"meta-integration/chrome.jsx":"40cb5e693ac1","meta-integration/design-canvas.jsx":"bd8746af6e58","meta-integration/icons.jsx":"a656dafff3e1","meta-integration/metasettings.jsx":"c40fe8d210d0","meta-integration/page.jsx":"c3a9532fcbdf","meta-integration/primitives.jsx":"9d3ef56002e9","packages/library/components/Button/Button.theme.ts":"c62652f162d5","packages/library/components/Card/Card.theme.ts":"2ec6fa3de89f","packages/library/components/Chip/Chip.theme.ts":"bd5b14fb4d93","packages/library/components/Menu/Menu.theme.ts":"0dd190a8f5eb","packages/library/components/Switch/Switch.theme.ts":"83e2a187cea8","packages/library/components/Tabs/Tabs.theme.ts":"385512dc997c","packages/library/components/Tooltip/Tooltip.theme.ts":"e9ebf2a074fa","packages/library/components/icons/brands/Unity.tsx":"37a05fd3706e","packages/library/components/icons/brands/UnityColor.tsx":"c2c2b24802e5","packages/library/components/icons/brands/UnityGrow.tsx":"cc12d178b082","packages/library/components/icons/brands/UnityName.tsx":"433d9a46fa44","packages/library/components/icons/products/Analytics.tsx":"7238288f41db","packages/library/components/icons/products/AssetManager.tsx":"ce25cdae69fb","packages/library/components/icons/products/CloudCode.tsx":"012a75581093","packages/library/components/icons/products/CloudContent.tsx":"db9a1f58ef99","packages/library/components/icons/products/CloudSave.tsx":"3f18d4b67ab5","packages/library/components/icons/products/DevOps.tsx":"c6b097ec582d","packages/library/components/icons/products/Economy.tsx":"190944d2d92e","packages/library/components/icons/products/Friends.tsx":"3622cc2c19de","packages/library/components/icons/products/Leaderboard.tsx":"83bf31f8a50c","packages/library/components/icons/products/Lobby.tsx":"5fffd880deb7","packages/library/components/icons/products/Matchmaker.tsx":"a87967b02c8d","packages/library/components/icons/products/PlayerManagement.tsx":"5e38d2167fca","packages/library/components/icons/products/Relay.tsx":"5630b52dbf1a","packages/library/components/icons/products/RemoteConfig.tsx":"8695e3529fb8","packages/library/components/icons/products/Triggers.tsx":"3932f618936b","packages/library/components/icons/products/UnityAI.tsx":"f61fefd381ac","packages/library/components/icons/products/VersionControl.tsx":"7c1142cc0cee","packages/library/components/icons/products/Vivox.tsx":"3973f53a075b","packages/library/theme/breakpoints/breakpoints.ts":"068c8d429d74","packages/library/theme/chart/chart.ts":"7df1730c97fd","packages/library/theme/constants.ts":"81b6e609590b","packages/library/theme/elevations/elevations.ts":"b904b9fd1d72","packages/library/theme/elevations/shadows.ts":"70f9d65ccb92","packages/library/theme/palette/color-map.ts":"6257c7ac658f","packages/library/theme/palette/index.ts":"9340f71518bb","packages/library/theme/palette/palette-dark.ts":"7f67a4b80864","packages/library/theme/palette/palette-light.ts":"1c7577b76482","packages/library/theme/theme.ts":"3c27848b8d4a","packages/library/theme/transitions/duration.ts":"fea29d8fa64c","packages/library/theme/typography/typography.ts":"8edb5f8c4d46","packages/library/theme/zIndex/zIndex.ts":"92dd00fab86d","ui_kits/dashboard/AppHeader.jsx":"e49d1285c3c7","ui_kits/dashboard/SideNav.jsx":"56c5a1369de6","ui_kits/dashboard/icons.jsx":"a656dafff3e1","ui_kits/dashboard/primitives.jsx":"9d3ef56002e9","ui_kits/dashboard/screens.jsx":"ca97c7123ddc"},"inlinedExternals":[],"unexposedExports":[{"name":"breakpoints","sourcePath":"packages/library/theme/breakpoints/breakpoints.ts"},{"name":"chart","sourcePath":"packages/library/theme/chart/chart.ts"},{"name":"colorMap","sourcePath":"packages/library/theme/palette/color-map.ts"},{"name":"createColorSchemeTheme","sourcePath":"packages/library/theme/theme.ts"},{"name":"createTheme","sourcePath":"packages/library/theme/theme.ts"},{"name":"darkElevations","sourcePath":"packages/library/theme/elevations/elevations.ts"},{"name":"darkPalette","sourcePath":"packages/library/theme/palette/palette-dark.ts"},{"name":"darkShadows","sourcePath":"packages/library/theme/elevations/shadows.ts"},{"name":"darkTheme","sourcePath":"packages/library/theme/theme.ts"},{"name":"duration","sourcePath":"packages/library/theme/transitions/duration.ts"},{"name":"elevations","sourcePath":"packages/library/theme/elevations/elevations.ts"},{"name":"lightElevations","sourcePath":"packages/library/theme/elevations/elevations.ts"},{"name":"lightPalette","sourcePath":"packages/library/theme/palette/palette-light.ts"},{"name":"lightShadows","sourcePath":"packages/library/theme/elevations/shadows.ts"},{"name":"lightTheme","sourcePath":"packages/library/theme/theme.ts"},{"name":"shadows","sourcePath":"packages/library/theme/elevations/shadows.ts"},{"name":"theme","sourcePath":"packages/library/theme/theme.ts"},{"name":"typography","sourcePath":"packages/library/theme/typography/typography.ts"},{"name":"zIndex","sourcePath":"packages/library/theme/zIndex/zIndex.ts"}]} */

(() => {

const __ds_ns = (window.CloudFoundationDesignSystem_23b540 = window.CloudFoundationDesignSystem_23b540 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// meta-integration/chrome.jsx
try { (() => {
// Dark Unity Cloud chrome — faithful to the Project settings screenshot.
// TopBar (global header) + ProjectNav (Development side nav) + shared row bits.
const {
  useState: useCS
} = React;

/* =============================================================== Top bar */
function TopBar() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 44,
      minHeight: 44,
      background: 'var(--cf-bg)',
      borderBottom: '1px solid var(--cf-divider)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 12px',
      flexShrink: 0,
      position: 'relative',
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-house",
    style: {
      fontSize: 17,
      color: 'var(--cf-fg-secondary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      font: '600 13px var(--cf-font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      background: '#7C5CFC',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-lock-simple",
    style: {
      fontSize: 10,
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cf-fg)'
    }
  }, "1-MAY DDF"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      font: '700 15px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, /*#__PURE__*/React.createElement(UnityMark, {
    size: 18,
    color: "var(--cf-fg)"
  }), /*#__PURE__*/React.createElement("span", null, "Unity")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: 280,
      background: 'var(--cf-bg-elevation-0)',
      border: '1px solid var(--cf-divider)',
      borderRadius: 7,
      padding: '5px 10px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass",
    style: {
      fontSize: 13,
      color: 'var(--cf-fg-disabled)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '400 13px var(--cf-font-sans)',
      color: 'var(--cf-fg-disabled)'
    }
  }, "Search\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px var(--cf-font-sans)',
      color: 'var(--cf-fg-disabled)'
    }
  }, "\u2318K"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-globe",
    style: {
      fontSize: 16,
      color: 'var(--cf-fg-secondary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 9px',
      borderRadius: 6,
      border: '1px solid var(--cf-warning-dark)',
      color: 'var(--cf-warning-dark)',
      font: '600 12px var(--cf-font-sans)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-eye",
    style: {
      fontSize: 13
    }
  }), "Impersonating"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-bell",
    style: {
      fontSize: 16,
      color: 'var(--cf-fg-secondary)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-squares-four",
    style: {
      fontSize: 16,
      color: 'var(--cf-fg-secondary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--cf-divider)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, "1-MAY DDF"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: '#2C7A6B',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 10px var(--cf-font-sans)'
    }
  }, "FE")));
}

/* =========================================================== Project nav */
const NAV_MAIN = [{
  id: 'Overview',
  icon: 'squares-four'
}, {
  id: 'Products',
  icon: 'squares-four'
}, {
  id: 'Diagnostics',
  icon: 'pulse'
}, {
  id: 'Members',
  icon: 'users'
}, {
  id: 'Environments',
  icon: 'stack'
}, {
  id: 'Secrets',
  icon: 'lock-simple'
}, {
  id: 'Apps',
  icon: 'device-mobile'
}, {
  id: 'Settings',
  icon: 'gear'
}];
const NAV_SHORTCUTS = [{
  id: 'Build Automation',
  icon: 'arrows-clockwise'
}, {
  id: 'Version Control',
  icon: 'git-branch'
}];
function NavRow({
  icon,
  label,
  active,
  color,
  custom
}) {
  const [h, setH] = useCS(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      height: 34,
      padding: '0 10px',
      margin: '1px 8px',
      borderRadius: 7,
      cursor: 'pointer',
      position: 'relative',
      background: active ? 'var(--cf-action-selected)' : h ? 'var(--cf-action-hover)' : 'transparent',
      border: active ? '1px solid var(--cf-border)' : '1px solid transparent',
      color: active ? 'var(--cf-fg)' : 'var(--cf-fg-secondary)'
    }
  }, custom || /*#__PURE__*/React.createElement("i", {
    className: 'ph ph-' + icon,
    style: {
      fontSize: 17,
      color: color || 'inherit',
      width: 20,
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: (active ? 600 : 500) + ' 13px var(--cf-font-sans)',
      whiteSpace: 'nowrap',
      color: active ? 'var(--cf-fg)' : 'var(--cf-fg)'
    }
  }, label));
}
function NavLabel({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 18px',
      marginTop: 6,
      font: '600 11px var(--cf-font-sans)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--cf-fg-disabled)'
    }
  }, /*#__PURE__*/React.createElement("span", null, children), action);
}
function ProjectNav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 232,
      minWidth: 232,
      background: 'var(--cf-bg-paper)',
      borderRight: '1px solid var(--cf-divider)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(NavRow, {
    icon: "house",
    label: "Home"
  }), /*#__PURE__*/React.createElement(NavRow, {
    label: "Development",
    active: false,
    custom: /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 6,
        background: '#7C5CFC',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph-bold ph-code",
      style: {
        fontSize: 13,
        color: '#fff'
      }
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      height: 38,
      padding: '0 10px',
      margin: '1px 8px 4px',
      borderRadius: 7,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 6,
      background: '#E8590C',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(UnityMark, {
    size: 14,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '600 13px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, "2-MAY 2026"), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-up-down",
    style: {
      fontSize: 14,
      color: 'var(--cf-fg-secondary)'
    }
  })), NAV_MAIN.map(it => /*#__PURE__*/React.createElement(NavRow, {
    key: it.id,
    icon: it.icon,
    label: it.id,
    active: it.id === 'Settings'
  })), /*#__PURE__*/React.createElement(NavLabel, {
    action: /*#__PURE__*/React.createElement("i", {
      className: "ph ph-plus",
      style: {
        fontSize: 13
      }
    })
  }, "Shortcuts"), NAV_SHORTCUTS.map(it => /*#__PURE__*/React.createElement(NavRow, {
    key: it.id,
    icon: it.icon,
    label: it.id
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--cf-divider)',
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement(NavRow, {
    icon: "download-simple",
    label: "Download Unity"
  }), /*#__PURE__*/React.createElement(NavRow, {
    icon: "target",
    label: "User Acquisition",
    color: "#2DB6A3"
  }), /*#__PURE__*/React.createElement(NavRow, {
    icon: "currency-circle-dollar",
    label: "Monetization",
    color: "#2FA866"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 18px 4px',
      font: '700 13px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Unity", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cf-fg-disabled)'
    }
  }, "\xB0")), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-push-pin",
    style: {
      fontSize: 14,
      color: 'var(--cf-fg-secondary)'
    }
  }))));
}
Object.assign(window, {
  TopBar,
  ProjectNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "meta-integration/chrome.jsx", error: String((e && e.message) || e) }); }

// meta-integration/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "meta-integration/design-canvas.jsx", error: String((e && e.message) || e) }); }

// meta-integration/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Cloud Foundation — icon module (auto-generated from source SVGs)
// Product icons inherit `currentColor`; size via the `size` prop.
const PRODUCT_PATHS = {
  "Analytics": "<path d=\"M28 25H27L27 5C27 4.73478 26.8946 4.48043 26.7071 4.29289C26.5196 4.10536 26.2652 4 26 4L19 4C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5V10L12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11V16L6 16C5.73478 16 5.48043 16.1054 5.29289 16.2929C5.10536 16.4804 5 16.7348 5 17L5 25H4C3.73478 25 3.48043 25.1054 3.29289 25.2929C3.10536 25.4804 3 25.7348 3 26C3 26.2652 3.10536 26.5196 3.29289 26.7071C3.48043 26.8946 3.73478 27 4 27L28 27C28.2652 27 28.5196 26.8946 28.7071 26.7071C28.8946 26.5196 29 26.2652 29 26C29 25.7348 28.8946 25.4804 28.7071 25.2929C28.5196 25.1054 28.2652 25 28 25ZM20 6L25 6L25 25H20L20 6ZM13 12L18 12L18 25L13 25L13 12ZM7 18H11L11 25H7L7 18Z\" fill=\"currentColor\"></path>",
  "CloudCode": "<path d=\"M23.457 18.2812C23.8536 17.8969 24.4867 17.9082 24.8711 18.3047L29.7188 23.3047C30.0938 23.6923 30.0938 24.3077 29.7188 24.6953L24.8711 29.6953C24.4867 30.0918 23.8536 30.1031 23.457 29.7188C23.0607 29.3345 23.0516 28.7013 23.4355 28.3047L27.6055 24L23.4355 19.6953C23.0516 19.2987 23.0607 18.6655 23.457 18.2812Z\" fill=\"currentColor\"></path> <path d=\"M11.7051 18.2676C12.1098 17.8921 12.7415 17.9157 13.1172 18.3203C13.4927 18.725 13.4691 19.3567 13.0645 19.7324L8.4668 24L13.0645 28.2676C13.4691 28.6433 13.4927 29.275 13.1172 29.6797C12.7415 30.0843 12.1098 30.1079 11.7051 29.7324L6.32031 24.7324C6.11655 24.5432 6 24.2781 6 24C6 23.7219 6.11655 23.4568 6.32031 23.2676L11.7051 18.2676Z\" fill=\"currentColor\"></path> <path d=\"M19.5742 18.0273C20.1119 18.1535 20.4464 18.6908 20.3203 19.2285L17.9727 29.2285C17.8464 29.766 17.3091 30.0988 16.7715 29.9727C16.234 29.8464 15.9012 29.3091 16.0273 28.7715L18.373 18.7715C18.4993 18.234 19.0366 17.9013 19.5742 18.0273Z\" fill=\"currentColor\"></path> <path d=\"M20 2C25.5228 2 30 6.47715 30 12C30 14.4173 29.1425 16.6344 27.7148 18.3633L26.3086 16.9121C27.3661 15.5559 28 13.853 28 12C28 7.58172 24.4183 4 20 4C15.5817 4 12 7.58172 12 12C12 12.3012 12.0166 12.5987 12.0488 12.8906C12.1092 13.4394 11.7128 13.9335 11.1641 13.9941C10.6154 14.0544 10.1212 13.6581 10.0605 13.1094C10.0203 12.7448 10 12.3746 10 12C10 11.3652 10.0607 10.7445 10.1738 10.1426C9.79764 10.0521 9.40535 10 9 10C6.23858 10 4 12.2386 4 15C4 17.1427 5.35013 18.9642 7.24414 19.6758L5.6582 21.1504C3.47941 19.964 2 17.6554 2 15C2 11.134 5.13401 8 9 8C9.59999 8 10.1832 8.07615 10.7402 8.21875C12.2315 4.57064 15.8153 2 20 2Z\" fill=\"currentColor\"></path>",
  "CloudSave": "<path d=\"M30.9999 16C31.0062 18.3815 30.2336 20.6997 28.7999 22.6013C28.7209 22.7063 28.6221 22.7948 28.5089 22.8617C28.3958 22.9285 28.2705 22.9724 28.1404 22.9909C28.0103 23.0093 27.8778 23.002 27.7505 22.9692C27.6233 22.9365 27.5037 22.879 27.3986 22.8C27.2936 22.7211 27.2051 22.6222 27.1383 22.5091C27.0714 22.3959 27.0275 22.2707 27.0091 22.1406C26.9906 22.0105 26.9979 21.878 27.0307 21.7507C27.0634 21.6234 27.1209 21.5038 27.1999 21.3988C28.3734 19.8441 29.0056 17.9479 28.9999 16C28.9999 13.6131 28.0517 11.3239 26.3638 9.63607C24.676 7.94825 22.3868 7.00004 19.9999 7.00004C17.6129 7.00004 15.3238 7.94825 13.6359 9.63607C11.9481 11.3239 10.9999 13.6131 10.9999 16C10.9999 16.2653 10.8945 16.5196 10.707 16.7071C10.5195 16.8947 10.2651 17 9.99988 17C9.73467 17 9.48031 16.8947 9.29278 16.7071C9.10524 16.5196 8.99988 16.2653 8.99988 16C8.9994 14.9909 9.13778 13.9865 9.41113 13.015C9.27489 13 9.13738 13 8.99988 13C7.40859 13 5.88246 13.6322 4.75724 14.7574C3.63203 15.8826 2.99988 17.4087 2.99988 19C2.99988 20.5913 3.63203 22.1175 4.75724 23.2427C5.88246 24.3679 7.40859 25 8.99988 25H11.9999C12.2651 25 12.5195 25.1054 12.707 25.2929C12.8945 25.4805 12.9999 25.7348 12.9999 26C12.9999 26.2653 12.8945 26.5196 12.707 26.7071C12.5195 26.8947 12.2651 27 11.9999 27H8.99988C7.9001 27.0003 6.81208 26.7738 5.80377 26.3347C4.79546 25.8955 3.88853 25.2532 3.1396 24.4478C2.39068 23.6425 1.81585 22.6913 1.45103 21.6538C1.08621 20.6163 0.939225 19.5147 1.01926 18.4179C1.09929 17.321 1.40462 16.2524 1.91619 15.2788C2.42775 14.3053 3.13455 13.4477 3.99245 12.7595C4.85035 12.0714 5.84092 11.5675 6.90229 11.2794C7.96366 10.9913 9.07304 10.9251 10.1611 11.085C11.2691 8.86898 13.0928 7.09188 15.3368 6.04158C17.5808 4.99127 20.1136 4.72928 22.525 5.29804C24.9365 5.8668 27.0853 7.233 28.6234 9.17535C30.1616 11.1177 30.9989 13.5224 30.9999 16ZM19.7074 15.2925C19.6145 15.1996 19.5042 15.1258 19.3828 15.0755C19.2614 15.0252 19.1313 14.9992 18.9999 14.9992C18.8685 14.9992 18.7383 15.0252 18.6169 15.0755C18.4955 15.1258 18.3853 15.1996 18.2924 15.2925L14.2924 19.2925C14.1995 19.3854 14.1258 19.4957 14.0755 19.6171C14.0252 19.7385 13.9993 19.8686 13.9993 20C13.9993 20.1314 14.0252 20.2615 14.0755 20.3829C14.1258 20.5043 14.1995 20.6146 14.2924 20.7075C14.48 20.8952 14.7345 21.0006 14.9999 21.0006C15.1313 21.0006 15.2614 20.9747 15.3828 20.9244C15.5042 20.8741 15.6145 20.8004 15.7074 20.7075L17.9999 18.4138V26C17.9999 26.2653 18.1052 26.5196 18.2928 26.7071C18.4803 26.8947 18.7347 27 18.9999 27C19.2651 27 19.5195 26.8947 19.707 26.7071C19.8945 26.5196 19.9999 26.2653 19.9999 26V18.4138L22.2924 20.7075C22.3853 20.8004 22.4956 20.8741 22.617 20.9244C22.7384 20.9747 22.8685 21.0006 22.9999 21.0006C23.1313 21.0006 23.2614 20.9747 23.3828 20.9244C23.5042 20.8741 23.6145 20.8004 23.7074 20.7075C23.8003 20.6146 23.874 20.5043 23.9243 20.3829C23.9746 20.2615 24.0004 20.1314 24.0004 20C24.0004 19.8686 23.9746 19.7385 23.9243 19.6171C23.874 19.4957 23.8003 19.3854 23.7074 19.2925L19.7074 15.2925Z\" fill=\"currentColor\"></path>",
  "CloudContent": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.877 6.02539C27.6031 6.14226 28.2168 6.65319 28.4551 7.36719L29.8965 11.6914C29.9644 11.8952 30 12.1094 30 12.3242V22L29.9902 22.2051C29.8944 23.1459 29.1459 23.8944 28.2051 23.9902L28 24H26C26 26.2091 24.2091 28 22 28C19.7909 28 18 26.2091 18 24H14C14 26.2091 12.2091 28 10 28C7.79086 28 6 26.2091 6 24H4C2.89543 24 2 23.1046 2 22V18C2 16.8954 2.89543 16 4 16H20V8C20 6.89543 20.8954 6 22 6H26.5586L26.877 6.02539ZM10 22C8.89543 22 8 22.8954 8 24C8 25.1046 8.89543 26 10 26C11.1046 26 12 25.1046 12 24C12 22.8954 11.1046 22 10 22ZM22 22C20.8954 22 20 22.8954 20 24C20 25.1046 20.8954 26 22 26C23.1046 26 24 25.1046 24 24C24 22.8954 23.1046 22 22 22ZM22 20C23.4804 20 24.7722 20.8046 25.4639 22H28V14H22V20ZM4 22H6.53613C7.22781 20.8046 8.51962 20 10 20C11.4804 20 12.7722 20.8046 13.4639 22H18.5361C18.8873 21.3931 19.3931 20.8873 20 20.5361V18H4V22ZM22 12H27.8916L26.5586 8H22V12Z\" fill=\"currentColor\"></path> <path d=\"M12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14H6C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6C6.11456 6 6.22772 6.00814 6.33984 6.01758C7.15894 3.67877 9.38154 2 12 2Z\" fill=\"currentColor\"></path>",
  "Economy": "<path d=\"M17.25 7.64719V7.125C17.25 4.77375 13.7034 3 9 3C4.29656 3 0.75 4.77375 0.75 7.125V10.875C0.75 12.8334 3.21094 14.3897 6.75 14.8556V15.375C6.75 17.7262 10.2966 19.5 15 19.5C19.7034 19.5 23.25 17.7262 23.25 15.375V11.625C23.25 9.68437 20.8669 8.12625 17.25 7.64719ZM21.75 11.625C21.75 12.8644 18.8634 14.25 15 14.25C14.6503 14.25 14.3034 14.2378 13.9613 14.2153C15.9834 13.4784 17.25 12.2812 17.25 10.875V9.16313C20.0503 9.58031 21.75 10.7128 21.75 11.625ZM6.75 13.3359V11.1056C7.49604 11.2028 8.24765 11.2511 9 11.25C9.75235 11.2511 10.504 11.2028 11.25 11.1056V13.3359C10.5051 13.446 9.75302 13.5008 9 13.5C8.24698 13.5008 7.49493 13.446 6.75 13.3359ZM15.75 9.55594V10.875C15.75 11.6616 14.5866 12.5062 12.75 13.0191V10.8281C13.9603 10.5347 14.985 10.0978 15.75 9.55594ZM9 4.5C12.8634 4.5 15.75 5.88562 15.75 7.125C15.75 8.36438 12.8634 9.75 9 9.75C5.13656 9.75 2.25 8.36438 2.25 7.125C2.25 5.88562 5.13656 4.5 9 4.5ZM2.25 10.875V9.55594C3.015 10.0978 4.03969 10.5347 5.25 10.8281V13.0191C3.41344 12.5062 2.25 11.6616 2.25 10.875ZM8.25 15.375V14.9841C8.49656 14.9934 8.74594 15 9 15C9.36375 15 9.71906 14.9878 10.0678 14.9672C10.4552 15.1059 10.8499 15.2236 11.25 15.3197V17.5191C9.41344 17.0062 8.25 16.1616 8.25 15.375ZM12.75 17.8359V15.6C13.4958 15.7003 14.2475 15.7504 15 15.75C15.7523 15.7511 16.504 15.7028 17.25 15.6056V17.8359C15.758 18.0547 14.242 18.0547 12.75 17.8359ZM18.75 17.5191V15.3281C19.9603 15.0347 20.985 14.5978 21.75 14.0559V15.375C21.75 16.1616 20.5866 17.0062 18.75 17.5191Z\" fill=\"currentColor\"></path>",
  "Matchmaker": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 2C20.3715 2 25.5817 6.96581 25.9746 13.2383C25.3331 12.7949 24.614 12.4572 23.8418 12.2471C23.7023 11.463 23.4753 10.7098 23.165 10H19.6572C19.7878 10.7387 19.8818 11.5106 19.9385 12.3076C19.239 12.5228 18.587 12.8463 18 13.2559C17.995 13.2524 17.9903 13.2486 17.9854 13.2451C17.9459 12.092 17.819 11.0018 17.6221 10H10.3779C10.181 11.0018 10.0531 12.092 10.0137 13.2451C9.2206 13.7955 8.54714 14.5058 8.03906 15.3291C8.01442 14.8927 8 14.4493 8 14C8 12.5974 8.12164 11.2512 8.34277 10H4.83496C4.29948 11.2252 4 12.5774 4 14C4 14.6849 4.06902 15.3538 4.2002 16H7.6748C7.37937 16.6218 7.17331 17.2937 7.07227 18H4.83496C5.44362 19.3926 6.36194 20.6171 7.5 21.5928C7.67501 22.0291 7.89189 22.444 8.14648 22.832C7.75156 23.0819 7.3428 23.3725 6.94141 23.7021C3.94735 21.5201 2 17.9884 2 14C2 7.37258 7.37258 2 14 2ZM10.1709 4.75977C8.50557 5.45064 7.06703 6.57809 5.99902 8H8.80469C9.16226 6.76389 9.62453 5.66633 10.1709 4.75977ZM14 4C13.5089 4 12.5262 4.4501 11.5469 6.4082C11.3086 6.88479 11.0907 7.41818 10.8975 8H17.1025C16.9093 7.41818 16.6914 6.88479 16.4531 6.4082C15.4738 4.4501 14.4911 4 14 4ZM17.8281 4.75977C18.3746 5.66641 18.8377 6.76369 19.1953 8H22.001C20.9328 6.57785 19.4938 5.45061 17.8281 4.75977Z\" fill=\"currentColor\"></path> <path d=\"M14.0002 14C14.9112 14.0001 15.7646 14.2451 16.5002 14.6709C15.5611 15.8623 15.0002 17.3653 15.0002 19C15.0002 20.4166 15.4245 21.7315 16.1467 22.832C14.6997 23.7476 13.064 25.2061 12.3029 27.1523L12.1623 27.5508C11.9061 28.3581 11.9562 29.2323 12.2961 30H7.33419C6.90586 29.9998 6.50269 29.7828 6.25216 29.418C6.00186 29.053 5.93316 28.583 6.06857 28.1562C6.54856 26.6456 7.8672 25.372 9.23263 24.5117C9.95897 24.0543 10.7762 23.6674 11.6213 23.3984C10.0603 22.5524 9.00021 20.9002 9.00021 19C9.00021 16.2386 11.2387 14 14.0002 14Z\" fill=\"currentColor\"></path> <path d=\"M22.0001 14C24.7615 14.0001 27.0002 16.2386 27.0002 19C27.0002 20.9007 25.9388 22.5527 24.3771 23.3984C25.2229 23.6675 26.0409 24.0539 26.7678 24.5117C28.1334 25.372 29.452 26.6454 29.932 28.1562C30.0675 28.5831 29.9969 29.0529 29.7464 29.418C29.4958 29.7825 29.0945 30 28.6663 30H15.3339C14.9055 29.9998 14.5023 29.7829 14.2518 29.418C14.0015 29.053 13.9328 28.583 14.0682 28.1562C14.5482 26.6455 15.8669 25.372 17.2324 24.5117C17.9588 24.0542 18.7759 23.6675 19.6211 23.3984C18.0601 22.5524 16.9999 20.9002 16.9999 19C16.9999 16.2386 19.2386 14 22.0001 14Z\" fill=\"currentColor\"></path>",
  "Relay": "<path d=\"M16.0003 11C15.0114 11 14.0447 11.2933 13.2225 11.8427C12.4002 12.3921 11.7594 13.173 11.3809 14.0866C11.0025 15.0002 10.9035 16.0056 11.0964 16.9755C11.2893 17.9454 11.7655 18.8363 12.4648 19.5355C13.164 20.2348 14.055 20.711 15.0249 20.9039C15.9948 21.0969 17.0001 20.9979 17.9137 20.6194C18.8274 20.241 19.6083 19.6001 20.1577 18.7779C20.7071 17.9556 21.0003 16.9889 21.0003 16C21.0003 14.6739 20.4735 13.4022 19.5358 12.4645C18.5982 11.5268 17.3264 11 16.0003 11ZM16.0003 19C15.407 19 14.8269 18.8241 14.3336 18.4944C13.8403 18.1648 13.4557 17.6962 13.2287 17.1481C13.0016 16.5999 12.9422 15.9967 13.058 15.4147C13.1737 14.8328 13.4594 14.2983 13.879 13.8787C14.2985 13.4591 14.8331 13.1734 15.415 13.0577C15.997 12.9419 16.6002 13.0013 17.1484 13.2284C17.6965 13.4554 18.1651 13.84 18.4947 14.3333C18.8244 14.8267 19.0003 15.4067 19.0003 16C19.0003 16.7957 18.6842 17.5587 18.1216 18.1213C17.559 18.6839 16.796 19 16.0003 19ZM25.2141 19.8925C24.7844 20.9082 24.1897 21.8459 23.4541 22.6675C23.2759 22.8603 23.0291 22.9753 22.767 22.9877C22.5048 23.0001 22.2483 22.9089 22.0527 22.7339C21.8571 22.5588 21.7382 22.3139 21.7217 22.052C21.7051 21.79 21.7921 21.5321 21.9641 21.3338C23.2771 19.8677 24.0032 17.9688 24.0032 16.0006C24.0032 14.0325 23.2771 12.1336 21.9641 10.6675C21.874 10.5701 21.8043 10.4557 21.7589 10.3311C21.7135 10.2064 21.6933 10.074 21.6996 9.94148C21.7059 9.80897 21.7384 9.67903 21.7954 9.55924C21.8524 9.43944 21.9327 9.33218 22.0315 9.2437C22.1303 9.15522 22.2458 9.08729 22.3712 9.04387C22.4965 9.00045 22.6292 8.98241 22.7616 8.99079C22.894 8.99917 23.0234 9.03382 23.1423 9.0927C23.2612 9.15158 23.3672 9.23353 23.4541 9.33376C24.7167 10.7467 25.5524 12.489 25.864 14.3581C26.1756 16.2272 25.9502 18.1464 25.2141 19.8925ZM8.62531 12.8863C8.03529 14.283 7.85433 15.8186 8.10352 17.3142C8.35271 18.8098 9.0218 20.2038 10.0328 21.3338C10.2047 21.5321 10.2918 21.79 10.2752 22.052C10.2586 22.3139 10.1397 22.5588 9.94417 22.7339C9.74861 22.9089 9.49207 23.0001 9.2299 22.9877C8.96773 22.9753 8.72095 22.8603 8.54281 22.6675C6.90104 20.835 5.99319 18.4611 5.99319 16.0006C5.99319 13.5402 6.90104 11.1663 8.54281 9.33376C8.71968 9.13568 8.96799 9.01597 9.23312 9.00097C9.49825 8.98596 9.75848 9.0769 9.95656 9.25376C10.1546 9.43063 10.2744 9.67894 10.2894 9.94407C10.3044 10.2092 10.2134 10.4694 10.0366 10.6675C9.44656 11.3239 8.96966 12.0737 8.62531 12.8863ZM31.0003 16C31.0064 19.9272 29.4667 23.699 26.7141 26.5C26.623 26.5974 26.5134 26.6756 26.3917 26.7299C26.2699 26.7843 26.1386 26.8138 26.0053 26.8167C25.872 26.8196 25.7395 26.7958 25.6155 26.7467C25.4916 26.6976 25.3787 26.6242 25.2835 26.5309C25.1884 26.4375 25.1128 26.3261 25.0613 26.2031C25.0098 26.0801 24.9834 25.9481 24.9837 25.8148C24.984 25.6815 25.0109 25.5496 25.063 25.4268C25.115 25.3041 25.191 25.193 25.2866 25.1C27.67 22.6717 29.0053 19.4051 29.0053 16.0025C29.0053 12.6 27.67 9.33331 25.2866 6.90501C25.1002 6.71572 24.9968 6.46016 24.9989 6.19456C25.001 5.92896 25.1085 5.67508 25.2978 5.48876C25.4871 5.30245 25.7427 5.19896 26.0083 5.20107C26.2739 5.20318 26.5277 5.31072 26.7141 5.50001C29.4667 8.30105 31.0064 12.0728 31.0003 16ZM6.71406 25.0975C6.80615 25.1912 6.87888 25.3022 6.92809 25.424C6.9773 25.5459 7.00203 25.6762 7.00087 25.8076C6.99971 25.939 6.97268 26.0689 6.92132 26.1898C6.86997 26.3108 6.79529 26.4204 6.70156 26.5125C6.60783 26.6046 6.49688 26.6773 6.37504 26.7265C6.2532 26.7758 6.12287 26.8005 5.99147 26.7993C5.86008 26.7982 5.7302 26.7711 5.60925 26.7198C5.4883 26.6684 5.37865 26.5937 5.28656 26.5C2.53429 23.6981 0.992188 19.9276 0.992188 16C0.992188 12.0725 2.53429 8.30192 5.28656 5.50001C5.37763 5.40265 5.48724 5.32448 5.60896 5.27009C5.73068 5.21571 5.86204 5.18621 5.99533 5.18334C6.12861 5.18046 6.26113 5.20427 6.38508 5.25335C6.50903 5.30244 6.62191 5.37581 6.71709 5.46916C6.81227 5.5625 6.88783 5.67394 6.93931 5.79691C6.9908 5.91988 7.01717 6.05191 7.01689 6.18522C7.01661 6.31854 6.98967 6.45045 6.93767 6.5732C6.88566 6.69596 6.80964 6.80707 6.71406 6.90001C4.33064 9.32831 2.99536 12.595 2.99536 15.9975C2.99536 19.4001 4.33064 22.6667 6.71406 25.095V25.0975Z\" fill=\"currentColor\"></path>",
  "Lobby": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 2C13.6421 2 17 5.35786 17 9.5C17 13.6421 13.6421 17 9.5 17C5.35786 17 2 13.6421 2 9.5C2 5.35786 5.35786 2 9.5 2ZM9 4.5C8.44772 4.5 8 4.94772 8 5.5V10C8 10.5523 8.44772 11 9 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10V5.5C10 4.94772 9.55228 4.5 9 4.5Z\" fill=\"currentColor\"></path> <path d=\"M22 10C25.3137 10 28 12.6863 28 16V16.5391C29.1947 17.2309 30 18.5201 30 20C30 21.4807 29.1935 22.7675 28 23.459V29C28 29.5523 27.5523 30 27 30H9C8.44772 30 8 29.5523 8 29V23.459C6.80654 22.7675 6 21.4807 6 20C6 19.4504 6.111 18.9269 6.31152 18.4502C6.95074 18.6779 7.62142 18.8375 8.31543 18.9238C8.11643 19.2347 8 19.6035 8 20C8 20.8693 8.55584 21.6117 9.33398 21.8867C9.73317 22.0282 10 22.4065 10 22.8301V28H26V22.8301C26 22.4065 26.2668 22.0282 26.666 21.8867C27.4442 21.6117 28 20.8693 28 20C28 18.8954 27.1046 18 26 18C24.8954 18 24 18.8954 24 20V24C24 24.5523 23.5523 25 23 25C22.4477 25 22 24.5523 22 24V22H14V24C14 24.5523 13.5523 25 13 25C12.4477 25 12 24.5523 12 24V20C12 19.5354 11.84 19.1091 11.5742 18.7695C12.2545 18.618 12.9068 18.3943 13.5234 18.1055C13.8273 18.6694 14 19.3145 14 20H22C22 17.7909 23.7909 16 26 16C26 13.7909 24.2091 12 22 12H18.665C18.8398 11.3577 18.9506 10.6888 18.9863 10H22Z\" fill=\"currentColor\"></path>",
  "Friends": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.0002 2C21.9295 2 23.5393 3.36607 23.9163 5.18359C26.8543 2.24754 31.5492 6.03742 29.342 9.51758L26.0159 15.5508V26.7891C26.0154 30.2856 21.5578 31.0873 20.0178 28.5723C19.1454 29.9989 17.3339 30.3583 15.928 29.7656C15.9338 29.7681 15.9398 29.771 15.9456 29.7734C15.6774 29.8801 15.3986 29.9534 15.1194 29.9863C14.4075 30.0699 13.6155 29.9246 12.9338 29.457C12.5742 29.2101 12.2758 28.8955 12.051 28.5312C11.7987 28.924 11.4648 29.2546 11.0588 29.4961C10.3513 29.9165 9.58301 29.9948 8.96508 29.9297C8.34693 29.8643 7.69785 29.6391 7.15649 29.2305C6.6194 28.8246 6.00041 28.0734 6.00024 27V16.5293L2.65844 10.6836C2.29769 10.0521 1.88013 9.05199 2.06469 7.89062L2.13696 7.54102C2.23069 7.17112 2.39955 6.74821 2.70923 6.3457C3.13881 5.78774 3.71891 5.42651 4.35766 5.22461L4.65844 5.14258C6.14584 4.81419 7.40999 5.56751 8.07055 6.0957L10.6213 8.13477C10.23 7.51663 10.0002 6.78571 10.0002 6C10.0002 3.79094 11.7912 2.00013 14.0002 2C15.1963 2 16.2672 2.52733 17.0002 3.35938C17.7332 2.52724 18.8042 2.00007 20.0002 2ZM27.6018 8.53125C28.6606 7.00777 26.5539 5.296 25.2795 6.64453L22.0764 10H12.7288L12.4514 10.0215C11.1226 10.2504 10.7328 12.1055 12.0002 12.8105L16.0159 15.0371V26.7891L16.0413 27.0605C16.2707 28.2521 18.002 28.3984 18.428 27.2617L18.4983 27L19.5159 21H20.5159L21.5334 26.998C21.7911 28.5074 24.0153 28.3199 24.0159 26.7891V15.0371L27.6018 8.53125ZM6.82251 7.6582C6.29065 7.2329 5.60857 6.92579 4.95923 7.13086C4.33364 7.32887 4.11468 7.73204 4.0393 8.20508C3.95758 8.71995 4.13621 9.23867 4.39477 9.69141L8.00024 16V27C8.00092 27.9996 10.285 28.5086 10.5432 27L11.5608 21H12.5608L13.5784 27L13.6487 27.2617C13.7568 27.5524 13.9509 27.753 14.1799 27.873C14.0761 27.5469 14.0159 27.1853 14.0159 26.7891V16.2148L11.0315 14.5586C9.17318 13.5259 8.83583 11.435 9.61352 9.89062L6.82251 7.6582ZM14.0002 4C12.8958 4.00013 12.0002 4.89551 12.0002 6C12.0002 7.10449 12.8958 7.99987 14.0002 8C15.1048 8 16.0002 7.10457 16.0002 6C16.0002 4.89543 15.1048 4 14.0002 4ZM20.0002 4C18.8958 4.00013 18.0002 4.89551 18.0002 6C18.0002 7.10449 18.8958 7.99987 20.0002 8C21.1048 8 22.0002 7.10457 22.0002 6C22.0002 4.89543 21.1048 4 20.0002 4Z\" fill=\"currentColor\"></path>",
  "Vivox": "<path d=\"M23.0002 14C23.5525 14 24.0002 14.4477 24.0002 15C24.0002 17.1706 23.2558 18.9477 21.9514 20.1777C20.8877 21.1805 19.509 21.7586 18.0002 21.9355V23C18.0002 23.5523 17.5525 24 17.0002 24C16.448 23.9999 16.0002 23.5522 16.0002 23V21.9355C14.4915 21.7586 13.1127 21.1805 12.049 20.1777C10.7447 18.9477 10.0002 17.1705 10.0002 15C10.0002 14.4478 10.448 14.0001 11.0002 14C11.5525 14 12.0002 14.4477 12.0002 15C12.0002 16.6953 12.5684 17.9194 13.4201 18.7227C14.2813 19.5346 15.5212 20 17.0002 20C18.4792 20 19.7191 19.5346 20.5803 18.7227C21.4321 17.9194 22.0002 16.6954 22.0002 15C22.0002 14.4478 22.448 14.0001 23.0002 14Z\" fill=\"currentColor\"></path> <path d=\"M17.0002 7C18.6571 7 20.0002 8.34315 20.0002 10V15C20.0002 16.6569 18.6571 18 17.0002 18C15.3434 17.9999 14.0002 16.6568 14.0002 15V10C14.0002 8.34321 15.3434 7.00011 17.0002 7Z\" fill=\"currentColor\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.0022 2C24.1812 2.00079 30.0022 7.82078 30.0022 15C30.0022 22.1792 24.1812 27.9992 17.0022 28C15.4454 28 13.9505 27.722 12.5647 27.2188L5.2795 29.8457C3.29286 30.5616 1.39607 28.587 2.19161 26.6309L4.94356 19.8613C4.337 18.3582 4.00215 16.7174 4.00215 15C4.00215 7.8203 9.82245 2 17.0022 2ZM17.0022 4C10.927 4 6.00215 8.92487 6.00215 15C6.00215 16.5869 6.33679 18.0931 6.93965 19.4531C7.0494 19.7011 7.05338 19.9832 6.95137 20.2344L4.04317 27.3848C3.90047 27.737 4.24215 28.0928 4.59981 27.9648L12.2307 25.2148L12.4065 25.168C12.5847 25.1385 12.7697 25.159 12.9397 25.2266C14.1948 25.7254 15.5659 26 17.0022 26C23.0766 25.9992 28.0022 21.0746 28.0022 15C28.0022 8.92535 23.0766 4.00079 17.0022 4Z\" fill=\"currentColor\"></path>",
  "Leaderboard": "<path d=\"M10.5384 9.61219C10.5073 9.51874 10.4948 9.42008 10.5018 9.32183C10.5088 9.22357 10.5351 9.12766 10.5791 9.03956C10.6232 8.95146 10.6841 8.87289 10.7586 8.80836C10.833 8.74382 10.9194 8.69458 11.0128 8.66344L12.1378 8.28844C12.2506 8.25085 12.3706 8.2406 12.4881 8.25852C12.6056 8.27645 12.7171 8.32203 12.8135 8.39152C12.91 8.46102 12.9885 8.55243 13.0426 8.65822C13.0968 8.76401 13.125 8.88116 13.125 9V12.75C13.125 12.9489 13.046 13.1397 12.9053 13.2803C12.7647 13.421 12.5739 13.5 12.375 13.5C12.1761 13.5 11.9853 13.421 11.8447 13.2803C11.704 13.1397 11.625 12.9489 11.625 12.75V10.0406L11.4872 10.0866C11.3937 10.1177 11.2951 10.1302 11.1968 10.1232C11.0986 10.1162 11.0027 10.0899 10.9146 10.0459C10.8265 10.0018 10.7479 9.94086 10.6834 9.86645C10.6188 9.79203 10.5696 9.70564 10.5384 9.61219ZM23.25 19.5C23.25 19.6989 23.171 19.8897 23.0303 20.0303C22.8897 20.171 22.6989 20.25 22.5 20.25H1.5C1.30109 20.25 1.11032 20.171 0.96967 20.0303C0.829018 19.8897 0.75 19.6989 0.75 19.5C0.75 19.3011 0.829018 19.1103 0.96967 18.9697C1.11032 18.829 1.30109 18.75 1.5 18.75H2.25V9.75C2.25 9.35218 2.40804 8.97064 2.68934 8.68934C2.97064 8.40804 3.35218 8.25 3.75 8.25H7.5V5.25C7.5 4.85218 7.65804 4.47064 7.93934 4.18934C8.22064 3.90804 8.60218 3.75 9 3.75H15C15.3978 3.75 15.7794 3.90804 16.0607 4.18934C16.342 4.47064 16.5 4.85218 16.5 5.25V12H20.25C20.6478 12 21.0294 12.158 21.3107 12.4393C21.592 12.7206 21.75 13.1022 21.75 13.5V18.75H22.5C22.6989 18.75 22.8897 18.829 23.0303 18.9697C23.171 19.1103 23.25 19.3011 23.25 19.5ZM16.5 13.5V18.75H20.25V13.5H16.5ZM9 18.75H15V5.25H9V18.75ZM3.75 18.75H7.5V9.75H3.75V18.75Z\" fill=\"currentColor\"></path>",
  "RemoteConfig": "<path d=\"M16 4.4138V16.0001C16 16.2653 15.8946 16.5196 15.7071 16.7072C15.5196 16.8947 15.2652 17.0001 15 17.0001C14.7348 17.0001 14.4804 16.8947 14.2929 16.7072C14.1054 16.5196 14 16.2653 14 16.0001L14 4.4138L11.7075 6.70755C11.6146 6.80046 11.5043 6.87417 11.3829 6.92445C11.2615 6.97473 11.1314 7.00061 11 7.00061C10.7346 7.00061 10.4801 6.8952 10.2925 6.70755C10.1996 6.61464 10.1259 6.50434 10.0756 6.38295C10.0253 6.26156 9.99944 6.13145 9.99944 6.00005C9.99944 5.73469 10.1049 5.4802 10.2925 5.29255L14.2925 1.29255C14.3854 1.19958 14.4957 1.12582 14.6171 1.07549C14.7385 1.02517 14.8686 0.999268 15 0.999268C15.1314 0.999268 15.2615 1.02517 15.3829 1.07549C15.5043 1.12582 15.6146 1.19958 15.7075 1.29255L19.7075 5.29255C19.8951 5.4802 20.0006 5.73469 20.0006 6.00005C20.0006 6.26542 19.8951 6.51991 19.7075 6.70755C19.5199 6.8952 19.2654 7.00061 19 7.00061C18.7346 7.00061 18.4801 6.8952 18.2925 6.70755L16 4.4138ZM24 15.4526L24 12.0001C24 11.4696 23.7893 10.9609 23.4142 10.5858C23.0391 10.2108 22.5304 10.0001 22 10.0001H20C19.7348 10.0001 19.4804 10.1054 19.2929 10.2929C19.1054 10.4805 19 10.7348 19 11.0001C19 11.2653 19.1054 11.5196 19.2929 11.7072C19.4804 11.8947 19.7348 12.0001 20 12.0001H22L22 22.0501C21.4036 21.4408 20.6055 21.0702 19.7552 21.0078C18.905 20.9454 18.0612 21.1954 17.3823 21.7109C16.7033 22.2265 16.2359 22.9721 16.0677 23.8078C15.8995 24.6436 16.0421 25.512 16.4688 26.2501L16.4988 26.2976L19.2813 30.5476C19.4265 30.7695 19.6539 30.9247 19.9135 30.979C20.1731 31.0332 20.4437 30.9821 20.6656 30.8369C20.8876 30.6917 21.0428 30.4643 21.097 30.2047C21.1513 29.9451 21.1002 29.6745 20.955 29.4526L18.1887 25.2288C17.9927 24.8825 17.9421 24.4725 18.0483 24.089C18.1545 23.7055 18.4087 23.3799 18.755 23.1838C19.1013 22.9877 19.5113 22.9372 19.8948 23.0434C20.2783 23.1496 20.6039 23.4038 20.8 23.7501C20.8087 23.7663 20.8188 23.7826 20.8288 23.7976L22.1637 25.8363C22.2818 26.0163 22.4547 26.1534 22.6568 26.2272C22.8589 26.3011 23.0795 26.3078 23.2857 26.2463C23.492 26.1848 23.6729 26.0584 23.8015 25.8859C23.9302 25.7134 23.9998 25.504 24 25.2888V18.0001C24.9426 18.8726 25.6954 19.9298 26.2115 21.106C26.7276 22.2821 26.996 23.5519 27 24.8363V30.0001C27 30.2653 27.1054 30.5196 27.2929 30.7072C27.4804 30.8947 27.7348 31.0001 28 31.0001C28.2652 31.0001 28.5196 30.8947 28.7071 30.7072C28.8946 30.5196 29 30.2653 29 30.0001V24.8313C28.9943 22.9788 28.5358 21.1559 27.6643 19.5212C26.7928 17.8865 25.5349 16.4898 24 15.4526ZM10 10.0001H8C7.46957 10.0001 6.96086 10.2108 6.58579 10.5858C6.21071 10.9609 6 11.4696 6 12.0001L6 25.0001C6 25.2653 6.10536 25.5196 6.29289 25.7072C6.48043 25.8947 6.73478 26.0001 7 26.0001C7.26522 26.0001 7.51957 25.8947 7.70711 25.7072C7.89464 25.5196 8 25.2653 8 25.0001L8 12.0001H10C10.2652 12.0001 10.5196 11.8947 10.7071 11.7072C10.8946 11.5196 11 11.2653 11 11.0001C11 10.7348 10.8946 10.4805 10.7071 10.2929C10.5196 10.1054 10.2652 10.0001 10 10.0001Z\" fill=\"currentColor\"></path>",
  "PlayerManagement": "<path d=\"M17.9999 19.7091C19.5675 18.7328 20.7745 17.2724 21.4382 15.549C22.1019 13.8256 22.1863 11.9329 21.6786 10.1572C21.1708 8.38156 20.0986 6.81959 18.624 5.70761C17.1495 4.59563 15.3529 3.99414 13.5061 3.99414C11.6593 3.99414 9.86274 4.59563 8.38822 5.70761C6.91369 6.81959 5.84144 8.38156 5.33369 10.1572C4.82594 11.9329 4.91031 13.8256 5.57405 15.549C6.23778 17.2724 7.44476 18.7328 9.01238 19.7091C6.43113 20.5541 4.10863 22.1329 2.24113 24.3554C2.15363 24.4554 2.08695 24.5719 2.045 24.6981C2.00305 24.8242 1.98667 24.9574 1.99681 25.09C2.00695 25.2225 2.04341 25.3517 2.10406 25.47C2.16471 25.5882 2.24833 25.6932 2.35003 25.7788C2.45173 25.8644 2.56948 25.9288 2.69638 25.9684C2.82328 26.0079 2.95679 26.0218 3.08911 26.0091C3.22143 25.9965 3.34989 25.9576 3.467 25.8947C3.5841 25.8318 3.68749 25.7462 3.77113 25.6429C6.28113 22.6479 9.73863 20.9991 13.4999 20.9991C17.2611 20.9991 20.7186 22.6479 23.2336 25.6429C23.4044 25.8461 23.6488 25.9732 23.9133 25.9962C24.1777 26.0191 24.4404 25.9361 24.6436 25.7654C24.8469 25.5947 24.9739 25.3502 24.9969 25.0858C25.0199 24.8213 24.9369 24.5586 24.7661 24.3554C22.8974 22.1329 20.5749 20.5541 17.9999 19.7091ZM6.99988 12.4991C6.99988 11.2136 7.3811 9.95685 8.09533 8.88793C8.80956 7.81901 9.82472 6.98589 11.0124 6.49392C12.2002 6.00195 13.5071 5.87323 14.768 6.12404C16.0288 6.37484 17.187 6.9939 18.0961 7.90295C19.0051 8.81199 19.6242 9.97018 19.875 11.2311C20.1258 12.4919 19.9971 13.7989 19.5051 14.9866C19.0131 16.1743 18.18 17.1895 17.1111 17.9037C16.0422 18.6179 14.7855 18.9991 13.4999 18.9991C11.7766 18.9972 10.1244 18.3117 8.90588 17.0931C7.68732 15.8746 7.00186 14.2224 6.99988 12.4991ZM30.5311 17.8829L29.9486 17.5466C30.017 17.1848 30.017 16.8134 29.9486 16.4516L30.5311 16.1154C30.7609 15.9828 30.9285 15.7643 30.9972 15.5081C31.0659 15.2519 31.03 14.9789 30.8974 14.7491C30.7648 14.5194 30.5463 14.3517 30.2901 14.2831C30.0339 14.2144 29.7609 14.2503 29.5311 14.3829L28.9474 14.7204C28.668 14.4807 28.3468 14.2947 27.9999 14.1716V13.4991C27.9999 13.2339 27.8945 12.9796 27.707 12.792C27.5195 12.6045 27.2651 12.4991 26.9999 12.4991C26.7347 12.4991 26.4803 12.6045 26.2928 12.792C26.1052 12.9796 25.9999 13.2339 25.9999 13.4991V14.1716C25.653 14.2947 25.3317 14.4807 25.0524 14.7204L24.4686 14.3829C24.3549 14.3172 24.2293 14.2746 24.0991 14.2575C23.9688 14.2404 23.8365 14.249 23.7097 14.2831C23.5828 14.3171 23.4639 14.3757 23.3597 14.4557C23.2555 14.5357 23.168 14.6354 23.1024 14.7491C23.0367 14.8629 22.9941 14.9885 22.977 15.1187C22.9598 15.2489 22.9685 15.3812 23.0025 15.5081C23.0366 15.635 23.0952 15.7539 23.1752 15.8581C23.2552 15.9623 23.3549 16.0497 23.4686 16.1154L24.0511 16.4516C23.9828 16.8134 23.9828 17.1848 24.0511 17.5466L23.4686 17.8829C23.2389 18.0155 23.0712 18.2339 23.0025 18.4902C22.9339 18.7464 22.9698 19.0194 23.1024 19.2491C23.235 19.4789 23.4534 19.6465 23.7097 19.7152C23.9659 19.7839 24.2389 19.748 24.4686 19.6154L25.0524 19.2779C25.3317 19.5176 25.653 19.7036 25.9999 19.8266V20.4991C25.9999 20.7644 26.1052 21.0187 26.2928 21.2062C26.4803 21.3938 26.7347 21.4991 26.9999 21.4991C27.2651 21.4991 27.5195 21.3938 27.707 21.2062C27.8945 21.0187 27.9999 20.7644 27.9999 20.4991V19.8266C28.3468 19.7036 28.668 19.5176 28.9474 19.2779L29.5311 19.6154C29.683 19.7035 29.8556 19.7497 30.0311 19.7491C30.2513 19.7492 30.4654 19.6766 30.6401 19.5426C30.8149 19.4086 30.9405 19.2206 30.9975 19.0079C31.0544 18.7952 31.0396 18.5697 30.9553 18.3662C30.871 18.1628 30.7219 17.9929 30.5311 17.8829ZM25.9999 16.9991C25.9999 16.8014 26.0585 16.608 26.1684 16.4436C26.2783 16.2791 26.4345 16.1509 26.6172 16.0753C26.7999 15.9996 27.001 15.9798 27.195 16.0184C27.389 16.0569 27.5671 16.1522 27.707 16.292C27.8468 16.4319 27.9421 16.6101 27.9807 16.804C28.0193 16.998 27.9994 17.1991 27.9238 17.3818C27.8481 17.5645 27.7199 17.7207 27.5555 17.8306C27.391 17.9405 27.1977 17.9991 26.9999 17.9991C26.7347 17.9991 26.4803 17.8938 26.2928 17.7062C26.1052 17.5187 25.9999 17.2644 25.9999 16.9991Z\" fill=\"currentColor\"></path>",
  "Triggers": "<path d=\"M28.9999 17.082C28.7875 19.552 27.874 21.9099 26.367 23.8783C24.86 25.8468 22.8221 27.3439 20.4932 28.1935C18.1642 29.0431 15.641 29.2098 13.2205 28.6741C10.8 28.1384 8.58281 26.9226 6.82983 25.1696C5.07685 23.4166 3.86099 21.1994 3.3253 18.7789C2.78962 16.3584 2.95638 13.8352 3.80598 11.5063C4.65558 9.17732 6.15267 7.13945 8.12112 5.63244C10.0896 4.12542 12.4475 3.21195 14.9174 2.99949C15.0488 2.98866 15.1809 3.00379 15.3064 3.04404C15.4319 3.08429 15.5482 3.14885 15.6487 3.23405C15.7492 3.31925 15.832 3.42341 15.8923 3.54059C15.9525 3.65777 15.9891 3.78567 15.9999 3.91699C16.0108 4.04831 15.9956 4.18048 15.9554 4.30595C15.9151 4.43143 15.8506 4.54774 15.7654 4.64826C15.6802 4.74878 15.576 4.83154 15.4588 4.8918C15.3417 4.95206 15.2138 4.98866 15.0824 4.99949C12.9919 5.17911 10.9962 5.95208 9.33008 7.22745C7.66396 8.50282 6.39677 10.2275 5.6776 12.1986C4.95843 14.1698 4.81721 16.3053 5.27055 18.354C5.72389 20.4026 6.75293 22.2792 8.2366 23.7628C9.72026 25.2465 11.5968 26.2755 13.6455 26.7289C15.6941 27.1822 17.8297 27.041 19.8008 26.3218C21.7719 25.6027 23.4966 24.3355 24.772 22.6694C26.0474 21.0032 26.8203 19.0075 26.9999 16.917C27.0218 16.6518 27.1482 16.4061 27.3512 16.234C27.5542 16.062 27.8172 15.9776 28.0824 15.9995C28.3477 16.0214 28.5933 16.1477 28.7654 16.3507C28.9375 16.5537 29.0218 16.8168 28.9999 17.082ZM14.9999 8.99949V15.9995C14.9999 16.2647 15.1053 16.5191 15.2928 16.7066C15.4804 16.8941 15.7347 16.9995 15.9999 16.9995H22.9999C23.2652 16.9995 23.5195 16.8941 23.7071 16.7066C23.8946 16.5191 23.9999 16.2647 23.9999 15.9995C23.9999 15.7343 23.8946 15.4799 23.7071 15.2924C23.5195 15.1048 23.2652 14.9995 22.9999 14.9995H16.9999V8.99949C16.9999 8.73427 16.8946 8.47992 16.7071 8.29238C16.5195 8.10485 16.2652 7.99949 15.9999 7.99949C15.7347 7.99949 15.4804 8.10485 15.2928 8.29238C15.1053 8.47992 14.9999 8.73427 14.9999 8.99949ZM19.9999 5.99949C20.2966 5.99949 20.5866 5.91152 20.8333 5.7467C21.08 5.58187 21.2722 5.34761 21.3858 5.07352C21.4993 4.79943 21.529 4.49783 21.4711 4.20686C21.4132 3.91588 21.2704 3.64861 21.0606 3.43883C20.8508 3.22905 20.5835 3.08619 20.2926 3.02831C20.0016 2.97044 19.7 3.00014 19.4259 3.11367C19.1518 3.2272 18.9176 3.41946 18.7527 3.66614C18.5879 3.91281 18.4999 4.20282 18.4999 4.49949C18.4999 4.89732 18.658 5.27885 18.9393 5.56015C19.2206 5.84146 19.6021 5.99949 19.9999 5.99949ZM24.4999 8.99949C24.7966 8.99949 25.0866 8.91152 25.3333 8.7467C25.58 8.58187 25.7722 8.34761 25.8858 8.07352C25.9993 7.79943 26.029 7.49783 25.9711 7.20686C25.9132 6.91588 25.7704 6.64861 25.5606 6.43883C25.3508 6.22905 25.0835 6.08619 24.7926 6.02831C24.5016 5.97044 24.2 6.00014 23.9259 6.11367C23.6518 6.2272 23.4176 6.41946 23.2527 6.66614C23.0879 6.91281 22.9999 7.20282 22.9999 7.49949C22.9999 7.89732 23.158 8.27885 23.4393 8.56015C23.7206 8.84146 24.1021 8.99949 24.4999 8.99949ZM27.4999 13.4995C27.7966 13.4995 28.0866 13.4115 28.3333 13.2467C28.58 13.0819 28.7722 12.8476 28.8858 12.5735C28.9993 12.2994 29.029 11.9978 28.9711 11.7069C28.9132 11.4159 28.7704 11.1486 28.5606 10.9388C28.3508 10.7291 28.0835 10.5862 27.7926 10.5283C27.5016 10.4704 27.2 10.5001 26.9259 10.6137C26.6518 10.7272 26.4176 10.9195 26.2527 11.1661C26.0879 11.4128 25.9999 11.7028 25.9999 11.9995C25.9999 12.3973 26.158 12.7788 26.4393 13.0602C26.7206 13.3415 27.1021 13.4995 27.4999 13.4995Z\" fill=\"currentColor\"></path>",
  "DevOps": "<path d=\"M20.4589 9.8601C20.5322 9.76835 20.583 9.66065 20.6071 9.54569C20.6312 9.43073 20.6279 9.31171 20.5976 9.19823C20.3683 8.33629 20.0253 7.50871 19.5776 6.73729C19.519 6.63634 19.4376 6.55046 19.34 6.4865C19.2423 6.42254 19.1311 6.38225 19.0151 6.36885L16.7914 6.12135C16.6989 6.02385 16.6051 5.9301 16.5101 5.8401L16.2476 3.61073C16.2341 3.49468 16.1937 3.38338 16.1295 3.28572C16.0654 3.18806 15.9794 3.10674 15.8782 3.04823C15.1065 2.60136 14.279 2.2587 13.4173 2.02916C13.3037 1.99897 13.1847 1.99589 13.0697 2.02015C12.9547 2.04441 12.8471 2.09535 12.7554 2.16885L11.0126 3.5601H10.6076L8.8601 2.16416C8.76835 2.09082 8.66065 2.04006 8.54569 2.01596C8.43073 1.99186 8.31171 1.9951 8.19823 2.02541C7.33643 2.25513 6.5089 2.59812 5.73729 3.04541C5.63634 3.10403 5.55046 3.18541 5.4865 3.28306C5.42254 3.38071 5.38225 3.49195 5.36885 3.60791L5.12135 5.83541C5.02385 5.92854 4.9301 6.02229 4.8401 6.11666L2.61073 6.3726C2.49468 6.3861 2.38338 6.42653 2.28572 6.49066C2.18806 6.55479 2.10674 6.64085 2.04823 6.74198C1.60136 7.51369 1.2587 8.3412 1.02916 9.20291C0.998973 9.31647 0.995886 9.43553 1.02015 9.55049C1.04441 9.66546 1.09535 9.77312 1.16885 9.86479L2.5601 11.6076V12.0126L1.16416 13.7601C1.09082 13.8519 1.04006 13.9595 1.01596 14.0745C0.991856 14.1895 0.995095 14.3085 1.02541 14.422C1.25472 15.2839 1.59773 16.1115 2.04541 16.8829C2.10403 16.9839 2.18541 17.0697 2.28306 17.1337C2.38071 17.1977 2.49195 17.238 2.60791 17.2514L4.83166 17.4989C4.92479 17.5964 5.01854 17.6901 5.11291 17.7801L5.3726 20.0095C5.3861 20.1255 5.42653 20.2368 5.49066 20.3345C5.55479 20.4321 5.64085 20.5135 5.74198 20.572C6.51369 21.0188 7.3412 21.3615 8.20291 21.591C8.31647 21.6212 8.43553 21.6243 8.55049 21.6001L8.22729 20.0414C7.74216 19.8887 7.27156 19.6932 6.82104 19.4573L6.58104 17.3414C6.56056 17.1568 6.47237 16.9865 6.33354 16.8632C6.13058 16.6828 5.93837 16.4906 5.75791 16.2876C5.63466 16.1488 5.4643 16.0606 5.27979 16.0401L3.16291 15.8039C2.92684 15.3534 2.73138 14.8828 2.57885 14.3976L3.90916 12.7345C4.02533 12.5894 4.08346 12.4063 4.07229 12.2207C4.05635 11.9497 4.05635 11.678 4.07229 11.407C4.08346 11.2214 4.02533 11.0383 3.90916 10.8932L2.57885 9.22729C2.7315 8.74216 2.92696 8.27156 3.16291 7.82104L5.27885 7.58104C5.46337 7.56056 5.63373 7.47237 5.75698 7.33354C5.93744 7.13058 6.12964 6.93837 6.3326 6.75791C6.47199 6.63458 6.56053 6.46383 6.58104 6.27885L6.81635 4.16291C7.26682 3.92684 7.73743 3.73138 8.2226 3.57885L9.88573 4.90916C10.0308 5.02533 10.2139 5.08346 10.3995 5.07229C10.6705 5.05635 10.9422 5.05635 11.2132 5.07229C11.3988 5.08346 11.5819 5.02533 11.727 4.90916L13.3929 3.57885C13.878 3.7315 14.3486 3.92696 14.7992 4.16291L15.0392 6.27885C15.0596 6.46337 15.1478 6.63373 15.2867 6.75698C15.4896 6.93744 15.6818 7.12964 15.8623 7.3326C15.9855 7.47143 16.1559 7.55962 16.3404 7.5801L18.4573 7.81541C18.6934 8.26589 18.8888 8.7365 19.0414 9.22166L17.711 10.8848C17.5938 11.0311 17.5356 11.2161 17.5479 11.4032H17.5507C17.5591 11.5454 17.5631 11.6877 17.5627 11.8301C17.5627 11.8301 18.0113 11.6665 18.3101 11.6076C18.6227 11.546 19.1223 11.5299 19.1223 11.5299L20.4589 9.8601Z\" fill=\"currentColor\"></path> <path d=\"M17.6787 14.3748C18.0238 14.4735 18.2236 14.8334 18.125 15.1785L16.125 22.1785C16.0264 22.5236 15.6664 22.7234 15.3213 22.6248C14.9762 22.5261 14.7764 22.1662 14.875 21.8211L16.875 14.8211C16.9737 14.476 17.3336 14.2762 17.6787 14.3748Z\" fill=\"currentColor\"></path> <path d=\"M20.5313 14.5453C20.2798 14.2518 19.8385 14.2177 19.545 14.4691C19.2515 14.7207 19.2174 15.1619 19.4688 15.4555L22.0792 18.5004L19.4688 21.5453C19.2174 21.8388 19.2515 22.2801 19.545 22.5316C19.8385 22.7831 20.2798 22.7489 20.5313 22.4555L23.5313 18.9555C23.7558 18.6934 23.7558 18.3074 23.5313 18.0453L20.5313 14.5453Z\" fill=\"currentColor\"></path> <path d=\"M12.4687 14.5453C12.7202 14.2518 13.1615 14.2177 13.455 14.4691C13.7485 14.7207 13.7826 15.1619 13.5312 15.4555L10.9208 18.5004L13.5312 21.5453C13.7826 21.8388 13.7485 22.2801 13.455 22.5316C13.1615 22.7831 12.7202 22.7489 12.4687 22.4555L9.46868 18.9555C9.24417 18.6934 9.24417 18.3074 9.46868 18.0453L12.4687 14.5453Z\" fill=\"currentColor\"></path>",
  "VersionControl": "<path d=\"M24.0001 28C24.7481 27.9996 25.4811 27.7895 26.1157 27.3935C26.7503 26.9974 27.2612 26.4314 27.5902 25.7596C27.9193 25.0878 28.0534 24.3372 27.9773 23.5931C27.9012 22.8489 27.6179 22.141 27.1597 21.5497C26.7015 20.9585 26.0866 20.5075 25.385 20.2482C24.6833 19.9888 23.923 19.9314 23.1904 20.0824C22.4577 20.2334 21.7821 20.5869 21.2403 21.1026C20.6984 21.6184 20.3121 22.2757 20.1251 23L19.0001 23C18.4696 23 17.9609 22.7893 17.5858 22.4142C17.2108 22.0391 17.0001 21.5304 17.0001 21L17.0001 12C17.0009 11.2974 16.815 10.6071 16.4613 10L20.1251 10C20.3685 10.9427 20.9473 11.7642 21.7531 12.3106C22.5588 12.857 23.5362 13.0908 24.5021 12.9681C25.4679 12.8455 26.3558 12.3747 26.9994 11.6442C27.643 10.9137 27.998 9.97358 27.998 9.00001C27.998 8.02644 27.643 7.08628 26.9994 6.35578C26.3558 5.62527 25.4679 5.15457 24.5021 5.03189C23.5362 4.90922 22.5588 5.143 21.7531 5.68941C20.9473 6.23582 20.3685 7.05735 20.1251 8.00001L11.8751 8.00001C11.6317 7.05735 11.0528 6.23582 10.2471 5.68941C9.44127 5.14299 8.46387 4.90922 7.49806 5.03189C6.53225 5.15456 5.64433 5.62527 5.00074 6.35578C4.35715 7.08628 4.00208 8.02643 4.00208 9.00001C4.00208 9.97358 4.35715 10.9137 5.00074 11.6442C5.64433 12.3747 6.53225 12.8455 7.49806 12.9681C8.46387 13.0908 9.44127 12.857 10.2471 12.3106C11.0528 11.7642 11.6317 10.9427 11.8751 10L13.0001 10C13.5305 10 14.0392 10.2107 14.4143 10.5858C14.7893 10.9609 15.0001 11.4696 15.0001 12L15.0001 21C15.0001 22.0609 15.4215 23.0783 16.1716 23.8284C16.9218 24.5786 17.9392 25 19.0001 25L20.1251 25C20.348 25.8583 20.8493 26.6185 21.5506 27.1613C22.2518 27.7042 23.1133 27.9992 24.0001 28ZM24.0001 7.00001C24.3956 7.00001 24.7823 7.11731 25.1112 7.33707C25.4401 7.55683 25.6964 7.86919 25.8478 8.23464C25.9992 8.6001 26.0388 9.00223 25.9616 9.39019C25.8845 9.77815 25.694 10.1345 25.4143 10.4142C25.1346 10.6939 24.7782 10.8844 24.3902 10.9616C24.0023 11.0388 23.6001 10.9991 23.2347 10.8478C22.8692 10.6964 22.5569 10.44 22.3371 10.1111C22.1174 9.78225 22.0001 9.39557 22.0001 9.00001C22.0001 8.46958 22.2108 7.96087 22.5858 7.5858C22.9609 7.21072 23.4696 7.00001 24.0001 7.00001ZM8.00006 11C7.6045 11 7.21782 10.8827 6.88892 10.6629C6.56002 10.4432 6.30368 10.1308 6.1523 9.76538C6.00093 9.39992 5.96132 8.99779 6.03849 8.60983C6.11566 8.22187 6.30614 7.8655 6.58585 7.58579C6.86555 7.30609 7.22192 7.11561 7.60988 7.03844C7.99784 6.96127 8.39998 7.00087 8.76543 7.15225C9.13088 7.30362 9.44324 7.55997 9.663 7.88887C9.88276 8.21777 10.0001 8.60445 10.0001 9.00001C10.0001 9.53044 9.78935 10.0391 9.41427 10.4142C9.0392 10.7893 8.53049 11 8.00006 11Z\" fill=\"currentColor\"></path>",
  "AssetManager": "<path d=\"M14.5215 13.3875C14.914 13.7791 15.4458 13.999 16.0002 13.999C16.5547 13.999 17.0865 13.7791 17.479 13.3875L21.3877 9.4775C21.5819 9.28341 21.7359 9.05298 21.841 8.79936C21.9461 8.54574 22.0002 8.2739 22.0002 7.99937C22.0002 7.72485 21.9461 7.45301 21.841 7.19939C21.7359 6.94577 21.5819 6.71533 21.3877 6.52125L17.479 2.61125C17.0865 2.21967 16.5547 1.99976 16.0002 1.99976C15.4458 1.99976 14.914 2.21967 14.5215 2.61125L10.6127 6.52125C10.4186 6.71533 10.2646 6.94577 10.1595 7.19939C10.0544 7.45301 10.0003 7.72485 10.0003 7.99937C10.0003 8.2739 10.0544 8.54574 10.1595 8.79936C10.2646 9.05298 10.4186 9.28341 10.6127 9.4775L14.5215 13.3875ZM12.0215 7.935L15.9315 4.02625C15.9481 4.00976 15.9706 4.00051 15.994 4.00051C16.0174 4.00051 16.0399 4.00976 16.0565 4.02625L19.9665 7.935C19.9821 7.95206 19.9908 7.97436 19.9908 7.9975C19.9908 8.02064 19.9821 8.04294 19.9665 8.06L16.064 11.9737C16.0472 11.9899 16.0248 11.999 16.0015 11.999C15.9782 11.999 15.9558 11.9899 15.939 11.9737L12.0265 8.06375C12.0098 8.04649 12.0004 8.0234 12.0004 7.99937C12.0004 7.97534 12.0098 7.95225 12.0265 7.935H12.0215ZM29.384 14.5212L25.479 10.6112C25.0867 10.2197 24.5551 9.99986 24.0009 9.99986C23.4466 9.99986 22.915 10.2197 22.5227 10.6112L18.6127 14.5212C18.2212 14.9138 18.0012 15.4456 18.0012 16C18.0012 16.5544 18.2212 17.0862 18.6127 17.4787L22.5227 21.3887C22.915 21.7803 23.4466 22.0001 24.0009 22.0001C24.5551 22.0001 25.0867 21.7803 25.479 21.3887L29.389 17.4787C29.7806 17.0862 30.0005 16.5544 30.0005 16C30.0005 15.4456 29.7806 14.9138 29.389 14.5212H29.384ZM27.9752 16.0637L24.0652 19.9737C24.0482 19.9894 24.0259 19.9981 24.0027 19.9981C23.9796 19.9981 23.9573 19.9894 23.9402 19.9737L20.0302 16.0637C20.0141 16.047 20.005 16.0246 20.005 16.0012C20.005 15.9779 20.0141 15.9555 20.0302 15.9387L23.9402 12.0287C23.9573 12.0131 23.9796 12.0044 24.0027 12.0044C24.0259 12.0044 24.0482 12.0131 24.0652 12.0287L27.9752 15.9387C27.9914 15.9555 28.0005 15.9779 28.0005 16.0012C28.0005 16.0246 27.9914 16.047 27.9752 16.0637ZM13.3877 14.5212L9.47774 10.6112C9.08544 10.2197 8.55385 9.99986 7.99962 9.99986C7.44538 9.99986 6.91379 10.2197 6.52149 10.6112L2.61149 14.5212C2.21991 14.9138 2 15.4456 2 16C2 16.5544 2.21991 17.0862 2.61149 17.4787L6.52149 21.3887C6.91379 21.7803 7.44538 22.0001 7.99962 22.0001C8.55385 22.0001 9.08544 21.7803 9.47774 21.3887L13.3877 17.4787C13.7793 17.0862 13.9992 16.5544 13.9992 16C13.9992 15.4456 13.7793 14.9138 13.3877 14.5212ZM11.974 16.0637L8.06399 19.9737C8.04693 19.9894 8.02463 19.9981 8.00149 19.9981C7.97835 19.9981 7.95605 19.9894 7.93899 19.9737L4.02524 16.0637C4.00905 16.047 4 16.0246 4 16.0012C4 15.9779 4.00905 15.9555 4.02524 15.9387L7.93524 12.0262C7.9523 12.0106 7.9746 12.0019 7.99774 12.0019C8.02088 12.0019 8.04318 12.0106 8.06024 12.0262L11.9702 15.9362C11.9789 15.9444 11.9858 15.9541 11.9907 15.9649C11.9956 15.9757 11.9983 15.9874 11.9986 15.9992C11.999 16.0111 11.997 16.0229 11.9927 16.0339C11.9885 16.045 11.9821 16.0551 11.974 16.0637ZM17.474 18.6125C17.0815 18.2209 16.5497 18.001 15.9952 18.001C15.4408 18.001 14.909 18.2209 14.5165 18.6125L10.6127 22.5225C10.4186 22.7166 10.2646 22.947 10.1595 23.2006C10.0544 23.4543 10.0003 23.7261 10.0003 24.0006C10.0003 24.2752 10.0544 24.547 10.1595 24.8006C10.2646 25.0542 10.4186 25.2847 10.6127 25.4787L14.5215 29.3887C14.914 29.7803 15.4458 30.0002 16.0002 30.0002C16.5547 30.0002 17.0865 29.7803 17.479 29.3887L21.3877 25.4787C21.5819 25.2847 21.7359 25.0542 21.841 24.8006C21.9461 24.547 22.0002 24.2752 22.0002 24.0006C22.0002 23.7261 21.9461 23.4543 21.841 23.2006C21.7359 22.947 21.5819 22.7166 21.3877 22.5225L17.474 18.6125ZM19.974 24.065L16.064 27.9737C16.0474 27.9902 16.0249 27.9995 16.0015 27.9995C15.9781 27.9995 15.9556 27.9902 15.939 27.9737L12.0265 24.065C12.0109 24.0479 12.0022 24.0256 12.0022 24.0025C12.0022 23.9794 12.0109 23.9571 12.0265 23.94L15.9365 20.03C15.9533 20.0138 15.9757 20.0048 15.999 20.0048C16.0223 20.0048 16.0447 20.0138 16.0615 20.03L19.9715 23.94C19.9875 23.9567 19.9966 23.9789 19.9971 24.002C19.9975 24.0252 19.9893 24.0476 19.974 24.065Z\" fill=\"currentColor\"></path>",
  "UnityAI": "<path d=\"M22.6976 15.1325L16.2463 12.7575L13.8713 6.30125C13.7307 5.91916 13.4762 5.58941 13.1423 5.35648C12.8083 5.12356 12.411 4.99867 12.0038 4.99867C11.5967 4.99867 11.1993 5.12356 10.8654 5.35648C10.5314 5.58941 10.277 5.91916 10.1363 6.30125L7.75883 12.75L1.30258 15.125C0.920493 15.2656 0.59074 15.5201 0.357814 15.854C0.124888 16.188 0 16.5853 0 16.9925C0 17.3997 0.124888 17.797 0.357814 18.131C0.59074 18.4649 0.920493 18.7194 1.30258 18.86L7.75008 21.25L10.1251 27.7025C10.2657 28.0846 10.5202 28.4143 10.8541 28.6473C11.1881 28.8802 11.5854 29.0051 11.9926 29.0051C12.3997 29.0051 12.7971 28.8802 13.131 28.6473C13.465 28.4143 13.7194 28.0846 13.8601 27.7025L16.2351 21.2512L22.6913 18.8762C23.0734 18.7356 23.4032 18.4811 23.6361 18.1472C23.869 17.8133 23.9939 17.4159 23.9939 17.0088C23.9939 16.6016 23.869 16.2042 23.6361 15.8703C23.4032 15.5364 23.0734 15.2819 22.6913 15.1413L22.6976 15.1325ZM15.5488 19.375C15.2786 19.4742 15.0332 19.631 14.8296 19.8345C14.6261 20.0381 14.4693 20.2835 14.3701 20.5537L11.9951 26.9862L9.62508 20.5487C9.52582 20.2799 9.3695 20.0358 9.16688 19.8332C8.96426 19.6306 8.72014 19.4743 8.45133 19.375L2.01883 17L8.45133 14.625C8.72014 14.5257 8.96426 14.3694 9.16688 14.1668C9.3695 13.9642 9.52582 13.7201 9.62508 13.4513L12.0001 7.01875L14.3751 13.4513C14.4743 13.7215 14.6311 13.9669 14.8346 14.1705C15.0382 14.374 15.2836 14.5308 15.5538 14.63L21.9863 17.005L15.5488 19.375ZM16.0001 4C16.0001 3.73478 16.1054 3.48043 16.293 3.29289C16.4805 3.10536 16.7349 3 17.0001 3H19.0001V1C19.0001 0.734784 19.1054 0.48043 19.293 0.292893C19.4805 0.105357 19.7349 0 20.0001 0C20.2653 0 20.5197 0.105357 20.7072 0.292893C20.8947 0.48043 21.0001 0.734784 21.0001 1V3H23.0001C23.2653 3 23.5197 3.10536 23.7072 3.29289C23.8947 3.48043 24.0001 3.73478 24.0001 4C24.0001 4.26522 23.8947 4.51957 23.7072 4.70711C23.5197 4.89464 23.2653 5 23.0001 5H21.0001V7C21.0001 7.26522 20.8947 7.51957 20.7072 7.70711C20.5197 7.89464 20.2653 8 20.0001 8C19.7349 8 19.4805 7.89464 19.293 7.70711C19.1054 7.51957 19.0001 7.26522 19.0001 7V5H17.0001C16.7349 5 16.4805 4.89464 16.293 4.70711C16.1054 4.51957 16.0001 4.26522 16.0001 4ZM29.0001 10C29.0001 10.2652 28.8947 10.5196 28.7072 10.7071C28.5197 10.8946 28.2653 11 28.0001 11H27.0001V12C27.0001 12.2652 26.8947 12.5196 26.7072 12.7071C26.5197 12.8946 26.2653 13 26.0001 13C25.7349 13 25.4805 12.8946 25.293 12.7071C25.1054 12.5196 25.0001 12.2652 25.0001 12V11H24.0001C23.7349 11 23.4805 10.8946 23.293 10.7071C23.1054 10.5196 23.0001 10.2652 23.0001 10C23.0001 9.73478 23.1054 9.48043 23.293 9.29289C23.4805 9.10536 23.7349 9 24.0001 9H25.0001V8C25.0001 7.73478 25.1054 7.48043 25.293 7.29289C25.4805 7.10536 25.7349 7 26.0001 7C26.2653 7 26.5197 7.10536 26.7072 7.29289C26.8947 7.48043 27.0001 7.73478 27.0001 8V9H28.0001C28.2653 9 28.5197 9.10536 28.7072 9.29289C28.8947 9.48043 29.0001 9.73478 29.0001 10Z\" fill=\"currentColor\"></path>"
};
const UNITY_MARK_PATH = "<path d=\"m 12.8497 1 v 3.9324 l 3.4868 2.0108 c 0.0279 0.0167 0.0501 0.0446 0.0668 0.0724 c 0.0223 0.0278 0.0279 0.0613 0.0279 0.0947 c 0 0.0334 -0.0056 0.0668 -0.0279 0.1003 c -0.0167 0.0278 -0.039 0.0501 -0.0668 0.0724 l -4.1441 2.384 c -0.0557 0.039 -0.1281 0.0557 -0.195 0.0557 c -0.0668 0 -0.1337 -0.0167 -0.195 -0.0557 l -4.1441 -2.384 c -0.0279 -0.0167 -0.0501 -0.0446 -0.0668 -0.0724 c -0.0167 -0.0279 -0.0279 -0.0613 -0.0279 -0.0947 c 0 -0.0334 0.0111 -0.0668 0.0279 -0.1003 c 0.0167 -0.0279 0.039 -0.0501 0.0668 -0.0724 l 3.4868 -2.0052 v -3.938 l -8.8953 5.13 v 10.2544 l 3.4144 -1.9662 v -4.0215 c 0 -0.0334 0.0056 -0.0668 0.0223 -0.0947 c 0.0167 -0.0279 0.0446 -0.0501 0.0724 -0.0724 c 0.0278 -0.0167 0.0613 -0.0223 0.1003 -0.0223 c 0.0334 0 0.0668 0.0056 0.0947 0.0223 l 4.1441 2.3895 c 0.0613 0.0334 0.1114 0.0836 0.1448 0.1448 c 0.0334 0.0557 0.0501 0.1225 0.0501 0.1949 v 4.7735 c 0 0.0334 -0.0056 0.0668 -0.0278 0.1003 c -0.0167 0.0279 -0.039 0.0557 -0.0668 0.0724 c -0.0334 0.0167 -0.0668 0.0223 -0.1003 0.0223 c -0.0334 0 -0.0668 -0.0056 -0.0947 -0.0223 l -3.4868 -2.0108 l -3.4144 1.9662 l 8.8953 5.13 l 8.8953 -5.13 l -3.4144 -1.9662 l -3.4868 2.0108 c -0.0278 0.0167 -0.0613 0.0223 -0.0947 0.0223 c -0.0334 0 -0.0668 -0.0111 -0.0947 -0.0279 c -0.0334 -0.0167 -0.0557 -0.039 -0.0724 -0.0668 c -0.0167 -0.0334 -0.0279 -0.0668 -0.0279 -0.1003 v -4.7735 c 0 -0.0724 0.0167 -0.1393 0.0501 -0.1949 c 0.039 -0.0613 0.0836 -0.1114 0.1448 -0.1448 l 4.1441 -2.3895 c 0.0278 -0.0167 0.0613 -0.0223 0.0947 -0.0223 c 0.0334 0 0.0668 0.0056 0.1003 0.0223 c 0.0278 0.0223 0.0501 0.0446 0.0668 0.0724 c 0.0223 0.0279 0.0279 0.0613 0.0279 0.1003 v 4.016 l 3.4144 1.9662 v -10.2544 l -8.8953 -5.13 z\" fill=\"currentColor\"></path>";
function ProductIcon({
  name,
  size = 20,
  color
}) {
  const inner = PRODUCT_PATHS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    style: {
      color: color || 'inherit',
      flexShrink: 0
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}
function UnityMark({
  size = 24,
  color
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      color: color || 'inherit',
      flexShrink: 0
    },
    dangerouslySetInnerHTML: {
      __html: UNITY_MARK_PATH
    }
  });
}

// Phosphor web icon helper: <Ph name="bell" /> -> <i class="ph ph-bell" />
function Ph({
  name,
  weight = 'regular',
  size,
  style,
  ...rest
}) {
  const cls = weight === 'fill' ? 'ph-fill' : weight === 'bold' ? 'ph-bold' : 'ph';
  return /*#__PURE__*/React.createElement("i", _extends({
    className: cls + ' ph-' + name,
    style: {
      fontSize: size,
      ...style
    }
  }, rest));
}
Object.assign(window, {
  ProductIcon,
  UnityMark,
  Ph,
  PRODUCT_PATHS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "meta-integration/icons.jsx", error: String((e && e.message) || e) }); }

// meta-integration/metasettings.jsx
try { (() => {
// Project-settings content + Meta connect flow. Three layout variants (A/B/C).
const {
  useState: useMS
} = React;

/* --------------------------------------------------------------- helpers */
function InfoDot() {
  return /*#__PURE__*/React.createElement("i", {
    className: "ph ph-question",
    style: {
      fontSize: 14,
      color: 'var(--cf-fg-disabled)',
      cursor: 'help'
    }
  });
}
function SectionTitle({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '0 0 12px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '600 18px/24px var(--cf-font-sans)',
      letterSpacing: '-0.01em',
      color: 'var(--cf-fg)'
    }
  }, children), action);
}
function Pencil() {
  const [h, setH] = useMS(false);
  return /*#__PURE__*/React.createElement("button", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: 30,
      height: 30,
      borderRadius: 6,
      border: 'none',
      cursor: 'pointer',
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: h ? 'var(--cf-action-hover)' : 'transparent',
      color: 'var(--cf-fg-secondary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-pencil-simple",
    style: {
      fontSize: 16
    }
  }));
}

/* A single row inside a settings card */
function Row({
  label,
  hint,
  sub,
  badge,
  value,
  action,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 18px',
      borderBottom: last ? 'none' : '1px solid var(--cf-divider)',
      minHeight: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/20px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, label), hint && /*#__PURE__*/React.createElement(InfoDot, null), badge), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/16px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)',
      marginTop: 2
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      font: '400 14px/20px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, value), action);
}
function Tag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 7px',
      borderRadius: 5,
      background: 'var(--cf-action-selected)',
      color: 'var(--cf-fg-secondary)',
      font: '600 11px var(--cf-font-sans)'
    }
  }, children);
}
function ProBadge() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 7px',
      borderRadius: 5,
      background: 'var(--cf-primary-light)',
      color: 'var(--cf-primary-contrast)',
      font: '600 11px var(--cf-font-sans)'
    }
  }, "Pro");
}

/* Brand tile for a connection */
function BrandTile({
  icon,
  bg,
  size = 38
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 9,
      background: bg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-fill ph-' + icon,
    style: {
      fontSize: size * 0.55,
      color: '#fff'
    }
  }));
}

/* status chip for connection state */
function StatusChip({
  connected
}) {
  if (connected) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '600 12px var(--cf-font-sans)',
      color: 'var(--cf-success-darker)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-check-circle",
    style: {
      fontSize: 14
    }
  }), "Connected");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, "Not connected");
}

/* ============================================================ Project details (shared) */
function ProjectDetails() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outlined",
      color: "default",
      size: "small"
    }, "Transfer project"), /*#__PURE__*/React.createElement(Button, {
      variant: "outlined",
      color: "default",
      size: "small"
    }, "Archive project"))
  }, "Project details"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Row, {
    label: "Project name",
    value: "2-MAY 2026",
    action: /*#__PURE__*/React.createElement(Pencil, null)
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Project created",
    value: "May 1, 2026",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30
      }
    })
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Project ID",
    value: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px var(--cf-font-mono)'
      }
    }, "107682c1-f5c8-4ca1-8df9-2befb0f6c2ea"),
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 6,
        border: 'none',
        background: 'transparent',
        color: 'var(--cf-fg-secondary)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ph ph-copy",
      style: {
        fontSize: 16
      }
    }))
  }), /*#__PURE__*/React.createElement(Row, {
    label: "COPPA Designation",
    value: "Unspecified",
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30
      }
    })
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Project Visibility",
    badge: /*#__PURE__*/React.createElement(ProBadge, null),
    hint: true,
    value: "All organization members",
    action: /*#__PURE__*/React.createElement(Pencil, null),
    last: true
  })));
}

/* ============================================================ Meta connect modal */
const META_FIELDS = [{
  key: 'appId',
  label: 'Meta App ID',
  placeholder: 'e.g. 9921045318772630',
  mono: true
}, {
  key: 'secret',
  label: 'Meta App Secret / Client Token',
  placeholder: 'Paste your client token',
  mono: true
}, {
  key: 'pixel',
  label: 'Dataset / Pixel ID',
  placeholder: 'e.g. 7048853321990114',
  mono: true
}, {
  key: 'capi',
  label: 'Conversions API access token',
  placeholder: 'EAAG… access token',
  mono: true
}];
function Callout({
  tone,
  icon,
  title,
  body
}) {
  const map = {
    info: {
      bg: 'var(--cf-info-lighter)',
      bd: 'var(--cf-info-light)',
      fg: 'var(--cf-info-darker)'
    },
    success: {
      bg: 'var(--cf-success-lighter)',
      bd: 'var(--cf-success-light)',
      fg: 'var(--cf-success-darker)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '12px 14px',
      borderRadius: 8,
      background: map.bg,
      border: '1px solid ' + map.bd
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-fill ph-' + icon,
    style: {
      fontSize: 18,
      color: map.fg,
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/18px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)',
      marginTop: 2
    }
  }, body)));
}
function MetaModal({
  onClose,
  onConnect
}) {
  const [vals, setVals] = useMS({
    appId: '',
    secret: '',
    pixel: '',
    capi: ''
  });
  const set = (k, v) => setVals(s => ({
    ...s,
    [k]: v
  }));
  const ready = vals.appId.trim() && vals.capi.trim();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--cf-backdrop)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '60px 24px',
      overflow: 'auto'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 600,
      maxWidth: '100%',
      background: 'var(--cf-bg-modal)',
      border: '1px solid var(--cf-divider)',
      borderRadius: 10,
      boxShadow: 'var(--cf-shadow-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 16px',
      borderBottom: '1px solid var(--cf-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '600 18px/24px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, "Connect Meta to 2-MAY 2026"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--cf-fg-secondary)',
      cursor: 'pointer',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x",
    style: {
      fontSize: 18
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(BrandTile, {
    icon: "meta-logo",
    bg: "#0866FF",
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, "2-MAY 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-input-label",
    style: {
      color: 'var(--cf-fg)'
    }
  }, "Meta Business account"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      borderRadius: 6,
      border: '1px solid var(--cf-border)',
      background: 'var(--cf-bg)',
      font: '400 14px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, "Palmier Glace \u2014 Business Manager", /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-down",
    style: {
      fontSize: 14,
      color: 'var(--cf-fg-secondary)'
    }
  }))), /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    icon: "info",
    title: "Conversions API dataset detected",
    body: "This Business account already exposes a Conversions API dataset. Linking it lets Unity forward purchase and engagement events to Meta."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--cf-divider)',
      margin: '2px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, "Connection details"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, META_FIELDS.map(f => /*#__PURE__*/React.createElement(Field, {
    key: f.key,
    label: f.label,
    mono: f.mono,
    value: vals[f.key],
    placeholder: f.placeholder,
    onChange: v => set(f.key, v),
    style: {
      gridColumn: f.key === 'capi' ? '1 / -1' : 'auto'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 24px',
      borderTop: '1px solid var(--cf-divider)',
      background: 'var(--cf-bg-paper)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--cf-font-sans)',
      color: 'var(--cf-fg-disabled)'
    }
  }, ready ? 'Ready to connect' : 'App ID and access token required'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    color: "default",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary",
    onClick: onConnect,
    style: {
      opacity: ready ? 1 : 0.5,
      pointerEvents: ready ? 'auto' : 'none'
    }
  }, "Connect dataset")))));
}

/* ============================================================ Google Analytics — Create link (two-step) */

/* GA hierarchy: Account → Property → Data stream → App (the child you link to) */
const GA_DATA = [{
  account: 'Palmier Glace',
  properties: [{
    id: '318220945',
    name: 'Palmier Glace — Production',
    streams: [{
      id: '9 482 001',
      label: 'Android · Palmier Glace',
      apps: [{
        platform: 'android',
        name: 'Palmier Glace',
        id: 'com.palmierglace.app',
        firebaseId: '1:84920::android:9f2a1'
      }]
    }, {
      id: '9 482 002',
      label: 'iOS · Palmier Glace',
      apps: [{
        platform: 'ios',
        name: 'Palmier Glace',
        id: 'com.palmierglace.app',
        firebaseId: '1:84920::ios:c41b7'
      }]
    }]
  }, {
    id: '287551203',
    name: 'Palmier Glace — Staging',
    streams: [{
      id: '7 710 441',
      label: 'Android · Staging build',
      apps: [{
        platform: 'android',
        name: 'Palmier Glace (Staging)',
        id: 'com.palmierglace.staging',
        firebaseId: '1:84920::android:2bd09'
      }]
    }]
  }]
}, {
  account: 'Sucre Studios',
  properties: [{
    id: '441920038',
    name: 'Sucre — All platforms',
    streams: [{
      id: '5 521 001',
      label: 'Android · Sucre Rush',
      apps: [{
        platform: 'android',
        name: 'Sucre Rush',
        id: 'com.sucrestudios.rush',
        firebaseId: '1:55210::android:71fa0'
      }]
    }, {
      id: '5 521 002',
      label: 'iOS · Sucre Rush',
      apps: [{
        platform: 'ios',
        name: 'Sucre Rush',
        id: 'com.sucrestudios.rush',
        firebaseId: '1:55210::ios:08c3e'
      }]
    }]
  }]
}];
const PLATFORM = {
  android: {
    icon: 'android-logo',
    label: 'Android'
  },
  ios: {
    icon: 'apple-logo',
    label: 'iOS'
  },
  web: {
    icon: 'globe',
    label: 'Web'
  }
};
function GAStepper({
  step
}) {
  const items = ['Select property', 'Select app'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 14
    }
  }, items.map((label, i) => {
    const n = i + 1,
      done = step > n,
      active = step === n;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: n
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '600 11px var(--cf-font-sans)',
        background: done || active ? 'var(--cf-primary)' : 'var(--cf-gray-4)',
        color: done || active ? 'var(--cf-on-primary)' : 'var(--cf-fg-secondary)'
      }
    }, done ? /*#__PURE__*/React.createElement("i", {
      className: "ph-bold ph-check",
      style: {
        fontSize: 12
      }
    }) : n), /*#__PURE__*/React.createElement("span", {
      style: {
        font: active || done ? '600 13px var(--cf-font-sans)' : '500 13px var(--cf-font-sans)',
        color: active || done ? 'var(--cf-fg)' : 'var(--cf-fg-secondary)'
      }
    }, label)), i < items.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 1,
        background: 'var(--cf-divider)',
        margin: '0 12px'
      }
    }));
  }));
}
function GARadio({
  checked
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      flexShrink: 0,
      border: '2px solid ' + (checked ? 'var(--cf-primary)' : 'var(--cf-gray-7)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--cf-primary)'
    }
  }));
}
function GASelectRow({
  selected,
  onClick,
  lead,
  title,
  sub,
  meta,
  indent
}) {
  const [h, setH] = useMS(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      paddingLeft: indent ? 26 : 12,
      borderRadius: 6,
      cursor: 'pointer',
      border: '1px solid ' + (selected ? 'var(--cf-primary)' : 'transparent'),
      background: selected ? 'var(--cf-primary-lighter)' : h ? 'var(--cf-action-hover)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(GARadio, {
    checked: selected
  }), lead, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px/18px var(--cf-font-sans)',
      color: 'var(--cf-fg)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/16px var(--cf-font-mono)',
      color: 'var(--cf-fg-secondary)',
      marginTop: 1
    }
  }, sub)), meta);
}
function GAModal({
  onClose,
  onConnect
}) {
  const [step, setStep] = useMS(1);
  const [propId, setPropId] = useMS(null);
  const [appKey, setAppKey] = useMS(null);
  const [q, setQ] = useMS('');
  const allProps = GA_DATA.flatMap(a => a.properties.map(p => ({
    ...p,
    account: a.account
  })));
  const prop = allProps.find(p => p.id === propId);
  const selectedApp = prop && prop.streams.flatMap(s => s.apps.map(ap => ({
    ...ap,
    stream: s
  }))).find(ap => ap.stream.id + '::' + ap.id === appKey);
  const filtered = GA_DATA.map(a => ({
    account: a.account,
    properties: a.properties.filter(p => !q.trim() || p.name.toLowerCase().includes(q.toLowerCase()) || p.id.includes(q))
  })).filter(a => a.properties.length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--cf-backdrop)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '60px 24px',
      overflow: 'auto'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 600,
      maxWidth: '100%',
      background: 'var(--cf-bg-modal)',
      border: '1px solid var(--cf-divider)',
      borderRadius: 10,
      boxShadow: 'var(--cf-shadow-md)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100vh - 120px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 16px',
      borderBottom: '1px solid var(--cf-divider)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(BrandTile, {
    icon: "google-logo",
    bg: "#1A73E8",
    size: 26
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '600 18px/24px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, "Link Google Analytics to 2-MAY 2026")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--cf-fg-secondary)',
      cursor: 'pointer',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x",
    style: {
      fontSize: 18
    }
  }))), /*#__PURE__*/React.createElement(GAStepper, {
    step: step
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      overflow: 'auto'
    }
  }, step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/18px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, "Choose the Google Analytics (Firebase) property to link. Events from this project will export to the property you select."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 10px',
      borderRadius: 6,
      border: '1px solid var(--cf-border)',
      background: 'var(--cf-bg)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass",
    style: {
      fontSize: 15,
      color: 'var(--cf-fg-secondary)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search properties",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--cf-fg)',
      font: '400 14px var(--cf-font-sans)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, filtered.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.account,
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/16px var(--cf-font-sans)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--cf-fg-disabled)',
      padding: '6px 12px 4px'
    }
  }, a.account), a.properties.map(p => /*#__PURE__*/React.createElement(GASelectRow, {
    key: p.id,
    selected: propId === p.id,
    onClick: () => setPropId(p.id),
    title: p.name,
    sub: 'Property ID ' + p.id,
    meta: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 12px var(--cf-font-sans)',
        color: 'var(--cf-fg-secondary)'
      }
    }, p.streams.length, " stream", p.streams.length > 1 ? 's' : '')
  })))), !filtered.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 12px',
      textAlign: 'center',
      font: '400 13px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, "No properties match \u201C", q, "\u201D."))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '10px 12px',
      borderRadius: 8,
      background: 'var(--cf-bg-paper)',
      border: '1px solid var(--cf-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(BrandTile, {
    icon: "google-logo",
    bg: "#1A73E8",
    size: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px var(--cf-font-sans)',
      color: 'var(--cf-fg)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, prop.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--cf-font-mono)',
      color: 'var(--cf-fg-secondary)'
    }
  }, "Property ID ", prop.id))), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    color: "primary",
    size: "small",
    onClick: () => {
      setStep(1);
    }
  }, "Change")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/18px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, "Select the app to link. Apps are grouped under the data stream they belong to in this property."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, prop.streams.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px 4px',
      font: '600 11px/16px var(--cf-font-sans)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--cf-fg-disabled)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-broadcast",
    style: {
      fontSize: 13
    }
  }), s.label, " \xB7 Stream ", s.id), s.apps.map(ap => {
    const key = s.id + '::' + ap.id;
    return /*#__PURE__*/React.createElement(GASelectRow, {
      key: key,
      indent: true,
      selected: appKey === key,
      onClick: () => setAppKey(key),
      lead: /*#__PURE__*/React.createElement("span", {
        style: {
          width: 28,
          height: 28,
          borderRadius: 7,
          flexShrink: 0,
          background: 'var(--cf-gray-4)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--cf-fg)'
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: 'ph-fill ph-' + PLATFORM[ap.platform].icon,
        style: {
          fontSize: 16
        }
      })),
      title: ap.name,
      sub: ap.id,
      meta: /*#__PURE__*/React.createElement("span", {
        style: {
          font: '600 11px var(--cf-font-sans)',
          color: 'var(--cf-fg-secondary)',
          padding: '2px 7px',
          borderRadius: 5,
          background: 'var(--cf-action-selected)'
        }
      }, PLATFORM[ap.platform].label)
    });
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 24px',
      borderTop: '1px solid var(--cf-divider)',
      background: 'var(--cf-bg-paper)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--cf-font-sans)',
      color: 'var(--cf-fg-disabled)'
    }
  }, step === 1 ? propId ? 'Property selected' : 'Select a property to continue' : appKey ? 'Ready to create link' : 'Select an app to link'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    color: "default",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary",
    onClick: () => setStep(2),
    endIcon: /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrow-right",
      style: {
        fontSize: 15
      }
    }),
    style: {
      opacity: propId ? 1 : 0.5,
      pointerEvents: propId ? 'auto' : 'none'
    }
  }, "Next")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    color: "default",
    onClick: () => setStep(1),
    startIcon: /*#__PURE__*/React.createElement("i", {
      className: "ph ph-arrow-left",
      style: {
        fontSize: 15
      }
    })
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary",
    onClick: () => onConnect({
      property: prop,
      app: selectedApp
    }),
    style: {
      opacity: appKey ? 1 : 0.5,
      pointerEvents: appKey ? 'auto' : 'none'
    }
  }, "Create link"))))));
}
Object.assign(window, {
  InfoDot,
  SectionTitle,
  Pencil,
  Row,
  Tag,
  ProBadge,
  BrandTile,
  StatusChip,
  ProjectDetails,
  MetaModal,
  GAModal,
  Callout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "meta-integration/metasettings.jsx", error: String((e && e.message) || e) }); }

// meta-integration/page.jsx
try { (() => {
// Three Developer Data layout variants + the page wrapper holding Meta state.
const {
  useState: usePG
} = React;
const META_DESC = 'Forward purchase & engagement events to Meta via the Conversions API for attribution and Advantage+ audiences.';
const GA_DESC = 'Export Analytics events to your linked Google Analytics (Firebase) property through BigQuery.';
const MASKED_ID = '9921•••••••2630';
function ConnectBtn({
  connected,
  onClick,
  primaryLabel = 'Connect'
}) {
  if (connected) return /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    color: "default",
    size: "small"
  }, "Manage");
  return /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary",
    size: "small",
    onClick: onClick
  }, primaryLabel);
}

/* Google Analytics link — button + linked-state value */
function GALinkBtn({
  ga,
  onCreateLink
}) {
  if (ga) return /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    color: "default",
    size: "small"
  }, "Manage");
  return /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary",
    size: "small",
    onClick: onCreateLink
  }, "Create link");
}
function GALinkValue({
  ga,
  fallback = 'Not linked'
}) {
  if (!ga) return fallback;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    connected: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: '400 13px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-fill ph-' + (ga.app.platform === 'ios' ? 'apple-logo' : ga.app.platform === 'web' ? 'globe' : 'android-logo'),
    style: {
      fontSize: 14
    }
  }), ga.app.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px var(--cf-font-mono)',
      color: 'var(--cf-fg-disabled)'
    }
  }, ga.property.name));
}

/* ============================================================ Variant A — inline row */
function DevDataInline({
  meta,
  onConnect,
  ga,
  onCreateLink
}) {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionTitle, null, "Developer Data"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Row, {
    label: "Developer Data",
    hint: true,
    value: "Collection settings: Essential  |  Usage settings: Configured  |  Special services: 2 Authorized",
    action: /*#__PURE__*/React.createElement(Pencil, null)
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Google Analytics (Firebase)",
    hint: true,
    value: /*#__PURE__*/React.createElement(GALinkValue, {
      ga: ga
    }),
    action: /*#__PURE__*/React.createElement(GALinkBtn, {
      ga: ga,
      onCreateLink: onCreateLink
    })
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Meta",
    hint: true,
    value: meta ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(StatusChip, {
      connected: true
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 13px var(--cf-font-mono)',
        color: 'var(--cf-fg-secondary)'
      }
    }, MASKED_ID)) : 'Not connected',
    action: /*#__PURE__*/React.createElement(ConnectBtn, {
      connected: meta,
      onClick: onConnect
    })
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Google License Key",
    sub: "In-app purchases setting",
    value: "Not set",
    action: /*#__PURE__*/React.createElement(Pencil, null)
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Related Projects",
    hint: true,
    badge: /*#__PURE__*/React.createElement(Tag, null, "Owner"),
    value: "No related projects",
    action: /*#__PURE__*/React.createElement(Pencil, null),
    last: true
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 12px/16px var(--cf-font-sans)',
      color: 'var(--cf-fg-disabled)',
      margin: '10px 2px 0'
    }
  }, "Meta sits inline with existing data settings \u2014 lowest-friction, but connection setup competes with unrelated rows."));
}

/* ============================================================ Variant B — connection cards */
function ConnCard({
  tile,
  bg,
  title,
  kind,
  desc,
  connected,
  onConnect,
  ga,
  onCreateLink
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cf-bg-paper)',
      border: '1px solid var(--cf-divider)',
      borderRadius: 8,
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 168
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(BrandTile, {
    icon: tile,
    bg: bg
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '600 15px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, title, /*#__PURE__*/React.createElement(InfoDot, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, kind))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 13px/18px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)',
      flex: 1,
      textWrap: 'pretty'
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 12,
      borderTop: '1px solid var(--cf-divider)'
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    connected: title === 'Meta' ? connected : !!ga
  }), title === 'Meta' ? /*#__PURE__*/React.createElement(ConnectBtn, {
    connected: connected,
    onClick: onConnect
  }) : /*#__PURE__*/React.createElement(GALinkBtn, {
    ga: ga,
    onCreateLink: onCreateLink
  })));
}
function DevDataCards({
  meta,
  onConnect,
  ga,
  onCreateLink
}) {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionTitle, null, "Developer Data"), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Developer Data",
    hint: true,
    value: "Collection settings: Essential  |  Usage settings: Configured  |  Special services: 2 Authorized",
    action: /*#__PURE__*/React.createElement(Pencil, null)
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Google License Key",
    sub: "In-app purchases setting",
    value: "Not set",
    action: /*#__PURE__*/React.createElement(Pencil, null)
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Related Projects",
    hint: true,
    badge: /*#__PURE__*/React.createElement(Tag, null, "Owner"),
    value: "No related projects",
    action: /*#__PURE__*/React.createElement(Pencil, null),
    last: true
  })), /*#__PURE__*/React.createElement(SectionTitle, null, "Data connections"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ConnCard, {
    tile: "google-logo",
    bg: "#1A73E8",
    title: "Google Analytics",
    kind: "Firebase \xB7 Analytics export",
    desc: GA_DESC,
    ga: ga,
    onCreateLink: onCreateLink
  }), /*#__PURE__*/React.createElement(ConnCard, {
    tile: "meta-logo",
    bg: "#0866FF",
    title: "Meta",
    kind: "Conversions API \xB7 Attribution",
    desc: META_DESC,
    connected: meta,
    onConnect: onConnect
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 12px/16px var(--cf-font-sans)',
      color: 'var(--cf-fg-disabled)',
      margin: '10px 2px 0'
    }
  }, "Third-party connections become scannable cards with room for logo, description and status \u2014 scales as more providers are added."));
}

/* ============================================================ Variant C — own tab */
function ConnListRow({
  tile,
  bg,
  title,
  kind,
  connected,
  onConnect,
  ga,
  onCreateLink,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 18px',
      borderBottom: last ? 'none' : '1px solid var(--cf-divider)'
    }
  }, /*#__PURE__*/React.createElement(BrandTile, {
    icon: tile,
    bg: bg
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '600 14px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, title, /*#__PURE__*/React.createElement(InfoDot, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)',
      marginTop: 1
    }
  }, kind)), /*#__PURE__*/React.createElement(StatusChip, {
    connected: title === 'Meta' ? connected : !!ga
  }), title === 'Meta' ? /*#__PURE__*/React.createElement(ConnectBtn, {
    connected: connected,
    onClick: onConnect
  }) : /*#__PURE__*/React.createElement(GALinkBtn, {
    ga: ga,
    onCreateLink: onCreateLink
  }));
}
function DevDataTabs({
  meta,
  onConnect,
  ga,
  onCreateLink
}) {
  const [tab, setTab] = usePG('Data connections');
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionTitle, null, "Developer Data"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Overview', 'Data connections', 'Advanced'],
    value: tab,
    onChange: setTab
  })), tab === 'Data connections' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px 4px',
      font: '400 13px/18px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, "Connect external analytics and attribution providers to this project."), /*#__PURE__*/React.createElement(ConnListRow, {
    tile: "google-logo",
    bg: "#1A73E8",
    title: "Google Analytics",
    kind: "Firebase \xB7 Analytics export",
    ga: ga,
    onCreateLink: onCreateLink
  }), /*#__PURE__*/React.createElement(ConnListRow, {
    tile: "meta-logo",
    bg: "#0866FF",
    title: "Meta",
    kind: "Conversions API \xB7 Attribution",
    connected: meta,
    onConnect: onConnect,
    last: true
  })) : tab === 'Overview' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Row, {
    label: "Developer Data",
    hint: true,
    value: "Collection settings: Essential  |  Usage settings: Configured  |  Special services: 2 Authorized",
    action: /*#__PURE__*/React.createElement(Pencil, null)
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Google License Key",
    sub: "In-app purchases setting",
    value: "Not set",
    action: /*#__PURE__*/React.createElement(Pencil, null)
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Related Projects",
    hint: true,
    badge: /*#__PURE__*/React.createElement(Tag, null, "Owner"),
    value: "No related projects",
    action: /*#__PURE__*/React.createElement(Pencil, null),
    last: true
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 18px',
      font: '400 13px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, "Advanced data-retention and export controls.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 12px/16px var(--cf-font-sans)',
      color: 'var(--cf-fg-disabled)',
      margin: '10px 2px 0'
    }
  }, "A dedicated tab gives connections their own home and room to grow \u2014 best if the integration list will expand over time."));
}

/* ============================================================ Page wrapper */
function SettingsPage({
  variant
}) {
  const [meta, setMeta] = usePG(false);
  const [modal, setModal] = usePG(false);
  const [ga, setGa] = usePG(null); // { property, app } once linked
  const [gaModal, setGaModal] = usePG(false);
  const Variant = variant === 'A' ? DevDataInline : variant === 'B' ? DevDataCards : DevDataTabs;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--cf-bg)',
      overflow: 'hidden',
      color: 'var(--cf-fg)'
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(ProjectNav, null), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto',
      padding: '28px 40px 48px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 26px',
      font: '600 28px/34px var(--cf-font-sans)',
      letterSpacing: '-0.01em'
    }
  }, "Project settings"), /*#__PURE__*/React.createElement(ProjectDetails, null), /*#__PURE__*/React.createElement(Variant, {
    meta: meta,
    onConnect: () => setModal(true),
    ga: ga,
    onCreateLink: () => setGaModal(true)
  })))), modal && /*#__PURE__*/React.createElement(MetaModal, {
    onClose: () => setModal(false),
    onConnect: () => {
      setMeta(true);
      setModal(false);
    }
  }), gaModal && /*#__PURE__*/React.createElement(GAModal, {
    onClose: () => setGaModal(false),
    onConnect: sel => {
      setGa(sel);
      setGaModal(false);
    }
  }));
}
Object.assign(window, {
  SettingsPage,
  DevDataInline,
  DevDataCards,
  DevDataTabs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "meta-integration/page.jsx", error: String((e && e.message) || e) }); }

// meta-integration/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Cloud Foundation — UI primitives (cosmetic recreations of @unity/cloud-ui)
// Styled with --cf-* tokens from colors_and_type.css. Not production code.
const {
  useState
} = React;

/* ----------------------------------------------------------------- Button */
function Button({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  children,
  style,
  ...rest
}) {
  const pad = size === 'small' ? '3px 10px' : size === 'large' ? '9px 16px' : '6px 12px';
  const palettes = {
    primary: {
      bg: 'var(--cf-primary)',
      fg: 'var(--cf-on-primary)',
      hover: 'var(--cf-primary-dark)',
      line: 'var(--cf-primary)',
      ghost: 'var(--cf-primary-darker)',
      wash: 'var(--cf-primary-lighter)'
    },
    default: {
      bg: 'var(--cf-gray-3)',
      fg: 'var(--cf-fg)',
      hover: 'var(--cf-gray-5)',
      line: 'var(--cf-border)',
      ghost: 'var(--cf-fg)',
      wash: 'var(--cf-action-hover)'
    },
    error: {
      bg: 'var(--cf-error)',
      fg: '#fff',
      hover: 'var(--cf-error-dark)',
      line: 'var(--cf-error)',
      ghost: 'var(--cf-error-darker)',
      wash: 'var(--cf-error-lighter)'
    },
    success: {
      bg: 'var(--cf-success)',
      fg: '#fff',
      hover: 'var(--cf-success-dark)',
      line: 'var(--cf-success)',
      ghost: 'var(--cf-success-darker)',
      wash: 'var(--cf-success-lighter)'
    }
  };
  const p = palettes[color] || palettes.primary;
  const [hover, setHover] = useState(false);
  const base = {
    font: '600 0.875rem/1.25rem var(--cf-font-sans)',
    letterSpacing: '0.018rem',
    borderRadius: 6,
    padding: pad,
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    whiteSpace: 'nowrap',
    transition: 'background .15s var(--cf-ease-standard), border-color .15s',
    ...style
  };
  let v = {};
  if (variant === 'contained') v = {
    background: hover ? p.hover : p.bg,
    color: p.fg
  };else if (variant === 'outlined') v = {
    background: hover ? p.wash : 'transparent',
    color: p.ghost,
    borderColor: p.line
  };else v = {
    background: hover ? p.wash : 'transparent',
    color: p.ghost
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...v
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), startIcon, children, endIcon);
}

/* ------------------------------------------------------------------- Chip */
function Chip({
  color = 'default',
  variant = 'filled',
  dot,
  icon,
  onDelete,
  children
}) {
  const fills = {
    default: {
      bg: 'var(--cf-gray-4)',
      fg: 'var(--cf-fg)'
    },
    primary: {
      bg: 'var(--cf-primary-light)',
      fg: 'var(--cf-primary-contrast)'
    },
    success: {
      bg: 'var(--cf-success-light)',
      fg: 'var(--cf-success-contrast)',
      dot: 'var(--cf-success)'
    },
    error: {
      bg: 'var(--cf-error-light)',
      fg: 'var(--cf-error-contrast)',
      dot: 'var(--cf-error)'
    },
    warning: {
      bg: 'var(--cf-warning-light)',
      fg: 'var(--cf-warning-contrast)',
      dot: 'var(--cf-warning-darker)'
    },
    info: {
      bg: 'var(--cf-info-light)',
      fg: 'var(--cf-info-contrast)',
      dot: 'var(--cf-info)'
    }
  };
  const f = fills[color] || fills.default;
  const outlined = variant === 'outlined';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '600 0.75rem/1rem var(--cf-font-sans)',
      letterSpacing: '0.01rem',
      padding: '5px 8px',
      borderRadius: 999,
      background: outlined ? 'transparent' : f.bg,
      color: f.fg,
      border: outlined ? '1px solid var(--cf-border)' : 'none'
    }
  }, dot && /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-circle",
    style: {
      fontSize: 8,
      color: f.dot || 'currentColor'
    }
  }), icon, children, onDelete && /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x",
    style: {
      fontSize: 13,
      cursor: 'pointer',
      opacity: 0.7
    },
    onClick: onDelete
  }));
}

/* ------------------------------------------------------------------- Card */
function Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cf-bg-paper)',
      border: '1px solid var(--cf-divider)',
      borderRadius: 4,
      overflow: 'hidden',
      ...style
    }
  }, children);
}

/* ------------------------------------------------------------------ Avatar */
function Avatar({
  name,
  src,
  size = 28,
  color = 'var(--cf-primary)'
}) {
  const initials = (name || '?').split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  if (src) return /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    style: {
      borderRadius: '50%',
      objectFit: 'cover',
      display: 'block'
    },
    alt: name
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 ' + Math.round(size * 0.4) + 'px var(--cf-font-sans)',
      flexShrink: 0
    }
  }, initials);
}

/* -------------------------------------------------------------------- Tabs */
function Tabs({
  tabs,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: '1px solid var(--cf-divider)'
    }
  }, tabs.map(t => {
    const on = t === value;
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      onClick: () => onChange(t),
      style: {
        padding: '10px 2px',
        marginBottom: -1,
        cursor: 'pointer',
        font: '500 0.875rem/1rem var(--cf-font-sans)',
        color: on ? 'var(--cf-primary-darker)' : 'var(--cf-fg-secondary)',
        borderBottom: '2px solid ' + (on ? 'var(--cf-primary)' : 'transparent')
      }
    }, t);
  }));
}

/* ------------------------------------------------------------------ Switch */
function Switch({
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 34,
      height: 20,
      borderRadius: 999,
      position: 'relative',
      cursor: 'pointer',
      background: checked ? 'var(--cf-primary)' : 'var(--cf-gray-7)',
      transition: '.2s',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 16 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      transition: '.2s',
      boxShadow: '0 1px 2px rgba(0,0,0,.2)'
    }
  }));
}

/* ------------------------------------------------------------------- Field */
function Field({
  label,
  error,
  mono,
  value,
  onChange,
  placeholder,
  style
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "cf-input-label",
    style: {
      color: error ? 'var(--cf-error)' : 'var(--cf-fg)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: mono ? '400 12px var(--cf-font-mono)' : '400 0.875rem/1.25rem var(--cf-font-sans)',
      padding: '7px 10px',
      borderRadius: 6,
      color: 'var(--cf-fg)',
      background: 'var(--cf-bg)',
      border: '1px solid ' + (error ? 'var(--cf-error)' : focus ? 'var(--cf-primary)' : 'var(--cf-border)'),
      boxShadow: focus && !error ? '0 0 0 1px var(--cf-primary)' : 'none',
      outline: 'none'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    className: "cf-caption",
    style: {
      color: 'var(--cf-error)'
    }
  }, error));
}

/* ------------------------------------------------------------ IconButton */
function IconButton({
  icon,
  onClick,
  active,
  title,
  size = 18
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    title: title,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 30,
      height: 30,
      borderRadius: 6,
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      background: active ? 'var(--cf-action-selected)' : hover ? 'var(--cf-action-hover)' : 'transparent',
      color: active ? 'var(--cf-fg)' : 'var(--cf-fg-secondary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph ph-' + icon,
    style: {
      fontSize: size
    }
  }));
}
Object.assign(window, {
  Button,
  Chip,
  Card,
  Avatar,
  Tabs,
  Switch,
  Field,
  IconButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "meta-integration/primitives.jsx", error: String((e && e.message) || e) }); }

// packages/library/components/Button/Button.theme.ts
try { (() => {
const MuiButton = ({
  spacing,
  palette,
  vars
}) => {
  const getContainedVariantStyles = (color, isDefaultOrSecondary = false) => ({
    color: isDefaultOrSecondary ? (vars?.palette || palette).text.primary : color.buttonContrastText,
    backgroundColor: color.main,
    '&:hover, &[aria-expanded="true"]': {
      backgroundColor: isDefaultOrSecondary ? color.light : color.dark
    }
  });
  const getOutlinedVariantStyles = (color, isDefaultOrSecondary = false) => ({
    color: isDefaultOrSecondary ? (vars?.palette || palette).text.primary : color.darker,
    borderColor: isDefaultOrSecondary ? (vars?.palette || palette).default.outlinedBorder : color.main,
    '&:hover, &[aria-expanded="true"]': {
      backgroundColor: isDefaultOrSecondary ? (vars?.palette || palette).action.hover : color.lighter,
      borderColor: isDefaultOrSecondary ? (vars?.palette || palette).action.active : color.main
    },
    '&.Mui-disabled': {
      borderColor: (vars?.palette || palette).default.outlinedBorder
    }
  });
  const getTextVariantStyles = (color, isDefaultOrSecondary = false) => ({
    color: isDefaultOrSecondary ? (vars?.palette || palette).text.primary : color.darker,
    '&:hover, &[aria-expanded="true"]': {
      backgroundColor: isDefaultOrSecondary ? (vars?.palette || palette).action.hover : color.lighter
    },
    '&:focus-visible': {
      backgroundColor: color.lighter
    }
  });
  return {
    styleOverrides: {
      root: ({
        ownerState
      }) => {
        const {
          color
        } = ownerState;
        const focusColor = color === 'inherit' ? 'primary' : color;
        const focusColorMap = {
          primary: (vars?.palette || palette).primary.dark,
          default: (vars?.palette || palette).primary.dark,
          secondary: (vars?.palette || palette).primary.dark,
          error: (vars?.palette || palette).error.dark,
          info: (vars?.palette || palette).info.dark,
          success: (vars?.palette || palette).success.dark,
          warning: (vars?.palette || palette).warning.dark
        };
        return {
          wordBreak: 'normal',
          boxShadow: 'none',
          minWidth: 'inherit',
          '&.Mui-disabled': {
            color: (vars?.palette || palette).text.disabled
          },
          borderRadius: 6,
          '&:hover': {
            boxShadow: 'none'
          },
          '&:focus-visible': {
            outlineOffset: '1px',
            outline: ['2px solid Highlight', '2px solid -webkit-focus-ring-color', `2px solid ${(vars?.palette || palette).primary.main}`],
            outlineColor: focusColorMap[focusColor ?? 'primary']
          }
        };
      },
      containedPrimary: getContainedVariantStyles((vars?.palette || palette).primary),
      containedInfo: getContainedVariantStyles((vars?.palette || palette).info),
      containedSuccess: getContainedVariantStyles((vars?.palette || palette).success),
      containedWarning: getContainedVariantStyles((vars?.palette || palette).warning),
      containedError: getContainedVariantStyles((vars?.palette || palette).error),
      containedDefault: getContainedVariantStyles((vars?.palette || palette).default, true),
      containedSecondary: getContainedVariantStyles((vars?.palette || palette).secondary, true),
      outlinedPrimary: getOutlinedVariantStyles((vars?.palette || palette).primary, false),
      outlinedInfo: getOutlinedVariantStyles((vars?.palette || palette).info),
      outlinedSuccess: getOutlinedVariantStyles((vars?.palette || palette).success),
      outlinedWarning: {
        ...getOutlinedVariantStyles((vars?.palette || palette).warning),
        borderColor: (vars?.palette || palette).warning.darker,
        '&:hover, &[aria-expanded="true"]': {
          backgroundColor: (vars?.palette || palette).warning.lighter,
          borderColor: (vars?.palette || palette).warning.darker
        }
      },
      outlinedError: getOutlinedVariantStyles((vars?.palette || palette).error),
      outlinedDefault: getOutlinedVariantStyles((vars?.palette || palette).default, true),
      outlinedSecondary: getOutlinedVariantStyles((vars?.palette || palette).secondary, true),
      textPrimary: getTextVariantStyles((vars?.palette || palette).primary, false),
      textInfo: getTextVariantStyles((vars?.palette || palette).info),
      textSuccess: getTextVariantStyles((vars?.palette || palette).success),
      textWarning: getTextVariantStyles((vars?.palette || palette).warning),
      textError: getTextVariantStyles((vars?.palette || palette).error),
      textDefault: getTextVariantStyles((vars?.palette || palette).default, true),
      textSecondary: getTextVariantStyles((vars?.palette || palette).secondary, true),
      startIcon: {
        marginLeft: 0,
        marginRight: spacing(0.5)
      },
      endIcon: {
        marginRight: 0,
        marginLeft: spacing(0.5)
      },
      sizeSmall: ({
        ownerState
      }) => {
        const {
          variant
        } = ownerState;
        return {
          padding: variant === 'outlined' ? spacing(0.125, 0.75) : spacing(0.25, 0.75)
        };
      },
      iconSizeSmall: {
        '& *:nth-of-type(1)': {
          fontSize: spacing(2)
        }
      },
      sizeMedium: ({
        ownerState
      }) => {
        const {
          variant
        } = ownerState;
        return {
          padding: variant === 'outlined' ? spacing(0.375, 1) : spacing(0.5, 1)
        };
      },
      iconSizeMedium: {
        '& *:nth-of-type(1)': {
          fontSize: spacing(2)
        }
      },
      sizeLarge: ({
        ownerState
      }) => {
        const {
          variant
        } = ownerState;
        return {
          padding: variant === 'outlined' ? spacing(0.625, 1) : spacing(0.75, 1)
        };
      },
      iconSizeLarge: {
        '& *:nth-of-type(1)': {
          fontSize: spacing(2.5)
        }
      },
      sizeExtraLarge: ({
        ownerState
      }) => {
        const {
          variant
        } = ownerState;
        return {
          padding: variant === 'outlined' ? spacing(1.125, 1.5) : spacing(1.25, 1.5)
        };
      },
      iconSizeExtraLarge: {
        '& *:nth-of-type(1)': {
          fontSize: spacing(2.5)
        }
      },
      loading: {
        '.MuiCircularProgress-indeterminate': {
          color: (vars?.palette || palette).action.active
        }
      }
    },
    defaultProps: {
      disableRipple: true,
      color: 'primary'
    }
  };
};
Object.assign(__ds_scope, { MuiButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/Button/Button.theme.ts", error: String((e && e.message) || e) }); }

// packages/library/components/Card/Card.theme.ts
try { (() => {
const MuiCard = ({
  palette,
  vars
}) => ({
  styleOverrides: {
    root: {
      border: `solid 1px ${(vars?.palette || palette).divider}`,
      borderRadius: 4
    }
  }
});
Object.assign(__ds_scope, { MuiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/Card/Card.theme.ts", error: String((e && e.message) || e) }); }

// packages/library/components/Chip/Chip.theme.ts
try { (() => {
const MuiChip = ({
  palette,
  vars,
  typography,
  spacing
}) => {
  const getFilledVariant = (color, paletteColor) => {
    const isDefault = paletteColor === 'default';
    const isSecondary = paletteColor === 'secondary';
    const isWarning = paletteColor === 'warning';
    const isError = paletteColor === 'error';
    const backgroundColor = isDefault ? (vars?.palette || palette).default.dark : isSecondary ? (vars?.palette || palette).common.inverseBlack : color.light;
    const getIconColor = () => {
      if (isDefault) {
        return (vars?.palette || palette).action.active;
      }
      if (isSecondary) {
        return (vars?.palette || palette).common.inverseWhite;
      }
      if (isWarning || isError) {
        return color.darker;
      }
      return color.dark;
    };
    return {
      color: color.contrastText,
      backgroundColor,
      ...(isDefault && {
        color: (vars?.palette || palette).action.primary
      }),
      ...(isSecondary && {
        color: (vars?.palette || palette).common.inverseWhite
      }),
      '& .MuiChip-icon': {
        color: getIconColor()
      },
      '& .MuiChip-deleteIcon': {
        color: getIconColor(),
        '&:hover': {
          color: getIconColor()
        }
      },
      '&.Mui-disabled': {
        opacity: 1,
        color: (vars?.palette || palette).text.disabled,
        backgroundColor: (vars?.palette || palette).action.disabledBackground,
        '& .MuiChip-avatar': {
          filter: 'grayscale(1)',
          opacity: 0.75
        },
        '& .MuiChip-deleteIcon': {
          color: (vars?.palette || palette).text.disabled
        },
        '& .MuiChip-icon': {
          color: (vars?.palette || palette).text.disabled
        }
      },
      '&:focus-visible:not(.Mui-disabled)': {
        outline: `1.5px solid ${isDefault || isSecondary ? (vars?.palette || palette).action.active : color.dark}`,
        outlineOffset: '-2px',
        backgroundColor,
        '& .MuiChip-deleteIcon': {
          color: getIconColor()
        },
        '& .MuiChip-icon': {
          color: getIconColor()
        }
      },
      '&.MuiChip-clickable': {
        '&:hover': {
          backgroundColor: color.lightWithBlack30p
        }
      }
    };
  };
  const getOutlinedVariant = (color, paletteColor) => {
    const isDefault = paletteColor === 'default';
    const isSecondary = paletteColor === 'secondary';
    const isWarning = paletteColor === 'warning';
    const isError = paletteColor === 'error';
    const getIconColor = (isDeleteIcon = false) => {
      if (isDefault) {
        return (vars?.palette || palette).action.active;
      }
      if (isSecondary) {
        return isDeleteIcon ? (vars?.palette || palette).action.active : (vars?.palette || palette).common.inverseBlack;
      }
      if (isWarning || isError) {
        return color.darker;
      }
      return color.dark;
    };
    const getHoverBorderColor = () => {
      if (isDefault) {
        return (vars?.palette || palette).action.active;
      }
      if (isSecondary) {
        return (vars?.palette || palette).action.primary;
      }
      return color.main;
    };
    const getFocusBorderColor = () => {
      if (isDefault || isSecondary) {
        return (vars?.palette || palette).action.primary;
      }
      return color.dark;
    };
    return {
      color: isDefault || isSecondary ? (vars?.palette || palette).action.primary : color.contrastText,
      borderColor: isSecondary ? (vars?.palette || palette).action.primary : color.main50p,
      '& .MuiChip-icon': {
        color: getIconColor()
      },
      '& .MuiChip-deleteIcon': {
        color: getIconColor(true),
        '&:hover': {
          color: getIconColor(true)
        }
      },
      '&.Mui-disabled': {
        opacity: 1,
        color: (vars?.palette || palette).text.disabled,
        borderColor: (vars?.palette || palette).action.outlinedBorder,
        '& .MuiChip-avatar': {
          filter: 'grayscale(1)',
          opacity: 0.75
        },
        '& .MuiChip-deleteIcon': {
          color: (vars?.palette || palette).action.disabled
        },
        '& .MuiChip-icon': {
          color: (vars?.palette || palette).action.disabled
        }
      },
      '&:focus-visible:not(.Mui-disabled)': {
        backgroundColor: isDefault || isSecondary ? alpha(palette.common.inverseBlack, 0.1) : color.lighter,
        borderColor: 'transparent',
        outline: `1.5px solid ${getFocusBorderColor()}`,
        outlineOffset: '-2px',
        '& .MuiChip-deleteIcon': {
          color: getIconColor(true)
        },
        '& .MuiChip-icon': {
          color: getIconColor()
        }
      },
      '&.MuiChip-clickable': {
        '&:hover': {
          backgroundColor: isDefault || isSecondary ? alpha(palette.common.inverseBlack, 0.1) : color.main8p,
          borderColor: getHoverBorderColor()
        }
      }
    };
  };
  return {
    styleOverrides: {
      root: () => ({
        lineHeight: '0.75rem',
        height: 'auto',
        '& .MuiAvatar-root, & .MuiChip-deleteIcon, & .MuiChip-icon': {
          width: 16,
          height: 16,
          margin: 0
        },
        '& .MuiAvatar-root, & .MuiChip-icon': {
          marginLeft: spacing(-0.25),
          marginRight: spacing(0.5)
        },
        '& .MuiChip-deleteIcon': {
          marginLeft: spacing(0.5),
          marginRight: spacing(-0.25)
        }
      }),
      label: {
        padding: 0,
        overflow: 'visible',
        ...typography.chipLabel
      },
      labelLarge: {
        ...typography.chipLabel2
      },
      sizeSmall: {
        padding: spacing(0.25, 0.75)
      },
      sizeMedium: {
        padding: spacing(0.75, 1)
      },
      sizeLarge: {
        padding: spacing(0.75, 1)
      },
      // filled
      filledPrimary: getFilledVariant((vars?.palette || palette).primary, 'primary'),
      filledSecondary: getFilledVariant((vars?.palette || palette).secondary, 'secondary'),
      filledDefault: getFilledVariant((vars?.palette || palette).default, 'default'),
      filledInfo: getFilledVariant((vars?.palette || palette).info, 'info'),
      filledWarning: getFilledVariant((vars?.palette || palette).warning, 'warning'),
      filledError: getFilledVariant((vars?.palette || palette).error, 'error'),
      filledSuccess: getFilledVariant((vars?.palette || palette).success, 'success'),
      // outlined
      outlinedPrimary: getOutlinedVariant((vars?.palette || palette).primary, 'primary'),
      outlinedSecondary: getOutlinedVariant((vars?.palette || palette).secondary, 'secondary'),
      outlinedDefault: getOutlinedVariant((vars?.palette || palette).default, 'default'),
      outlinedInfo: getOutlinedVariant((vars?.palette || palette).info, 'info'),
      outlinedWarning: getOutlinedVariant((vars?.palette || palette).warning, 'warning'),
      outlinedError: getOutlinedVariant((vars?.palette || palette).error, 'error'),
      outlinedSuccess: getOutlinedVariant((vars?.palette || palette).success, 'success')
    },
    defaultProps: {
      size: 'small'
    }
  };
};
Object.assign(__ds_scope, { MuiChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/Chip/Chip.theme.ts", error: String((e && e.message) || e) }); }

// packages/library/components/Menu/Menu.theme.ts
try { (() => {
const MuiMenu = ({
  spacing,
  palette,
  vars,
  elevation,
  ...rest
}) => ({
  styleOverrides: {
    root: {
      ...__ds_scope.MuiMenuPopoverOverrides({
        spacing,
        palette,
        vars,
        elevation,
        ...rest
      }).root,
      '& .MuiListSubheader-root': {
        backgroundColor: (vars?.palette || palette).background.modalElevation
      },
      '& .MuiTextField-root': {
        width: '100%'
      }
    }
  },
  defaultProps: {
    MenuListProps: {
      dense: true
    }
  }
});
Object.assign(__ds_scope, { MuiMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/Menu/Menu.theme.ts", error: String((e && e.message) || e) }); }

// packages/library/components/Switch/Switch.theme.ts
try { (() => {
const MuiSwitch = ({
  palette,
  vars,
  spacing,
  transitions
}) => {
  const getVariantColorStyles = color => ({
    '&:hover': {
      '&+.MuiSwitch-track': {
        borderColor: (vars?.palette || palette).action.active
      }
    },
    '&.Mui-checked': {
      '.MuiSwitch-thumb': {
        backgroundColor: (vars?.palette || palette).common.white
      },
      '&+.MuiSwitch-track': {
        borderColor: color.dark
      },
      '&:hover': {
        '&+.MuiSwitch-track': {
          borderColor: color.main50p,
          backgroundColor: color.main50p
        }
      },
      '&.Mui-disabled': {
        '& > .MuiSwitch-thumb': {
          backgroundColor: color.main50p
        },
        '&+.MuiSwitch-track': {
          borderColor: color.main50p,
          backgroundColor: color.main8p
        }
      }
    },
    '&.Mui-disabled': {
      '& > .MuiSwitch-thumb': {
        backgroundColor: (vars?.palette || palette).action.disabled
      },
      '&+.MuiSwitch-track': {
        opacity: 1,
        borderColor: (vars?.palette || palette).action.outlinedBorder,
        backgroundColor: (vars?.palette || palette).action.disabledBackground
      }
    },
    '&.Mui-focusVisible': {
      '& + .MuiSwitch-track': {
        borderColor: (vars?.palette || palette).action.active
      },
      '&.Mui-checked + .MuiSwitch-track': {
        borderColor: color.main50p,
        backgroundColor: color.main50p
      }
    }
  });
  return {
    styleOverrides: {
      root: {
        padding: 0,
        width: 40,
        height: 24
      },
      sizeSmall: {
        width: spacing(4.5),
        height: spacing(2.5),
        '& > .MuiSwitch-switchBase': {
          padding: 0,
          '.MuiSwitch-thumb': {
            width: spacing(2),
            height: spacing(2)
          }
        }
      },
      switchBase: {
        padding: 0,
        margin: spacing(0.25),
        transitionDuration: `${transitions.duration.standard}ms`,
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: spacing(2.5),
          height: spacing(2.5),
          backgroundColor: (vars?.palette || palette).action.active,
          transition: transitions.create(['background-color', 'border-color'], {
            duration: transitions.duration.standard,
            easing: 'cubic-bezier(1,-0.01,.83,.67)'
          })
        },
        '&.Mui-checked': {
          transform: `translateX(${spacing(2)})`,
          '&.Mui-checked+.MuiSwitch-track': {
            opacity: 1
          }
        }
      },
      track: {
        opacity: 1,
        border: `1px solid ${(vars?.palette || palette).action.outlinedBorder}`,
        borderRadius: 100,
        backgroundColor: (vars?.palette || palette).action.hover,
        transition: transitions.create(['background-color'], {
          // this will result in 500ms, or if standard transition is changed, similar ratio
          duration: transitions.duration.standard * 1.6667
        })
      },
      colorPrimary: getVariantColorStyles((vars?.palette || palette).primary),
      colorDefault: getVariantColorStyles((vars?.palette || palette).default),
      colorSecondary: getVariantColorStyles((vars?.palette || palette).secondary),
      colorInfo: getVariantColorStyles((vars?.palette || palette).info),
      colorSuccess: getVariantColorStyles((vars?.palette || palette).success),
      colorWarning: getVariantColorStyles((vars?.palette || palette).warning),
      colorError: getVariantColorStyles((vars?.palette || palette).error)
    },
    defaultProps: {
      disableRipple: true
    }
  };
};
Object.assign(__ds_scope, { MuiSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/Switch/Switch.theme.ts", error: String((e && e.message) || e) }); }

// packages/library/components/Tabs/Tabs.theme.ts
try { (() => {
const MuiTabs = ({
  spacing,
  palette,
  vars
}) => ({
  styleOverrides: {
    root: {
      marginBottom: spacing(3),
      '.Mui-focusVisible': {
        backgroundColor: (vars?.palette || palette).action.focus
      }
    }
  }
});
Object.assign(__ds_scope, { MuiTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/Tabs/Tabs.theme.ts", error: String((e && e.message) || e) }); }

// packages/library/components/Tooltip/Tooltip.theme.ts
try { (() => {
const MuiTooltip = ({
  elevation,
  palette,
  vars,
  typography
}) => ({
  styleOverrides: {
    tooltip: {
      color: (vars?.palette || palette).text.primary,
      backgroundColor: (vars?.palette || palette).background.modalElevation,
      boxShadow: elevation.md,
      border: `1px solid ${(vars?.palette || palette).dividerElevation0}`,
      borderRadius: 8,
      ...typography.body2
    },
    arrow: {
      '&::before': {
        border: `1px solid ${(vars?.palette || palette).dividerElevation0}`,
        backgroundColor: (vars?.palette || palette).background.modalElevation
      }
    }
  }
});
Object.assign(__ds_scope, { MuiTooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/Tooltip/Tooltip.theme.ts", error: String((e && e.message) || e) }); }

// packages/library/components/icons/brands/Unity.tsx
try { (() => {
try {
  void __ds_scope.createThemedSvgIcon({
    props: {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      style: {
        fill: 'none'
      }
    },
    iconLight: /*#__PURE__*/React.createElement("path", {
      d: "m 12.8497 1 v 3.9324 l 3.4868 2.0108 c 0.0279 0.0167 0.0501 0.0446 0.0668 0.0724 c 0.0223 0.0278 0.0279 0.0613 0.0279 0.0947 c 0 0.0334 -0.0056 0.0668 -0.0279 0.1003 c -0.0167 0.0278 -0.039 0.0501 -0.0668 0.0724 l -4.1441 2.384 c -0.0557 0.039 -0.1281 0.0557 -0.195 0.0557 c -0.0668 0 -0.1337 -0.0167 -0.195 -0.0557 l -4.1441 -2.384 c -0.0279 -0.0167 -0.0501 -0.0446 -0.0668 -0.0724 c -0.0167 -0.0279 -0.0279 -0.0613 -0.0279 -0.0947 c 0 -0.0334 0.0111 -0.0668 0.0279 -0.1003 c 0.0167 -0.0279 0.039 -0.0501 0.0668 -0.0724 l 3.4868 -2.0052 v -3.938 l -8.8953 5.13 v 10.2544 l 3.4144 -1.9662 v -4.0215 c 0 -0.0334 0.0056 -0.0668 0.0223 -0.0947 c 0.0167 -0.0279 0.0446 -0.0501 0.0724 -0.0724 c 0.0278 -0.0167 0.0613 -0.0223 0.1003 -0.0223 c 0.0334 0 0.0668 0.0056 0.0947 0.0223 l 4.1441 2.3895 c 0.0613 0.0334 0.1114 0.0836 0.1448 0.1448 c 0.0334 0.0557 0.0501 0.1225 0.0501 0.1949 v 4.7735 c 0 0.0334 -0.0056 0.0668 -0.0278 0.1003 c -0.0167 0.0279 -0.039 0.0557 -0.0668 0.0724 c -0.0334 0.0167 -0.0668 0.0223 -0.1003 0.0223 c -0.0334 0 -0.0668 -0.0056 -0.0947 -0.0223 l -3.4868 -2.0108 l -3.4144 1.9662 l 8.8953 5.13 l 8.8953 -5.13 l -3.4144 -1.9662 l -3.4868 2.0108 c -0.0278 0.0167 -0.0613 0.0223 -0.0947 0.0223 c -0.0334 0 -0.0668 -0.0111 -0.0947 -0.0279 c -0.0334 -0.0167 -0.0557 -0.039 -0.0724 -0.0668 c -0.0167 -0.0334 -0.0279 -0.0668 -0.0279 -0.1003 v -4.7735 c 0 -0.0724 0.0167 -0.1393 0.0501 -0.1949 c 0.039 -0.0613 0.0836 -0.1114 0.1448 -0.1448 l 4.1441 -2.3895 c 0.0278 -0.0167 0.0613 -0.0223 0.0947 -0.0223 c 0.0334 0 0.0668 0.0056 0.1003 0.0223 c 0.0278 0.0223 0.0501 0.0446 0.0668 0.0724 c 0.0223 0.0279 0.0279 0.0613 0.0279 0.1003 v 4.016 l 3.4144 1.9662 v -10.2544 l -8.8953 -5.13 z",
      fill: "white"
    }),
    iconDark: /*#__PURE__*/React.createElement("path", {
      d: "m 12.8497 1 v 3.9324 l 3.4868 2.0108 c 0.0279 0.0167 0.0501 0.0446 0.0668 0.0724 c 0.0223 0.0278 0.0279 0.0613 0.0279 0.0947 c 0 0.0334 -0.0056 0.0668 -0.0279 0.1003 c -0.0167 0.0278 -0.039 0.0501 -0.0668 0.0724 l -4.1441 2.384 c -0.0557 0.039 -0.1281 0.0557 -0.195 0.0557 c -0.0668 0 -0.1337 -0.0167 -0.195 -0.0557 l -4.1441 -2.384 c -0.0279 -0.0167 -0.0501 -0.0446 -0.0668 -0.0724 c -0.0167 -0.0279 -0.0279 -0.0613 -0.0279 -0.0947 c 0 -0.0334 0.0111 -0.0668 0.0279 -0.1003 c 0.0167 -0.0279 0.039 -0.0501 0.0668 -0.0724 l 3.4868 -2.0052 v -3.938 l -8.8953 5.13 v 10.2544 l 3.4144 -1.9662 v -4.0215 c 0 -0.0334 0.0056 -0.0668 0.0223 -0.0947 c 0.0167 -0.0279 0.0446 -0.0501 0.0724 -0.0724 c 0.0278 -0.0167 0.0613 -0.0223 0.1003 -0.0223 c 0.0334 0 0.0668 0.0056 0.0947 0.0223 l 4.1441 2.3895 c 0.0613 0.0334 0.1114 0.0836 0.1448 0.1448 c 0.0334 0.0557 0.0501 0.1225 0.0501 0.1949 v 4.7735 c 0 0.0334 -0.0056 0.0668 -0.0278 0.1003 c -0.0167 0.0279 -0.039 0.0557 -0.0668 0.0724 c -0.0334 0.0167 -0.0668 0.0223 -0.1003 0.0223 c -0.0334 0 -0.0668 -0.0056 -0.0947 -0.0223 l -3.4868 -2.0108 l -3.4144 1.9662 l 8.8953 5.13 l 8.8953 -5.13 l -3.4144 -1.9662 l -3.4868 2.0108 c -0.0278 0.0167 -0.0613 0.0223 -0.0947 0.0223 c -0.0334 0 -0.0668 -0.0111 -0.0947 -0.0279 c -0.0334 -0.0167 -0.0557 -0.039 -0.0724 -0.0668 c -0.0167 -0.0334 -0.0279 -0.0668 -0.0279 -0.1003 v -4.7735 c 0 -0.0724 0.0167 -0.1393 0.0501 -0.1949 c 0.039 -0.0613 0.0836 -0.1114 0.1448 -0.1448 l 4.1441 -2.3895 c 0.0278 -0.0167 0.0613 -0.0223 0.0947 -0.0223 c 0.0334 0 0.0668 0.0056 0.1003 0.0223 c 0.0278 0.0223 0.0501 0.0446 0.0668 0.0724 c 0.0223 0.0279 0.0279 0.0613 0.0279 0.1003 v 4.016 l 3.4144 1.9662 v -10.2544 l -8.8953 -5.13 z",
      fill: "black"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/brands/Unity.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/brands/UnityColor.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      style: {
        fill: 'none'
      }
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "m 12.8497 1 v 3.9324 l 3.4868 2.0108 c 0.0279 0.0167 0.0501 0.0446 0.0668 0.0724 c 0.0223 0.0278 0.0279 0.0613 0.0279 0.0947 c 0 0.0334 -0.0056 0.0668 -0.0279 0.1003 c -0.0167 0.0278 -0.039 0.0501 -0.0668 0.0724 l -4.1441 2.384 c -0.0557 0.039 -0.1281 0.0557 -0.195 0.0557 c -0.0668 0 -0.1337 -0.0167 -0.195 -0.0557 l -4.1441 -2.384 c -0.0279 -0.0167 -0.0501 -0.0446 -0.0668 -0.0724 c -0.0167 -0.0279 -0.0279 -0.0613 -0.0279 -0.0947 c 0 -0.0334 0.0111 -0.0668 0.0279 -0.1003 c 0.0167 -0.0279 0.039 -0.0501 0.0668 -0.0724 l 3.4868 -2.0052 v -3.938 l -8.8953 5.13 v 10.2544 l 3.4144 -1.9662 v -4.0215 c 0 -0.0334 0.0056 -0.0668 0.0223 -0.0947 c 0.0167 -0.0279 0.0446 -0.0501 0.0724 -0.0724 c 0.0278 -0.0167 0.0613 -0.0223 0.1003 -0.0223 c 0.0334 0 0.0668 0.0056 0.0947 0.0223 l 4.1441 2.3895 c 0.0613 0.0334 0.1114 0.0836 0.1448 0.1448 c 0.0334 0.0557 0.0501 0.1225 0.0501 0.1949 v 4.7735 c 0 0.0334 -0.0056 0.0668 -0.0278 0.1003 c -0.0167 0.0279 -0.039 0.0557 -0.0668 0.0724 c -0.0334 0.0167 -0.0668 0.0223 -0.1003 0.0223 c -0.0334 0 -0.0668 -0.0056 -0.0947 -0.0223 l -3.4868 -2.0108 l -3.4144 1.9662 l 8.8953 5.13 l 8.8953 -5.13 l -3.4144 -1.9662 l -3.4868 2.0108 c -0.0278 0.0167 -0.0613 0.0223 -0.0947 0.0223 c -0.0334 0 -0.0668 -0.0111 -0.0947 -0.0279 c -0.0334 -0.0167 -0.0557 -0.039 -0.0724 -0.0668 c -0.0167 -0.0334 -0.0279 -0.0668 -0.0279 -0.1003 v -4.7735 c 0 -0.0724 0.0167 -0.1393 0.0501 -0.1949 c 0.039 -0.0613 0.0836 -0.1114 0.1448 -0.1448 l 4.1441 -2.3895 c 0.0278 -0.0167 0.0613 -0.0223 0.0947 -0.0223 c 0.0334 0 0.0668 0.0056 0.1003 0.0223 c 0.0278 0.0223 0.0501 0.0446 0.0668 0.0724 c 0.0223 0.0279 0.0279 0.0613 0.0279 0.1003 v 4.016 l 3.4144 1.9662 v -10.2544 l -8.8953 -5.13 z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/brands/UnityColor.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/brands/UnityGrow.tsx
try { (() => {
try {
  void __ds_scope.createThemedSvgIcon({
    props: {
      width: '75',
      height: '25',
      viewBox: '0 0 75 25',
      style: {
        fill: 'none'
      }
    },
    iconLight: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M6.51144 6.41227L8.65198 7.64452C8.72931 7.68679 8.73181 7.80865 8.65198 7.85093L6.10728 9.3157C6.02994 9.36046 5.93888 9.35673 5.86778 9.3157L3.32308 7.85093C3.24574 7.80865 3.24324 7.68679 3.32308 7.64452L5.46362 6.41227V4L0 7.14466V13.434L2.09563 12.2278V9.76334C2.09439 9.67505 2.19792 9.61288 2.27526 9.66013L4.81996 11.1249C4.8973 11.1697 4.93971 11.2492 4.93971 11.3326V14.2609C4.9422 14.3491 4.83742 14.4113 4.76133 14.3653L2.61954 13.1331L0.523909 14.3392L5.98753 17.4838L11.4511 14.3392L9.35551 13.1331L7.21497 14.3653C7.13888 14.4113 7.03285 14.3516 7.03534 14.2621V11.3326C7.03534 11.2443 7.08399 11.1672 7.15509 11.1261L9.69979 9.66137C9.77588 9.61537 9.88191 9.67381 9.87942 9.76458V12.2278L11.9751 13.434V7.14466L6.51144 4V6.41227Z",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27.0909 9.1875C26.9716 8.77273 26.804 8.40625 26.5881 8.08807C26.3722 7.7642 26.108 7.49148 25.7955 7.26989C25.4886 7.04261 25.1364 6.86932 24.7386 6.75C24.3466 6.63068 23.9119 6.57102 23.4347 6.57102C22.5426 6.57102 21.7585 6.79261 21.0824 7.23579C20.4119 7.67898 19.8892 8.32386 19.5142 9.17045C19.1392 10.0114 18.9517 11.0398 18.9517 12.2557C18.9517 13.4716 19.1364 14.5057 19.5057 15.358C19.875 16.2102 20.3977 16.8608 21.0739 17.3097C21.75 17.7528 22.5483 17.9744 23.4688 17.9744C24.304 17.9744 25.017 17.8267 25.608 17.5312C26.2045 17.2301 26.6591 16.8068 26.9716 16.2614C27.2898 15.7159 27.4489 15.071 27.4489 14.3267L28.1989 14.4375H23.6989V11.6591H31.0028V13.858C31.0028 15.392 30.679 16.7102 30.0312 17.8125C29.3835 18.9091 28.4915 19.7557 27.3551 20.3523C26.2188 20.9432 24.9176 21.2386 23.4517 21.2386C21.8153 21.2386 20.3778 20.8778 19.1392 20.1562C17.9006 19.429 16.9347 18.3977 16.2415 17.0625C15.554 15.7216 15.2102 14.1307 15.2102 12.2898C15.2102 10.875 15.4148 9.61364 15.8239 8.50568C16.2386 7.39205 16.8182 6.44886 17.5625 5.67614C18.3068 4.90341 19.1733 4.31534 20.1619 3.91193C21.1506 3.50852 22.2216 3.30682 23.375 3.30682C24.3636 3.30682 25.2841 3.4517 26.1364 3.74148C26.9886 4.02557 27.7443 4.42898 28.4034 4.9517C29.0682 5.47443 29.6108 6.09659 30.0312 6.81818C30.4517 7.53409 30.7216 8.32386 30.8409 9.1875H27.0909ZM32.9867 21V7.90909H36.5066V10.1932H36.6429C36.8816 9.38068 37.2821 8.76705 37.8446 8.35227C38.4071 7.93182 39.0549 7.72159 39.7878 7.72159C39.9696 7.72159 40.1657 7.73295 40.3759 7.75568C40.5861 7.77841 40.7708 7.80966 40.9299 7.84943V11.071C40.7594 11.0199 40.5236 10.9744 40.2225 10.9347C39.9213 10.8949 39.6458 10.875 39.3958 10.875C38.8617 10.875 38.3844 10.9915 37.9639 11.2244C37.5492 11.4517 37.2196 11.7699 36.9753 12.179C36.7367 12.5881 36.6174 13.0597 36.6174 13.5938V21H32.9867ZM47.3924 21.2557C46.0685 21.2557 44.9236 20.9744 43.9577 20.4119C42.9975 19.8437 42.256 19.054 41.7333 18.0426C41.2106 17.0256 40.9492 15.8466 40.9492 14.5057C40.9492 13.1534 41.2106 11.9716 41.7333 10.9602C42.256 9.94318 42.9975 9.15341 43.9577 8.59091C44.9236 8.02273 46.0685 7.73864 47.3924 7.73864C48.7162 7.73864 49.8583 8.02273 50.8185 8.59091C51.7844 9.15341 52.5287 9.94318 53.0515 10.9602C53.5742 11.9716 53.8356 13.1534 53.8356 14.5057C53.8356 15.8466 53.5742 17.0256 53.0515 18.0426C52.5287 19.054 51.7844 19.8437 50.8185 20.4119C49.8583 20.9744 48.7162 21.2557 47.3924 21.2557ZM47.4094 18.4432C48.0117 18.4432 48.5145 18.2727 48.918 17.9318C49.3214 17.5852 49.6253 17.1136 49.8299 16.517C50.0401 15.9205 50.1452 15.2415 50.1452 14.4801C50.1452 13.7188 50.0401 13.0398 49.8299 12.4432C49.6253 11.8466 49.3214 11.375 48.918 11.0284C48.5145 10.6818 48.0117 10.5085 47.4094 10.5085C46.8015 10.5085 46.2901 10.6818 45.8753 11.0284C45.4662 11.375 45.1566 11.8466 44.9464 12.4432C44.7418 13.0398 44.6395 13.7188 44.6395 14.4801C44.6395 15.2415 44.7418 15.9205 44.9464 16.517C45.1566 17.1136 45.4662 17.5852 45.8753 17.9318C46.2901 18.2727 46.8015 18.4432 47.4094 18.4432ZM57.7306 21L54.1681 7.90909H57.8414L59.8698 16.7045H59.9891L62.1028 7.90909H65.7079L67.8556 16.6534H67.9664L69.9607 7.90909H73.6255L70.0715 21H66.2278L63.9778 12.767H63.8159L61.5659 21H57.7306Z",
      fill: "white"
    })),
    iconDark: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M6.51144 6.41227L8.65198 7.64452C8.72931 7.68679 8.73181 7.80865 8.65198 7.85093L6.10728 9.3157C6.02994 9.36046 5.93888 9.35673 5.86778 9.3157L3.32308 7.85093C3.24574 7.80865 3.24324 7.68679 3.32308 7.64452L5.46362 6.41227V4L0 7.14466V13.434L2.09563 12.2278V9.76334C2.09439 9.67505 2.19792 9.61288 2.27526 9.66013L4.81996 11.1249C4.8973 11.1697 4.93971 11.2492 4.93971 11.3326V14.2609C4.9422 14.3491 4.83742 14.4113 4.76133 14.3653L2.61954 13.1331L0.523909 14.3392L5.98753 17.4838L11.4511 14.3392L9.35551 13.1331L7.21497 14.3653C7.13888 14.4113 7.03285 14.3516 7.03534 14.2621V11.3326C7.03534 11.2443 7.08399 11.1672 7.15509 11.1261L9.69979 9.66137C9.77588 9.61537 9.88191 9.67381 9.87942 9.76458V12.2278L11.9751 13.434V7.14466L6.51144 4V6.41227Z",
      fill: "black"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M27.0909 9.1875C26.9716 8.77273 26.804 8.40625 26.5881 8.08807C26.3722 7.7642 26.108 7.49148 25.7955 7.26989C25.4886 7.04261 25.1364 6.86932 24.7386 6.75C24.3466 6.63068 23.9119 6.57102 23.4347 6.57102C22.5426 6.57102 21.7585 6.79261 21.0824 7.23579C20.4119 7.67898 19.8892 8.32386 19.5142 9.17045C19.1392 10.0114 18.9517 11.0398 18.9517 12.2557C18.9517 13.4716 19.1364 14.5057 19.5057 15.358C19.875 16.2102 20.3977 16.8608 21.0739 17.3097C21.75 17.7528 22.5483 17.9744 23.4688 17.9744C24.304 17.9744 25.017 17.8267 25.608 17.5312C26.2045 17.2301 26.6591 16.8068 26.9716 16.2614C27.2898 15.7159 27.4489 15.071 27.4489 14.3267L28.1989 14.4375H23.6989V11.6591H31.0028V13.858C31.0028 15.392 30.679 16.7102 30.0312 17.8125C29.3835 18.9091 28.4915 19.7557 27.3551 20.3523C26.2188 20.9432 24.9176 21.2386 23.4517 21.2386C21.8153 21.2386 20.3778 20.8778 19.1392 20.1562C17.9006 19.429 16.9347 18.3977 16.2415 17.0625C15.554 15.7216 15.2102 14.1307 15.2102 12.2898C15.2102 10.875 15.4148 9.61364 15.8239 8.50568C16.2386 7.39205 16.8182 6.44886 17.5625 5.67614C18.3068 4.90341 19.1733 4.31534 20.1619 3.91193C21.1506 3.50852 22.2216 3.30682 23.375 3.30682C24.3636 3.30682 25.2841 3.4517 26.1364 3.74148C26.9886 4.02557 27.7443 4.42898 28.4034 4.9517C29.0682 5.47443 29.6108 6.09659 30.0312 6.81818C30.4517 7.53409 30.7216 8.32386 30.8409 9.1875H27.0909ZM32.9867 21V7.90909H36.5066V10.1932H36.6429C36.8816 9.38068 37.2821 8.76705 37.8446 8.35227C38.4071 7.93182 39.0549 7.72159 39.7878 7.72159C39.9696 7.72159 40.1657 7.73295 40.3759 7.75568C40.5861 7.77841 40.7708 7.80966 40.9299 7.84943V11.071C40.7594 11.0199 40.5236 10.9744 40.2225 10.9347C39.9213 10.8949 39.6458 10.875 39.3958 10.875C38.8617 10.875 38.3844 10.9915 37.9639 11.2244C37.5492 11.4517 37.2196 11.7699 36.9753 12.179C36.7367 12.5881 36.6174 13.0597 36.6174 13.5938V21H32.9867ZM47.3924 21.2557C46.0685 21.2557 44.9236 20.9744 43.9577 20.4119C42.9975 19.8437 42.256 19.054 41.7333 18.0426C41.2106 17.0256 40.9492 15.8466 40.9492 14.5057C40.9492 13.1534 41.2106 11.9716 41.7333 10.9602C42.256 9.94318 42.9975 9.15341 43.9577 8.59091C44.9236 8.02273 46.0685 7.73864 47.3924 7.73864C48.7162 7.73864 49.8583 8.02273 50.8185 8.59091C51.7844 9.15341 52.5287 9.94318 53.0515 10.9602C53.5742 11.9716 53.8356 13.1534 53.8356 14.5057C53.8356 15.8466 53.5742 17.0256 53.0515 18.0426C52.5287 19.054 51.7844 19.8437 50.8185 20.4119C49.8583 20.9744 48.7162 21.2557 47.3924 21.2557ZM47.4094 18.4432C48.0117 18.4432 48.5145 18.2727 48.918 17.9318C49.3214 17.5852 49.6253 17.1136 49.8299 16.517C50.0401 15.9205 50.1452 15.2415 50.1452 14.4801C50.1452 13.7188 50.0401 13.0398 49.8299 12.4432C49.6253 11.8466 49.3214 11.375 48.918 11.0284C48.5145 10.6818 48.0117 10.5085 47.4094 10.5085C46.8015 10.5085 46.2901 10.6818 45.8753 11.0284C45.4662 11.375 45.1566 11.8466 44.9464 12.4432C44.7418 13.0398 44.6395 13.7188 44.6395 14.4801C44.6395 15.2415 44.7418 15.9205 44.9464 16.517C45.1566 17.1136 45.4662 17.5852 45.8753 17.9318C46.2901 18.2727 46.8015 18.4432 47.4094 18.4432ZM57.7306 21L54.1681 7.90909H57.8414L59.8698 16.7045H59.9891L62.1028 7.90909H65.7079L67.8556 16.6534H67.9664L69.9607 7.90909H73.6255L70.0715 21H66.2278L63.9778 12.767H63.8159L61.5659 21H57.7306Z",
      fill: "black"
    }))
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/brands/UnityGrow.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/brands/UnityName.tsx
try { (() => {
try {
  void __ds_scope.createThemedSvgIcon({
    props: {
      width: '375.56',
      height: '185.88',
      viewBox: '0 0 375.56 185.88',
      style: {
        fill: 'none'
      }
    },
    iconLight: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M180.01 97.42c0 4.55-2.53 7.79-7.86 7.79-5.65 0-7.99-3.05-7.99-7.6v-27.8h-11.5v27.41c0 10.85 6.49 17.21 19.48 17.21 12.92 0 19.35-6.49 19.35-17.21v-27.4h-11.5v27.6zm37.55-18.05c-4.61 0-7.79 1.95-10.26 5.52h-.2v-4.55h-10.2v33.25h10.59V95.22c0-4.09 2.34-7.01 5.84-7.01 3.44 0 5.2 2.4 5.2 5.91v19.48h10.59V91.97c0-7.4-4.29-12.6-11.56-12.6m17-12.21h10.59v8.58h-10.59zm0 13.18h10.59v33.25h-10.59zm29.24-10.52h-10.33v10.52h-4.42v8.58h4.42v15.91c0 7.14 4.42 9.16 10.59 9.16 2.86 0 4.87-.26 5.78-.52v-7.73c-.39 0-1.43.07-2.34.07-2.27 0-3.7-.65-3.7-3.25V88.92h6.04v-8.58h-6.04zm28.58 24.68c-1.04 3.25-1.95 7.66-1.95 7.66h-.13s-1.04-4.42-2.08-7.66l-4.48-14.16h-11.17l9.81 25.59c1.36 3.51 2.01 5.46 2.01 6.88 0 2.27-1.23 3.51-4.35 3.51h-3.64v8.25h6.88c6.69 0 9.87-2.73 12.53-10.52l11.5-33.71h-10.59zM91.14 61.91l15.3 8.83c.55.31.57 1.17 0 1.48l-18.18 10.5c-.55.32-1.2.3-1.71 0l-18.18-10.5c-.56-.3-.57-1.18 0-1.48l15.29-8.83V44.62L44.62 67.16v45.08-.21.21l14.97-8.64V85.94c-.01-.63.73-1.08 1.28-.74l18.18 10.5c.55.32.86.89.86 1.48v20.99c.01.63-.73 1.08-1.28.74l-15.3-8.83-14.97 8.64 39.04 22.54 39.04-22.54-14.97-8.64-15.3 8.83c-.54.33-1.3-.1-1.28-.74V97.18c0-.63.35-1.19.86-1.48l18.18-10.5c.54-.33 1.3.09 1.28.74v17.66l14.97 8.64V67.16L91.14 44.62zm238.93 23.6a8.5 8.5 0 0 0-4.52-4.52q-1.53-.66-3.3-.66c-1.77 0-2.27.22-3.3.66s-1.93 1.04-2.7 1.82-1.38 1.68-1.82 2.7a8.3 8.3 0 0 0-.66 3.3q0 1.755.66 3.3c.44 1.03 1.04 1.93 1.82 2.7s1.68 1.38 2.7 1.82c1.03.44 2.12.66 3.3.66s2.27-.22 3.3-.66a8.4 8.4 0 0 0 2.7-1.82c.78-.78 1.38-1.68 1.82-2.7.44-1.03.66-2.12.66-3.3q0-1.755-.66-3.3m-2.25 6.54c-.58.98-1.36 1.75-2.33 2.33-.98.58-2.06.87-3.25.87q-1.785 0-3.24-.87a6.7 6.7 0 0 1-2.33-2.33c-.58-.97-.87-2.06-.87-3.24q0-1.785.87-3.24c.58-.98 1.36-1.75 2.33-2.33s2.06-.87 3.24-.87c1.19 0 2.27.29 3.25.87.97.58 1.75 1.36 2.33 2.33s.87 2.06.87 3.24q0 1.785-.87 3.24",
      fill: "white"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M325.22 88.76c.28-.4.42-.88.42-1.46 0-.56-.13-1.03-.4-1.4-.26-.37-.59-.65-.96-.83s-.72-.27-1.04-.27h-3.96v7.82H321v-2.65h1.7l1.37 2.65h1.89l-1.61-3.05c.33-.19.63-.45.87-.81m-1.88-.41c-.27.23-.52.35-.76.35h-1.59v-2.63h1.63c.21 0 .44.08.72.26.27.17.41.5.41.97s-.13.82-.41 1.05",
      fill: "white"
    })),
    iconDark: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M180.01 97.42c0 4.55-2.53 7.79-7.86 7.79-5.65 0-7.99-3.05-7.99-7.6v-27.8h-11.5v27.41c0 10.85 6.49 17.21 19.48 17.21 12.92 0 19.35-6.49 19.35-17.21v-27.4h-11.5v27.6zm37.55-18.05c-4.61 0-7.79 1.95-10.26 5.52h-.2v-4.55h-10.2v33.25h10.59V95.22c0-4.09 2.34-7.01 5.84-7.01 3.44 0 5.2 2.4 5.2 5.91v19.48h10.59V91.97c0-7.4-4.29-12.6-11.56-12.6m17-12.21h10.59v8.58h-10.59zm0 13.18h10.59v33.25h-10.59zm29.24-10.52h-10.33v10.52h-4.42v8.58h4.42v15.91c0 7.14 4.42 9.16 10.59 9.16 2.86 0 4.87-.26 5.78-.52v-7.73c-.39 0-1.43.07-2.34.07-2.27 0-3.7-.65-3.7-3.25V88.92h6.04v-8.58h-6.04zm28.58 24.68c-1.04 3.25-1.95 7.66-1.95 7.66h-.13s-1.04-4.42-2.08-7.66l-4.48-14.16h-11.17l9.81 25.59c1.36 3.51 2.01 5.46 2.01 6.88 0 2.27-1.23 3.51-4.35 3.51h-3.64v8.25h6.88c6.69 0 9.87-2.73 12.53-10.52l11.5-33.71h-10.59zM91.14 61.91l15.3 8.83c.55.31.57 1.17 0 1.48l-18.18 10.5c-.55.32-1.2.3-1.71 0l-18.18-10.5c-.56-.3-.57-1.18 0-1.48l15.29-8.83V44.62L44.62 67.16v45.08-.21.21l14.97-8.64V85.94c-.01-.63.73-1.08 1.28-.74l18.18 10.5c.55.32.86.89.86 1.48v20.99c.01.63-.73 1.08-1.28.74l-15.3-8.83-14.97 8.64 39.04 22.54 39.04-22.54-14.97-8.64-15.3 8.83c-.54.33-1.3-.1-1.28-.74V97.18c0-.63.35-1.19.86-1.48l18.18-10.5c.54-.33 1.3.09 1.28.74v17.66l14.97 8.64V67.16L91.14 44.62zm238.93 23.6a8.5 8.5 0 0 0-4.52-4.52q-1.53-.66-3.3-.66c-1.77 0-2.27.22-3.3.66s-1.93 1.04-2.7 1.82-1.38 1.68-1.82 2.7a8.3 8.3 0 0 0-.66 3.3q0 1.755.66 3.3c.44 1.03 1.04 1.93 1.82 2.7s1.68 1.38 2.7 1.82c1.03.44 2.12.66 3.3.66s2.27-.22 3.3-.66a8.4 8.4 0 0 0 2.7-1.82c.78-.78 1.38-1.68 1.82-2.7.44-1.03.66-2.12.66-3.3q0-1.755-.66-3.3m-2.25 6.54c-.58.98-1.36 1.75-2.33 2.33-.98.58-2.06.87-3.25.87q-1.785 0-3.24-.87a6.7 6.7 0 0 1-2.33-2.33c-.58-.97-.87-2.06-.87-3.24q0-1.785.87-3.24c.58-.98 1.36-1.75 2.33-2.33s2.06-.87 3.24-.87c1.19 0 2.27.29 3.25.87.97.58 1.75 1.36 2.33 2.33s.87 2.06.87 3.24q0 1.785-.87 3.24",
      fill: "black"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M325.22 88.76c.28-.4.42-.88.42-1.46 0-.56-.13-1.03-.4-1.4-.26-.37-.59-.65-.96-.83s-.72-.27-1.04-.27h-3.96v7.82H321v-2.65h1.7l1.37 2.65h1.89l-1.61-3.05c.33-.19.63-.45.87-.81m-1.88-.41c-.27.23-.52.35-.76.35h-1.59v-2.63h1.63c.21 0 .44.08.72.26.27.17.41.5.41.97s-.13.82-.41 1.05",
      fill: "black"
    }))
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/brands/UnityName.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/Analytics.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M28 25H27L27 5C27 4.73478 26.8946 4.48043 26.7071 4.29289C26.5196 4.10536 26.2652 4 26 4L19 4C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5V10L12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11V16L6 16C5.73478 16 5.48043 16.1054 5.29289 16.2929C5.10536 16.4804 5 16.7348 5 17L5 25H4C3.73478 25 3.48043 25.1054 3.29289 25.2929C3.10536 25.4804 3 25.7348 3 26C3 26.2652 3.10536 26.5196 3.29289 26.7071C3.48043 26.8946 3.73478 27 4 27L28 27C28.2652 27 28.5196 26.8946 28.7071 26.7071C28.8946 26.5196 29 26.2652 29 26C29 25.7348 28.8946 25.4804 28.7071 25.2929C28.5196 25.1054 28.2652 25 28 25ZM20 6L25 6L25 25H20L20 6ZM13 12L18 12L18 25L13 25L13 12ZM7 18H11L11 25H7L7 18Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/Analytics.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/AssetManager.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M14.5215 13.3875C14.914 13.7791 15.4458 13.999 16.0002 13.999C16.5547 13.999 17.0865 13.7791 17.479 13.3875L21.3877 9.4775C21.5819 9.28341 21.7359 9.05298 21.841 8.79936C21.9461 8.54574 22.0002 8.2739 22.0002 7.99937C22.0002 7.72485 21.9461 7.45301 21.841 7.19939C21.7359 6.94577 21.5819 6.71533 21.3877 6.52125L17.479 2.61125C17.0865 2.21967 16.5547 1.99976 16.0002 1.99976C15.4458 1.99976 14.914 2.21967 14.5215 2.61125L10.6127 6.52125C10.4186 6.71533 10.2646 6.94577 10.1595 7.19939C10.0544 7.45301 10.0003 7.72485 10.0003 7.99937C10.0003 8.2739 10.0544 8.54574 10.1595 8.79936C10.2646 9.05298 10.4186 9.28341 10.6127 9.4775L14.5215 13.3875ZM12.0215 7.935L15.9315 4.02625C15.9481 4.00976 15.9706 4.00051 15.994 4.00051C16.0174 4.00051 16.0399 4.00976 16.0565 4.02625L19.9665 7.935C19.9821 7.95206 19.9908 7.97436 19.9908 7.9975C19.9908 8.02064 19.9821 8.04294 19.9665 8.06L16.064 11.9737C16.0472 11.9899 16.0248 11.999 16.0015 11.999C15.9782 11.999 15.9558 11.9899 15.939 11.9737L12.0265 8.06375C12.0098 8.04649 12.0004 8.0234 12.0004 7.99937C12.0004 7.97534 12.0098 7.95225 12.0265 7.935H12.0215ZM29.384 14.5212L25.479 10.6112C25.0867 10.2197 24.5551 9.99986 24.0009 9.99986C23.4466 9.99986 22.915 10.2197 22.5227 10.6112L18.6127 14.5212C18.2212 14.9138 18.0012 15.4456 18.0012 16C18.0012 16.5544 18.2212 17.0862 18.6127 17.4787L22.5227 21.3887C22.915 21.7803 23.4466 22.0001 24.0009 22.0001C24.5551 22.0001 25.0867 21.7803 25.479 21.3887L29.389 17.4787C29.7806 17.0862 30.0005 16.5544 30.0005 16C30.0005 15.4456 29.7806 14.9138 29.389 14.5212H29.384ZM27.9752 16.0637L24.0652 19.9737C24.0482 19.9894 24.0259 19.9981 24.0027 19.9981C23.9796 19.9981 23.9573 19.9894 23.9402 19.9737L20.0302 16.0637C20.0141 16.047 20.005 16.0246 20.005 16.0012C20.005 15.9779 20.0141 15.9555 20.0302 15.9387L23.9402 12.0287C23.9573 12.0131 23.9796 12.0044 24.0027 12.0044C24.0259 12.0044 24.0482 12.0131 24.0652 12.0287L27.9752 15.9387C27.9914 15.9555 28.0005 15.9779 28.0005 16.0012C28.0005 16.0246 27.9914 16.047 27.9752 16.0637ZM13.3877 14.5212L9.47774 10.6112C9.08544 10.2197 8.55385 9.99986 7.99962 9.99986C7.44538 9.99986 6.91379 10.2197 6.52149 10.6112L2.61149 14.5212C2.21991 14.9138 2 15.4456 2 16C2 16.5544 2.21991 17.0862 2.61149 17.4787L6.52149 21.3887C6.91379 21.7803 7.44538 22.0001 7.99962 22.0001C8.55385 22.0001 9.08544 21.7803 9.47774 21.3887L13.3877 17.4787C13.7793 17.0862 13.9992 16.5544 13.9992 16C13.9992 15.4456 13.7793 14.9138 13.3877 14.5212ZM11.974 16.0637L8.06399 19.9737C8.04693 19.9894 8.02463 19.9981 8.00149 19.9981C7.97835 19.9981 7.95605 19.9894 7.93899 19.9737L4.02524 16.0637C4.00905 16.047 4 16.0246 4 16.0012C4 15.9779 4.00905 15.9555 4.02524 15.9387L7.93524 12.0262C7.9523 12.0106 7.9746 12.0019 7.99774 12.0019C8.02088 12.0019 8.04318 12.0106 8.06024 12.0262L11.9702 15.9362C11.9789 15.9444 11.9858 15.9541 11.9907 15.9649C11.9956 15.9757 11.9983 15.9874 11.9986 15.9992C11.999 16.0111 11.997 16.0229 11.9927 16.0339C11.9885 16.045 11.9821 16.0551 11.974 16.0637ZM17.474 18.6125C17.0815 18.2209 16.5497 18.001 15.9952 18.001C15.4408 18.001 14.909 18.2209 14.5165 18.6125L10.6127 22.5225C10.4186 22.7166 10.2646 22.947 10.1595 23.2006C10.0544 23.4543 10.0003 23.7261 10.0003 24.0006C10.0003 24.2752 10.0544 24.547 10.1595 24.8006C10.2646 25.0542 10.4186 25.2847 10.6127 25.4787L14.5215 29.3887C14.914 29.7803 15.4458 30.0002 16.0002 30.0002C16.5547 30.0002 17.0865 29.7803 17.479 29.3887L21.3877 25.4787C21.5819 25.2847 21.7359 25.0542 21.841 24.8006C21.9461 24.547 22.0002 24.2752 22.0002 24.0006C22.0002 23.7261 21.9461 23.4543 21.841 23.2006C21.7359 22.947 21.5819 22.7166 21.3877 22.5225L17.474 18.6125ZM19.974 24.065L16.064 27.9737C16.0474 27.9902 16.0249 27.9995 16.0015 27.9995C15.9781 27.9995 15.9556 27.9902 15.939 27.9737L12.0265 24.065C12.0109 24.0479 12.0022 24.0256 12.0022 24.0025C12.0022 23.9794 12.0109 23.9571 12.0265 23.94L15.9365 20.03C15.9533 20.0138 15.9757 20.0048 15.999 20.0048C16.0223 20.0048 16.0447 20.0138 16.0615 20.03L19.9715 23.94C19.9875 23.9567 19.9966 23.9789 19.9971 24.002C19.9975 24.0252 19.9893 24.0476 19.974 24.065Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/AssetManager.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/CloudCode.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M23.457 18.2812C23.8536 17.8969 24.4867 17.9082 24.8711 18.3047L29.7188 23.3047C30.0938 23.6923 30.0938 24.3077 29.7188 24.6953L24.8711 29.6953C24.4867 30.0918 23.8536 30.1031 23.457 29.7188C23.0607 29.3345 23.0516 28.7013 23.4355 28.3047L27.6055 24L23.4355 19.6953C23.0516 19.2987 23.0607 18.6655 23.457 18.2812Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.7051 18.2676C12.1098 17.8921 12.7415 17.9157 13.1172 18.3203C13.4927 18.725 13.4691 19.3567 13.0645 19.7324L8.4668 24L13.0645 28.2676C13.4691 28.6433 13.4927 29.275 13.1172 29.6797C12.7415 30.0843 12.1098 30.1079 11.7051 29.7324L6.32031 24.7324C6.11655 24.5432 6 24.2781 6 24C6 23.7219 6.11655 23.4568 6.32031 23.2676L11.7051 18.2676Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.5742 18.0273C20.1119 18.1535 20.4464 18.6908 20.3203 19.2285L17.9727 29.2285C17.8464 29.766 17.3091 30.0988 16.7715 29.9727C16.234 29.8464 15.9012 29.3091 16.0273 28.7715L18.373 18.7715C18.4993 18.234 19.0366 17.9013 19.5742 18.0273Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 2C25.5228 2 30 6.47715 30 12C30 14.4173 29.1425 16.6344 27.7148 18.3633L26.3086 16.9121C27.3661 15.5559 28 13.853 28 12C28 7.58172 24.4183 4 20 4C15.5817 4 12 7.58172 12 12C12 12.3012 12.0166 12.5987 12.0488 12.8906C12.1092 13.4394 11.7128 13.9335 11.1641 13.9941C10.6154 14.0544 10.1212 13.6581 10.0605 13.1094C10.0203 12.7448 10 12.3746 10 12C10 11.3652 10.0607 10.7445 10.1738 10.1426C9.79764 10.0521 9.40535 10 9 10C6.23858 10 4 12.2386 4 15C4 17.1427 5.35013 18.9642 7.24414 19.6758L5.6582 21.1504C3.47941 19.964 2 17.6554 2 15C2 11.134 5.13401 8 9 8C9.59999 8 10.1832 8.07615 10.7402 8.21875C12.2315 4.57064 15.8153 2 20 2Z",
      fill: "currentColor"
    }))
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/CloudCode.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/CloudContent.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M26.877 6.02539C27.6031 6.14226 28.2168 6.65319 28.4551 7.36719L29.8965 11.6914C29.9644 11.8952 30 12.1094 30 12.3242V22L29.9902 22.2051C29.8944 23.1459 29.1459 23.8944 28.2051 23.9902L28 24H26C26 26.2091 24.2091 28 22 28C19.7909 28 18 26.2091 18 24H14C14 26.2091 12.2091 28 10 28C7.79086 28 6 26.2091 6 24H4C2.89543 24 2 23.1046 2 22V18C2 16.8954 2.89543 16 4 16H20V8C20 6.89543 20.8954 6 22 6H26.5586L26.877 6.02539ZM10 22C8.89543 22 8 22.8954 8 24C8 25.1046 8.89543 26 10 26C11.1046 26 12 25.1046 12 24C12 22.8954 11.1046 22 10 22ZM22 22C20.8954 22 20 22.8954 20 24C20 25.1046 20.8954 26 22 26C23.1046 26 24 25.1046 24 24C24 22.8954 23.1046 22 22 22ZM22 20C23.4804 20 24.7722 20.8046 25.4639 22H28V14H22V20ZM4 22H6.53613C7.22781 20.8046 8.51962 20 10 20C11.4804 20 12.7722 20.8046 13.4639 22H18.5361C18.8873 21.3931 19.3931 20.8873 20 20.5361V18H4V22ZM22 12H27.8916L26.5586 8H22V12Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14H6C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6C6.11456 6 6.22772 6.00814 6.33984 6.01758C7.15894 3.67877 9.38154 2 12 2Z",
      fill: "currentColor"
    }))
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/CloudContent.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/CloudSave.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M30.9999 16C31.0062 18.3815 30.2336 20.6997 28.7999 22.6013C28.7209 22.7063 28.6221 22.7948 28.5089 22.8617C28.3958 22.9285 28.2705 22.9724 28.1404 22.9909C28.0103 23.0093 27.8778 23.002 27.7505 22.9692C27.6233 22.9365 27.5037 22.879 27.3986 22.8C27.2936 22.7211 27.2051 22.6222 27.1383 22.5091C27.0714 22.3959 27.0275 22.2707 27.0091 22.1406C26.9906 22.0105 26.9979 21.878 27.0307 21.7507C27.0634 21.6234 27.1209 21.5038 27.1999 21.3988C28.3734 19.8441 29.0056 17.9479 28.9999 16C28.9999 13.6131 28.0517 11.3239 26.3638 9.63607C24.676 7.94825 22.3868 7.00004 19.9999 7.00004C17.6129 7.00004 15.3238 7.94825 13.6359 9.63607C11.9481 11.3239 10.9999 13.6131 10.9999 16C10.9999 16.2653 10.8945 16.5196 10.707 16.7071C10.5195 16.8947 10.2651 17 9.99988 17C9.73467 17 9.48031 16.8947 9.29278 16.7071C9.10524 16.5196 8.99988 16.2653 8.99988 16C8.9994 14.9909 9.13778 13.9865 9.41113 13.015C9.27489 13 9.13738 13 8.99988 13C7.40859 13 5.88246 13.6322 4.75724 14.7574C3.63203 15.8826 2.99988 17.4087 2.99988 19C2.99988 20.5913 3.63203 22.1175 4.75724 23.2427C5.88246 24.3679 7.40859 25 8.99988 25H11.9999C12.2651 25 12.5195 25.1054 12.707 25.2929C12.8945 25.4805 12.9999 25.7348 12.9999 26C12.9999 26.2653 12.8945 26.5196 12.707 26.7071C12.5195 26.8947 12.2651 27 11.9999 27H8.99988C7.9001 27.0003 6.81208 26.7738 5.80377 26.3347C4.79546 25.8955 3.88853 25.2532 3.1396 24.4478C2.39068 23.6425 1.81585 22.6913 1.45103 21.6538C1.08621 20.6163 0.939225 19.5147 1.01926 18.4179C1.09929 17.321 1.40462 16.2524 1.91619 15.2788C2.42775 14.3053 3.13455 13.4477 3.99245 12.7595C4.85035 12.0714 5.84092 11.5675 6.90229 11.2794C7.96366 10.9913 9.07304 10.9251 10.1611 11.085C11.2691 8.86898 13.0928 7.09188 15.3368 6.04158C17.5808 4.99127 20.1136 4.72928 22.525 5.29804C24.9365 5.8668 27.0853 7.233 28.6234 9.17535C30.1616 11.1177 30.9989 13.5224 30.9999 16ZM19.7074 15.2925C19.6145 15.1996 19.5042 15.1258 19.3828 15.0755C19.2614 15.0252 19.1313 14.9992 18.9999 14.9992C18.8685 14.9992 18.7383 15.0252 18.6169 15.0755C18.4955 15.1258 18.3853 15.1996 18.2924 15.2925L14.2924 19.2925C14.1995 19.3854 14.1258 19.4957 14.0755 19.6171C14.0252 19.7385 13.9993 19.8686 13.9993 20C13.9993 20.1314 14.0252 20.2615 14.0755 20.3829C14.1258 20.5043 14.1995 20.6146 14.2924 20.7075C14.48 20.8952 14.7345 21.0006 14.9999 21.0006C15.1313 21.0006 15.2614 20.9747 15.3828 20.9244C15.5042 20.8741 15.6145 20.8004 15.7074 20.7075L17.9999 18.4138V26C17.9999 26.2653 18.1052 26.5196 18.2928 26.7071C18.4803 26.8947 18.7347 27 18.9999 27C19.2651 27 19.5195 26.8947 19.707 26.7071C19.8945 26.5196 19.9999 26.2653 19.9999 26V18.4138L22.2924 20.7075C22.3853 20.8004 22.4956 20.8741 22.617 20.9244C22.7384 20.9747 22.8685 21.0006 22.9999 21.0006C23.1313 21.0006 23.2614 20.9747 23.3828 20.9244C23.5042 20.8741 23.6145 20.8004 23.7074 20.7075C23.8003 20.6146 23.874 20.5043 23.9243 20.3829C23.9746 20.2615 24.0004 20.1314 24.0004 20C24.0004 19.8686 23.9746 19.7385 23.9243 19.6171C23.874 19.4957 23.8003 19.3854 23.7074 19.2925L19.7074 15.2925Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/CloudSave.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/DevOps.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20.4589 9.8601C20.5322 9.76835 20.583 9.66065 20.6071 9.54569C20.6312 9.43073 20.6279 9.31171 20.5976 9.19823C20.3683 8.33629 20.0253 7.50871 19.5776 6.73729C19.519 6.63634 19.4376 6.55046 19.34 6.4865C19.2423 6.42254 19.1311 6.38225 19.0151 6.36885L16.7914 6.12135C16.6989 6.02385 16.6051 5.9301 16.5101 5.8401L16.2476 3.61073C16.2341 3.49468 16.1937 3.38338 16.1295 3.28572C16.0654 3.18806 15.9794 3.10674 15.8782 3.04823C15.1065 2.60136 14.279 2.2587 13.4173 2.02916C13.3037 1.99897 13.1847 1.99589 13.0697 2.02015C12.9547 2.04441 12.8471 2.09535 12.7554 2.16885L11.0126 3.5601H10.6076L8.8601 2.16416C8.76835 2.09082 8.66065 2.04006 8.54569 2.01596C8.43073 1.99186 8.31171 1.9951 8.19823 2.02541C7.33643 2.25513 6.5089 2.59812 5.73729 3.04541C5.63634 3.10403 5.55046 3.18541 5.4865 3.28306C5.42254 3.38071 5.38225 3.49195 5.36885 3.60791L5.12135 5.83541C5.02385 5.92854 4.9301 6.02229 4.8401 6.11666L2.61073 6.3726C2.49468 6.3861 2.38338 6.42653 2.28572 6.49066C2.18806 6.55479 2.10674 6.64085 2.04823 6.74198C1.60136 7.51369 1.2587 8.3412 1.02916 9.20291C0.998973 9.31647 0.995886 9.43553 1.02015 9.55049C1.04441 9.66546 1.09535 9.77312 1.16885 9.86479L2.5601 11.6076V12.0126L1.16416 13.7601C1.09082 13.8519 1.04006 13.9595 1.01596 14.0745C0.991856 14.1895 0.995095 14.3085 1.02541 14.422C1.25472 15.2839 1.59773 16.1115 2.04541 16.8829C2.10403 16.9839 2.18541 17.0697 2.28306 17.1337C2.38071 17.1977 2.49195 17.238 2.60791 17.2514L4.83166 17.4989C4.92479 17.5964 5.01854 17.6901 5.11291 17.7801L5.3726 20.0095C5.3861 20.1255 5.42653 20.2368 5.49066 20.3345C5.55479 20.4321 5.64085 20.5135 5.74198 20.572C6.51369 21.0188 7.3412 21.3615 8.20291 21.591C8.31647 21.6212 8.43553 21.6243 8.55049 21.6001L8.22729 20.0414C7.74216 19.8887 7.27156 19.6932 6.82104 19.4573L6.58104 17.3414C6.56056 17.1568 6.47237 16.9865 6.33354 16.8632C6.13058 16.6828 5.93837 16.4906 5.75791 16.2876C5.63466 16.1488 5.4643 16.0606 5.27979 16.0401L3.16291 15.8039C2.92684 15.3534 2.73138 14.8828 2.57885 14.3976L3.90916 12.7345C4.02533 12.5894 4.08346 12.4063 4.07229 12.2207C4.05635 11.9497 4.05635 11.678 4.07229 11.407C4.08346 11.2214 4.02533 11.0383 3.90916 10.8932L2.57885 9.22729C2.7315 8.74216 2.92696 8.27156 3.16291 7.82104L5.27885 7.58104C5.46337 7.56056 5.63373 7.47237 5.75698 7.33354C5.93744 7.13058 6.12964 6.93837 6.3326 6.75791C6.47199 6.63458 6.56053 6.46383 6.58104 6.27885L6.81635 4.16291C7.26682 3.92684 7.73743 3.73138 8.2226 3.57885L9.88573 4.90916C10.0308 5.02533 10.2139 5.08346 10.3995 5.07229C10.6705 5.05635 10.9422 5.05635 11.2132 5.07229C11.3988 5.08346 11.5819 5.02533 11.727 4.90916L13.3929 3.57885C13.878 3.7315 14.3486 3.92696 14.7992 4.16291L15.0392 6.27885C15.0596 6.46337 15.1478 6.63373 15.2867 6.75698C15.4896 6.93744 15.6818 7.12964 15.8623 7.3326C15.9855 7.47143 16.1559 7.55962 16.3404 7.5801L18.4573 7.81541C18.6934 8.26589 18.8888 8.7365 19.0414 9.22166L17.711 10.8848C17.5938 11.0311 17.5356 11.2161 17.5479 11.4032H17.5507C17.5591 11.5454 17.5631 11.6877 17.5627 11.8301C17.5627 11.8301 18.0113 11.6665 18.3101 11.6076C18.6227 11.546 19.1223 11.5299 19.1223 11.5299L20.4589 9.8601Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.6787 14.3748C18.0238 14.4735 18.2236 14.8334 18.125 15.1785L16.125 22.1785C16.0264 22.5236 15.6664 22.7234 15.3213 22.6248C14.9762 22.5261 14.7764 22.1662 14.875 21.8211L16.875 14.8211C16.9737 14.476 17.3336 14.2762 17.6787 14.3748Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.5313 14.5453C20.2798 14.2518 19.8385 14.2177 19.545 14.4691C19.2515 14.7207 19.2174 15.1619 19.4688 15.4555L22.0792 18.5004L19.4688 21.5453C19.2174 21.8388 19.2515 22.2801 19.545 22.5316C19.8385 22.7831 20.2798 22.7489 20.5313 22.4555L23.5313 18.9555C23.7558 18.6934 23.7558 18.3074 23.5313 18.0453L20.5313 14.5453Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12.4687 14.5453C12.7202 14.2518 13.1615 14.2177 13.455 14.4691C13.7485 14.7207 13.7826 15.1619 13.5312 15.4555L10.9208 18.5004L13.5312 21.5453C13.7826 21.8388 13.7485 22.2801 13.455 22.5316C13.1615 22.7831 12.7202 22.7489 12.4687 22.4555L9.46868 18.9555C9.24417 18.6934 9.24417 18.3074 9.46868 18.0453L12.4687 14.5453Z",
      fill: "currentColor"
    }))
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/DevOps.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/Economy.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M17.25 7.64719V7.125C17.25 4.77375 13.7034 3 9 3C4.29656 3 0.75 4.77375 0.75 7.125V10.875C0.75 12.8334 3.21094 14.3897 6.75 14.8556V15.375C6.75 17.7262 10.2966 19.5 15 19.5C19.7034 19.5 23.25 17.7262 23.25 15.375V11.625C23.25 9.68437 20.8669 8.12625 17.25 7.64719ZM21.75 11.625C21.75 12.8644 18.8634 14.25 15 14.25C14.6503 14.25 14.3034 14.2378 13.9613 14.2153C15.9834 13.4784 17.25 12.2812 17.25 10.875V9.16313C20.0503 9.58031 21.75 10.7128 21.75 11.625ZM6.75 13.3359V11.1056C7.49604 11.2028 8.24765 11.2511 9 11.25C9.75235 11.2511 10.504 11.2028 11.25 11.1056V13.3359C10.5051 13.446 9.75302 13.5008 9 13.5C8.24698 13.5008 7.49493 13.446 6.75 13.3359ZM15.75 9.55594V10.875C15.75 11.6616 14.5866 12.5062 12.75 13.0191V10.8281C13.9603 10.5347 14.985 10.0978 15.75 9.55594ZM9 4.5C12.8634 4.5 15.75 5.88562 15.75 7.125C15.75 8.36438 12.8634 9.75 9 9.75C5.13656 9.75 2.25 8.36438 2.25 7.125C2.25 5.88562 5.13656 4.5 9 4.5ZM2.25 10.875V9.55594C3.015 10.0978 4.03969 10.5347 5.25 10.8281V13.0191C3.41344 12.5062 2.25 11.6616 2.25 10.875ZM8.25 15.375V14.9841C8.49656 14.9934 8.74594 15 9 15C9.36375 15 9.71906 14.9878 10.0678 14.9672C10.4552 15.1059 10.8499 15.2236 11.25 15.3197V17.5191C9.41344 17.0062 8.25 16.1616 8.25 15.375ZM12.75 17.8359V15.6C13.4958 15.7003 14.2475 15.7504 15 15.75C15.7523 15.7511 16.504 15.7028 17.25 15.6056V17.8359C15.758 18.0547 14.242 18.0547 12.75 17.8359ZM18.75 17.5191V15.3281C19.9603 15.0347 20.985 14.5978 21.75 14.0559V15.375C21.75 16.1616 20.5866 17.0062 18.75 17.5191Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/Economy.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/Friends.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.0002 2C21.9295 2 23.5393 3.36607 23.9163 5.18359C26.8543 2.24754 31.5492 6.03742 29.342 9.51758L26.0159 15.5508V26.7891C26.0154 30.2856 21.5578 31.0873 20.0178 28.5723C19.1454 29.9989 17.3339 30.3583 15.928 29.7656C15.9338 29.7681 15.9398 29.771 15.9456 29.7734C15.6774 29.8801 15.3986 29.9534 15.1194 29.9863C14.4075 30.0699 13.6155 29.9246 12.9338 29.457C12.5742 29.2101 12.2758 28.8955 12.051 28.5312C11.7987 28.924 11.4648 29.2546 11.0588 29.4961C10.3513 29.9165 9.58301 29.9948 8.96508 29.9297C8.34693 29.8643 7.69785 29.6391 7.15649 29.2305C6.6194 28.8246 6.00041 28.0734 6.00024 27V16.5293L2.65844 10.6836C2.29769 10.0521 1.88013 9.05199 2.06469 7.89062L2.13696 7.54102C2.23069 7.17112 2.39955 6.74821 2.70923 6.3457C3.13881 5.78774 3.71891 5.42651 4.35766 5.22461L4.65844 5.14258C6.14584 4.81419 7.40999 5.56751 8.07055 6.0957L10.6213 8.13477C10.23 7.51663 10.0002 6.78571 10.0002 6C10.0002 3.79094 11.7912 2.00013 14.0002 2C15.1963 2 16.2672 2.52733 17.0002 3.35938C17.7332 2.52724 18.8042 2.00007 20.0002 2ZM27.6018 8.53125C28.6606 7.00777 26.5539 5.296 25.2795 6.64453L22.0764 10H12.7288L12.4514 10.0215C11.1226 10.2504 10.7328 12.1055 12.0002 12.8105L16.0159 15.0371V26.7891L16.0413 27.0605C16.2707 28.2521 18.002 28.3984 18.428 27.2617L18.4983 27L19.5159 21H20.5159L21.5334 26.998C21.7911 28.5074 24.0153 28.3199 24.0159 26.7891V15.0371L27.6018 8.53125ZM6.82251 7.6582C6.29065 7.2329 5.60857 6.92579 4.95923 7.13086C4.33364 7.32887 4.11468 7.73204 4.0393 8.20508C3.95758 8.71995 4.13621 9.23867 4.39477 9.69141L8.00024 16V27C8.00092 27.9996 10.285 28.5086 10.5432 27L11.5608 21H12.5608L13.5784 27L13.6487 27.2617C13.7568 27.5524 13.9509 27.753 14.1799 27.873C14.0761 27.5469 14.0159 27.1853 14.0159 26.7891V16.2148L11.0315 14.5586C9.17318 13.5259 8.83583 11.435 9.61352 9.89062L6.82251 7.6582ZM14.0002 4C12.8958 4.00013 12.0002 4.89551 12.0002 6C12.0002 7.10449 12.8958 7.99987 14.0002 8C15.1048 8 16.0002 7.10457 16.0002 6C16.0002 4.89543 15.1048 4 14.0002 4ZM20.0002 4C18.8958 4.00013 18.0002 4.89551 18.0002 6C18.0002 7.10449 18.8958 7.99987 20.0002 8C21.1048 8 22.0002 7.10457 22.0002 6C22.0002 4.89543 21.1048 4 20.0002 4Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/Friends.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/Leaderboard.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M10.5384 9.61219C10.5073 9.51874 10.4948 9.42008 10.5018 9.32183C10.5088 9.22357 10.5351 9.12766 10.5791 9.03956C10.6232 8.95146 10.6841 8.87289 10.7586 8.80836C10.833 8.74382 10.9194 8.69458 11.0128 8.66344L12.1378 8.28844C12.2506 8.25085 12.3706 8.2406 12.4881 8.25852C12.6056 8.27645 12.7171 8.32203 12.8135 8.39152C12.91 8.46102 12.9885 8.55243 13.0426 8.65822C13.0968 8.76401 13.125 8.88116 13.125 9V12.75C13.125 12.9489 13.046 13.1397 12.9053 13.2803C12.7647 13.421 12.5739 13.5 12.375 13.5C12.1761 13.5 11.9853 13.421 11.8447 13.2803C11.704 13.1397 11.625 12.9489 11.625 12.75V10.0406L11.4872 10.0866C11.3937 10.1177 11.2951 10.1302 11.1968 10.1232C11.0986 10.1162 11.0027 10.0899 10.9146 10.0459C10.8265 10.0018 10.7479 9.94086 10.6834 9.86645C10.6188 9.79203 10.5696 9.70564 10.5384 9.61219ZM23.25 19.5C23.25 19.6989 23.171 19.8897 23.0303 20.0303C22.8897 20.171 22.6989 20.25 22.5 20.25H1.5C1.30109 20.25 1.11032 20.171 0.96967 20.0303C0.829018 19.8897 0.75 19.6989 0.75 19.5C0.75 19.3011 0.829018 19.1103 0.96967 18.9697C1.11032 18.829 1.30109 18.75 1.5 18.75H2.25V9.75C2.25 9.35218 2.40804 8.97064 2.68934 8.68934C2.97064 8.40804 3.35218 8.25 3.75 8.25H7.5V5.25C7.5 4.85218 7.65804 4.47064 7.93934 4.18934C8.22064 3.90804 8.60218 3.75 9 3.75H15C15.3978 3.75 15.7794 3.90804 16.0607 4.18934C16.342 4.47064 16.5 4.85218 16.5 5.25V12H20.25C20.6478 12 21.0294 12.158 21.3107 12.4393C21.592 12.7206 21.75 13.1022 21.75 13.5V18.75H22.5C22.6989 18.75 22.8897 18.829 23.0303 18.9697C23.171 19.1103 23.25 19.3011 23.25 19.5ZM16.5 13.5V18.75H20.25V13.5H16.5ZM9 18.75H15V5.25H9V18.75ZM3.75 18.75H7.5V9.75H3.75V18.75Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/Leaderboard.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/Lobby.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.5 2C13.6421 2 17 5.35786 17 9.5C17 13.6421 13.6421 17 9.5 17C5.35786 17 2 13.6421 2 9.5C2 5.35786 5.35786 2 9.5 2ZM9 4.5C8.44772 4.5 8 4.94772 8 5.5V10C8 10.5523 8.44772 11 9 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10V5.5C10 4.94772 9.55228 4.5 9 4.5Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 10C25.3137 10 28 12.6863 28 16V16.5391C29.1947 17.2309 30 18.5201 30 20C30 21.4807 29.1935 22.7675 28 23.459V29C28 29.5523 27.5523 30 27 30H9C8.44772 30 8 29.5523 8 29V23.459C6.80654 22.7675 6 21.4807 6 20C6 19.4504 6.111 18.9269 6.31152 18.4502C6.95074 18.6779 7.62142 18.8375 8.31543 18.9238C8.11643 19.2347 8 19.6035 8 20C8 20.8693 8.55584 21.6117 9.33398 21.8867C9.73317 22.0282 10 22.4065 10 22.8301V28H26V22.8301C26 22.4065 26.2668 22.0282 26.666 21.8867C27.4442 21.6117 28 20.8693 28 20C28 18.8954 27.1046 18 26 18C24.8954 18 24 18.8954 24 20V24C24 24.5523 23.5523 25 23 25C22.4477 25 22 24.5523 22 24V22H14V24C14 24.5523 13.5523 25 13 25C12.4477 25 12 24.5523 12 24V20C12 19.5354 11.84 19.1091 11.5742 18.7695C12.2545 18.618 12.9068 18.3943 13.5234 18.1055C13.8273 18.6694 14 19.3145 14 20H22C22 17.7909 23.7909 16 26 16C26 13.7909 24.2091 12 22 12H18.665C18.8398 11.3577 18.9506 10.6888 18.9863 10H22Z",
      fill: "currentColor"
    }))
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/Lobby.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/Matchmaker.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 2C20.3715 2 25.5817 6.96581 25.9746 13.2383C25.3331 12.7949 24.614 12.4572 23.8418 12.2471C23.7023 11.463 23.4753 10.7098 23.165 10H19.6572C19.7878 10.7387 19.8818 11.5106 19.9385 12.3076C19.239 12.5228 18.587 12.8463 18 13.2559C17.995 13.2524 17.9903 13.2486 17.9854 13.2451C17.9459 12.092 17.819 11.0018 17.6221 10H10.3779C10.181 11.0018 10.0531 12.092 10.0137 13.2451C9.2206 13.7955 8.54714 14.5058 8.03906 15.3291C8.01442 14.8927 8 14.4493 8 14C8 12.5974 8.12164 11.2512 8.34277 10H4.83496C4.29948 11.2252 4 12.5774 4 14C4 14.6849 4.06902 15.3538 4.2002 16H7.6748C7.37937 16.6218 7.17331 17.2937 7.07227 18H4.83496C5.44362 19.3926 6.36194 20.6171 7.5 21.5928C7.67501 22.0291 7.89189 22.444 8.14648 22.832C7.75156 23.0819 7.3428 23.3725 6.94141 23.7021C3.94735 21.5201 2 17.9884 2 14C2 7.37258 7.37258 2 14 2ZM10.1709 4.75977C8.50557 5.45064 7.06703 6.57809 5.99902 8H8.80469C9.16226 6.76389 9.62453 5.66633 10.1709 4.75977ZM14 4C13.5089 4 12.5262 4.4501 11.5469 6.4082C11.3086 6.88479 11.0907 7.41818 10.8975 8H17.1025C16.9093 7.41818 16.6914 6.88479 16.4531 6.4082C15.4738 4.4501 14.4911 4 14 4ZM17.8281 4.75977C18.3746 5.66641 18.8377 6.76369 19.1953 8H22.001C20.9328 6.57785 19.4938 5.45061 17.8281 4.75977Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14.0002 14C14.9112 14.0001 15.7646 14.2451 16.5002 14.6709C15.5611 15.8623 15.0002 17.3653 15.0002 19C15.0002 20.4166 15.4245 21.7315 16.1467 22.832C14.6997 23.7476 13.064 25.2061 12.3029 27.1523L12.1623 27.5508C11.9061 28.3581 11.9562 29.2323 12.2961 30H7.33419C6.90586 29.9998 6.50269 29.7828 6.25216 29.418C6.00186 29.053 5.93316 28.583 6.06857 28.1562C6.54856 26.6456 7.8672 25.372 9.23263 24.5117C9.95897 24.0543 10.7762 23.6674 11.6213 23.3984C10.0603 22.5524 9.00021 20.9002 9.00021 19C9.00021 16.2386 11.2387 14 14.0002 14Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22.0001 14C24.7615 14.0001 27.0002 16.2386 27.0002 19C27.0002 20.9007 25.9388 22.5527 24.3771 23.3984C25.2229 23.6675 26.0409 24.0539 26.7678 24.5117C28.1334 25.372 29.452 26.6454 29.932 28.1562C30.0675 28.5831 29.9969 29.0529 29.7464 29.418C29.4958 29.7825 29.0945 30 28.6663 30H15.3339C14.9055 29.9998 14.5023 29.7829 14.2518 29.418C14.0015 29.053 13.9328 28.583 14.0682 28.1562C14.5482 26.6455 15.8669 25.372 17.2324 24.5117C17.9588 24.0542 18.7759 23.6675 19.6211 23.3984C18.0601 22.5524 16.9999 20.9002 16.9999 19C16.9999 16.2386 19.2386 14 22.0001 14Z",
      fill: "currentColor"
    }))
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/Matchmaker.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/PlayerManagement.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M17.9999 19.7091C19.5675 18.7328 20.7745 17.2724 21.4382 15.549C22.1019 13.8256 22.1863 11.9329 21.6786 10.1572C21.1708 8.38156 20.0986 6.81959 18.624 5.70761C17.1495 4.59563 15.3529 3.99414 13.5061 3.99414C11.6593 3.99414 9.86274 4.59563 8.38822 5.70761C6.91369 6.81959 5.84144 8.38156 5.33369 10.1572C4.82594 11.9329 4.91031 13.8256 5.57405 15.549C6.23778 17.2724 7.44476 18.7328 9.01238 19.7091C6.43113 20.5541 4.10863 22.1329 2.24113 24.3554C2.15363 24.4554 2.08695 24.5719 2.045 24.6981C2.00305 24.8242 1.98667 24.9574 1.99681 25.09C2.00695 25.2225 2.04341 25.3517 2.10406 25.47C2.16471 25.5882 2.24833 25.6932 2.35003 25.7788C2.45173 25.8644 2.56948 25.9288 2.69638 25.9684C2.82328 26.0079 2.95679 26.0218 3.08911 26.0091C3.22143 25.9965 3.34989 25.9576 3.467 25.8947C3.5841 25.8318 3.68749 25.7462 3.77113 25.6429C6.28113 22.6479 9.73863 20.9991 13.4999 20.9991C17.2611 20.9991 20.7186 22.6479 23.2336 25.6429C23.4044 25.8461 23.6488 25.9732 23.9133 25.9962C24.1777 26.0191 24.4404 25.9361 24.6436 25.7654C24.8469 25.5947 24.9739 25.3502 24.9969 25.0858C25.0199 24.8213 24.9369 24.5586 24.7661 24.3554C22.8974 22.1329 20.5749 20.5541 17.9999 19.7091ZM6.99988 12.4991C6.99988 11.2136 7.3811 9.95685 8.09533 8.88793C8.80956 7.81901 9.82472 6.98589 11.0124 6.49392C12.2002 6.00195 13.5071 5.87323 14.768 6.12404C16.0288 6.37484 17.187 6.9939 18.0961 7.90295C19.0051 8.81199 19.6242 9.97018 19.875 11.2311C20.1258 12.4919 19.9971 13.7989 19.5051 14.9866C19.0131 16.1743 18.18 17.1895 17.1111 17.9037C16.0422 18.6179 14.7855 18.9991 13.4999 18.9991C11.7766 18.9972 10.1244 18.3117 8.90588 17.0931C7.68732 15.8746 7.00186 14.2224 6.99988 12.4991ZM30.5311 17.8829L29.9486 17.5466C30.017 17.1848 30.017 16.8134 29.9486 16.4516L30.5311 16.1154C30.7609 15.9828 30.9285 15.7643 30.9972 15.5081C31.0659 15.2519 31.03 14.9789 30.8974 14.7491C30.7648 14.5194 30.5463 14.3517 30.2901 14.2831C30.0339 14.2144 29.7609 14.2503 29.5311 14.3829L28.9474 14.7204C28.668 14.4807 28.3468 14.2947 27.9999 14.1716V13.4991C27.9999 13.2339 27.8945 12.9796 27.707 12.792C27.5195 12.6045 27.2651 12.4991 26.9999 12.4991C26.7347 12.4991 26.4803 12.6045 26.2928 12.792C26.1052 12.9796 25.9999 13.2339 25.9999 13.4991V14.1716C25.653 14.2947 25.3317 14.4807 25.0524 14.7204L24.4686 14.3829C24.3549 14.3172 24.2293 14.2746 24.0991 14.2575C23.9688 14.2404 23.8365 14.249 23.7097 14.2831C23.5828 14.3171 23.4639 14.3757 23.3597 14.4557C23.2555 14.5357 23.168 14.6354 23.1024 14.7491C23.0367 14.8629 22.9941 14.9885 22.977 15.1187C22.9598 15.2489 22.9685 15.3812 23.0025 15.5081C23.0366 15.635 23.0952 15.7539 23.1752 15.8581C23.2552 15.9623 23.3549 16.0497 23.4686 16.1154L24.0511 16.4516C23.9828 16.8134 23.9828 17.1848 24.0511 17.5466L23.4686 17.8829C23.2389 18.0155 23.0712 18.2339 23.0025 18.4902C22.9339 18.7464 22.9698 19.0194 23.1024 19.2491C23.235 19.4789 23.4534 19.6465 23.7097 19.7152C23.9659 19.7839 24.2389 19.748 24.4686 19.6154L25.0524 19.2779C25.3317 19.5176 25.653 19.7036 25.9999 19.8266V20.4991C25.9999 20.7644 26.1052 21.0187 26.2928 21.2062C26.4803 21.3938 26.7347 21.4991 26.9999 21.4991C27.2651 21.4991 27.5195 21.3938 27.707 21.2062C27.8945 21.0187 27.9999 20.7644 27.9999 20.4991V19.8266C28.3468 19.7036 28.668 19.5176 28.9474 19.2779L29.5311 19.6154C29.683 19.7035 29.8556 19.7497 30.0311 19.7491C30.2513 19.7492 30.4654 19.6766 30.6401 19.5426C30.8149 19.4086 30.9405 19.2206 30.9975 19.0079C31.0544 18.7952 31.0396 18.5697 30.9553 18.3662C30.871 18.1628 30.7219 17.9929 30.5311 17.8829ZM25.9999 16.9991C25.9999 16.8014 26.0585 16.608 26.1684 16.4436C26.2783 16.2791 26.4345 16.1509 26.6172 16.0753C26.7999 15.9996 27.001 15.9798 27.195 16.0184C27.389 16.0569 27.5671 16.1522 27.707 16.292C27.8468 16.4319 27.9421 16.6101 27.9807 16.804C28.0193 16.998 27.9994 17.1991 27.9238 17.3818C27.8481 17.5645 27.7199 17.7207 27.5555 17.8306C27.391 17.9405 27.1977 17.9991 26.9999 17.9991C26.7347 17.9991 26.4803 17.8938 26.2928 17.7062C26.1052 17.5187 25.9999 17.2644 25.9999 16.9991Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/PlayerManagement.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/Relay.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M16.0003 11C15.0114 11 14.0447 11.2933 13.2225 11.8427C12.4002 12.3921 11.7594 13.173 11.3809 14.0866C11.0025 15.0002 10.9035 16.0056 11.0964 16.9755C11.2893 17.9454 11.7655 18.8363 12.4648 19.5355C13.164 20.2348 14.055 20.711 15.0249 20.9039C15.9948 21.0969 17.0001 20.9979 17.9137 20.6194C18.8274 20.241 19.6083 19.6001 20.1577 18.7779C20.7071 17.9556 21.0003 16.9889 21.0003 16C21.0003 14.6739 20.4735 13.4022 19.5358 12.4645C18.5982 11.5268 17.3264 11 16.0003 11ZM16.0003 19C15.407 19 14.8269 18.8241 14.3336 18.4944C13.8403 18.1648 13.4557 17.6962 13.2287 17.1481C13.0016 16.5999 12.9422 15.9967 13.058 15.4147C13.1737 14.8328 13.4594 14.2983 13.879 13.8787C14.2985 13.4591 14.8331 13.1734 15.415 13.0577C15.997 12.9419 16.6002 13.0013 17.1484 13.2284C17.6965 13.4554 18.1651 13.84 18.4947 14.3333C18.8244 14.8267 19.0003 15.4067 19.0003 16C19.0003 16.7957 18.6842 17.5587 18.1216 18.1213C17.559 18.6839 16.796 19 16.0003 19ZM25.2141 19.8925C24.7844 20.9082 24.1897 21.8459 23.4541 22.6675C23.2759 22.8603 23.0291 22.9753 22.767 22.9877C22.5048 23.0001 22.2483 22.9089 22.0527 22.7339C21.8571 22.5588 21.7382 22.3139 21.7217 22.052C21.7051 21.79 21.7921 21.5321 21.9641 21.3338C23.2771 19.8677 24.0032 17.9688 24.0032 16.0006C24.0032 14.0325 23.2771 12.1336 21.9641 10.6675C21.874 10.5701 21.8043 10.4557 21.7589 10.3311C21.7135 10.2064 21.6933 10.074 21.6996 9.94148C21.7059 9.80897 21.7384 9.67903 21.7954 9.55924C21.8524 9.43944 21.9327 9.33218 22.0315 9.2437C22.1303 9.15522 22.2458 9.08729 22.3712 9.04387C22.4965 9.00045 22.6292 8.98241 22.7616 8.99079C22.894 8.99917 23.0234 9.03382 23.1423 9.0927C23.2612 9.15158 23.3672 9.23353 23.4541 9.33376C24.7167 10.7467 25.5524 12.489 25.864 14.3581C26.1756 16.2272 25.9502 18.1464 25.2141 19.8925ZM8.62531 12.8863C8.03529 14.283 7.85433 15.8186 8.10352 17.3142C8.35271 18.8098 9.0218 20.2038 10.0328 21.3338C10.2047 21.5321 10.2918 21.79 10.2752 22.052C10.2586 22.3139 10.1397 22.5588 9.94417 22.7339C9.74861 22.9089 9.49207 23.0001 9.2299 22.9877C8.96773 22.9753 8.72095 22.8603 8.54281 22.6675C6.90104 20.835 5.99319 18.4611 5.99319 16.0006C5.99319 13.5402 6.90104 11.1663 8.54281 9.33376C8.71968 9.13568 8.96799 9.01597 9.23312 9.00097C9.49825 8.98596 9.75848 9.0769 9.95656 9.25376C10.1546 9.43063 10.2744 9.67894 10.2894 9.94407C10.3044 10.2092 10.2134 10.4694 10.0366 10.6675C9.44656 11.3239 8.96966 12.0737 8.62531 12.8863ZM31.0003 16C31.0064 19.9272 29.4667 23.699 26.7141 26.5C26.623 26.5974 26.5134 26.6756 26.3917 26.7299C26.2699 26.7843 26.1386 26.8138 26.0053 26.8167C25.872 26.8196 25.7395 26.7958 25.6155 26.7467C25.4916 26.6976 25.3787 26.6242 25.2835 26.5309C25.1884 26.4375 25.1128 26.3261 25.0613 26.2031C25.0098 26.0801 24.9834 25.9481 24.9837 25.8148C24.984 25.6815 25.0109 25.5496 25.063 25.4268C25.115 25.3041 25.191 25.193 25.2866 25.1C27.67 22.6717 29.0053 19.4051 29.0053 16.0025C29.0053 12.6 27.67 9.33331 25.2866 6.90501C25.1002 6.71572 24.9968 6.46016 24.9989 6.19456C25.001 5.92896 25.1085 5.67508 25.2978 5.48876C25.4871 5.30245 25.7427 5.19896 26.0083 5.20107C26.2739 5.20318 26.5277 5.31072 26.7141 5.50001C29.4667 8.30105 31.0064 12.0728 31.0003 16ZM6.71406 25.0975C6.80615 25.1912 6.87888 25.3022 6.92809 25.424C6.9773 25.5459 7.00203 25.6762 7.00087 25.8076C6.99971 25.939 6.97268 26.0689 6.92132 26.1898C6.86997 26.3108 6.79529 26.4204 6.70156 26.5125C6.60783 26.6046 6.49688 26.6773 6.37504 26.7265C6.2532 26.7758 6.12287 26.8005 5.99147 26.7993C5.86008 26.7982 5.7302 26.7711 5.60925 26.7198C5.4883 26.6684 5.37865 26.5937 5.28656 26.5C2.53429 23.6981 0.992188 19.9276 0.992188 16C0.992188 12.0725 2.53429 8.30192 5.28656 5.50001C5.37763 5.40265 5.48724 5.32448 5.60896 5.27009C5.73068 5.21571 5.86204 5.18621 5.99533 5.18334C6.12861 5.18046 6.26113 5.20427 6.38508 5.25335C6.50903 5.30244 6.62191 5.37581 6.71709 5.46916C6.81227 5.5625 6.88783 5.67394 6.93931 5.79691C6.9908 5.91988 7.01717 6.05191 7.01689 6.18522C7.01661 6.31854 6.98967 6.45045 6.93767 6.5732C6.88566 6.69596 6.80964 6.80707 6.71406 6.90001C4.33064 9.32831 2.99536 12.595 2.99536 15.9975C2.99536 19.4001 4.33064 22.6667 6.71406 25.095V25.0975Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/Relay.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/RemoteConfig.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M16 4.4138V16.0001C16 16.2653 15.8946 16.5196 15.7071 16.7072C15.5196 16.8947 15.2652 17.0001 15 17.0001C14.7348 17.0001 14.4804 16.8947 14.2929 16.7072C14.1054 16.5196 14 16.2653 14 16.0001L14 4.4138L11.7075 6.70755C11.6146 6.80046 11.5043 6.87417 11.3829 6.92445C11.2615 6.97473 11.1314 7.00061 11 7.00061C10.7346 7.00061 10.4801 6.8952 10.2925 6.70755C10.1996 6.61464 10.1259 6.50434 10.0756 6.38295C10.0253 6.26156 9.99944 6.13145 9.99944 6.00005C9.99944 5.73469 10.1049 5.4802 10.2925 5.29255L14.2925 1.29255C14.3854 1.19958 14.4957 1.12582 14.6171 1.07549C14.7385 1.02517 14.8686 0.999268 15 0.999268C15.1314 0.999268 15.2615 1.02517 15.3829 1.07549C15.5043 1.12582 15.6146 1.19958 15.7075 1.29255L19.7075 5.29255C19.8951 5.4802 20.0006 5.73469 20.0006 6.00005C20.0006 6.26542 19.8951 6.51991 19.7075 6.70755C19.5199 6.8952 19.2654 7.00061 19 7.00061C18.7346 7.00061 18.4801 6.8952 18.2925 6.70755L16 4.4138ZM24 15.4526L24 12.0001C24 11.4696 23.7893 10.9609 23.4142 10.5858C23.0391 10.2108 22.5304 10.0001 22 10.0001H20C19.7348 10.0001 19.4804 10.1054 19.2929 10.2929C19.1054 10.4805 19 10.7348 19 11.0001C19 11.2653 19.1054 11.5196 19.2929 11.7072C19.4804 11.8947 19.7348 12.0001 20 12.0001H22L22 22.0501C21.4036 21.4408 20.6055 21.0702 19.7552 21.0078C18.905 20.9454 18.0612 21.1954 17.3823 21.7109C16.7033 22.2265 16.2359 22.9721 16.0677 23.8078C15.8995 24.6436 16.0421 25.512 16.4688 26.2501L16.4988 26.2976L19.2813 30.5476C19.4265 30.7695 19.6539 30.9247 19.9135 30.979C20.1731 31.0332 20.4437 30.9821 20.6656 30.8369C20.8876 30.6917 21.0428 30.4643 21.097 30.2047C21.1513 29.9451 21.1002 29.6745 20.955 29.4526L18.1887 25.2288C17.9927 24.8825 17.9421 24.4725 18.0483 24.089C18.1545 23.7055 18.4087 23.3799 18.755 23.1838C19.1013 22.9877 19.5113 22.9372 19.8948 23.0434C20.2783 23.1496 20.6039 23.4038 20.8 23.7501C20.8087 23.7663 20.8188 23.7826 20.8288 23.7976L22.1637 25.8363C22.2818 26.0163 22.4547 26.1534 22.6568 26.2272C22.8589 26.3011 23.0795 26.3078 23.2857 26.2463C23.492 26.1848 23.6729 26.0584 23.8015 25.8859C23.9302 25.7134 23.9998 25.504 24 25.2888V18.0001C24.9426 18.8726 25.6954 19.9298 26.2115 21.106C26.7276 22.2821 26.996 23.5519 27 24.8363V30.0001C27 30.2653 27.1054 30.5196 27.2929 30.7072C27.4804 30.8947 27.7348 31.0001 28 31.0001C28.2652 31.0001 28.5196 30.8947 28.7071 30.7072C28.8946 30.5196 29 30.2653 29 30.0001V24.8313C28.9943 22.9788 28.5358 21.1559 27.6643 19.5212C26.7928 17.8865 25.5349 16.4898 24 15.4526ZM10 10.0001H8C7.46957 10.0001 6.96086 10.2108 6.58579 10.5858C6.21071 10.9609 6 11.4696 6 12.0001L6 25.0001C6 25.2653 6.10536 25.5196 6.29289 25.7072C6.48043 25.8947 6.73478 26.0001 7 26.0001C7.26522 26.0001 7.51957 25.8947 7.70711 25.7072C7.89464 25.5196 8 25.2653 8 25.0001L8 12.0001H10C10.2652 12.0001 10.5196 11.8947 10.7071 11.7072C10.8946 11.5196 11 11.2653 11 11.0001C11 10.7348 10.8946 10.4805 10.7071 10.2929C10.5196 10.1054 10.2652 10.0001 10 10.0001Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/RemoteConfig.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/Triggers.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M28.9999 17.082C28.7875 19.552 27.874 21.9099 26.367 23.8783C24.86 25.8468 22.8221 27.3439 20.4932 28.1935C18.1642 29.0431 15.641 29.2098 13.2205 28.6741C10.8 28.1384 8.58281 26.9226 6.82983 25.1696C5.07685 23.4166 3.86099 21.1994 3.3253 18.7789C2.78962 16.3584 2.95638 13.8352 3.80598 11.5063C4.65558 9.17732 6.15267 7.13945 8.12112 5.63244C10.0896 4.12542 12.4475 3.21195 14.9174 2.99949C15.0488 2.98866 15.1809 3.00379 15.3064 3.04404C15.4319 3.08429 15.5482 3.14885 15.6487 3.23405C15.7492 3.31925 15.832 3.42341 15.8923 3.54059C15.9525 3.65777 15.9891 3.78567 15.9999 3.91699C16.0108 4.04831 15.9956 4.18048 15.9554 4.30595C15.9151 4.43143 15.8506 4.54774 15.7654 4.64826C15.6802 4.74878 15.576 4.83154 15.4588 4.8918C15.3417 4.95206 15.2138 4.98866 15.0824 4.99949C12.9919 5.17911 10.9962 5.95208 9.33008 7.22745C7.66396 8.50282 6.39677 10.2275 5.6776 12.1986C4.95843 14.1698 4.81721 16.3053 5.27055 18.354C5.72389 20.4026 6.75293 22.2792 8.2366 23.7628C9.72026 25.2465 11.5968 26.2755 13.6455 26.7289C15.6941 27.1822 17.8297 27.041 19.8008 26.3218C21.7719 25.6027 23.4966 24.3355 24.772 22.6694C26.0474 21.0032 26.8203 19.0075 26.9999 16.917C27.0218 16.6518 27.1482 16.4061 27.3512 16.234C27.5542 16.062 27.8172 15.9776 28.0824 15.9995C28.3477 16.0214 28.5933 16.1477 28.7654 16.3507C28.9375 16.5537 29.0218 16.8168 28.9999 17.082ZM14.9999 8.99949V15.9995C14.9999 16.2647 15.1053 16.5191 15.2928 16.7066C15.4804 16.8941 15.7347 16.9995 15.9999 16.9995H22.9999C23.2652 16.9995 23.5195 16.8941 23.7071 16.7066C23.8946 16.5191 23.9999 16.2647 23.9999 15.9995C23.9999 15.7343 23.8946 15.4799 23.7071 15.2924C23.5195 15.1048 23.2652 14.9995 22.9999 14.9995H16.9999V8.99949C16.9999 8.73427 16.8946 8.47992 16.7071 8.29238C16.5195 8.10485 16.2652 7.99949 15.9999 7.99949C15.7347 7.99949 15.4804 8.10485 15.2928 8.29238C15.1053 8.47992 14.9999 8.73427 14.9999 8.99949ZM19.9999 5.99949C20.2966 5.99949 20.5866 5.91152 20.8333 5.7467C21.08 5.58187 21.2722 5.34761 21.3858 5.07352C21.4993 4.79943 21.529 4.49783 21.4711 4.20686C21.4132 3.91588 21.2704 3.64861 21.0606 3.43883C20.8508 3.22905 20.5835 3.08619 20.2926 3.02831C20.0016 2.97044 19.7 3.00014 19.4259 3.11367C19.1518 3.2272 18.9176 3.41946 18.7527 3.66614C18.5879 3.91281 18.4999 4.20282 18.4999 4.49949C18.4999 4.89732 18.658 5.27885 18.9393 5.56015C19.2206 5.84146 19.6021 5.99949 19.9999 5.99949ZM24.4999 8.99949C24.7966 8.99949 25.0866 8.91152 25.3333 8.7467C25.58 8.58187 25.7722 8.34761 25.8858 8.07352C25.9993 7.79943 26.029 7.49783 25.9711 7.20686C25.9132 6.91588 25.7704 6.64861 25.5606 6.43883C25.3508 6.22905 25.0835 6.08619 24.7926 6.02831C24.5016 5.97044 24.2 6.00014 23.9259 6.11367C23.6518 6.2272 23.4176 6.41946 23.2527 6.66614C23.0879 6.91281 22.9999 7.20282 22.9999 7.49949C22.9999 7.89732 23.158 8.27885 23.4393 8.56015C23.7206 8.84146 24.1021 8.99949 24.4999 8.99949ZM27.4999 13.4995C27.7966 13.4995 28.0866 13.4115 28.3333 13.2467C28.58 13.0819 28.7722 12.8476 28.8858 12.5735C28.9993 12.2994 29.029 11.9978 28.9711 11.7069C28.9132 11.4159 28.7704 11.1486 28.5606 10.9388C28.3508 10.7291 28.0835 10.5862 27.7926 10.5283C27.5016 10.4704 27.2 10.5001 26.9259 10.6137C26.6518 10.7272 26.4176 10.9195 26.2527 11.1661C26.0879 11.4128 25.9999 11.7028 25.9999 11.9995C25.9999 12.3973 26.158 12.7788 26.4393 13.0602C26.7206 13.3415 27.1021 13.4995 27.4999 13.4995Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/Triggers.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/UnityAI.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '29',
      height: '29',
      viewBox: '0 0 29 29',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M22.6976 15.1325L16.2463 12.7575L13.8713 6.30125C13.7307 5.91916 13.4762 5.58941 13.1423 5.35648C12.8083 5.12356 12.411 4.99867 12.0038 4.99867C11.5967 4.99867 11.1993 5.12356 10.8654 5.35648C10.5314 5.58941 10.277 5.91916 10.1363 6.30125L7.75883 12.75L1.30258 15.125C0.920493 15.2656 0.59074 15.5201 0.357814 15.854C0.124888 16.188 0 16.5853 0 16.9925C0 17.3997 0.124888 17.797 0.357814 18.131C0.59074 18.4649 0.920493 18.7194 1.30258 18.86L7.75008 21.25L10.1251 27.7025C10.2657 28.0846 10.5202 28.4143 10.8541 28.6473C11.1881 28.8802 11.5854 29.0051 11.9926 29.0051C12.3997 29.0051 12.7971 28.8802 13.131 28.6473C13.465 28.4143 13.7194 28.0846 13.8601 27.7025L16.2351 21.2512L22.6913 18.8762C23.0734 18.7356 23.4032 18.4811 23.6361 18.1472C23.869 17.8133 23.9939 17.4159 23.9939 17.0088C23.9939 16.6016 23.869 16.2042 23.6361 15.8703C23.4032 15.5364 23.0734 15.2819 22.6913 15.1413L22.6976 15.1325ZM15.5488 19.375C15.2786 19.4742 15.0332 19.631 14.8296 19.8345C14.6261 20.0381 14.4693 20.2835 14.3701 20.5537L11.9951 26.9862L9.62508 20.5487C9.52582 20.2799 9.3695 20.0358 9.16688 19.8332C8.96426 19.6306 8.72014 19.4743 8.45133 19.375L2.01883 17L8.45133 14.625C8.72014 14.5257 8.96426 14.3694 9.16688 14.1668C9.3695 13.9642 9.52582 13.7201 9.62508 13.4513L12.0001 7.01875L14.3751 13.4513C14.4743 13.7215 14.6311 13.9669 14.8346 14.1705C15.0382 14.374 15.2836 14.5308 15.5538 14.63L21.9863 17.005L15.5488 19.375ZM16.0001 4C16.0001 3.73478 16.1054 3.48043 16.293 3.29289C16.4805 3.10536 16.7349 3 17.0001 3H19.0001V1C19.0001 0.734784 19.1054 0.48043 19.293 0.292893C19.4805 0.105357 19.7349 0 20.0001 0C20.2653 0 20.5197 0.105357 20.7072 0.292893C20.8947 0.48043 21.0001 0.734784 21.0001 1V3H23.0001C23.2653 3 23.5197 3.10536 23.7072 3.29289C23.8947 3.48043 24.0001 3.73478 24.0001 4C24.0001 4.26522 23.8947 4.51957 23.7072 4.70711C23.5197 4.89464 23.2653 5 23.0001 5H21.0001V7C21.0001 7.26522 20.8947 7.51957 20.7072 7.70711C20.5197 7.89464 20.2653 8 20.0001 8C19.7349 8 19.4805 7.89464 19.293 7.70711C19.1054 7.51957 19.0001 7.26522 19.0001 7V5H17.0001C16.7349 5 16.4805 4.89464 16.293 4.70711C16.1054 4.51957 16.0001 4.26522 16.0001 4ZM29.0001 10C29.0001 10.2652 28.8947 10.5196 28.7072 10.7071C28.5197 10.8946 28.2653 11 28.0001 11H27.0001V12C27.0001 12.2652 26.8947 12.5196 26.7072 12.7071C26.5197 12.8946 26.2653 13 26.0001 13C25.7349 13 25.4805 12.8946 25.293 12.7071C25.1054 12.5196 25.0001 12.2652 25.0001 12V11H24.0001C23.7349 11 23.4805 10.8946 23.293 10.7071C23.1054 10.5196 23.0001 10.2652 23.0001 10C23.0001 9.73478 23.1054 9.48043 23.293 9.29289C23.4805 9.10536 23.7349 9 24.0001 9H25.0001V8C25.0001 7.73478 25.1054 7.48043 25.293 7.29289C25.4805 7.10536 25.7349 7 26.0001 7C26.2653 7 26.5197 7.10536 26.7072 7.29289C26.8947 7.48043 27.0001 7.73478 27.0001 8V9H28.0001C28.2653 9 28.5197 9.10536 28.7072 9.29289C28.8947 9.48043 29.0001 9.73478 29.0001 10Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/UnityAI.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/VersionControl.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement("path", {
      d: "M24.0001 28C24.7481 27.9996 25.4811 27.7895 26.1157 27.3935C26.7503 26.9974 27.2612 26.4314 27.5902 25.7596C27.9193 25.0878 28.0534 24.3372 27.9773 23.5931C27.9012 22.8489 27.6179 22.141 27.1597 21.5497C26.7015 20.9585 26.0866 20.5075 25.385 20.2482C24.6833 19.9888 23.923 19.9314 23.1904 20.0824C22.4577 20.2334 21.7821 20.5869 21.2403 21.1026C20.6984 21.6184 20.3121 22.2757 20.1251 23L19.0001 23C18.4696 23 17.9609 22.7893 17.5858 22.4142C17.2108 22.0391 17.0001 21.5304 17.0001 21L17.0001 12C17.0009 11.2974 16.815 10.6071 16.4613 10L20.1251 10C20.3685 10.9427 20.9473 11.7642 21.7531 12.3106C22.5588 12.857 23.5362 13.0908 24.5021 12.9681C25.4679 12.8455 26.3558 12.3747 26.9994 11.6442C27.643 10.9137 27.998 9.97358 27.998 9.00001C27.998 8.02644 27.643 7.08628 26.9994 6.35578C26.3558 5.62527 25.4679 5.15457 24.5021 5.03189C23.5362 4.90922 22.5588 5.143 21.7531 5.68941C20.9473 6.23582 20.3685 7.05735 20.1251 8.00001L11.8751 8.00001C11.6317 7.05735 11.0528 6.23582 10.2471 5.68941C9.44127 5.14299 8.46387 4.90922 7.49806 5.03189C6.53225 5.15456 5.64433 5.62527 5.00074 6.35578C4.35715 7.08628 4.00208 8.02643 4.00208 9.00001C4.00208 9.97358 4.35715 10.9137 5.00074 11.6442C5.64433 12.3747 6.53225 12.8455 7.49806 12.9681C8.46387 13.0908 9.44127 12.857 10.2471 12.3106C11.0528 11.7642 11.6317 10.9427 11.8751 10L13.0001 10C13.5305 10 14.0392 10.2107 14.4143 10.5858C14.7893 10.9609 15.0001 11.4696 15.0001 12L15.0001 21C15.0001 22.0609 15.4215 23.0783 16.1716 23.8284C16.9218 24.5786 17.9392 25 19.0001 25L20.1251 25C20.348 25.8583 20.8493 26.6185 21.5506 27.1613C22.2518 27.7042 23.1133 27.9992 24.0001 28ZM24.0001 7.00001C24.3956 7.00001 24.7823 7.11731 25.1112 7.33707C25.4401 7.55683 25.6964 7.86919 25.8478 8.23464C25.9992 8.6001 26.0388 9.00223 25.9616 9.39019C25.8845 9.77815 25.694 10.1345 25.4143 10.4142C25.1346 10.6939 24.7782 10.8844 24.3902 10.9616C24.0023 11.0388 23.6001 10.9991 23.2347 10.8478C22.8692 10.6964 22.5569 10.44 22.3371 10.1111C22.1174 9.78225 22.0001 9.39557 22.0001 9.00001C22.0001 8.46958 22.2108 7.96087 22.5858 7.5858C22.9609 7.21072 23.4696 7.00001 24.0001 7.00001ZM8.00006 11C7.6045 11 7.21782 10.8827 6.88892 10.6629C6.56002 10.4432 6.30368 10.1308 6.1523 9.76538C6.00093 9.39992 5.96132 8.99779 6.03849 8.60983C6.11566 8.22187 6.30614 7.8655 6.58585 7.58579C6.86555 7.30609 7.22192 7.11561 7.60988 7.03844C7.99784 6.96127 8.39998 7.00087 8.76543 7.15225C9.13088 7.30362 9.44324 7.55997 9.663 7.88887C9.88276 8.21777 10.0001 8.60445 10.0001 9.00001C10.0001 9.53044 9.78935 10.0391 9.41427 10.4142C9.0392 10.7893 8.53049 11 8.00006 11Z",
      fill: "currentColor"
    })
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/VersionControl.tsx", error: String((e && e.message) || e) }); }

// packages/library/components/icons/products/Vivox.tsx
try { (() => {
try {
  void __ds_scope.createSvgIcon({
    props: {
      width: '32',
      height: '32',
      viewBox: '0 0 32 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M23.0002 14C23.5525 14 24.0002 14.4477 24.0002 15C24.0002 17.1706 23.2558 18.9477 21.9514 20.1777C20.8877 21.1805 19.509 21.7586 18.0002 21.9355V23C18.0002 23.5523 17.5525 24 17.0002 24C16.448 23.9999 16.0002 23.5522 16.0002 23V21.9355C14.4915 21.7586 13.1127 21.1805 12.049 20.1777C10.7447 18.9477 10.0002 17.1705 10.0002 15C10.0002 14.4478 10.448 14.0001 11.0002 14C11.5525 14 12.0002 14.4477 12.0002 15C12.0002 16.6953 12.5684 17.9194 13.4201 18.7227C14.2813 19.5346 15.5212 20 17.0002 20C18.4792 20 19.7191 19.5346 20.5803 18.7227C21.4321 17.9194 22.0002 16.6954 22.0002 15C22.0002 14.4478 22.448 14.0001 23.0002 14Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.0002 7C18.6571 7 20.0002 8.34315 20.0002 10V15C20.0002 16.6569 18.6571 18 17.0002 18C15.3434 17.9999 14.0002 16.6568 14.0002 15V10C14.0002 8.34321 15.3434 7.00011 17.0002 7Z",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.0022 2C24.1812 2.00079 30.0022 7.82078 30.0022 15C30.0022 22.1792 24.1812 27.9992 17.0022 28C15.4454 28 13.9505 27.722 12.5647 27.2188L5.2795 29.8457C3.29286 30.5616 1.39607 28.587 2.19161 26.6309L4.94356 19.8613C4.337 18.3582 4.00215 16.7174 4.00215 15C4.00215 7.8203 9.82245 2 17.0022 2ZM17.0022 4C10.927 4 6.00215 8.92487 6.00215 15C6.00215 16.5869 6.33679 18.0931 6.93965 19.4531C7.0494 19.7011 7.05338 19.9832 6.95137 20.2344L4.04317 27.3848C3.90047 27.737 4.24215 28.0928 4.59981 27.9648L12.2307 25.2148L12.4065 25.168C12.5847 25.1385 12.7697 25.159 12.9397 25.2266C14.1948 25.7254 15.5659 26 17.0022 26C23.0766 25.9992 28.0022 21.0746 28.0022 15C28.0022 8.92535 23.0766 4.00079 17.0022 4Z",
      fill: "currentColor"
    }))
  });
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/components/icons/products/Vivox.tsx", error: String((e && e.message) || e) }); }

// packages/library/theme/breakpoints/breakpoints.ts
try { (() => {
const breakpoints = () => ({
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
});
Object.assign(__ds_scope, { breakpoints });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/breakpoints/breakpoints.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/chart/chart.ts
try { (() => {
// see https://polaris-viz.shopify.com/?path=/docs/shared-themes-theme-definition-intro--page

const createGradient = color => [{
  offset: 15,
  color: color.gradient[0]
}, {
  offset: 100,
  color: color.gradient[1]
}];
const chart = ({
  palette,
  shape
}) => {
  const defaultTheme = {
    chartContainer: {
      padding: '0px',
      backgroundColor: palette.background.paper
    },
    legend: {
      labelColor: palette.text.primary,
      backgroundColor: palette.default.main
    },
    xAxis: {
      labelColor: palette.text.secondary
    },
    yAxis: {
      labelColor: palette.text.secondary
    },
    grid: {
      horizontalMargin: 0,
      color: palette.grey[600]
    },
    tooltip: {
      backgroundColor: palette.background.modalElevation,
      titleColor: palette.text.secondary,
      textColor: palette.text.primary
    },
    line: {
      width: 1.5,
      pointStroke: palette.background.paper
    },
    arc: {
      cornerRadius: shape.borderRadius,
      thickness: 32
    },
    seriesColors: {
      comparison: palette.chart.comparison,
      single: createGradient(palette.chart.series1),
      limited: [createGradient(palette.chart.series1), createGradient(palette.chart.series2), createGradient(palette.chart.series3), createGradient(palette.chart.series4), createGradient(palette.chart.series5), createGradient(palette.chart.series6), createGradient(palette.chart.series7), createGradient(palette.chart.series8)],
      all: [palette.chart.series1.solid, palette.chart.series2.solid, palette.chart.series3.solid, palette.chart.series4.solid, palette.chart.series5.solid, palette.chart.series6.solid, palette.chart.series7.solid, palette.chart.series8.solid, palette.chart.series9.solid, palette.chart.series10.solid, palette.chart.series11.solid, palette.chart.series12.solid, palette.chart.series13.solid, palette.chart.series14.solid]
    }
  };
  return {
    Default: defaultTheme,
    Loading: merge({}, defaultTheme, {
      chartContainer: {
        backgroundColor: palette.background.paper
      }
    }),
    LineWithoutSpline: merge({}, defaultTheme, {
      line: {
        hasSpline: false
      }
    }),
    TrendNeutral: merge({}, defaultTheme, {
      seriesColors: {
        single: createGradient(palette.chart.neutral)
      }
    }),
    TrendPositive: merge({}, defaultTheme, {
      seriesColors: {
        single: createGradient(palette.chart.positive)
      }
    }),
    TrendNegative: merge({}, defaultTheme, {
      seriesColors: {
        single: createGradient(palette.chart.negative)
      }
    })
  };
};
Object.assign(__ds_scope, { chart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/chart/chart.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/constants.ts
try { (() => {
try {
  void {
    appHeaderHeight: 40,
    listItemIconWidth: '20px',
    // needs to have the same width so <ListItemText inset /> can be aligned correctly,
    sideNavigation: {
      expandedNavWidth: 224,
      collapsedNavWidth: 52,
      sectionTitleHeight: 28,
      iconSize: 20,
      animationLength: '0.25s',
      collapseButtonHeight: 40,
      collapseButtonIconSize: 48,
      headerHeight: 56,
      headerIconHeight: 28,
      navItemIconSize: 32
    },
    maxContainerWidth: 1430
  };
} catch {}
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/constants.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/elevations/shadows.ts
try { (() => {
const lightShadows = ['none', ...Array(3).fill('0px 1px 2px rgba(16, 24, 40, 0.05)'), ...Array(3).fill('0px 1px 2px rgba(16, 24, 40, 0.06), 0px 1px 3px rgba(16, 24, 40, 0.1)'), ...Array(3).fill('0px 4px 8px -2px rgba(16, 24, 40, 0.12)'), ...Array(3).fill('0px 12px 16px -4px rgba(16, 24, 40, 0.08)'), ...Array(3).fill('0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -6px rgba(16, 24, 40, 0.08)'), ...Array(3).fill('0px 24px 48px -12px rgba(16, 24, 40, 0.18)'), ...Array(3).fill('0px 19px 32px 2px rgba(44, 45, 45, 0.14)'), ...Array(3).fill('0px 27px 27px 2px rgba(44, 45, 45, 0.14)')];
const darkShadows = ['none', ...Array(3).fill('0px 1px 2px rgba(0, 0, 0, 0.05)'), ...Array(3).fill('0px 1px 4px rgba(0, 0, 0, 0.72)'), ...Array(3).fill('0px 4px 8px -2px rgba(0, 0, 0, 0.34)'), ...Array(3).fill('0px 12px 14px -3px rgba(0, 0, 0, 0.45)'), ...Array(3).fill('0px 8px 8px -4px rgba(0, 0, 0, 0.03), 0px 20px 24px -6px rgba(0, 0, 0, 0.08)'), ...Array(3).fill('0px 24px 48px -12px rgba(0, 0, 0, 0.44)'), ...Array(3).fill('0px 32px 54px -12px rgba(0, 0, 0, 0.62)'), ...Array(3).fill('0px 36px 32px rgba(0, 0, 0, 0.58)')];
const shadows = mode => {
  return mode === 'light' ? lightShadows : darkShadows;
};
Object.assign(__ds_scope, { lightShadows, darkShadows, shadows });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/elevations/shadows.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/elevations/elevations.ts
try { (() => {
const lightElevations = {
  xs: __ds_scope.lightShadows[3],
  sm: __ds_scope.lightShadows[6],
  md: __ds_scope.lightShadows[9],
  lg: __ds_scope.lightShadows[12],
  xl: __ds_scope.lightShadows[15],
  xxl: __ds_scope.lightShadows[18],
  xxxl: __ds_scope.lightShadows[21],
  sl: __ds_scope.lightShadows[24]
};
const darkElevations = {
  xs: __ds_scope.darkShadows[3],
  sm: __ds_scope.darkShadows[6],
  md: __ds_scope.darkShadows[9],
  lg: __ds_scope.darkShadows[12],
  xl: __ds_scope.darkShadows[15],
  xxl: __ds_scope.darkShadows[18],
  xxxl: __ds_scope.darkShadows[21],
  sl: __ds_scope.darkShadows[24]
};
const elevations = mode => {
  return mode === 'light' ? lightElevations : darkElevations;
};
Object.assign(__ds_scope, { lightElevations, darkElevations, elevations });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/elevations/elevations.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/palette/color-map.ts
try { (() => {
const colorMap = radixColor => {
  const colors = Object.values(radixColor);

  // Radix colors are object with key/value
  // example" blue.blue1, remap them by using
  // their values
  return {
    50: colors[0],
    // weight 1
    100: colors[1],
    // weight 2
    200: colors[2],
    // weight 3
    300: colors[3],
    // weight 4
    400: colors[4],
    // weight 5
    500: colors[5],
    // weight 6
    600: colors[6],
    // weight 7
    700: colors[7],
    // weight 8
    800: colors[8],
    // weight 9
    900: colors[9],
    // weight 10
    1000: colors[10],
    // weight 11
    1100: colors[11],
    // weight 12

    A100: colors[1],
    A200: colors[2],
    A400: colors[4],
    A700: colors[8],
    lighter: colors[2],
    light: colors[4],
    main: colors[8],
    main8p: alpha(colors[8], 0.08),
    main50p: alpha(colors[8], 0.5),
    dark: colors[9],
    darker: colors[10],
    hover: colors[2],
    selected: colors[4],
    outlinedBorder: colors[8],
    contrastText: colors[11],
    buttonContrastText: '#FFFFFF'
  };
};
Object.assign(__ds_scope, { colorMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/palette/color-map.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/palette/palette-dark.ts
try { (() => {
const common = {
  white: '#FFFFFF',
  black: '#000000',
  inverseWhite: '#000000',
  inverseBlack: '#FFFFFF'
};
const darkPalette = {
  mode: 'dark',
  common,
  primary: {
    50: '#000000',
    100: '#061220',
    200: '#012348',
    300: '#002E67',
    400: '#003C7C',
    500: '#004A8E',
    600: '#085BA6',
    700: '#086DC7',
    800: '#0A6EC8',
    900: '#1361AD',
    1000: '#6EB8FF',
    1100: '#C6E4FF',
    A100: '#061220',
    A200: '#012348',
    A400: '#003C7C',
    A700: '#0A6EC8',
    lighter: '#012348',
    light: '#003C7C',
    main: '#0A6EC8',
    main8p: alpha('#0A6EC8', 0.08),
    main50p: alpha('#0A6EC8', 0.5),
    // with a white 30% opacity applied on top of light (used for chip hover state)
    lightWithBlack30p: 'rgb(26,80,137)',
    dark: '#1361AD',
    darker: '#6EB8FF',
    hover: '#012348',
    selected: '#003C7C',
    outlinedBorder: '#0A6EC8',
    contrastText: '#C6E4FF',
    buttonContrastText: '#FFFFFF'
  },
  info: {
    ...__ds_scope.colorMap(indigoDark),
    lightWithBlack30p: 'rgb(59,77,130)'
  },
  success: {
    ...__ds_scope.colorMap(greenDark),
    lightWithBlack30p: 'rgb(46,91,71)'
  },
  error: {
    ...__ds_scope.colorMap(redDark),
    lightWithBlack30p: 'rgb(113,45,57)'
  },
  warning: {
    ...__ds_scope.colorMap(amberDark),
    dark: amberDark.amber9,
    main: amberDark.amber9,
    lightWithBlack30p: 'rgb(95,69,26)',
    buttonContrastText: amberDark.amber7
  },
  secondary: {
    ...__ds_scope.colorMap(grayDark),
    main: grayDark.gray4,
    dark: grayDark.gray5,
    light: grayDark.gray6,
    lightWithBlack30p: 'rgb(178,178,178)',
    contrastText: grayDark.gray12,
    outlinedBorder: grayDark.gray6
  },
  default: {
    ...__ds_scope.colorMap(grayDark),
    main: grayDarkA.grayA3,
    dark: grayDark.gray5,
    light: grayDark.gray7,
    lightWithBlack30p: 'rgb(70,70,70)',
    contrastText: grayDark.gray12,
    outlinedBorder: grayDark.gray6
  },
  grey: {
    50: grayDark.gray1,
    100: grayDark.gray2,
    200: grayDark.gray3,
    300: grayDark.gray4,
    400: grayDark.gray5,
    500: grayDark.gray6,
    600: grayDark.gray7,
    700: grayDark.gray8,
    800: grayDark.gray9,
    900: grayDark.gray10,
    1000: grayDark.gray11,
    1100: grayDark.gray12,
    A100: grayDark.gray2,
    A200: grayDark.gray4,
    A400: grayDark.gray6,
    A700: grayDark.gray9
  },
  text: {
    primary: grayDark.gray12,
    secondary: grayDark.gray11,
    disabled: grayDark.gray10
  },
  action: {
    primary: grayDark.gray12,
    active: grayDark.gray10,
    activeBackground: grayDark.gray4,
    activatedOpacity: 0.5,
    hover: grayDarkA.grayA3,
    hoverOpacity: 0.5,
    selected: grayDark.gray5,
    selectedOpacity: 0.5,
    disabled: grayDark.gray6,
    disabledOpacity: 0.5,
    disabledBackground: grayDark.gray2,
    focus: grayDark.gray5,
    focusOpacity: 0.5,
    outlinedBorder: grayDark.gray6
  },
  background: {
    default: '#131313',
    neutral: common.white,
    paper: grayDark.gray2,
    modalElevation: grayDark.gray4,
    paperElevation0: grayDark.gray3,
    paperElevation1: grayDark.gray4,
    paperElevation2: grayDark.gray5,
    paperElevation3: grayDark.gray6,
    paperElevation4: grayDark.gray7,
    paperElevation5: grayDark.gray8,
    paperElevation6: grayDark.gray9,
    paperElevation7: grayDark.gray10,
    paperElevation8: grayDark.gray11,
    paperElevation9: grayDark.gray12,
    backdrop: blackA.blackA9,
    datagridHeader: grayDark.gray3
  },
  chart: {
    comparison: grayDark.gray10,
    neutral: {
      alpha: grayDarkA.grayA5,
      solid: grayDark.gray9,
      gradient: [grayDark.gray8, grayDark.gray10]
    },
    negative: {
      alpha: redDarkA.redA5,
      solid: redDark.red9,
      gradient: [redDark.red8, redDark.red10]
    },
    positive: {
      alpha: greenDarkA.greenA4,
      solid: greenDark.green9,
      gradient: [greenDark.green8, greenDark.green10]
    },
    series1: {
      alpha: blueDarkA.blueA4,
      solid: blueDark.blue9,
      gradient: [blueDark.blue8, blueDark.blue10]
    },
    series2: {
      alpha: crimsonDarkA.crimsonA5,
      solid: crimsonDark.crimson9,
      gradient: [crimsonDark.crimson8, crimsonDark.crimson10]
    },
    series3: {
      alpha: purpleA.purpleA5,
      solid: purple.purple9,
      gradient: [purple.purple8, purple.purple10]
    },
    series4: {
      alpha: indigoA.indigoA6,
      solid: indigo.indigo9,
      gradient: [indigo.indigo8, indigo.indigo10]
    },
    series5: {
      alpha: orangeA.orangeA3,
      solid: orange.orange9,
      gradient: [orange.orange8, orange.orange10]
    },
    series6: {
      alpha: mintA.mintA4,
      solid: mint.mint9,
      gradient: [mint.mint8, mint.mint10]
    },
    series7: {
      alpha: pinkA.pinkA6,
      solid: pink.pink9,
      gradient: [pink.pink8, pink.pink10]
    },
    series8: {
      alpha: grassA.grassA6,
      solid: grass.grass8,
      gradient: [grass.grass7, grass.grass9]
    },
    series9: {
      alpha: tealA.tealA5,
      solid: teal.teal8,
      gradient: [teal.teal7, teal.teal9]
    },
    series10: {
      alpha: purpleA.purpleA7,
      solid: purple.purple9,
      gradient: [purple.purple8, purple.purple10]
    },
    series11: {
      alpha: plumA.plumA6,
      solid: plum.plum9,
      gradient: [plum.plum8, plum.plum10]
    },
    series12: {
      alpha: amberDarkA.amberA6,
      solid: amber.amber7,
      gradient: [amber.amber6, amber.amber8]
    },
    series13: {
      alpha: skyA.skyA6,
      solid: sky.sky8,
      gradient: [sky.sky8, sky.sky10]
    },
    series14: {
      alpha: tealA.tealA7,
      solid: teal.teal9,
      gradient: [teal.teal8, teal.teal10]
    }
  },
  alpha: {
    100: grayA.grayA1,
    200: grayA.grayA2,
    300: grayA.grayA3,
    400: grayA.grayA4,
    500: grayA.grayA5,
    600: grayA.grayA6,
    700: grayA.grayA7,
    800: grayA.grayA8,
    900: grayA.grayA9,
    1000: grayA.grayA10,
    1100: grayA.grayA11,
    1200: grayA.grayA12
  },
  divider: alpha('#FFFFFF', 0.08),
  dividerElevation0: grayDark.gray6
};
Object.assign(__ds_scope, { darkPalette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/palette/palette-dark.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/palette/palette-light.ts
try { (() => {
const common = {
  white: '#FFFFFF',
  black: '#000000',
  inverseWhite: '#FFFFFF',
  inverseBlack: '#000000'
};
const lightPalette = {
  mode: 'light',
  common,
  primary: {
    50: '#FCFDFE',
    100: '#F5F9FE',
    200: '#ECF5FF',
    300: '#DCECFF',
    400: '#CBE2FE',
    500: '#B7D5F9',
    600: '#9EC4F1',
    700: '#7AACE8',
    800: '#0A6EC8',
    900: '#0060B8',
    1000: '#0F70CB',
    1100: '#0E345B',
    A100: '#F5F9FE',
    A200: '#ECF5FF',
    A400: '#CBE2FE',
    A700: '#0A6EC8',
    lighter: '#ECF5FF',
    light: '#CBE2FE',
    main: '#0A6EC8',
    main8p: alpha('#0A6EC8', 0.08),
    main50p: alpha('#0A6EC8', 0.5),
    // with a black 30% opacity applied on top of light (used for chip hover state)
    lightWithBlack30p: 'rgb(183,203,229)',
    dark: '#0060B8',
    darker: '#0F70CB',
    hover: '#ECF5FF',
    selected: '#CBE2FE',
    outlinedBorder: '#0A6EC8',
    contrastText: '#0E345B',
    buttonContrastText: '#FFFFFF'
  },
  info: {
    ...__ds_scope.colorMap(indigo),
    lightWithBlack30p: 'rgb(189,200,229)'
  },
  success: {
    ...__ds_scope.colorMap(green),
    lightWithBlack30p: 'rgb(176,209,188)'
  },
  error: {
    ...__ds_scope.colorMap(red),
    lightWithBlack30p: 'rgb(229,184,185)'
  },
  warning: {
    ...__ds_scope.colorMap(amber),
    A400: amber.amber5,
    selected: amber.amber5,
    main: amber.amber9,
    lightWithBlack30p: 'rgb(226,206,107)',
    buttonContrastText: amber.amber12
  },
  secondary: {
    ...__ds_scope.colorMap(gray),
    main: gray.gray6,
    dark: gray.gray4,
    light: gray.gray5,
    lightWithBlack30p: 'rgb(77,77,77)',
    contrastText: gray.gray12,
    outlinedBorder: gray.gray8
  },
  default: {
    ...__ds_scope.colorMap(gray),
    main: gray.gray3,
    dark: gray.gray4,
    light: gray.gray5,
    lightWithBlack30p: 'rgb(202,202,202)',
    contrastText: gray.gray12,
    outlinedBorder: gray.gray8,
    buttonContrastText: common.black
  },
  grey: {
    50: gray.gray1,
    100: gray.gray2,
    200: gray.gray3,
    300: gray.gray4,
    400: gray.gray5,
    500: gray.gray6,
    600: gray.gray7,
    700: gray.gray8,
    800: gray.gray9,
    900: gray.gray10,
    1000: gray.gray11,
    1100: gray.gray12,
    A100: gray.gray2,
    A200: gray.gray3,
    A400: gray.gray4,
    A700: gray.gray9
  },
  text: {
    primary: gray.gray12,
    secondary: gray.gray11,
    disabled: gray.gray10
  },
  action: {
    primary: gray.gray12,
    active: gray.gray10,
    activeBackground: gray.gray3,
    activatedOpacity: 0.5,
    hover: grayA.grayA3,
    hoverOpacity: 0.5,
    selected: gray.gray4,
    selectedOpacity: 0.5,
    disabled: gray.gray5,
    disabledBackground: gray.gray3,
    disabledOpacity: 0.5,
    focus: gray.gray4,
    focusOpacity: 0.5,
    outlinedBorder: gray.gray8
  },
  background: {
    default: common.white,
    neutral: common.white,
    paper: gray.gray1,
    modalElevation: common.white,
    paperElevation0: gray.gray2,
    paperElevation1: '#F6F6F6',
    paperElevation2: '#F0F0F0',
    paperElevation3: gray.gray5,
    paperElevation4: gray.gray6,
    paperElevation5: gray.gray7,
    paperElevation6: gray.gray8,
    paperElevation7: gray.gray9,
    paperElevation8: gray.gray10,
    paperElevation9: gray.gray11,
    backdrop: blackA.blackA5,
    datagridHeader: gray.gray2
  },
  chart: {
    comparison: gray.gray10,
    neutral: {
      alpha: grayA.grayA6,
      solid: gray.gray9,
      gradient: [gray.gray11, gray.gray8]
    },
    negative: {
      alpha: redA.redA6,
      solid: red.red9,
      gradient: [red.red11, red.red8]
    },
    positive: {
      alpha: greenA.greenA6,
      solid: green.green9,
      gradient: [green.green11, green.green8]
    },
    series1: {
      alpha: blueA.blueA3,
      solid: blue.blue9,
      gradient: [blue.blue11, blue.blue8]
    },
    series2: {
      alpha: crimsonA.crimsonA6,
      solid: crimson.crimson9,
      gradient: [crimson.crimson11, crimson.crimson8]
    },
    series3: {
      alpha: purpleA.purpleA5,
      solid: purple.purple9,
      gradient: [purple.purple11, purple.purple8]
    },
    series4: {
      alpha: indigoA.indigoA6,
      solid: indigo.indigo9,
      gradient: [indigo.indigo11, indigo.indigo8]
    },
    series5: {
      alpha: orangeA.orangeA5,
      solid: orange.orange9,
      gradient: [orange.orange11, orange.orange8]
    },
    series6: {
      alpha: mintA.mintA6,
      solid: mint.mint8,
      gradient: [mint.mint11, mint.mint8]
    },
    series7: {
      alpha: pinkA.pinkA7,
      solid: pink.pink9,
      gradient: [pink.pink11, pink.pink8]
    },
    series8: {
      alpha: grassA.grassA5,
      solid: grass.grass8,
      gradient: [grass.grass7, grass.grass5]
    },
    series9: {
      alpha: purpleA.purpleA7,
      solid: purple.purple9,
      gradient: [purple.purple10, purple.purple8]
    },
    series10: {
      alpha: tealA.tealA7,
      solid: teal.teal8,
      gradient: [teal.teal8, teal.teal6]
    },
    series11: {
      alpha: plumA.plumA6,
      solid: plum.plum9,
      gradient: [plum.plum10, plum.plum8]
    },
    series12: {
      alpha: amberA.amberA6,
      solid: amber.amber8,
      gradient: [amber.amber8, amber.amber6]
    },
    series13: {
      alpha: skyA.skyA6,
      solid: sky.sky8,
      gradient: [sky.sky11, sky.sky8]
    },
    series14: {
      alpha: tealA.tealA7,
      solid: teal.teal8,
      gradient: [teal.teal8, teal.teal6]
    }
  },
  alpha: {
    100: whiteA.whiteA1,
    200: whiteA.whiteA2,
    300: whiteA.whiteA3,
    400: whiteA.whiteA4,
    500: whiteA.whiteA5,
    600: whiteA.whiteA6,
    700: whiteA.whiteA7,
    800: whiteA.whiteA8,
    900: whiteA.whiteA9,
    1000: whiteA.whiteA10,
    1100: whiteA.whiteA11,
    1200: whiteA.whiteA12
  },
  divider: alpha('#000000', 0.1),
  dividerElevation0: gray.gray4
};
Object.assign(__ds_scope, { lightPalette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/palette/palette-light.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/palette/index.ts
try { (() => {

Object.assign(__ds_scope, { lightPalette: __ds_scope.lightPalette, darkPalette: __ds_scope.darkPalette });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/palette/index.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/transitions/duration.ts
try { (() => {
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
  chart: 750 // Custom duration for chart animations
};
Object.assign(__ds_scope, { duration });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/transitions/duration.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/typography/typography.ts
try { (() => {
const defaultFontFamily = ['"Inter"', 'Helvetica', 'Arial', 'sans-serif'].join(',');
const monospaceFontFamilly = ['"Roboto Mono"', 'Menlo', 'Monaco', '"Courier New"', 'monospace'].join(',');
const typography = (fontFamily = defaultFontFamily) => ({
  fontFamily,
  fontWeight: 400,
  title: {
    fontFamily,
    fontWeight: 600,
    fontSize: '2.5rem',
    lineHeight: '3rem',
    letterSpacing: '-0.01rem'
  },
  h1: {
    fontFamily,
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: '-0.01rem'
  },
  h2: {
    fontFamily,
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    letterSpacing: '-0.01rem'
  },
  h3: {
    fontFamily,
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '-0.01rem'
  },
  h4: {
    fontFamily,
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '-0.01rem'
  },
  h5: {
    fontFamily,
    fontWeight: 600,
    fontSize: '0.813rem',
    lineHeight: '1rem'
  },
  h6: {
    fontFamily,
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: '0.75rem'
  },
  subtitle1: {
    fontFamily,
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.01rem'
  },
  subtitle2: {
    fontFamily,
    fontWeight: 500,
    fontSize: '0.813rem',
    lineHeight: '1.25rem'
  },
  body1: {
    fontFamily,
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: 0
  },
  body2: {
    fontFamily,
    fontWeight: 400,
    fontSize: '0.813rem',
    lineHeight: '1.25rem',
    letterSpacing: 0
  },
  button: {
    fontFamily,
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.018rem',
    textTransform: 'inherit'
  },
  overline: {
    fontFamily,
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.01rem',
    textTransform: 'uppercase'
  },
  caption: {
    fontFamily,
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '1rem'
  },
  tableHeader: {
    fontFamily,
    fontWeight: 600,
    fontSize: '0.813rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.01rem'
  },
  inputLabel: {
    fontFamily,
    fontWeight: 500,
    fontSize: '0.813rem',
    lineHeight: '1rem',
    letterSpacing: '0.01rem'
  },
  tabLabel: {
    fontFamily,
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '1rem'
  },
  tabLabel2: {
    fontFamily,
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '1rem'
  },
  chipLabel: {
    fontFamily,
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.01rem'
  },
  chipLabel2: {
    fontFamily,
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: '1rem',
    letterSpacing: '0.01rem'
  },
  chart1: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1.75rem',
    lineHeight: '1.75rem',
    letterSpacing: '-0.018rem'
  },
  chart2: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: '1.25rem'
  },
  code: {
    fontFamily: monospaceFontFamilly,
    fontWeight: 'normal',
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
    letterSpacing: 0
  }
});
Object.assign(__ds_scope, { typography });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/typography/typography.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/zIndex/zIndex.ts
try { (() => {
// Copied from @mui/material/styles/zIndex
const muiZIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
const zIndex = {
  ...muiZIndex,
  top: 2100
};
Object.assign(__ds_scope, { zIndex });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/zIndex/zIndex.ts", error: String((e && e.message) || e) }); }

// packages/library/theme/theme.ts
try { (() => {
// data display

// feedback

// inputs

// navigation

// surfaces

/**
 * Possible theme overrides are:
 * palette
 * typography
 * spacing
 * breakpoints
 * zIndex
 * transitions
 * components
 *
 * The theme is evaluated at compilation time to generate
 * the 2 `light` & `dark` objects without any call to
 * `createThemeMui()`
 *
 * More infos: https://mui.com/material-ui/customization/theming/
 */

const getComponents = theme => ({
  MuiAccordion: __ds_scope.MuiAccordion(),
  MuiAutocomplete: __ds_scope.MuiAutocomplete(theme),
  MuiAvatar: __ds_scope.MuiAvatar(theme),
  MuiBadge: __ds_scope.MuiBadge(theme),
  MuiCard: __ds_scope.MuiCard(theme),
  MuiCardActions: __ds_scope.MuiCardActions(theme),
  MuiCardContent: __ds_scope.MuiCardContent(theme),
  MuiChip: __ds_scope.MuiChip(theme),
  MuiBreadcrumbs: __ds_scope.MuiBreadcrumbs,
  MuiButton: __ds_scope.MuiButton(theme),
  MuiButtonBase: __ds_scope.MuiButtonBase,
  MuiButtonGroup: __ds_scope.MuiButtonGroup(theme),
  MuiFormHelperText: __ds_scope.MuiFormHelperText(theme),
  MuiIconButton: __ds_scope.MuiIconButton(theme),
  MuiInputLabel: __ds_scope.MuiInputLabel(theme),
  MuiSnackbar: __ds_scope.MuiSnackbar(theme),
  MuiCheckbox: __ds_scope.MuiCheckbox(theme),
  MuiTooltip: __ds_scope.MuiTooltip(theme),
  MuiAlert: __ds_scope.MuiAlert(theme),
  MuiAlertTitle: __ds_scope.MuiAlertTitle(theme),
  MuiDialog: __ds_scope.MuiDialog(theme),
  MuiDialogContent: __ds_scope.MuiDialogContent(theme),
  MuiDialogTitle: __ds_scope.MuiDialogTitle(theme),
  MuiDialogActions: __ds_scope.MuiDialogActions(theme),
  MuiDivider: __ds_scope.MuiDivider(theme),
  MuiStepButton: __ds_scope.MuiStepButton(),
  MuiStepConnector: __ds_scope.MuiStepConnector(theme),
  MuiStepContent: __ds_scope.MuiStepContent(theme),
  MuiStepLabel: __ds_scope.MuiStepLabel(theme),
  MuiSwitch: __ds_scope.MuiSwitch(theme),
  MuiRadio: __ds_scope.MuiRadio(theme),
  MuiToggleButton: __ds_scope.MuiToggleButton(theme),
  MuiToggleButtonGroup: __ds_scope.MuiToggleButtonGroup(theme),
  MuiTabs: __ds_scope.MuiTabs(theme),
  MuiTab: __ds_scope.MuiTab(theme),
  MuiTable: __ds_scope.MuiTable(theme),
  MuiSimpleTreeView: __ds_scope.MuiSimpleTreeView(theme),
  MuiRichTreeView: __ds_scope.MuiRichTreeView(theme),
  MuiSlider: __ds_scope.MuiSlider(theme),
  MuiFab: __ds_scope.MuiFab(theme),
  MuiPaper: __ds_scope.MuiPaper,
  MuiTypography: __ds_scope.MuiTypography,
  MuiBackdrop: __ds_scope.MuiBackdrop(theme),
  MuiLinearProgress: __ds_scope.MuiLinearProgress,
  MuiList: __ds_scope.MuiList,
  // @ts-expect-error MuiTimelineDot is part of @mui/lab
  MuiTimelineDot: __ds_scope.MuiTimelineDot(theme),
  MuiTimelineItem: __ds_scope.MuiTimelineItem(),
  MuiTimelineContent: __ds_scope.MuiTimelineContent(theme),
  MuiTimelineOppositeContent: __ds_scope.MuiTimelineOppositeContent(theme),
  MuiTimelineConnector: __ds_scope.MuiTimelineConnector(theme),
  MuiListItem: __ds_scope.MuiListItem(theme),
  MuiListItemIcon: __ds_scope.MuiListItemIcon(theme),
  MuiListItemAvatar: __ds_scope.MuiListItemAvatar(theme),
  MuiListItemText: __ds_scope.MuiListItemText(theme),
  MuiListItemButton: __ds_scope.MuiListItemButton(theme),
  MuiListSubheader: __ds_scope.MuiListSubheader(theme),
  MuiMenu: __ds_scope.MuiMenu(theme),
  MuiMenuItem: __ds_scope.MuiMenuItem(theme),
  MuiDataGrid: __ds_scope.MuiDataGrid(theme),
  MuiPickersCalendarHeader: __ds_scope.MuiPickersCalendarHeader,
  MuiPickersDay: __ds_scope.MuiPickersDay(theme),
  MuiDateRangePickerDay: __ds_scope.MuiDateRangePickerDay(theme),
  MuiTimePicker: __ds_scope.MuiTimePicker(theme)
});
const createTheme = (palette, ...args) => {
  const baseTheme = createThemeMui({
    palette,
    typography: __ds_scope.typography(),
    shadows: __ds_scope.shadows(palette.mode || 'light'),
    elevation: __ds_scope.elevations(palette.mode || 'light'),
    breakpoints: __ds_scope.breakpoints(),
    transitions: {
      duration: __ds_scope.duration
    },
    constants: __ds_scope.constants,
    zIndex: __ds_scope.zIndex
  }, ...args);
  return {
    ...baseTheme,
    chart: __ds_scope.chart(baseTheme),
    editor: __ds_scope.editor(baseTheme),
    components: getComponents(baseTheme)
  };
};
const createColorSchemeTheme = (...args) => {
  const baseTheme = createThemeMui({
    cssVariables: {
      colorSchemeSelector: 'class'
    },
    colorSchemes: {
      light: {
        palette: __ds_scope.lightPalette,
        // @ts-expect-error missing type
        elevation: __ds_scope.elevations('light'),
        shadows: __ds_scope.shadows('light')
      },
      dark: {
        palette: __ds_scope.darkPalette,
        // @ts-expect-error missing type
        elevation: __ds_scope.elevations('dark'),
        shadows: __ds_scope.shadows('dark')
      }
    },
    typography: __ds_scope.typography(),
    breakpoints: __ds_scope.breakpoints(),
    transitions: {
      duration: __ds_scope.duration
    },
    constants: __ds_scope.constants,
    zIndex: __ds_scope.zIndex
  }, ...args);
  return {
    ...baseTheme,
    chart: __ds_scope.chart(baseTheme),
    editor: __ds_scope.editor(baseTheme),
    components: getComponents(baseTheme)
  };
};
const theme = createColorSchemeTheme();
const darkTheme = createTheme(__ds_scope.darkPalette);
const lightTheme = createTheme(__ds_scope.lightPalette);
Object.assign(__ds_scope, { lightTheme, darkTheme, theme, createTheme, createColorSchemeTheme });
})(); } catch (e) { __ds_ns.__errors.push({ path: "packages/library/theme/theme.ts", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AppHeader.jsx
try { (() => {
// Cloud Foundation — AppHeader (top bar, 40px). Mirrors components/AppHeader.
function AppHeader({
  org,
  project,
  onSearch,
  query,
  notifications = 0
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--cf-app-header-height)',
      minHeight: 'var(--cf-app-header-height)',
      background: 'var(--cf-bg-paper)',
      borderBottom: '1px solid var(--cf-divider)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 12px 0 8px',
      position: 'relative',
      zIndex: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(UnityMark, {
    size: 22,
    color: "var(--cf-fg)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--cf-divider)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '600 13px var(--cf-font-sans)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cf-fg-secondary)'
    }
  }, org), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-right",
    style: {
      fontSize: 11,
      color: 'var(--cf-fg-disabled)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cf-fg)'
    }
  }, project), /*#__PURE__*/React.createElement("i", {
    className: "ph ph-caret-up-down",
    style: {
      fontSize: 13,
      color: 'var(--cf-fg-secondary)',
      marginLeft: 2,
      cursor: 'pointer'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 320,
      maxWidth: '32vw'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--cf-bg-elevation-1)',
      border: '1px solid var(--cf-divider)',
      borderRadius: 6,
      padding: '4px 8px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-magnifying-glass",
    style: {
      fontSize: 14,
      color: 'var(--cf-fg-secondary)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => onSearch && onSearch(e.target.value),
    placeholder: "Search players, configs, docs\u2026",
    style: {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      flex: 1,
      font: '400 13px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "question",
    title: "Help"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    title: "Notifications"
  }), notifications > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      minWidth: 14,
      height: 14,
      padding: '0 3px',
      borderRadius: 999,
      background: 'var(--cf-error)',
      color: '#fff',
      font: '700 9px var(--cf-font-sans)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, notifications)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "squares-four",
    title: "Apps"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--cf-divider)',
      margin: '0 6px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px var(--cf-font-sans)',
      color: 'var(--cf-fg)'
    }
  }, "Mira Okafor"), /*#__PURE__*/React.createElement(Avatar, {
    name: "Mira Okafor",
    size: 24
  }))));
}
Object.assign(window, {
  AppHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AppHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/SideNav.jsx
try { (() => {
// Cloud Foundation — Side navigation. Collapsible 224px / 52px (theme constants).
const {
  useState: useStateNav
} = React;
const NAV = [{
  section: 'Home',
  items: [{
    id: 'Overview',
    icon: 'house',
    phosphor: true
  }]
}, {
  section: 'Live Ops',
  items: [{
    id: 'Analytics',
    product: 'Analytics'
  }, {
    id: 'Remote Config',
    product: 'RemoteConfig'
  }, {
    id: 'Cloud Code',
    product: 'CloudCode'
  }, {
    id: 'Economy',
    product: 'Economy'
  }, {
    id: 'Cloud Save',
    product: 'CloudSave'
  }]
}, {
  section: 'Multiplayer',
  items: [{
    id: 'Relay',
    product: 'Relay'
  }, {
    id: 'Lobby',
    product: 'Lobby'
  }, {
    id: 'Matchmaker',
    product: 'Matchmaker'
  }, {
    id: 'Vivox',
    product: 'Vivox'
  }, {
    id: 'Leaderboards',
    product: 'Leaderboard'
  }]
}, {
  section: 'Manage',
  items: [{
    id: 'Members',
    icon: 'users-three',
    phosphor: true
  }, {
    id: 'Settings',
    icon: 'gear',
    phosphor: true
  }]
}];
function NavItem({
  item,
  active,
  collapsed,
  onClick
}) {
  const [hover, setHover] = useStateNav(false);
  const on = active === item.id;
  const iconColor = on ? 'var(--cf-primary)' : 'var(--cf-fg-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onClick(item.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    title: collapsed ? item.id : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 32,
      padding: collapsed ? 0 : '0 8px',
      justifyContent: collapsed ? 'center' : 'flex-start',
      margin: '1px 8px',
      borderRadius: 6,
      cursor: 'pointer',
      background: on ? 'var(--cf-primary-lighter)' : hover ? 'var(--cf-action-hover)' : 'transparent',
      color: on ? 'var(--cf-primary-darker)' : 'var(--cf-fg)'
    }
  }, item.phosphor ? /*#__PURE__*/React.createElement("i", {
    className: 'ph ph-' + item.icon,
    style: {
      fontSize: 18,
      color: iconColor,
      width: 20,
      textAlign: 'center'
    }
  }) : /*#__PURE__*/React.createElement(ProductIcon, {
    name: item.product,
    size: 20,
    color: iconColor
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      font: (on ? 600 : 500) + ' 13px var(--cf-font-sans)',
      whiteSpace: 'nowrap'
    }
  }, item.id));
}
function SideNav({
  active,
  onNavigate
}) {
  const [collapsed, setCollapsed] = useStateNav(false);
  const w = collapsed ? 'var(--cf-sidenav-collapsed)' : 'var(--cf-sidenav-expanded)';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: w,
      minWidth: w,
      background: 'var(--cf-bg-paper)',
      borderRight: '1px solid var(--cf-divider)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width var(--cf-nav-anim) var(--cf-ease-standard)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--cf-sidenav-header-height)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: collapsed ? 0 : '0 14px',
      justifyContent: collapsed ? 'center' : 'flex-start',
      borderBottom: '1px solid var(--cf-divider)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: 'var(--cf-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 13px var(--cf-font-sans)',
      flexShrink: 0
    }
  }, "SR"), !collapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px var(--cf-font-sans)',
      whiteSpace: 'nowrap'
    }
  }, "Skybound RPG"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 11px var(--cf-font-sans)',
      color: 'var(--cf-fg-secondary)'
    }
  }, "Production"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 0'
    }
  }, NAV.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.section,
    style: {
      marginBottom: 6
    }
  }, !collapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28,
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      font: '600 11px var(--cf-font-sans)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--cf-fg-secondary)'
    }
  }, group.section), collapsed && group.section !== 'Home' && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--cf-divider)',
      margin: '6px 12px'
    }
  }), group.items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    item: it,
    active: active,
    collapsed: collapsed,
    onClick: onNavigate
  }))))), /*#__PURE__*/React.createElement("div", {
    onClick: () => setCollapsed(c => !c),
    style: {
      height: 40,
      borderTop: '1px solid var(--cf-divider)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: collapsed ? 'center' : 'flex-start',
      gap: 10,
      padding: collapsed ? 0 : '0 16px',
      cursor: 'pointer',
      color: 'var(--cf-fg-secondary)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph ph-' + (collapsed ? 'caret-right' : 'caret-left'),
    style: {
      fontSize: 16
    }
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px var(--cf-font-sans)'
    }
  }, "Collapse")));
}
Object.assign(window, {
  SideNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/SideNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Cloud Foundation — icon module (auto-generated from source SVGs)
// Product icons inherit `currentColor`; size via the `size` prop.
const PRODUCT_PATHS = {
  "Analytics": "<path d=\"M28 25H27L27 5C27 4.73478 26.8946 4.48043 26.7071 4.29289C26.5196 4.10536 26.2652 4 26 4L19 4C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5V10L12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11V16L6 16C5.73478 16 5.48043 16.1054 5.29289 16.2929C5.10536 16.4804 5 16.7348 5 17L5 25H4C3.73478 25 3.48043 25.1054 3.29289 25.2929C3.10536 25.4804 3 25.7348 3 26C3 26.2652 3.10536 26.5196 3.29289 26.7071C3.48043 26.8946 3.73478 27 4 27L28 27C28.2652 27 28.5196 26.8946 28.7071 26.7071C28.8946 26.5196 29 26.2652 29 26C29 25.7348 28.8946 25.4804 28.7071 25.2929C28.5196 25.1054 28.2652 25 28 25ZM20 6L25 6L25 25H20L20 6ZM13 12L18 12L18 25L13 25L13 12ZM7 18H11L11 25H7L7 18Z\" fill=\"currentColor\"></path>",
  "CloudCode": "<path d=\"M23.457 18.2812C23.8536 17.8969 24.4867 17.9082 24.8711 18.3047L29.7188 23.3047C30.0938 23.6923 30.0938 24.3077 29.7188 24.6953L24.8711 29.6953C24.4867 30.0918 23.8536 30.1031 23.457 29.7188C23.0607 29.3345 23.0516 28.7013 23.4355 28.3047L27.6055 24L23.4355 19.6953C23.0516 19.2987 23.0607 18.6655 23.457 18.2812Z\" fill=\"currentColor\"></path> <path d=\"M11.7051 18.2676C12.1098 17.8921 12.7415 17.9157 13.1172 18.3203C13.4927 18.725 13.4691 19.3567 13.0645 19.7324L8.4668 24L13.0645 28.2676C13.4691 28.6433 13.4927 29.275 13.1172 29.6797C12.7415 30.0843 12.1098 30.1079 11.7051 29.7324L6.32031 24.7324C6.11655 24.5432 6 24.2781 6 24C6 23.7219 6.11655 23.4568 6.32031 23.2676L11.7051 18.2676Z\" fill=\"currentColor\"></path> <path d=\"M19.5742 18.0273C20.1119 18.1535 20.4464 18.6908 20.3203 19.2285L17.9727 29.2285C17.8464 29.766 17.3091 30.0988 16.7715 29.9727C16.234 29.8464 15.9012 29.3091 16.0273 28.7715L18.373 18.7715C18.4993 18.234 19.0366 17.9013 19.5742 18.0273Z\" fill=\"currentColor\"></path> <path d=\"M20 2C25.5228 2 30 6.47715 30 12C30 14.4173 29.1425 16.6344 27.7148 18.3633L26.3086 16.9121C27.3661 15.5559 28 13.853 28 12C28 7.58172 24.4183 4 20 4C15.5817 4 12 7.58172 12 12C12 12.3012 12.0166 12.5987 12.0488 12.8906C12.1092 13.4394 11.7128 13.9335 11.1641 13.9941C10.6154 14.0544 10.1212 13.6581 10.0605 13.1094C10.0203 12.7448 10 12.3746 10 12C10 11.3652 10.0607 10.7445 10.1738 10.1426C9.79764 10.0521 9.40535 10 9 10C6.23858 10 4 12.2386 4 15C4 17.1427 5.35013 18.9642 7.24414 19.6758L5.6582 21.1504C3.47941 19.964 2 17.6554 2 15C2 11.134 5.13401 8 9 8C9.59999 8 10.1832 8.07615 10.7402 8.21875C12.2315 4.57064 15.8153 2 20 2Z\" fill=\"currentColor\"></path>",
  "CloudSave": "<path d=\"M30.9999 16C31.0062 18.3815 30.2336 20.6997 28.7999 22.6013C28.7209 22.7063 28.6221 22.7948 28.5089 22.8617C28.3958 22.9285 28.2705 22.9724 28.1404 22.9909C28.0103 23.0093 27.8778 23.002 27.7505 22.9692C27.6233 22.9365 27.5037 22.879 27.3986 22.8C27.2936 22.7211 27.2051 22.6222 27.1383 22.5091C27.0714 22.3959 27.0275 22.2707 27.0091 22.1406C26.9906 22.0105 26.9979 21.878 27.0307 21.7507C27.0634 21.6234 27.1209 21.5038 27.1999 21.3988C28.3734 19.8441 29.0056 17.9479 28.9999 16C28.9999 13.6131 28.0517 11.3239 26.3638 9.63607C24.676 7.94825 22.3868 7.00004 19.9999 7.00004C17.6129 7.00004 15.3238 7.94825 13.6359 9.63607C11.9481 11.3239 10.9999 13.6131 10.9999 16C10.9999 16.2653 10.8945 16.5196 10.707 16.7071C10.5195 16.8947 10.2651 17 9.99988 17C9.73467 17 9.48031 16.8947 9.29278 16.7071C9.10524 16.5196 8.99988 16.2653 8.99988 16C8.9994 14.9909 9.13778 13.9865 9.41113 13.015C9.27489 13 9.13738 13 8.99988 13C7.40859 13 5.88246 13.6322 4.75724 14.7574C3.63203 15.8826 2.99988 17.4087 2.99988 19C2.99988 20.5913 3.63203 22.1175 4.75724 23.2427C5.88246 24.3679 7.40859 25 8.99988 25H11.9999C12.2651 25 12.5195 25.1054 12.707 25.2929C12.8945 25.4805 12.9999 25.7348 12.9999 26C12.9999 26.2653 12.8945 26.5196 12.707 26.7071C12.5195 26.8947 12.2651 27 11.9999 27H8.99988C7.9001 27.0003 6.81208 26.7738 5.80377 26.3347C4.79546 25.8955 3.88853 25.2532 3.1396 24.4478C2.39068 23.6425 1.81585 22.6913 1.45103 21.6538C1.08621 20.6163 0.939225 19.5147 1.01926 18.4179C1.09929 17.321 1.40462 16.2524 1.91619 15.2788C2.42775 14.3053 3.13455 13.4477 3.99245 12.7595C4.85035 12.0714 5.84092 11.5675 6.90229 11.2794C7.96366 10.9913 9.07304 10.9251 10.1611 11.085C11.2691 8.86898 13.0928 7.09188 15.3368 6.04158C17.5808 4.99127 20.1136 4.72928 22.525 5.29804C24.9365 5.8668 27.0853 7.233 28.6234 9.17535C30.1616 11.1177 30.9989 13.5224 30.9999 16ZM19.7074 15.2925C19.6145 15.1996 19.5042 15.1258 19.3828 15.0755C19.2614 15.0252 19.1313 14.9992 18.9999 14.9992C18.8685 14.9992 18.7383 15.0252 18.6169 15.0755C18.4955 15.1258 18.3853 15.1996 18.2924 15.2925L14.2924 19.2925C14.1995 19.3854 14.1258 19.4957 14.0755 19.6171C14.0252 19.7385 13.9993 19.8686 13.9993 20C13.9993 20.1314 14.0252 20.2615 14.0755 20.3829C14.1258 20.5043 14.1995 20.6146 14.2924 20.7075C14.48 20.8952 14.7345 21.0006 14.9999 21.0006C15.1313 21.0006 15.2614 20.9747 15.3828 20.9244C15.5042 20.8741 15.6145 20.8004 15.7074 20.7075L17.9999 18.4138V26C17.9999 26.2653 18.1052 26.5196 18.2928 26.7071C18.4803 26.8947 18.7347 27 18.9999 27C19.2651 27 19.5195 26.8947 19.707 26.7071C19.8945 26.5196 19.9999 26.2653 19.9999 26V18.4138L22.2924 20.7075C22.3853 20.8004 22.4956 20.8741 22.617 20.9244C22.7384 20.9747 22.8685 21.0006 22.9999 21.0006C23.1313 21.0006 23.2614 20.9747 23.3828 20.9244C23.5042 20.8741 23.6145 20.8004 23.7074 20.7075C23.8003 20.6146 23.874 20.5043 23.9243 20.3829C23.9746 20.2615 24.0004 20.1314 24.0004 20C24.0004 19.8686 23.9746 19.7385 23.9243 19.6171C23.874 19.4957 23.8003 19.3854 23.7074 19.2925L19.7074 15.2925Z\" fill=\"currentColor\"></path>",
  "CloudContent": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.877 6.02539C27.6031 6.14226 28.2168 6.65319 28.4551 7.36719L29.8965 11.6914C29.9644 11.8952 30 12.1094 30 12.3242V22L29.9902 22.2051C29.8944 23.1459 29.1459 23.8944 28.2051 23.9902L28 24H26C26 26.2091 24.2091 28 22 28C19.7909 28 18 26.2091 18 24H14C14 26.2091 12.2091 28 10 28C7.79086 28 6 26.2091 6 24H4C2.89543 24 2 23.1046 2 22V18C2 16.8954 2.89543 16 4 16H20V8C20 6.89543 20.8954 6 22 6H26.5586L26.877 6.02539ZM10 22C8.89543 22 8 22.8954 8 24C8 25.1046 8.89543 26 10 26C11.1046 26 12 25.1046 12 24C12 22.8954 11.1046 22 10 22ZM22 22C20.8954 22 20 22.8954 20 24C20 25.1046 20.8954 26 22 26C23.1046 26 24 25.1046 24 24C24 22.8954 23.1046 22 22 22ZM22 20C23.4804 20 24.7722 20.8046 25.4639 22H28V14H22V20ZM4 22H6.53613C7.22781 20.8046 8.51962 20 10 20C11.4804 20 12.7722 20.8046 13.4639 22H18.5361C18.8873 21.3931 19.3931 20.8873 20 20.5361V18H4V22ZM22 12H27.8916L26.5586 8H22V12Z\" fill=\"currentColor\"></path> <path d=\"M12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14H6C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6C6.11456 6 6.22772 6.00814 6.33984 6.01758C7.15894 3.67877 9.38154 2 12 2Z\" fill=\"currentColor\"></path>",
  "Economy": "<path d=\"M17.25 7.64719V7.125C17.25 4.77375 13.7034 3 9 3C4.29656 3 0.75 4.77375 0.75 7.125V10.875C0.75 12.8334 3.21094 14.3897 6.75 14.8556V15.375C6.75 17.7262 10.2966 19.5 15 19.5C19.7034 19.5 23.25 17.7262 23.25 15.375V11.625C23.25 9.68437 20.8669 8.12625 17.25 7.64719ZM21.75 11.625C21.75 12.8644 18.8634 14.25 15 14.25C14.6503 14.25 14.3034 14.2378 13.9613 14.2153C15.9834 13.4784 17.25 12.2812 17.25 10.875V9.16313C20.0503 9.58031 21.75 10.7128 21.75 11.625ZM6.75 13.3359V11.1056C7.49604 11.2028 8.24765 11.2511 9 11.25C9.75235 11.2511 10.504 11.2028 11.25 11.1056V13.3359C10.5051 13.446 9.75302 13.5008 9 13.5C8.24698 13.5008 7.49493 13.446 6.75 13.3359ZM15.75 9.55594V10.875C15.75 11.6616 14.5866 12.5062 12.75 13.0191V10.8281C13.9603 10.5347 14.985 10.0978 15.75 9.55594ZM9 4.5C12.8634 4.5 15.75 5.88562 15.75 7.125C15.75 8.36438 12.8634 9.75 9 9.75C5.13656 9.75 2.25 8.36438 2.25 7.125C2.25 5.88562 5.13656 4.5 9 4.5ZM2.25 10.875V9.55594C3.015 10.0978 4.03969 10.5347 5.25 10.8281V13.0191C3.41344 12.5062 2.25 11.6616 2.25 10.875ZM8.25 15.375V14.9841C8.49656 14.9934 8.74594 15 9 15C9.36375 15 9.71906 14.9878 10.0678 14.9672C10.4552 15.1059 10.8499 15.2236 11.25 15.3197V17.5191C9.41344 17.0062 8.25 16.1616 8.25 15.375ZM12.75 17.8359V15.6C13.4958 15.7003 14.2475 15.7504 15 15.75C15.7523 15.7511 16.504 15.7028 17.25 15.6056V17.8359C15.758 18.0547 14.242 18.0547 12.75 17.8359ZM18.75 17.5191V15.3281C19.9603 15.0347 20.985 14.5978 21.75 14.0559V15.375C21.75 16.1616 20.5866 17.0062 18.75 17.5191Z\" fill=\"currentColor\"></path>",
  "Matchmaker": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14 2C20.3715 2 25.5817 6.96581 25.9746 13.2383C25.3331 12.7949 24.614 12.4572 23.8418 12.2471C23.7023 11.463 23.4753 10.7098 23.165 10H19.6572C19.7878 10.7387 19.8818 11.5106 19.9385 12.3076C19.239 12.5228 18.587 12.8463 18 13.2559C17.995 13.2524 17.9903 13.2486 17.9854 13.2451C17.9459 12.092 17.819 11.0018 17.6221 10H10.3779C10.181 11.0018 10.0531 12.092 10.0137 13.2451C9.2206 13.7955 8.54714 14.5058 8.03906 15.3291C8.01442 14.8927 8 14.4493 8 14C8 12.5974 8.12164 11.2512 8.34277 10H4.83496C4.29948 11.2252 4 12.5774 4 14C4 14.6849 4.06902 15.3538 4.2002 16H7.6748C7.37937 16.6218 7.17331 17.2937 7.07227 18H4.83496C5.44362 19.3926 6.36194 20.6171 7.5 21.5928C7.67501 22.0291 7.89189 22.444 8.14648 22.832C7.75156 23.0819 7.3428 23.3725 6.94141 23.7021C3.94735 21.5201 2 17.9884 2 14C2 7.37258 7.37258 2 14 2ZM10.1709 4.75977C8.50557 5.45064 7.06703 6.57809 5.99902 8H8.80469C9.16226 6.76389 9.62453 5.66633 10.1709 4.75977ZM14 4C13.5089 4 12.5262 4.4501 11.5469 6.4082C11.3086 6.88479 11.0907 7.41818 10.8975 8H17.1025C16.9093 7.41818 16.6914 6.88479 16.4531 6.4082C15.4738 4.4501 14.4911 4 14 4ZM17.8281 4.75977C18.3746 5.66641 18.8377 6.76369 19.1953 8H22.001C20.9328 6.57785 19.4938 5.45061 17.8281 4.75977Z\" fill=\"currentColor\"></path> <path d=\"M14.0002 14C14.9112 14.0001 15.7646 14.2451 16.5002 14.6709C15.5611 15.8623 15.0002 17.3653 15.0002 19C15.0002 20.4166 15.4245 21.7315 16.1467 22.832C14.6997 23.7476 13.064 25.2061 12.3029 27.1523L12.1623 27.5508C11.9061 28.3581 11.9562 29.2323 12.2961 30H7.33419C6.90586 29.9998 6.50269 29.7828 6.25216 29.418C6.00186 29.053 5.93316 28.583 6.06857 28.1562C6.54856 26.6456 7.8672 25.372 9.23263 24.5117C9.95897 24.0543 10.7762 23.6674 11.6213 23.3984C10.0603 22.5524 9.00021 20.9002 9.00021 19C9.00021 16.2386 11.2387 14 14.0002 14Z\" fill=\"currentColor\"></path> <path d=\"M22.0001 14C24.7615 14.0001 27.0002 16.2386 27.0002 19C27.0002 20.9007 25.9388 22.5527 24.3771 23.3984C25.2229 23.6675 26.0409 24.0539 26.7678 24.5117C28.1334 25.372 29.452 26.6454 29.932 28.1562C30.0675 28.5831 29.9969 29.0529 29.7464 29.418C29.4958 29.7825 29.0945 30 28.6663 30H15.3339C14.9055 29.9998 14.5023 29.7829 14.2518 29.418C14.0015 29.053 13.9328 28.583 14.0682 28.1562C14.5482 26.6455 15.8669 25.372 17.2324 24.5117C17.9588 24.0542 18.7759 23.6675 19.6211 23.3984C18.0601 22.5524 16.9999 20.9002 16.9999 19C16.9999 16.2386 19.2386 14 22.0001 14Z\" fill=\"currentColor\"></path>",
  "Relay": "<path d=\"M16.0003 11C15.0114 11 14.0447 11.2933 13.2225 11.8427C12.4002 12.3921 11.7594 13.173 11.3809 14.0866C11.0025 15.0002 10.9035 16.0056 11.0964 16.9755C11.2893 17.9454 11.7655 18.8363 12.4648 19.5355C13.164 20.2348 14.055 20.711 15.0249 20.9039C15.9948 21.0969 17.0001 20.9979 17.9137 20.6194C18.8274 20.241 19.6083 19.6001 20.1577 18.7779C20.7071 17.9556 21.0003 16.9889 21.0003 16C21.0003 14.6739 20.4735 13.4022 19.5358 12.4645C18.5982 11.5268 17.3264 11 16.0003 11ZM16.0003 19C15.407 19 14.8269 18.8241 14.3336 18.4944C13.8403 18.1648 13.4557 17.6962 13.2287 17.1481C13.0016 16.5999 12.9422 15.9967 13.058 15.4147C13.1737 14.8328 13.4594 14.2983 13.879 13.8787C14.2985 13.4591 14.8331 13.1734 15.415 13.0577C15.997 12.9419 16.6002 13.0013 17.1484 13.2284C17.6965 13.4554 18.1651 13.84 18.4947 14.3333C18.8244 14.8267 19.0003 15.4067 19.0003 16C19.0003 16.7957 18.6842 17.5587 18.1216 18.1213C17.559 18.6839 16.796 19 16.0003 19ZM25.2141 19.8925C24.7844 20.9082 24.1897 21.8459 23.4541 22.6675C23.2759 22.8603 23.0291 22.9753 22.767 22.9877C22.5048 23.0001 22.2483 22.9089 22.0527 22.7339C21.8571 22.5588 21.7382 22.3139 21.7217 22.052C21.7051 21.79 21.7921 21.5321 21.9641 21.3338C23.2771 19.8677 24.0032 17.9688 24.0032 16.0006C24.0032 14.0325 23.2771 12.1336 21.9641 10.6675C21.874 10.5701 21.8043 10.4557 21.7589 10.3311C21.7135 10.2064 21.6933 10.074 21.6996 9.94148C21.7059 9.80897 21.7384 9.67903 21.7954 9.55924C21.8524 9.43944 21.9327 9.33218 22.0315 9.2437C22.1303 9.15522 22.2458 9.08729 22.3712 9.04387C22.4965 9.00045 22.6292 8.98241 22.7616 8.99079C22.894 8.99917 23.0234 9.03382 23.1423 9.0927C23.2612 9.15158 23.3672 9.23353 23.4541 9.33376C24.7167 10.7467 25.5524 12.489 25.864 14.3581C26.1756 16.2272 25.9502 18.1464 25.2141 19.8925ZM8.62531 12.8863C8.03529 14.283 7.85433 15.8186 8.10352 17.3142C8.35271 18.8098 9.0218 20.2038 10.0328 21.3338C10.2047 21.5321 10.2918 21.79 10.2752 22.052C10.2586 22.3139 10.1397 22.5588 9.94417 22.7339C9.74861 22.9089 9.49207 23.0001 9.2299 22.9877C8.96773 22.9753 8.72095 22.8603 8.54281 22.6675C6.90104 20.835 5.99319 18.4611 5.99319 16.0006C5.99319 13.5402 6.90104 11.1663 8.54281 9.33376C8.71968 9.13568 8.96799 9.01597 9.23312 9.00097C9.49825 8.98596 9.75848 9.0769 9.95656 9.25376C10.1546 9.43063 10.2744 9.67894 10.2894 9.94407C10.3044 10.2092 10.2134 10.4694 10.0366 10.6675C9.44656 11.3239 8.96966 12.0737 8.62531 12.8863ZM31.0003 16C31.0064 19.9272 29.4667 23.699 26.7141 26.5C26.623 26.5974 26.5134 26.6756 26.3917 26.7299C26.2699 26.7843 26.1386 26.8138 26.0053 26.8167C25.872 26.8196 25.7395 26.7958 25.6155 26.7467C25.4916 26.6976 25.3787 26.6242 25.2835 26.5309C25.1884 26.4375 25.1128 26.3261 25.0613 26.2031C25.0098 26.0801 24.9834 25.9481 24.9837 25.8148C24.984 25.6815 25.0109 25.5496 25.063 25.4268C25.115 25.3041 25.191 25.193 25.2866 25.1C27.67 22.6717 29.0053 19.4051 29.0053 16.0025C29.0053 12.6 27.67 9.33331 25.2866 6.90501C25.1002 6.71572 24.9968 6.46016 24.9989 6.19456C25.001 5.92896 25.1085 5.67508 25.2978 5.48876C25.4871 5.30245 25.7427 5.19896 26.0083 5.20107C26.2739 5.20318 26.5277 5.31072 26.7141 5.50001C29.4667 8.30105 31.0064 12.0728 31.0003 16ZM6.71406 25.0975C6.80615 25.1912 6.87888 25.3022 6.92809 25.424C6.9773 25.5459 7.00203 25.6762 7.00087 25.8076C6.99971 25.939 6.97268 26.0689 6.92132 26.1898C6.86997 26.3108 6.79529 26.4204 6.70156 26.5125C6.60783 26.6046 6.49688 26.6773 6.37504 26.7265C6.2532 26.7758 6.12287 26.8005 5.99147 26.7993C5.86008 26.7982 5.7302 26.7711 5.60925 26.7198C5.4883 26.6684 5.37865 26.5937 5.28656 26.5C2.53429 23.6981 0.992188 19.9276 0.992188 16C0.992188 12.0725 2.53429 8.30192 5.28656 5.50001C5.37763 5.40265 5.48724 5.32448 5.60896 5.27009C5.73068 5.21571 5.86204 5.18621 5.99533 5.18334C6.12861 5.18046 6.26113 5.20427 6.38508 5.25335C6.50903 5.30244 6.62191 5.37581 6.71709 5.46916C6.81227 5.5625 6.88783 5.67394 6.93931 5.79691C6.9908 5.91988 7.01717 6.05191 7.01689 6.18522C7.01661 6.31854 6.98967 6.45045 6.93767 6.5732C6.88566 6.69596 6.80964 6.80707 6.71406 6.90001C4.33064 9.32831 2.99536 12.595 2.99536 15.9975C2.99536 19.4001 4.33064 22.6667 6.71406 25.095V25.0975Z\" fill=\"currentColor\"></path>",
  "Lobby": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.5 2C13.6421 2 17 5.35786 17 9.5C17 13.6421 13.6421 17 9.5 17C5.35786 17 2 13.6421 2 9.5C2 5.35786 5.35786 2 9.5 2ZM9 4.5C8.44772 4.5 8 4.94772 8 5.5V10C8 10.5523 8.44772 11 9 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10V5.5C10 4.94772 9.55228 4.5 9 4.5Z\" fill=\"currentColor\"></path> <path d=\"M22 10C25.3137 10 28 12.6863 28 16V16.5391C29.1947 17.2309 30 18.5201 30 20C30 21.4807 29.1935 22.7675 28 23.459V29C28 29.5523 27.5523 30 27 30H9C8.44772 30 8 29.5523 8 29V23.459C6.80654 22.7675 6 21.4807 6 20C6 19.4504 6.111 18.9269 6.31152 18.4502C6.95074 18.6779 7.62142 18.8375 8.31543 18.9238C8.11643 19.2347 8 19.6035 8 20C8 20.8693 8.55584 21.6117 9.33398 21.8867C9.73317 22.0282 10 22.4065 10 22.8301V28H26V22.8301C26 22.4065 26.2668 22.0282 26.666 21.8867C27.4442 21.6117 28 20.8693 28 20C28 18.8954 27.1046 18 26 18C24.8954 18 24 18.8954 24 20V24C24 24.5523 23.5523 25 23 25C22.4477 25 22 24.5523 22 24V22H14V24C14 24.5523 13.5523 25 13 25C12.4477 25 12 24.5523 12 24V20C12 19.5354 11.84 19.1091 11.5742 18.7695C12.2545 18.618 12.9068 18.3943 13.5234 18.1055C13.8273 18.6694 14 19.3145 14 20H22C22 17.7909 23.7909 16 26 16C26 13.7909 24.2091 12 22 12H18.665C18.8398 11.3577 18.9506 10.6888 18.9863 10H22Z\" fill=\"currentColor\"></path>",
  "Friends": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.0002 2C21.9295 2 23.5393 3.36607 23.9163 5.18359C26.8543 2.24754 31.5492 6.03742 29.342 9.51758L26.0159 15.5508V26.7891C26.0154 30.2856 21.5578 31.0873 20.0178 28.5723C19.1454 29.9989 17.3339 30.3583 15.928 29.7656C15.9338 29.7681 15.9398 29.771 15.9456 29.7734C15.6774 29.8801 15.3986 29.9534 15.1194 29.9863C14.4075 30.0699 13.6155 29.9246 12.9338 29.457C12.5742 29.2101 12.2758 28.8955 12.051 28.5312C11.7987 28.924 11.4648 29.2546 11.0588 29.4961C10.3513 29.9165 9.58301 29.9948 8.96508 29.9297C8.34693 29.8643 7.69785 29.6391 7.15649 29.2305C6.6194 28.8246 6.00041 28.0734 6.00024 27V16.5293L2.65844 10.6836C2.29769 10.0521 1.88013 9.05199 2.06469 7.89062L2.13696 7.54102C2.23069 7.17112 2.39955 6.74821 2.70923 6.3457C3.13881 5.78774 3.71891 5.42651 4.35766 5.22461L4.65844 5.14258C6.14584 4.81419 7.40999 5.56751 8.07055 6.0957L10.6213 8.13477C10.23 7.51663 10.0002 6.78571 10.0002 6C10.0002 3.79094 11.7912 2.00013 14.0002 2C15.1963 2 16.2672 2.52733 17.0002 3.35938C17.7332 2.52724 18.8042 2.00007 20.0002 2ZM27.6018 8.53125C28.6606 7.00777 26.5539 5.296 25.2795 6.64453L22.0764 10H12.7288L12.4514 10.0215C11.1226 10.2504 10.7328 12.1055 12.0002 12.8105L16.0159 15.0371V26.7891L16.0413 27.0605C16.2707 28.2521 18.002 28.3984 18.428 27.2617L18.4983 27L19.5159 21H20.5159L21.5334 26.998C21.7911 28.5074 24.0153 28.3199 24.0159 26.7891V15.0371L27.6018 8.53125ZM6.82251 7.6582C6.29065 7.2329 5.60857 6.92579 4.95923 7.13086C4.33364 7.32887 4.11468 7.73204 4.0393 8.20508C3.95758 8.71995 4.13621 9.23867 4.39477 9.69141L8.00024 16V27C8.00092 27.9996 10.285 28.5086 10.5432 27L11.5608 21H12.5608L13.5784 27L13.6487 27.2617C13.7568 27.5524 13.9509 27.753 14.1799 27.873C14.0761 27.5469 14.0159 27.1853 14.0159 26.7891V16.2148L11.0315 14.5586C9.17318 13.5259 8.83583 11.435 9.61352 9.89062L6.82251 7.6582ZM14.0002 4C12.8958 4.00013 12.0002 4.89551 12.0002 6C12.0002 7.10449 12.8958 7.99987 14.0002 8C15.1048 8 16.0002 7.10457 16.0002 6C16.0002 4.89543 15.1048 4 14.0002 4ZM20.0002 4C18.8958 4.00013 18.0002 4.89551 18.0002 6C18.0002 7.10449 18.8958 7.99987 20.0002 8C21.1048 8 22.0002 7.10457 22.0002 6C22.0002 4.89543 21.1048 4 20.0002 4Z\" fill=\"currentColor\"></path>",
  "Vivox": "<path d=\"M23.0002 14C23.5525 14 24.0002 14.4477 24.0002 15C24.0002 17.1706 23.2558 18.9477 21.9514 20.1777C20.8877 21.1805 19.509 21.7586 18.0002 21.9355V23C18.0002 23.5523 17.5525 24 17.0002 24C16.448 23.9999 16.0002 23.5522 16.0002 23V21.9355C14.4915 21.7586 13.1127 21.1805 12.049 20.1777C10.7447 18.9477 10.0002 17.1705 10.0002 15C10.0002 14.4478 10.448 14.0001 11.0002 14C11.5525 14 12.0002 14.4477 12.0002 15C12.0002 16.6953 12.5684 17.9194 13.4201 18.7227C14.2813 19.5346 15.5212 20 17.0002 20C18.4792 20 19.7191 19.5346 20.5803 18.7227C21.4321 17.9194 22.0002 16.6954 22.0002 15C22.0002 14.4478 22.448 14.0001 23.0002 14Z\" fill=\"currentColor\"></path> <path d=\"M17.0002 7C18.6571 7 20.0002 8.34315 20.0002 10V15C20.0002 16.6569 18.6571 18 17.0002 18C15.3434 17.9999 14.0002 16.6568 14.0002 15V10C14.0002 8.34321 15.3434 7.00011 17.0002 7Z\" fill=\"currentColor\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.0022 2C24.1812 2.00079 30.0022 7.82078 30.0022 15C30.0022 22.1792 24.1812 27.9992 17.0022 28C15.4454 28 13.9505 27.722 12.5647 27.2188L5.2795 29.8457C3.29286 30.5616 1.39607 28.587 2.19161 26.6309L4.94356 19.8613C4.337 18.3582 4.00215 16.7174 4.00215 15C4.00215 7.8203 9.82245 2 17.0022 2ZM17.0022 4C10.927 4 6.00215 8.92487 6.00215 15C6.00215 16.5869 6.33679 18.0931 6.93965 19.4531C7.0494 19.7011 7.05338 19.9832 6.95137 20.2344L4.04317 27.3848C3.90047 27.737 4.24215 28.0928 4.59981 27.9648L12.2307 25.2148L12.4065 25.168C12.5847 25.1385 12.7697 25.159 12.9397 25.2266C14.1948 25.7254 15.5659 26 17.0022 26C23.0766 25.9992 28.0022 21.0746 28.0022 15C28.0022 8.92535 23.0766 4.00079 17.0022 4Z\" fill=\"currentColor\"></path>",
  "Leaderboard": "<path d=\"M10.5384 9.61219C10.5073 9.51874 10.4948 9.42008 10.5018 9.32183C10.5088 9.22357 10.5351 9.12766 10.5791 9.03956C10.6232 8.95146 10.6841 8.87289 10.7586 8.80836C10.833 8.74382 10.9194 8.69458 11.0128 8.66344L12.1378 8.28844C12.2506 8.25085 12.3706 8.2406 12.4881 8.25852C12.6056 8.27645 12.7171 8.32203 12.8135 8.39152C12.91 8.46102 12.9885 8.55243 13.0426 8.65822C13.0968 8.76401 13.125 8.88116 13.125 9V12.75C13.125 12.9489 13.046 13.1397 12.9053 13.2803C12.7647 13.421 12.5739 13.5 12.375 13.5C12.1761 13.5 11.9853 13.421 11.8447 13.2803C11.704 13.1397 11.625 12.9489 11.625 12.75V10.0406L11.4872 10.0866C11.3937 10.1177 11.2951 10.1302 11.1968 10.1232C11.0986 10.1162 11.0027 10.0899 10.9146 10.0459C10.8265 10.0018 10.7479 9.94086 10.6834 9.86645C10.6188 9.79203 10.5696 9.70564 10.5384 9.61219ZM23.25 19.5C23.25 19.6989 23.171 19.8897 23.0303 20.0303C22.8897 20.171 22.6989 20.25 22.5 20.25H1.5C1.30109 20.25 1.11032 20.171 0.96967 20.0303C0.829018 19.8897 0.75 19.6989 0.75 19.5C0.75 19.3011 0.829018 19.1103 0.96967 18.9697C1.11032 18.829 1.30109 18.75 1.5 18.75H2.25V9.75C2.25 9.35218 2.40804 8.97064 2.68934 8.68934C2.97064 8.40804 3.35218 8.25 3.75 8.25H7.5V5.25C7.5 4.85218 7.65804 4.47064 7.93934 4.18934C8.22064 3.90804 8.60218 3.75 9 3.75H15C15.3978 3.75 15.7794 3.90804 16.0607 4.18934C16.342 4.47064 16.5 4.85218 16.5 5.25V12H20.25C20.6478 12 21.0294 12.158 21.3107 12.4393C21.592 12.7206 21.75 13.1022 21.75 13.5V18.75H22.5C22.6989 18.75 22.8897 18.829 23.0303 18.9697C23.171 19.1103 23.25 19.3011 23.25 19.5ZM16.5 13.5V18.75H20.25V13.5H16.5ZM9 18.75H15V5.25H9V18.75ZM3.75 18.75H7.5V9.75H3.75V18.75Z\" fill=\"currentColor\"></path>",
  "RemoteConfig": "<path d=\"M16 4.4138V16.0001C16 16.2653 15.8946 16.5196 15.7071 16.7072C15.5196 16.8947 15.2652 17.0001 15 17.0001C14.7348 17.0001 14.4804 16.8947 14.2929 16.7072C14.1054 16.5196 14 16.2653 14 16.0001L14 4.4138L11.7075 6.70755C11.6146 6.80046 11.5043 6.87417 11.3829 6.92445C11.2615 6.97473 11.1314 7.00061 11 7.00061C10.7346 7.00061 10.4801 6.8952 10.2925 6.70755C10.1996 6.61464 10.1259 6.50434 10.0756 6.38295C10.0253 6.26156 9.99944 6.13145 9.99944 6.00005C9.99944 5.73469 10.1049 5.4802 10.2925 5.29255L14.2925 1.29255C14.3854 1.19958 14.4957 1.12582 14.6171 1.07549C14.7385 1.02517 14.8686 0.999268 15 0.999268C15.1314 0.999268 15.2615 1.02517 15.3829 1.07549C15.5043 1.12582 15.6146 1.19958 15.7075 1.29255L19.7075 5.29255C19.8951 5.4802 20.0006 5.73469 20.0006 6.00005C20.0006 6.26542 19.8951 6.51991 19.7075 6.70755C19.5199 6.8952 19.2654 7.00061 19 7.00061C18.7346 7.00061 18.4801 6.8952 18.2925 6.70755L16 4.4138ZM24 15.4526L24 12.0001C24 11.4696 23.7893 10.9609 23.4142 10.5858C23.0391 10.2108 22.5304 10.0001 22 10.0001H20C19.7348 10.0001 19.4804 10.1054 19.2929 10.2929C19.1054 10.4805 19 10.7348 19 11.0001C19 11.2653 19.1054 11.5196 19.2929 11.7072C19.4804 11.8947 19.7348 12.0001 20 12.0001H22L22 22.0501C21.4036 21.4408 20.6055 21.0702 19.7552 21.0078C18.905 20.9454 18.0612 21.1954 17.3823 21.7109C16.7033 22.2265 16.2359 22.9721 16.0677 23.8078C15.8995 24.6436 16.0421 25.512 16.4688 26.2501L16.4988 26.2976L19.2813 30.5476C19.4265 30.7695 19.6539 30.9247 19.9135 30.979C20.1731 31.0332 20.4437 30.9821 20.6656 30.8369C20.8876 30.6917 21.0428 30.4643 21.097 30.2047C21.1513 29.9451 21.1002 29.6745 20.955 29.4526L18.1887 25.2288C17.9927 24.8825 17.9421 24.4725 18.0483 24.089C18.1545 23.7055 18.4087 23.3799 18.755 23.1838C19.1013 22.9877 19.5113 22.9372 19.8948 23.0434C20.2783 23.1496 20.6039 23.4038 20.8 23.7501C20.8087 23.7663 20.8188 23.7826 20.8288 23.7976L22.1637 25.8363C22.2818 26.0163 22.4547 26.1534 22.6568 26.2272C22.8589 26.3011 23.0795 26.3078 23.2857 26.2463C23.492 26.1848 23.6729 26.0584 23.8015 25.8859C23.9302 25.7134 23.9998 25.504 24 25.2888V18.0001C24.9426 18.8726 25.6954 19.9298 26.2115 21.106C26.7276 22.2821 26.996 23.5519 27 24.8363V30.0001C27 30.2653 27.1054 30.5196 27.2929 30.7072C27.4804 30.8947 27.7348 31.0001 28 31.0001C28.2652 31.0001 28.5196 30.8947 28.7071 30.7072C28.8946 30.5196 29 30.2653 29 30.0001V24.8313C28.9943 22.9788 28.5358 21.1559 27.6643 19.5212C26.7928 17.8865 25.5349 16.4898 24 15.4526ZM10 10.0001H8C7.46957 10.0001 6.96086 10.2108 6.58579 10.5858C6.21071 10.9609 6 11.4696 6 12.0001L6 25.0001C6 25.2653 6.10536 25.5196 6.29289 25.7072C6.48043 25.8947 6.73478 26.0001 7 26.0001C7.26522 26.0001 7.51957 25.8947 7.70711 25.7072C7.89464 25.5196 8 25.2653 8 25.0001L8 12.0001H10C10.2652 12.0001 10.5196 11.8947 10.7071 11.7072C10.8946 11.5196 11 11.2653 11 11.0001C11 10.7348 10.8946 10.4805 10.7071 10.2929C10.5196 10.1054 10.2652 10.0001 10 10.0001Z\" fill=\"currentColor\"></path>",
  "PlayerManagement": "<path d=\"M17.9999 19.7091C19.5675 18.7328 20.7745 17.2724 21.4382 15.549C22.1019 13.8256 22.1863 11.9329 21.6786 10.1572C21.1708 8.38156 20.0986 6.81959 18.624 5.70761C17.1495 4.59563 15.3529 3.99414 13.5061 3.99414C11.6593 3.99414 9.86274 4.59563 8.38822 5.70761C6.91369 6.81959 5.84144 8.38156 5.33369 10.1572C4.82594 11.9329 4.91031 13.8256 5.57405 15.549C6.23778 17.2724 7.44476 18.7328 9.01238 19.7091C6.43113 20.5541 4.10863 22.1329 2.24113 24.3554C2.15363 24.4554 2.08695 24.5719 2.045 24.6981C2.00305 24.8242 1.98667 24.9574 1.99681 25.09C2.00695 25.2225 2.04341 25.3517 2.10406 25.47C2.16471 25.5882 2.24833 25.6932 2.35003 25.7788C2.45173 25.8644 2.56948 25.9288 2.69638 25.9684C2.82328 26.0079 2.95679 26.0218 3.08911 26.0091C3.22143 25.9965 3.34989 25.9576 3.467 25.8947C3.5841 25.8318 3.68749 25.7462 3.77113 25.6429C6.28113 22.6479 9.73863 20.9991 13.4999 20.9991C17.2611 20.9991 20.7186 22.6479 23.2336 25.6429C23.4044 25.8461 23.6488 25.9732 23.9133 25.9962C24.1777 26.0191 24.4404 25.9361 24.6436 25.7654C24.8469 25.5947 24.9739 25.3502 24.9969 25.0858C25.0199 24.8213 24.9369 24.5586 24.7661 24.3554C22.8974 22.1329 20.5749 20.5541 17.9999 19.7091ZM6.99988 12.4991C6.99988 11.2136 7.3811 9.95685 8.09533 8.88793C8.80956 7.81901 9.82472 6.98589 11.0124 6.49392C12.2002 6.00195 13.5071 5.87323 14.768 6.12404C16.0288 6.37484 17.187 6.9939 18.0961 7.90295C19.0051 8.81199 19.6242 9.97018 19.875 11.2311C20.1258 12.4919 19.9971 13.7989 19.5051 14.9866C19.0131 16.1743 18.18 17.1895 17.1111 17.9037C16.0422 18.6179 14.7855 18.9991 13.4999 18.9991C11.7766 18.9972 10.1244 18.3117 8.90588 17.0931C7.68732 15.8746 7.00186 14.2224 6.99988 12.4991ZM30.5311 17.8829L29.9486 17.5466C30.017 17.1848 30.017 16.8134 29.9486 16.4516L30.5311 16.1154C30.7609 15.9828 30.9285 15.7643 30.9972 15.5081C31.0659 15.2519 31.03 14.9789 30.8974 14.7491C30.7648 14.5194 30.5463 14.3517 30.2901 14.2831C30.0339 14.2144 29.7609 14.2503 29.5311 14.3829L28.9474 14.7204C28.668 14.4807 28.3468 14.2947 27.9999 14.1716V13.4991C27.9999 13.2339 27.8945 12.9796 27.707 12.792C27.5195 12.6045 27.2651 12.4991 26.9999 12.4991C26.7347 12.4991 26.4803 12.6045 26.2928 12.792C26.1052 12.9796 25.9999 13.2339 25.9999 13.4991V14.1716C25.653 14.2947 25.3317 14.4807 25.0524 14.7204L24.4686 14.3829C24.3549 14.3172 24.2293 14.2746 24.0991 14.2575C23.9688 14.2404 23.8365 14.249 23.7097 14.2831C23.5828 14.3171 23.4639 14.3757 23.3597 14.4557C23.2555 14.5357 23.168 14.6354 23.1024 14.7491C23.0367 14.8629 22.9941 14.9885 22.977 15.1187C22.9598 15.2489 22.9685 15.3812 23.0025 15.5081C23.0366 15.635 23.0952 15.7539 23.1752 15.8581C23.2552 15.9623 23.3549 16.0497 23.4686 16.1154L24.0511 16.4516C23.9828 16.8134 23.9828 17.1848 24.0511 17.5466L23.4686 17.8829C23.2389 18.0155 23.0712 18.2339 23.0025 18.4902C22.9339 18.7464 22.9698 19.0194 23.1024 19.2491C23.235 19.4789 23.4534 19.6465 23.7097 19.7152C23.9659 19.7839 24.2389 19.748 24.4686 19.6154L25.0524 19.2779C25.3317 19.5176 25.653 19.7036 25.9999 19.8266V20.4991C25.9999 20.7644 26.1052 21.0187 26.2928 21.2062C26.4803 21.3938 26.7347 21.4991 26.9999 21.4991C27.2651 21.4991 27.5195 21.3938 27.707 21.2062C27.8945 21.0187 27.9999 20.7644 27.9999 20.4991V19.8266C28.3468 19.7036 28.668 19.5176 28.9474 19.2779L29.5311 19.6154C29.683 19.7035 29.8556 19.7497 30.0311 19.7491C30.2513 19.7492 30.4654 19.6766 30.6401 19.5426C30.8149 19.4086 30.9405 19.2206 30.9975 19.0079C31.0544 18.7952 31.0396 18.5697 30.9553 18.3662C30.871 18.1628 30.7219 17.9929 30.5311 17.8829ZM25.9999 16.9991C25.9999 16.8014 26.0585 16.608 26.1684 16.4436C26.2783 16.2791 26.4345 16.1509 26.6172 16.0753C26.7999 15.9996 27.001 15.9798 27.195 16.0184C27.389 16.0569 27.5671 16.1522 27.707 16.292C27.8468 16.4319 27.9421 16.6101 27.9807 16.804C28.0193 16.998 27.9994 17.1991 27.9238 17.3818C27.8481 17.5645 27.7199 17.7207 27.5555 17.8306C27.391 17.9405 27.1977 17.9991 26.9999 17.9991C26.7347 17.9991 26.4803 17.8938 26.2928 17.7062C26.1052 17.5187 25.9999 17.2644 25.9999 16.9991Z\" fill=\"currentColor\"></path>",
  "Triggers": "<path d=\"M28.9999 17.082C28.7875 19.552 27.874 21.9099 26.367 23.8783C24.86 25.8468 22.8221 27.3439 20.4932 28.1935C18.1642 29.0431 15.641 29.2098 13.2205 28.6741C10.8 28.1384 8.58281 26.9226 6.82983 25.1696C5.07685 23.4166 3.86099 21.1994 3.3253 18.7789C2.78962 16.3584 2.95638 13.8352 3.80598 11.5063C4.65558 9.17732 6.15267 7.13945 8.12112 5.63244C10.0896 4.12542 12.4475 3.21195 14.9174 2.99949C15.0488 2.98866 15.1809 3.00379 15.3064 3.04404C15.4319 3.08429 15.5482 3.14885 15.6487 3.23405C15.7492 3.31925 15.832 3.42341 15.8923 3.54059C15.9525 3.65777 15.9891 3.78567 15.9999 3.91699C16.0108 4.04831 15.9956 4.18048 15.9554 4.30595C15.9151 4.43143 15.8506 4.54774 15.7654 4.64826C15.6802 4.74878 15.576 4.83154 15.4588 4.8918C15.3417 4.95206 15.2138 4.98866 15.0824 4.99949C12.9919 5.17911 10.9962 5.95208 9.33008 7.22745C7.66396 8.50282 6.39677 10.2275 5.6776 12.1986C4.95843 14.1698 4.81721 16.3053 5.27055 18.354C5.72389 20.4026 6.75293 22.2792 8.2366 23.7628C9.72026 25.2465 11.5968 26.2755 13.6455 26.7289C15.6941 27.1822 17.8297 27.041 19.8008 26.3218C21.7719 25.6027 23.4966 24.3355 24.772 22.6694C26.0474 21.0032 26.8203 19.0075 26.9999 16.917C27.0218 16.6518 27.1482 16.4061 27.3512 16.234C27.5542 16.062 27.8172 15.9776 28.0824 15.9995C28.3477 16.0214 28.5933 16.1477 28.7654 16.3507C28.9375 16.5537 29.0218 16.8168 28.9999 17.082ZM14.9999 8.99949V15.9995C14.9999 16.2647 15.1053 16.5191 15.2928 16.7066C15.4804 16.8941 15.7347 16.9995 15.9999 16.9995H22.9999C23.2652 16.9995 23.5195 16.8941 23.7071 16.7066C23.8946 16.5191 23.9999 16.2647 23.9999 15.9995C23.9999 15.7343 23.8946 15.4799 23.7071 15.2924C23.5195 15.1048 23.2652 14.9995 22.9999 14.9995H16.9999V8.99949C16.9999 8.73427 16.8946 8.47992 16.7071 8.29238C16.5195 8.10485 16.2652 7.99949 15.9999 7.99949C15.7347 7.99949 15.4804 8.10485 15.2928 8.29238C15.1053 8.47992 14.9999 8.73427 14.9999 8.99949ZM19.9999 5.99949C20.2966 5.99949 20.5866 5.91152 20.8333 5.7467C21.08 5.58187 21.2722 5.34761 21.3858 5.07352C21.4993 4.79943 21.529 4.49783 21.4711 4.20686C21.4132 3.91588 21.2704 3.64861 21.0606 3.43883C20.8508 3.22905 20.5835 3.08619 20.2926 3.02831C20.0016 2.97044 19.7 3.00014 19.4259 3.11367C19.1518 3.2272 18.9176 3.41946 18.7527 3.66614C18.5879 3.91281 18.4999 4.20282 18.4999 4.49949C18.4999 4.89732 18.658 5.27885 18.9393 5.56015C19.2206 5.84146 19.6021 5.99949 19.9999 5.99949ZM24.4999 8.99949C24.7966 8.99949 25.0866 8.91152 25.3333 8.7467C25.58 8.58187 25.7722 8.34761 25.8858 8.07352C25.9993 7.79943 26.029 7.49783 25.9711 7.20686C25.9132 6.91588 25.7704 6.64861 25.5606 6.43883C25.3508 6.22905 25.0835 6.08619 24.7926 6.02831C24.5016 5.97044 24.2 6.00014 23.9259 6.11367C23.6518 6.2272 23.4176 6.41946 23.2527 6.66614C23.0879 6.91281 22.9999 7.20282 22.9999 7.49949C22.9999 7.89732 23.158 8.27885 23.4393 8.56015C23.7206 8.84146 24.1021 8.99949 24.4999 8.99949ZM27.4999 13.4995C27.7966 13.4995 28.0866 13.4115 28.3333 13.2467C28.58 13.0819 28.7722 12.8476 28.8858 12.5735C28.9993 12.2994 29.029 11.9978 28.9711 11.7069C28.9132 11.4159 28.7704 11.1486 28.5606 10.9388C28.3508 10.7291 28.0835 10.5862 27.7926 10.5283C27.5016 10.4704 27.2 10.5001 26.9259 10.6137C26.6518 10.7272 26.4176 10.9195 26.2527 11.1661C26.0879 11.4128 25.9999 11.7028 25.9999 11.9995C25.9999 12.3973 26.158 12.7788 26.4393 13.0602C26.7206 13.3415 27.1021 13.4995 27.4999 13.4995Z\" fill=\"currentColor\"></path>",
  "DevOps": "<path d=\"M20.4589 9.8601C20.5322 9.76835 20.583 9.66065 20.6071 9.54569C20.6312 9.43073 20.6279 9.31171 20.5976 9.19823C20.3683 8.33629 20.0253 7.50871 19.5776 6.73729C19.519 6.63634 19.4376 6.55046 19.34 6.4865C19.2423 6.42254 19.1311 6.38225 19.0151 6.36885L16.7914 6.12135C16.6989 6.02385 16.6051 5.9301 16.5101 5.8401L16.2476 3.61073C16.2341 3.49468 16.1937 3.38338 16.1295 3.28572C16.0654 3.18806 15.9794 3.10674 15.8782 3.04823C15.1065 2.60136 14.279 2.2587 13.4173 2.02916C13.3037 1.99897 13.1847 1.99589 13.0697 2.02015C12.9547 2.04441 12.8471 2.09535 12.7554 2.16885L11.0126 3.5601H10.6076L8.8601 2.16416C8.76835 2.09082 8.66065 2.04006 8.54569 2.01596C8.43073 1.99186 8.31171 1.9951 8.19823 2.02541C7.33643 2.25513 6.5089 2.59812 5.73729 3.04541C5.63634 3.10403 5.55046 3.18541 5.4865 3.28306C5.42254 3.38071 5.38225 3.49195 5.36885 3.60791L5.12135 5.83541C5.02385 5.92854 4.9301 6.02229 4.8401 6.11666L2.61073 6.3726C2.49468 6.3861 2.38338 6.42653 2.28572 6.49066C2.18806 6.55479 2.10674 6.64085 2.04823 6.74198C1.60136 7.51369 1.2587 8.3412 1.02916 9.20291C0.998973 9.31647 0.995886 9.43553 1.02015 9.55049C1.04441 9.66546 1.09535 9.77312 1.16885 9.86479L2.5601 11.6076V12.0126L1.16416 13.7601C1.09082 13.8519 1.04006 13.9595 1.01596 14.0745C0.991856 14.1895 0.995095 14.3085 1.02541 14.422C1.25472 15.2839 1.59773 16.1115 2.04541 16.8829C2.10403 16.9839 2.18541 17.0697 2.28306 17.1337C2.38071 17.1977 2.49195 17.238 2.60791 17.2514L4.83166 17.4989C4.92479 17.5964 5.01854 17.6901 5.11291 17.7801L5.3726 20.0095C5.3861 20.1255 5.42653 20.2368 5.49066 20.3345C5.55479 20.4321 5.64085 20.5135 5.74198 20.572C6.51369 21.0188 7.3412 21.3615 8.20291 21.591C8.31647 21.6212 8.43553 21.6243 8.55049 21.6001L8.22729 20.0414C7.74216 19.8887 7.27156 19.6932 6.82104 19.4573L6.58104 17.3414C6.56056 17.1568 6.47237 16.9865 6.33354 16.8632C6.13058 16.6828 5.93837 16.4906 5.75791 16.2876C5.63466 16.1488 5.4643 16.0606 5.27979 16.0401L3.16291 15.8039C2.92684 15.3534 2.73138 14.8828 2.57885 14.3976L3.90916 12.7345C4.02533 12.5894 4.08346 12.4063 4.07229 12.2207C4.05635 11.9497 4.05635 11.678 4.07229 11.407C4.08346 11.2214 4.02533 11.0383 3.90916 10.8932L2.57885 9.22729C2.7315 8.74216 2.92696 8.27156 3.16291 7.82104L5.27885 7.58104C5.46337 7.56056 5.63373 7.47237 5.75698 7.33354C5.93744 7.13058 6.12964 6.93837 6.3326 6.75791C6.47199 6.63458 6.56053 6.46383 6.58104 6.27885L6.81635 4.16291C7.26682 3.92684 7.73743 3.73138 8.2226 3.57885L9.88573 4.90916C10.0308 5.02533 10.2139 5.08346 10.3995 5.07229C10.6705 5.05635 10.9422 5.05635 11.2132 5.07229C11.3988 5.08346 11.5819 5.02533 11.727 4.90916L13.3929 3.57885C13.878 3.7315 14.3486 3.92696 14.7992 4.16291L15.0392 6.27885C15.0596 6.46337 15.1478 6.63373 15.2867 6.75698C15.4896 6.93744 15.6818 7.12964 15.8623 7.3326C15.9855 7.47143 16.1559 7.55962 16.3404 7.5801L18.4573 7.81541C18.6934 8.26589 18.8888 8.7365 19.0414 9.22166L17.711 10.8848C17.5938 11.0311 17.5356 11.2161 17.5479 11.4032H17.5507C17.5591 11.5454 17.5631 11.6877 17.5627 11.8301C17.5627 11.8301 18.0113 11.6665 18.3101 11.6076C18.6227 11.546 19.1223 11.5299 19.1223 11.5299L20.4589 9.8601Z\" fill=\"currentColor\"></path> <path d=\"M17.6787 14.3748C18.0238 14.4735 18.2236 14.8334 18.125 15.1785L16.125 22.1785C16.0264 22.5236 15.6664 22.7234 15.3213 22.6248C14.9762 22.5261 14.7764 22.1662 14.875 21.8211L16.875 14.8211C16.9737 14.476 17.3336 14.2762 17.6787 14.3748Z\" fill=\"currentColor\"></path> <path d=\"M20.5313 14.5453C20.2798 14.2518 19.8385 14.2177 19.545 14.4691C19.2515 14.7207 19.2174 15.1619 19.4688 15.4555L22.0792 18.5004L19.4688 21.5453C19.2174 21.8388 19.2515 22.2801 19.545 22.5316C19.8385 22.7831 20.2798 22.7489 20.5313 22.4555L23.5313 18.9555C23.7558 18.6934 23.7558 18.3074 23.5313 18.0453L20.5313 14.5453Z\" fill=\"currentColor\"></path> <path d=\"M12.4687 14.5453C12.7202 14.2518 13.1615 14.2177 13.455 14.4691C13.7485 14.7207 13.7826 15.1619 13.5312 15.4555L10.9208 18.5004L13.5312 21.5453C13.7826 21.8388 13.7485 22.2801 13.455 22.5316C13.1615 22.7831 12.7202 22.7489 12.4687 22.4555L9.46868 18.9555C9.24417 18.6934 9.24417 18.3074 9.46868 18.0453L12.4687 14.5453Z\" fill=\"currentColor\"></path>",
  "VersionControl": "<path d=\"M24.0001 28C24.7481 27.9996 25.4811 27.7895 26.1157 27.3935C26.7503 26.9974 27.2612 26.4314 27.5902 25.7596C27.9193 25.0878 28.0534 24.3372 27.9773 23.5931C27.9012 22.8489 27.6179 22.141 27.1597 21.5497C26.7015 20.9585 26.0866 20.5075 25.385 20.2482C24.6833 19.9888 23.923 19.9314 23.1904 20.0824C22.4577 20.2334 21.7821 20.5869 21.2403 21.1026C20.6984 21.6184 20.3121 22.2757 20.1251 23L19.0001 23C18.4696 23 17.9609 22.7893 17.5858 22.4142C17.2108 22.0391 17.0001 21.5304 17.0001 21L17.0001 12C17.0009 11.2974 16.815 10.6071 16.4613 10L20.1251 10C20.3685 10.9427 20.9473 11.7642 21.7531 12.3106C22.5588 12.857 23.5362 13.0908 24.5021 12.9681C25.4679 12.8455 26.3558 12.3747 26.9994 11.6442C27.643 10.9137 27.998 9.97358 27.998 9.00001C27.998 8.02644 27.643 7.08628 26.9994 6.35578C26.3558 5.62527 25.4679 5.15457 24.5021 5.03189C23.5362 4.90922 22.5588 5.143 21.7531 5.68941C20.9473 6.23582 20.3685 7.05735 20.1251 8.00001L11.8751 8.00001C11.6317 7.05735 11.0528 6.23582 10.2471 5.68941C9.44127 5.14299 8.46387 4.90922 7.49806 5.03189C6.53225 5.15456 5.64433 5.62527 5.00074 6.35578C4.35715 7.08628 4.00208 8.02643 4.00208 9.00001C4.00208 9.97358 4.35715 10.9137 5.00074 11.6442C5.64433 12.3747 6.53225 12.8455 7.49806 12.9681C8.46387 13.0908 9.44127 12.857 10.2471 12.3106C11.0528 11.7642 11.6317 10.9427 11.8751 10L13.0001 10C13.5305 10 14.0392 10.2107 14.4143 10.5858C14.7893 10.9609 15.0001 11.4696 15.0001 12L15.0001 21C15.0001 22.0609 15.4215 23.0783 16.1716 23.8284C16.9218 24.5786 17.9392 25 19.0001 25L20.1251 25C20.348 25.8583 20.8493 26.6185 21.5506 27.1613C22.2518 27.7042 23.1133 27.9992 24.0001 28ZM24.0001 7.00001C24.3956 7.00001 24.7823 7.11731 25.1112 7.33707C25.4401 7.55683 25.6964 7.86919 25.8478 8.23464C25.9992 8.6001 26.0388 9.00223 25.9616 9.39019C25.8845 9.77815 25.694 10.1345 25.4143 10.4142C25.1346 10.6939 24.7782 10.8844 24.3902 10.9616C24.0023 11.0388 23.6001 10.9991 23.2347 10.8478C22.8692 10.6964 22.5569 10.44 22.3371 10.1111C22.1174 9.78225 22.0001 9.39557 22.0001 9.00001C22.0001 8.46958 22.2108 7.96087 22.5858 7.5858C22.9609 7.21072 23.4696 7.00001 24.0001 7.00001ZM8.00006 11C7.6045 11 7.21782 10.8827 6.88892 10.6629C6.56002 10.4432 6.30368 10.1308 6.1523 9.76538C6.00093 9.39992 5.96132 8.99779 6.03849 8.60983C6.11566 8.22187 6.30614 7.8655 6.58585 7.58579C6.86555 7.30609 7.22192 7.11561 7.60988 7.03844C7.99784 6.96127 8.39998 7.00087 8.76543 7.15225C9.13088 7.30362 9.44324 7.55997 9.663 7.88887C9.88276 8.21777 10.0001 8.60445 10.0001 9.00001C10.0001 9.53044 9.78935 10.0391 9.41427 10.4142C9.0392 10.7893 8.53049 11 8.00006 11Z\" fill=\"currentColor\"></path>",
  "AssetManager": "<path d=\"M14.5215 13.3875C14.914 13.7791 15.4458 13.999 16.0002 13.999C16.5547 13.999 17.0865 13.7791 17.479 13.3875L21.3877 9.4775C21.5819 9.28341 21.7359 9.05298 21.841 8.79936C21.9461 8.54574 22.0002 8.2739 22.0002 7.99937C22.0002 7.72485 21.9461 7.45301 21.841 7.19939C21.7359 6.94577 21.5819 6.71533 21.3877 6.52125L17.479 2.61125C17.0865 2.21967 16.5547 1.99976 16.0002 1.99976C15.4458 1.99976 14.914 2.21967 14.5215 2.61125L10.6127 6.52125C10.4186 6.71533 10.2646 6.94577 10.1595 7.19939C10.0544 7.45301 10.0003 7.72485 10.0003 7.99937C10.0003 8.2739 10.0544 8.54574 10.1595 8.79936C10.2646 9.05298 10.4186 9.28341 10.6127 9.4775L14.5215 13.3875ZM12.0215 7.935L15.9315 4.02625C15.9481 4.00976 15.9706 4.00051 15.994 4.00051C16.0174 4.00051 16.0399 4.00976 16.0565 4.02625L19.9665 7.935C19.9821 7.95206 19.9908 7.97436 19.9908 7.9975C19.9908 8.02064 19.9821 8.04294 19.9665 8.06L16.064 11.9737C16.0472 11.9899 16.0248 11.999 16.0015 11.999C15.9782 11.999 15.9558 11.9899 15.939 11.9737L12.0265 8.06375C12.0098 8.04649 12.0004 8.0234 12.0004 7.99937C12.0004 7.97534 12.0098 7.95225 12.0265 7.935H12.0215ZM29.384 14.5212L25.479 10.6112C25.0867 10.2197 24.5551 9.99986 24.0009 9.99986C23.4466 9.99986 22.915 10.2197 22.5227 10.6112L18.6127 14.5212C18.2212 14.9138 18.0012 15.4456 18.0012 16C18.0012 16.5544 18.2212 17.0862 18.6127 17.4787L22.5227 21.3887C22.915 21.7803 23.4466 22.0001 24.0009 22.0001C24.5551 22.0001 25.0867 21.7803 25.479 21.3887L29.389 17.4787C29.7806 17.0862 30.0005 16.5544 30.0005 16C30.0005 15.4456 29.7806 14.9138 29.389 14.5212H29.384ZM27.9752 16.0637L24.0652 19.9737C24.0482 19.9894 24.0259 19.9981 24.0027 19.9981C23.9796 19.9981 23.9573 19.9894 23.9402 19.9737L20.0302 16.0637C20.0141 16.047 20.005 16.0246 20.005 16.0012C20.005 15.9779 20.0141 15.9555 20.0302 15.9387L23.9402 12.0287C23.9573 12.0131 23.9796 12.0044 24.0027 12.0044C24.0259 12.0044 24.0482 12.0131 24.0652 12.0287L27.9752 15.9387C27.9914 15.9555 28.0005 15.9779 28.0005 16.0012C28.0005 16.0246 27.9914 16.047 27.9752 16.0637ZM13.3877 14.5212L9.47774 10.6112C9.08544 10.2197 8.55385 9.99986 7.99962 9.99986C7.44538 9.99986 6.91379 10.2197 6.52149 10.6112L2.61149 14.5212C2.21991 14.9138 2 15.4456 2 16C2 16.5544 2.21991 17.0862 2.61149 17.4787L6.52149 21.3887C6.91379 21.7803 7.44538 22.0001 7.99962 22.0001C8.55385 22.0001 9.08544 21.7803 9.47774 21.3887L13.3877 17.4787C13.7793 17.0862 13.9992 16.5544 13.9992 16C13.9992 15.4456 13.7793 14.9138 13.3877 14.5212ZM11.974 16.0637L8.06399 19.9737C8.04693 19.9894 8.02463 19.9981 8.00149 19.9981C7.97835 19.9981 7.95605 19.9894 7.93899 19.9737L4.02524 16.0637C4.00905 16.047 4 16.0246 4 16.0012C4 15.9779 4.00905 15.9555 4.02524 15.9387L7.93524 12.0262C7.9523 12.0106 7.9746 12.0019 7.99774 12.0019C8.02088 12.0019 8.04318 12.0106 8.06024 12.0262L11.9702 15.9362C11.9789 15.9444 11.9858 15.9541 11.9907 15.9649C11.9956 15.9757 11.9983 15.9874 11.9986 15.9992C11.999 16.0111 11.997 16.0229 11.9927 16.0339C11.9885 16.045 11.9821 16.0551 11.974 16.0637ZM17.474 18.6125C17.0815 18.2209 16.5497 18.001 15.9952 18.001C15.4408 18.001 14.909 18.2209 14.5165 18.6125L10.6127 22.5225C10.4186 22.7166 10.2646 22.947 10.1595 23.2006C10.0544 23.4543 10.0003 23.7261 10.0003 24.0006C10.0003 24.2752 10.0544 24.547 10.1595 24.8006C10.2646 25.0542 10.4186 25.2847 10.6127 25.4787L14.5215 29.3887C14.914 29.7803 15.4458 30.0002 16.0002 30.0002C16.5547 30.0002 17.0865 29.7803 17.479 29.3887L21.3877 25.4787C21.5819 25.2847 21.7359 25.0542 21.841 24.8006C21.9461 24.547 22.0002 24.2752 22.0002 24.0006C22.0002 23.7261 21.9461 23.4543 21.841 23.2006C21.7359 22.947 21.5819 22.7166 21.3877 22.5225L17.474 18.6125ZM19.974 24.065L16.064 27.9737C16.0474 27.9902 16.0249 27.9995 16.0015 27.9995C15.9781 27.9995 15.9556 27.9902 15.939 27.9737L12.0265 24.065C12.0109 24.0479 12.0022 24.0256 12.0022 24.0025C12.0022 23.9794 12.0109 23.9571 12.0265 23.94L15.9365 20.03C15.9533 20.0138 15.9757 20.0048 15.999 20.0048C16.0223 20.0048 16.0447 20.0138 16.0615 20.03L19.9715 23.94C19.9875 23.9567 19.9966 23.9789 19.9971 24.002C19.9975 24.0252 19.9893 24.0476 19.974 24.065Z\" fill=\"currentColor\"></path>",
  "UnityAI": "<path d=\"M22.6976 15.1325L16.2463 12.7575L13.8713 6.30125C13.7307 5.91916 13.4762 5.58941 13.1423 5.35648C12.8083 5.12356 12.411 4.99867 12.0038 4.99867C11.5967 4.99867 11.1993 5.12356 10.8654 5.35648C10.5314 5.58941 10.277 5.91916 10.1363 6.30125L7.75883 12.75L1.30258 15.125C0.920493 15.2656 0.59074 15.5201 0.357814 15.854C0.124888 16.188 0 16.5853 0 16.9925C0 17.3997 0.124888 17.797 0.357814 18.131C0.59074 18.4649 0.920493 18.7194 1.30258 18.86L7.75008 21.25L10.1251 27.7025C10.2657 28.0846 10.5202 28.4143 10.8541 28.6473C11.1881 28.8802 11.5854 29.0051 11.9926 29.0051C12.3997 29.0051 12.7971 28.8802 13.131 28.6473C13.465 28.4143 13.7194 28.0846 13.8601 27.7025L16.2351 21.2512L22.6913 18.8762C23.0734 18.7356 23.4032 18.4811 23.6361 18.1472C23.869 17.8133 23.9939 17.4159 23.9939 17.0088C23.9939 16.6016 23.869 16.2042 23.6361 15.8703C23.4032 15.5364 23.0734 15.2819 22.6913 15.1413L22.6976 15.1325ZM15.5488 19.375C15.2786 19.4742 15.0332 19.631 14.8296 19.8345C14.6261 20.0381 14.4693 20.2835 14.3701 20.5537L11.9951 26.9862L9.62508 20.5487C9.52582 20.2799 9.3695 20.0358 9.16688 19.8332C8.96426 19.6306 8.72014 19.4743 8.45133 19.375L2.01883 17L8.45133 14.625C8.72014 14.5257 8.96426 14.3694 9.16688 14.1668C9.3695 13.9642 9.52582 13.7201 9.62508 13.4513L12.0001 7.01875L14.3751 13.4513C14.4743 13.7215 14.6311 13.9669 14.8346 14.1705C15.0382 14.374 15.2836 14.5308 15.5538 14.63L21.9863 17.005L15.5488 19.375ZM16.0001 4C16.0001 3.73478 16.1054 3.48043 16.293 3.29289C16.4805 3.10536 16.7349 3 17.0001 3H19.0001V1C19.0001 0.734784 19.1054 0.48043 19.293 0.292893C19.4805 0.105357 19.7349 0 20.0001 0C20.2653 0 20.5197 0.105357 20.7072 0.292893C20.8947 0.48043 21.0001 0.734784 21.0001 1V3H23.0001C23.2653 3 23.5197 3.10536 23.7072 3.29289C23.8947 3.48043 24.0001 3.73478 24.0001 4C24.0001 4.26522 23.8947 4.51957 23.7072 4.70711C23.5197 4.89464 23.2653 5 23.0001 5H21.0001V7C21.0001 7.26522 20.8947 7.51957 20.7072 7.70711C20.5197 7.89464 20.2653 8 20.0001 8C19.7349 8 19.4805 7.89464 19.293 7.70711C19.1054 7.51957 19.0001 7.26522 19.0001 7V5H17.0001C16.7349 5 16.4805 4.89464 16.293 4.70711C16.1054 4.51957 16.0001 4.26522 16.0001 4ZM29.0001 10C29.0001 10.2652 28.8947 10.5196 28.7072 10.7071C28.5197 10.8946 28.2653 11 28.0001 11H27.0001V12C27.0001 12.2652 26.8947 12.5196 26.7072 12.7071C26.5197 12.8946 26.2653 13 26.0001 13C25.7349 13 25.4805 12.8946 25.293 12.7071C25.1054 12.5196 25.0001 12.2652 25.0001 12V11H24.0001C23.7349 11 23.4805 10.8946 23.293 10.7071C23.1054 10.5196 23.0001 10.2652 23.0001 10C23.0001 9.73478 23.1054 9.48043 23.293 9.29289C23.4805 9.10536 23.7349 9 24.0001 9H25.0001V8C25.0001 7.73478 25.1054 7.48043 25.293 7.29289C25.4805 7.10536 25.7349 7 26.0001 7C26.2653 7 26.5197 7.10536 26.7072 7.29289C26.8947 7.48043 27.0001 7.73478 27.0001 8V9H28.0001C28.2653 9 28.5197 9.10536 28.7072 9.29289C28.8947 9.48043 29.0001 9.73478 29.0001 10Z\" fill=\"currentColor\"></path>"
};
const UNITY_MARK_PATH = "<path d=\"m 12.8497 1 v 3.9324 l 3.4868 2.0108 c 0.0279 0.0167 0.0501 0.0446 0.0668 0.0724 c 0.0223 0.0278 0.0279 0.0613 0.0279 0.0947 c 0 0.0334 -0.0056 0.0668 -0.0279 0.1003 c -0.0167 0.0278 -0.039 0.0501 -0.0668 0.0724 l -4.1441 2.384 c -0.0557 0.039 -0.1281 0.0557 -0.195 0.0557 c -0.0668 0 -0.1337 -0.0167 -0.195 -0.0557 l -4.1441 -2.384 c -0.0279 -0.0167 -0.0501 -0.0446 -0.0668 -0.0724 c -0.0167 -0.0279 -0.0279 -0.0613 -0.0279 -0.0947 c 0 -0.0334 0.0111 -0.0668 0.0279 -0.1003 c 0.0167 -0.0279 0.039 -0.0501 0.0668 -0.0724 l 3.4868 -2.0052 v -3.938 l -8.8953 5.13 v 10.2544 l 3.4144 -1.9662 v -4.0215 c 0 -0.0334 0.0056 -0.0668 0.0223 -0.0947 c 0.0167 -0.0279 0.0446 -0.0501 0.0724 -0.0724 c 0.0278 -0.0167 0.0613 -0.0223 0.1003 -0.0223 c 0.0334 0 0.0668 0.0056 0.0947 0.0223 l 4.1441 2.3895 c 0.0613 0.0334 0.1114 0.0836 0.1448 0.1448 c 0.0334 0.0557 0.0501 0.1225 0.0501 0.1949 v 4.7735 c 0 0.0334 -0.0056 0.0668 -0.0278 0.1003 c -0.0167 0.0279 -0.039 0.0557 -0.0668 0.0724 c -0.0334 0.0167 -0.0668 0.0223 -0.1003 0.0223 c -0.0334 0 -0.0668 -0.0056 -0.0947 -0.0223 l -3.4868 -2.0108 l -3.4144 1.9662 l 8.8953 5.13 l 8.8953 -5.13 l -3.4144 -1.9662 l -3.4868 2.0108 c -0.0278 0.0167 -0.0613 0.0223 -0.0947 0.0223 c -0.0334 0 -0.0668 -0.0111 -0.0947 -0.0279 c -0.0334 -0.0167 -0.0557 -0.039 -0.0724 -0.0668 c -0.0167 -0.0334 -0.0279 -0.0668 -0.0279 -0.1003 v -4.7735 c 0 -0.0724 0.0167 -0.1393 0.0501 -0.1949 c 0.039 -0.0613 0.0836 -0.1114 0.1448 -0.1448 l 4.1441 -2.3895 c 0.0278 -0.0167 0.0613 -0.0223 0.0947 -0.0223 c 0.0334 0 0.0668 0.0056 0.1003 0.0223 c 0.0278 0.0223 0.0501 0.0446 0.0668 0.0724 c 0.0223 0.0279 0.0279 0.0613 0.0279 0.1003 v 4.016 l 3.4144 1.9662 v -10.2544 l -8.8953 -5.13 z\" fill=\"currentColor\"></path>";
function ProductIcon({
  name,
  size = 20,
  color
}) {
  const inner = PRODUCT_PATHS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    style: {
      color: color || 'inherit',
      flexShrink: 0
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}
function UnityMark({
  size = 24,
  color
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      color: color || 'inherit',
      flexShrink: 0
    },
    dangerouslySetInnerHTML: {
      __html: UNITY_MARK_PATH
    }
  });
}

// Phosphor web icon helper: <Ph name="bell" /> -> <i class="ph ph-bell" />
function Ph({
  name,
  weight = 'regular',
  size,
  style,
  ...rest
}) {
  const cls = weight === 'fill' ? 'ph-fill' : weight === 'bold' ? 'ph-bold' : 'ph';
  return /*#__PURE__*/React.createElement("i", _extends({
    className: cls + ' ph-' + name,
    style: {
      fontSize: size,
      ...style
    }
  }, rest));
}
Object.assign(window, {
  ProductIcon,
  UnityMark,
  Ph,
  PRODUCT_PATHS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Cloud Foundation — UI primitives (cosmetic recreations of @unity/cloud-ui)
// Styled with --cf-* tokens from colors_and_type.css. Not production code.
const {
  useState
} = React;

/* ----------------------------------------------------------------- Button */
function Button({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  children,
  style,
  ...rest
}) {
  const pad = size === 'small' ? '3px 10px' : size === 'large' ? '9px 16px' : '6px 12px';
  const palettes = {
    primary: {
      bg: 'var(--cf-primary)',
      fg: 'var(--cf-on-primary)',
      hover: 'var(--cf-primary-dark)',
      line: 'var(--cf-primary)',
      ghost: 'var(--cf-primary-darker)',
      wash: 'var(--cf-primary-lighter)'
    },
    default: {
      bg: 'var(--cf-gray-3)',
      fg: 'var(--cf-fg)',
      hover: 'var(--cf-gray-5)',
      line: 'var(--cf-border)',
      ghost: 'var(--cf-fg)',
      wash: 'var(--cf-action-hover)'
    },
    error: {
      bg: 'var(--cf-error)',
      fg: '#fff',
      hover: 'var(--cf-error-dark)',
      line: 'var(--cf-error)',
      ghost: 'var(--cf-error-darker)',
      wash: 'var(--cf-error-lighter)'
    },
    success: {
      bg: 'var(--cf-success)',
      fg: '#fff',
      hover: 'var(--cf-success-dark)',
      line: 'var(--cf-success)',
      ghost: 'var(--cf-success-darker)',
      wash: 'var(--cf-success-lighter)'
    }
  };
  const p = palettes[color] || palettes.primary;
  const [hover, setHover] = useState(false);
  const base = {
    font: '600 0.875rem/1.25rem var(--cf-font-sans)',
    letterSpacing: '0.018rem',
    borderRadius: 6,
    padding: pad,
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    whiteSpace: 'nowrap',
    transition: 'background .15s var(--cf-ease-standard), border-color .15s',
    ...style
  };
  let v = {};
  if (variant === 'contained') v = {
    background: hover ? p.hover : p.bg,
    color: p.fg
  };else if (variant === 'outlined') v = {
    background: hover ? p.wash : 'transparent',
    color: p.ghost,
    borderColor: p.line
  };else v = {
    background: hover ? p.wash : 'transparent',
    color: p.ghost
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...v
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), startIcon, children, endIcon);
}

/* ------------------------------------------------------------------- Chip */
function Chip({
  color = 'default',
  variant = 'filled',
  dot,
  icon,
  onDelete,
  children
}) {
  const fills = {
    default: {
      bg: 'var(--cf-gray-4)',
      fg: 'var(--cf-fg)'
    },
    primary: {
      bg: 'var(--cf-primary-light)',
      fg: 'var(--cf-primary-contrast)'
    },
    success: {
      bg: 'var(--cf-success-light)',
      fg: 'var(--cf-success-contrast)',
      dot: 'var(--cf-success)'
    },
    error: {
      bg: 'var(--cf-error-light)',
      fg: 'var(--cf-error-contrast)',
      dot: 'var(--cf-error)'
    },
    warning: {
      bg: 'var(--cf-warning-light)',
      fg: 'var(--cf-warning-contrast)',
      dot: 'var(--cf-warning-darker)'
    },
    info: {
      bg: 'var(--cf-info-light)',
      fg: 'var(--cf-info-contrast)',
      dot: 'var(--cf-info)'
    }
  };
  const f = fills[color] || fills.default;
  const outlined = variant === 'outlined';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '600 0.75rem/1rem var(--cf-font-sans)',
      letterSpacing: '0.01rem',
      padding: '5px 8px',
      borderRadius: 999,
      background: outlined ? 'transparent' : f.bg,
      color: f.fg,
      border: outlined ? '1px solid var(--cf-border)' : 'none'
    }
  }, dot && /*#__PURE__*/React.createElement("i", {
    className: "ph-fill ph-circle",
    style: {
      fontSize: 8,
      color: f.dot || 'currentColor'
    }
  }), icon, children, onDelete && /*#__PURE__*/React.createElement("i", {
    className: "ph ph-x",
    style: {
      fontSize: 13,
      cursor: 'pointer',
      opacity: 0.7
    },
    onClick: onDelete
  }));
}

/* ------------------------------------------------------------------- Card */
function Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cf-bg-paper)',
      border: '1px solid var(--cf-divider)',
      borderRadius: 4,
      overflow: 'hidden',
      ...style
    }
  }, children);
}

/* ------------------------------------------------------------------ Avatar */
function Avatar({
  name,
  src,
  size = 28,
  color = 'var(--cf-primary)'
}) {
  const initials = (name || '?').split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  if (src) return /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    style: {
      borderRadius: '50%',
      objectFit: 'cover',
      display: 'block'
    },
    alt: name
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 ' + Math.round(size * 0.4) + 'px var(--cf-font-sans)',
      flexShrink: 0
    }
  }, initials);
}

/* -------------------------------------------------------------------- Tabs */
function Tabs({
  tabs,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: '1px solid var(--cf-divider)'
    }
  }, tabs.map(t => {
    const on = t === value;
    return /*#__PURE__*/React.createElement("div", {
      key: t,
      onClick: () => onChange(t),
      style: {
        padding: '10px 2px',
        marginBottom: -1,
        cursor: 'pointer',
        font: '500 0.875rem/1rem var(--cf-font-sans)',
        color: on ? 'var(--cf-primary-darker)' : 'var(--cf-fg-secondary)',
        borderBottom: '2px solid ' + (on ? 'var(--cf-primary)' : 'transparent')
      }
    }, t);
  }));
}

/* ------------------------------------------------------------------ Switch */
function Switch({
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 34,
      height: 20,
      borderRadius: 999,
      position: 'relative',
      cursor: 'pointer',
      background: checked ? 'var(--cf-primary)' : 'var(--cf-gray-7)',
      transition: '.2s',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 16 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      transition: '.2s',
      boxShadow: '0 1px 2px rgba(0,0,0,.2)'
    }
  }));
}

/* ------------------------------------------------------------------- Field */
function Field({
  label,
  error,
  mono,
  value,
  onChange,
  placeholder,
  style
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "cf-input-label",
    style: {
      color: error ? 'var(--cf-error)' : 'var(--cf-fg)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: mono ? '400 12px var(--cf-font-mono)' : '400 0.875rem/1.25rem var(--cf-font-sans)',
      padding: '7px 10px',
      borderRadius: 6,
      color: 'var(--cf-fg)',
      background: 'var(--cf-bg)',
      border: '1px solid ' + (error ? 'var(--cf-error)' : focus ? 'var(--cf-primary)' : 'var(--cf-border)'),
      boxShadow: focus && !error ? '0 0 0 1px var(--cf-primary)' : 'none',
      outline: 'none'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    className: "cf-caption",
    style: {
      color: 'var(--cf-error)'
    }
  }, error));
}

/* ------------------------------------------------------------ IconButton */
function IconButton({
  icon,
  onClick,
  active,
  title,
  size = 18
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    title: title,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 30,
      height: 30,
      borderRadius: 6,
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      background: active ? 'var(--cf-action-selected)' : hover ? 'var(--cf-action-hover)' : 'transparent',
      color: active ? 'var(--cf-fg)' : 'var(--cf-fg-secondary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph ph-' + icon,
    style: {
      fontSize: size
    }
  }));
}
Object.assign(window, {
  Button,
  Chip,
  Card,
  Avatar,
  Tabs,
  Switch,
  Field,
  IconButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/screens.jsx
try { (() => {
// Cloud Foundation — content screens (interactive recreations).
const {
  useState: useS
} = React;

/* ============================================================ shared bits */
function PageHeader({
  icon,
  product,
  title,
  subtitle,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 24,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, product && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 9,
      background: 'var(--cf-primary-lighter)',
      color: 'var(--cf-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ProductIcon, {
    name: product,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "cf-h1",
    style: {
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "cf-body2 cf-fg-secondary"
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexShrink: 0
    }
  }, actions));
}
function StatTile({
  product,
  label,
  value,
  delta,
  deltaColor = 'var(--cf-success)'
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ProductIcon, {
    name: product,
    size: 18,
    color: "var(--cf-fg-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cf-subtitle2 cf-fg-secondary",
    style: {
      lineHeight: '1.2'
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    className: "cf-chart1",
    style: {
      color: 'var(--cf-fg)'
    }
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    className: "cf-caption",
    style: {
      color: deltaColor,
      display: 'flex',
      alignItems: 'center',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'ph-bold ph-trend-' + (delta[0] === '-' ? 'down' : 'up'),
    style: {
      fontSize: 12
    }
  }), delta, " vs last week")));
}
function BarChart({
  data,
  height = 160
}) {
  const max = Math.max(...data.map(d => d.v));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      height,
      padding: '0 4px'
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      height: '100%',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 34,
      height: d.v / max * (height - 28) + 'px',
      background: d.hi ? 'var(--cf-primary)' : 'var(--cf-primary-400)',
      borderRadius: '3px 3px 0 0',
      transition: 'height .4s var(--cf-ease-decelerate)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "cf-caption cf-fg-secondary"
  }, d.l))));
}

/* ================================================================ Overview */
function OverviewScreen() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Overview",
    subtitle: "Skybound RPG \xB7 Production environment",
    actions: [/*#__PURE__*/React.createElement(Button, {
      key: "d",
      variant: "outlined",
      color: "default",
      startIcon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-calendar-blank"
      })
    }, "Last 7 days"), /*#__PURE__*/React.createElement(Button, {
      key: "r",
      startIcon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-arrow-clockwise"
      })
    }, "Refresh")]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    product: "Analytics",
    label: "Daily active users",
    value: "48.2K",
    delta: "+6.4%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    product: "Relay",
    label: "Concurrent sessions",
    value: "3,914",
    delta: "+2.1%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    product: "Economy",
    label: "Revenue (24h)",
    value: "$12.8K",
    delta: "-1.3%",
    deltaColor: "var(--cf-error)"
  }), /*#__PURE__*/React.createElement(StatTile, {
    product: "CloudCode",
    label: "Function calls",
    value: "1.24M",
    delta: "+11%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderBottom: '1px solid var(--cf-divider)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-h3"
  }, "Daily active users"), /*#__PURE__*/React.createElement(Chip, {
    color: "success",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: [{
      l: 'Mon',
      v: 38
    }, {
      l: 'Tue',
      v: 42
    }, {
      l: 'Wed',
      v: 40
    }, {
      l: 'Thu',
      v: 47
    }, {
      l: 'Fri',
      v: 52,
      hi: true
    }, {
      l: 'Sat',
      v: 49
    }, {
      l: 'Sun',
      v: 48
    }]
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderBottom: '1px solid var(--cf-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-h3"
  }, "Recent activity")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [{
    p: 'RemoteConfig',
    t: 'Config "loot_table" published',
    w: 'Mira · 4m ago'
  }, {
    p: 'CloudCode',
    t: 'Function deployed: grantReward',
    w: 'CI · 22m ago'
  }, {
    p: 'Matchmaker',
    t: 'Queue "ranked" updated',
    w: 'Dev · 1h ago'
  }, {
    p: 'Economy',
    t: 'Currency "gems" balance reset',
    w: 'Mira · 3h ago'
  }].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      padding: '11px 16px',
      borderBottom: i < 3 ? '1px solid var(--cf-divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(ProductIcon, {
    name: a.p,
    size: 18,
    color: "var(--cf-fg-secondary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-body2",
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, a.t), /*#__PURE__*/React.createElement("span", {
    className: "cf-caption cf-fg-secondary"
  }, a.w))))))));
}

/* ================================================================= Members */
const ROLES = ['Owner', 'Manager', 'Developer', 'Viewer'];
const SEED_MEMBERS = [{
  name: 'Mira Okafor',
  email: 'mira@skybound.gg',
  role: 'Owner',
  status: 'Active',
  last: '2m ago'
}, {
  name: 'Devon Park',
  email: 'devon@skybound.gg',
  role: 'Manager',
  status: 'Active',
  last: '1h ago'
}, {
  name: 'Lena Vogt',
  email: 'lena@skybound.gg',
  role: 'Developer',
  status: 'Active',
  last: 'Yesterday'
}, {
  name: 'Sam Reyes',
  email: 'sam@skybound.gg',
  role: 'Developer',
  status: 'Pending',
  last: '—'
}, {
  name: 'Aki Tan',
  email: 'aki@contractor.io',
  role: 'Viewer',
  status: 'Active',
  last: '3d ago'
}];
function MembersScreen() {
  const [rows, setRows] = useS(SEED_MEMBERS);
  const [open, setOpen] = useS(false);
  const [email, setEmail] = useS('');
  const [role, setRole] = useS('Developer');
  const statusChip = s => s === 'Active' ? /*#__PURE__*/React.createElement(Chip, {
    color: "success",
    dot: true
  }, "Active") : /*#__PURE__*/React.createElement(Chip, {
    color: "warning",
    dot: true
  }, "Pending");
  const invite = () => {
    if (!email.includes('@')) return;
    const name = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    setRows([...rows, {
      name,
      email,
      role,
      status: 'Pending',
      last: '—'
    }]);
    setOpen(false);
    setEmail('');
    setRole('Developer');
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Members",
    subtitle: rows.length + ' people · Skybound RPG',
    actions: [/*#__PURE__*/React.createElement(Button, {
      key: "i",
      startIcon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-plus"
      }),
      onClick: () => setOpen(true)
    }, "Invite member")]
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--cf-bg-datagrid-header)',
      borderBottom: '1px solid var(--cf-divider)'
    }
  }, ['Member', 'Role', 'Status', 'Last active', ''].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    className: "cf-table-header",
    style: {
      textAlign: 'left',
      padding: '9px 16px',
      color: 'var(--cf-fg-secondary)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i < rows.length - 1 ? '1px solid var(--cf-divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.name,
    size: 28,
    color: ['var(--cf-chart-1)', 'var(--cf-chart-3)', 'var(--cf-chart-5)', 'var(--cf-chart-8)', 'var(--cf-chart-7)'][i % 5]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-body1",
    style: {
      fontWeight: 500
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "cf-caption cf-fg-secondary"
  }, r.email)))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-body2"
  }, r.role)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px'
    }
  }, statusChip(r.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-body2 cf-fg-secondary"
  }, r.last)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "dots-three",
    title: "Actions"
  }))))))), open && /*#__PURE__*/React.createElement(Dialog, {
    title: "Invite member",
    onClose: () => setOpen(false),
    footer: [/*#__PURE__*/React.createElement(Button, {
      key: "c",
      variant: "text",
      color: "default",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      key: "s",
      onClick: invite
    }, "Send invite")]
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email address",
    placeholder: "name@studio.com",
    value: email,
    onChange: setEmail
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-input-label"
  }, "Role"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, ROLES.map(r => /*#__PURE__*/React.createElement("span", {
    key: r,
    onClick: () => setRole(r),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    color: role === r ? 'primary' : 'default'
  }, r)))))));
}

/* =========================================================== Remote Config */
const RC_SEED = {
  Production: [{
    k: 'loot_table_version',
    t: 'string',
    v: 'v12'
  }, {
    k: 'xp_multiplier',
    t: 'float',
    v: '1.0'
  }, {
    k: 'maintenance_mode',
    t: 'bool',
    v: 'false'
  }, {
    k: 'max_party_size',
    t: 'int',
    v: '4'
  }],
  Staging: [{
    k: 'loot_table_version',
    t: 'string',
    v: 'v13-rc1'
  }, {
    k: 'xp_multiplier',
    t: 'float',
    v: '1.5'
  }, {
    k: 'maintenance_mode',
    t: 'bool',
    v: 'false'
  }, {
    k: 'max_party_size',
    t: 'int',
    v: '6'
  }]
};
function RemoteConfigScreen() {
  const [env, setEnv] = useS('Production');
  const [data, setData] = useS(RC_SEED);
  const [editing, setEditing] = useS(null);
  const rows = data[env];
  const typeChip = t => /*#__PURE__*/React.createElement(Chip, {
    variant: "outlined"
  }, t);
  const setVal = (k, val) => setData({
    ...data,
    [env]: rows.map(r => r.k === k ? {
      ...r,
      v: val
    } : r)
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    product: "RemoteConfig",
    title: "Remote Config",
    subtitle: "Live-tune your game without shipping a build",
    actions: [/*#__PURE__*/React.createElement(Button, {
      key: "p",
      startIcon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-rocket-launch"
      })
    }, "Publish")]
  }), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Production', 'Staging'],
    value: env,
    onChange: setEnv
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--cf-bg-datagrid-header)',
      borderBottom: '1px solid var(--cf-divider)'
    }
  }, ['Key', 'Type', 'Value', ''].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    className: "cf-table-header",
    style: {
      textAlign: 'left',
      padding: '9px 16px',
      color: 'var(--cf-fg-secondary)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.k,
    style: {
      borderBottom: i < rows.length - 1 ? '1px solid var(--cf-divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-code"
  }, r.k)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px'
    }
  }, typeChip(r.t)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      width: 200
    }
  }, editing === r.k ? /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: r.v,
    onChange: e => setVal(r.k, e.target.value),
    onBlur: () => setEditing(null),
    onKeyDown: e => e.key === 'Enter' && setEditing(null),
    style: {
      font: '400 12px var(--cf-font-mono)',
      padding: '4px 8px',
      border: '1px solid var(--cf-primary)',
      borderRadius: 5,
      outline: 'none',
      boxShadow: '0 0 0 1px var(--cf-primary)',
      width: 140,
      color: 'var(--cf-fg)',
      background: 'var(--cf-bg)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "cf-code",
    onClick: () => setEditing(r.k),
    style: {
      cursor: 'text',
      borderBottom: '1px dashed var(--cf-border)',
      paddingBottom: 1
    }
  }, r.v)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 16px',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "pencil-simple",
    title: "Edit",
    onClick: () => setEditing(r.k)
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--cf-fg-secondary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ph ph-info",
    style: {
      fontSize: 15
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "cf-body2 cf-fg-secondary"
  }, "Click a value to edit. Changes stay as a draft until you Publish.")));
}

/* ============================================================= generic product */
const PRODUCT_BLURB = {
  Analytics: 'Understand player behavior with funnels, retention and live event streams.',
  'Cloud Code': 'Run server-authoritative game logic without managing infrastructure.',
  Economy: 'Model currencies, inventory and virtual purchases.',
  'Cloud Save': 'Store and sync player data across devices.',
  Relay: 'Connect players peer-to-peer without dedicated servers.',
  Lobby: 'Create and manage game lobbies players can browse and join.',
  Matchmaker: 'Build fair, fast matches with configurable rules.',
  Vivox: 'Add voice and text chat to your game.',
  Leaderboards: 'Rank players with flexible, tiered leaderboards.',
  Settings: 'Manage project details, API keys and integrations.'
};
const PRODUCT_ICON = {
  Analytics: 'Analytics',
  'Cloud Code': 'CloudCode',
  Economy: 'Economy',
  'Cloud Save': 'CloudSave',
  Relay: 'Relay',
  Lobby: 'Lobby',
  Matchmaker: 'Matchmaker',
  Vivox: 'Vivox',
  Leaderboards: 'Leaderboard'
};
function ProductScreen({
  name
}) {
  const product = PRODUCT_ICON[name];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    product: product,
    title: name,
    subtitle: PRODUCT_BLURB[name] || '',
    actions: [/*#__PURE__*/React.createElement(Button, {
      key: "d",
      variant: "outlined",
      color: "default",
      startIcon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-book-open"
      })
    }, "Docs"), /*#__PURE__*/React.createElement(Button, {
      key: "g",
      startIcon: /*#__PURE__*/React.createElement("i", {
        className: "ph ph-plus"
      })
    }, "Get started")]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    product: product,
    label: "Requests (24h)",
    value: "284K",
    delta: "+4.2%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    product: product,
    label: "Error rate",
    value: "0.12%",
    delta: "-0.03%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    product: product,
    label: "p95 latency",
    value: "48ms",
    delta: "-5ms"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      borderBottom: '1px solid var(--cf-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-h3"
  }, "Requests over time")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: [{
      l: '00',
      v: 22
    }, {
      l: '04',
      v: 18
    }, {
      l: '08',
      v: 35
    }, {
      l: '12',
      v: 48,
      hi: true
    }, {
      l: '16',
      v: 44
    }, {
      l: '20',
      v: 39
    }, {
      l: '24',
      v: 28
    }]
  }))));
}

/* ================================================================== Dialog */
function Dialog({
  title,
  children,
  footer,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--cf-backdrop)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 420,
      maxWidth: '90vw',
      background: 'var(--cf-bg-modal)',
      borderRadius: 8,
      boxShadow: 'var(--cf-shadow-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--cf-divider)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-h2"
  }, title), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px',
      borderTop: '1px solid var(--cf-divider)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, footer)));
}
function Screen({
  active
}) {
  if (active === 'Overview') return /*#__PURE__*/React.createElement(OverviewScreen, null);
  if (active === 'Members') return /*#__PURE__*/React.createElement(MembersScreen, null);
  if (active === 'Remote Config') return /*#__PURE__*/React.createElement(RemoteConfigScreen, null);
  return /*#__PURE__*/React.createElement(ProductScreen, {
    name: active
  });
}
Object.assign(window, {
  Screen,
  Dialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.MuiButton = __ds_scope.MuiButton;

__ds_ns.MuiCard = __ds_scope.MuiCard;

__ds_ns.MuiChip = __ds_scope.MuiChip;

__ds_ns.MuiMenu = __ds_scope.MuiMenu;

__ds_ns.MuiSwitch = __ds_scope.MuiSwitch;

__ds_ns.MuiTabs = __ds_scope.MuiTabs;

__ds_ns.MuiTooltip = __ds_scope.MuiTooltip;

})();
