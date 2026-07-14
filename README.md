# The CoastalTIDES Lab website

## The LaTeX analogy — how this site works

| LaTeX          | This site      | You touch it?          |
|----------------|----------------|------------------------|
| your .tex file | **content.js** | **YES — only this**    |
| .cls / .sty    | render.js, style.css, the 7 .html files | never |
| figures/       | images/        | upload photos here     |

Every word on the site lives in `content.js`. To change anything:
GitHub → click `content.js` → pencil icon → edit → Commit changes.
The site rebuilds itself in ~1 minute. That's the entire workflow.

Common edits (all inside content.js, each section is labeled):
- New paper: copy a { ... } block in `publications`, paste at top, edit.
- News item: copy a block in `news`, paste at TOP (newest first).
- New student: copy a block in `mentorship.people`.
- Show a student photo: upload the .jpg to `images/people/` (Add file →
  Upload files), then change their `photo: null` to
  `photo: "images/people/filename.jpg"`.
- Site name / your title line: `meta` at the very top.

Photos that need no code change at all:
- Home slideshow: upload `images/slide1.jpg` … `slide5.jpg`
- Your portrait: upload `images/portrait.jpg`

## First deploy
Upload everything in this folder (including the images folder) to a public
repo named `<username>.github.io` via "uploading an existing file", commit,
and the site is live at https://<username>.github.io
