# The CoastalTIDES Lab website

Edit **content.js** only. render.js, worldmap.js, style.css and the .html
shells are the "document class". Save, refresh the browser, done.
Comments in content.js use // (LaTeX's %).

## Pages
Home · Research · Collaborators · Team · Publications · Outreach · Lab Life · Join Us

The menu is built from `meta.nav` in content.js — adding a tab later means
one line there plus a copy of any .html file with `data-page` changed.

Old URLs still redirect: about/mentorship → team, contact → join,
news → outreach, teaching → home.

## Sizes and fonts (style.css, top of file)
All sizes live in the `--fs-*` variables. Change one and the whole site
follows. Three typefaces only: Newsreader (headings), Archivo (body),
IBM Plex Mono (labels). Never add a global `* { font-family: ... }` rule.
Header band height is `meta.headerHeight` in content.js.

## Photo folders (images/)
    images/home/       optional word-cloud image
    images/team/       PI portrait + student headshots
    images/research/   one photo per project
    images/join/       Lab Life gallery photos

Filenames must match content.js EXACTLY — including .jpg vs .jpeg vs .PNG
and capitalisation. A missing photo just shows a placeholder panel.

## Word cloud
Spiral placement: the biggest term sits at the centre and the rest spiral
outward. Terms and weights (1–5) are in `home.wordcloud.terms`.
Tuning knobs are inside render.js: `0.62 * th` (packing tightness),
`* 1.9` (how wide the cloud spreads), `idx % 3 === 0` (how many words are
turned 90°), and `seed` (change it for a different arrangement).

## Common edits
- New paper: copy a { } block in publications.published, paste at TOP
- Outreach item: copy a { } block in outreach, newest at the TOP
- New student: copy a { } block in team.current
- Student graduates: move their block to team.past, fill in "after"
- New gallery photo: add a { src, caption } line in life.photos
