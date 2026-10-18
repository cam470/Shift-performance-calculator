# Design

The visual system for Shift Report. Everything lives in `nightshift.css` as CSS custom properties (tokens). Components only use tokens, so a colour change is made once at the top of that file.

## Direction: results and form

Every shift is played against the 98% target, and every saved shift is a result. The look borrows how people read football results: confident scorelines, a form guide of recent results, and the referee's colours for status. Navigation, buttons and forms stay standard; the idea only shapes colour, type, density and one signature feature, the form guide.

## Themes

Two themes, tuned separately rather than inverted. Dark is the default. The `<html>` element carries `data-theme="dark"` or `data-theme="light"`; the light theme redefines the same tokens under `:root[data-theme=light]`.

- **Choosing a theme:** the Light / Dark / Auto switch in the sidebar (a single cycling button on small phones). Auto follows the device and changes with it. The choice is stored on the device as `localStorage.theme`.
- **No flash:** a small script in `<head>` sets the theme before the page draws.
- **Fixed dark:** the routes card for the drivers' group (`.rp-show`) and the photo viewer (`.zoom`) always use the dark colours.

## Colour roles

| Role | Token | Dark | Light |
|---|---|---|---|
| Page | `--ns-bg` | `#111013` | `#F2F1F4` |
| Sidebar, header, phone bars | `--ns-bg-2` | `#16141A` | `#FBFAFC` |
| Card | `--ns-surface` | `#1B1920` | `#FFFFFF` |
| Panel inside a card, hover | `--ns-surface-2` | `#232028` | `#F7F6F9` |
| Pop-up, selected neutral | `--ns-surface-3` | `#2C2832` | `#EEECF1` |
| Text | `--ns-ink` | `#F4F2F5` | `#17141B` |
| Secondary text | `--ns-ink-2` / `--ns-muted` | `#D3CED8` / `#A39CAB` | `#3A3540` / `#5E5766` |
| Brand: claret (main button, selected tab, focus) | `--ns-accent` | `#B8406A` | `#8E2A4E` |
| Claret as text | `--ns-accent-text` | `#EC93B1` | `#8E2A4E` |
| Good (on target) | `--ns-good` / `--ns-good-text` | `#3CC27A` / `#8FE0B3` | `#2EA866` / `#0F6B3E` |
| Warning (yellow card) | `--ns-warn` / `--ns-warn-text` | `#F2C230` / `#F7DA80` | `#E9B21F` / `#7F5600` |
| Problem (red card) | `--ns-bad` / `--ns-bad-text` | `#F05252` / `#FFA8A8` | `#E5484D` / `#B42A35` |
| Category (PM, agencies) | `--ns-cat` | `#A98BFF` | `#6B4FD8` |

Rules:
- Claret means "press this" or "you are here" only. It is never used for a status.
- Green, yellow and red are only for status and always come with a word or an icon (✓, ⚠, ✕).
- Fills such as status icons use `--ns-*` base colours with `--ns-on-status` text; status written as text uses the `-text` variants, which pass contrast on every surface.
- Washes (`--ns-wash-1` to `--ns-wash-4`) are the tracks, empty slots and hovers; they flip between white-on-dark and ink-on-light.

## Type

Archivo, one family. Normal width for the interface; narrow (`font-stretch: var(--ns-num-stretch)`) for result numbers such as the form guide. Sizes come from the `--ns-fs-*` tokens.

## Motion

- Tokens: `--ns-dur-1` 120ms (hover, press), `--ns-dur-2` 200ms (panels, tabs, toasts), `--ns-dur-3` 320ms (a result coming in), `--ns-dur-gauge` 700ms; easing `--ns-ease`.
- What moves:
  - the FTDS gauge sweeps to its value and its knob rides the tip;
  - the status light rings once when the state changes;
  - new redelivery slots pop in;
  - key numbers count to their new value;
  - the form guide deals in and a newly saved shift slides in;
  - Save shows "Saved ✓" for a moment;
  - tabs, overlays and the theme switch fade.
- Nothing loops while you work (loading placeholders only), and nothing delays an action.
- `prefers-reduced-motion: reduce` turns all of it off.

## Signature: the form guide

"Last 7 shifts" on This shift shows one tile per saved shift, oldest on the left: a tick and green when FTDS reached 98%, a cross and red when it didn't. The newest tile is outlined. Each tile also carries its full date, shift and value for screen readers.
