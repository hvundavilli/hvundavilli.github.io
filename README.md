# hemanthvundavilli — personal academic site

Static site (plain HTML/CSS, no build step). Pages: index, research,
publications, teaching, mentorship, news, contact. Shared stylesheet: `style.css`.

## Deploy to GitHub Pages (free, at hvundavilli.github.io)

1. Create a **public** repo named exactly `<your-username>.github.io`
   (e.g. `hvundavilli.github.io`).
2. Push these files to the repo root (index.html must be at the top level):
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. On GitHub: Settings → Pages → Source: "Deploy from a branch" → main / root.
   The site goes live at `https://<your-username>.github.io` within a minute or two.

## Adding your photo

Put a headshot at `images/portrait.jpg`. Home slideshow photos go at `images/slide1.jpg`–`slide5.jpg` (wide/landscape shots work best; ~1600px wide). Captions are in index.html — edit the `slide-caption` spans to match your photos.

Also and field photos at `images/field1.jpg`–`field4.jpg`, then in `index.html` replace:
```html
<div class="portrait"><span>Portrait photo...</span></div>
```
with:
```html
<div class="portrait"><img src="images/portrait.jpg" alt="Hemanth Vundavilli"></div>
```

## Custom domain later (www.hemanthvundavilli.com)

The domain itself costs ~$10–12/yr (Cloudflare, Porkbun, Namecheap). Once bought:
1. Repo Settings → Pages → Custom domain → enter `www.hemanthvundavilli.com`
   (GitHub creates a `CNAME` file in the repo).
2. At your registrar, add a DNS **CNAME** record: `www` → `<your-username>.github.io`.
3. Optionally add A records for the apex domain (185.199.108.153, .109., .110., .111.).
4. Check "Enforce HTTPS" once the certificate is issued (can take ~1 hr).

## Updating content

- **New publication**: add an `<li>` in `publications.html` following the existing pattern.
- **News item**: add a `news-item` div at the top of the list in `news.html`.
- **Courses/students**: rows in the `chart-table` tables in `teaching.html` / `mentorship.html`.
