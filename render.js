/* render.js — the "document class". Reads content.js and builds the pages.
   You should never need to edit this file. Edit content.js instead. */

(function () {
  var S = window.SITE;
  if (!S) return;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function tryImg(src, alt, onOK) {
    var im = new Image();
    im.alt = alt || '';
    im.onload = function () { onOK(im); };
    im.src = src;
  }

  /* ---------- shared header / footer / titles ---------- */
  var page = document.body.dataset.page;

  // exact scrollbar width -> full-bleed blocks stay centred, no sideways drift
  (function () {
    function setSBW() {
      var sbw = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--sbw', (sbw > 0 ? sbw : 0) + 'px');
    }
    setSBW();
    window.addEventListener('resize', setSBW);
  })();
  var nameEl = $('.site-name');
  if (nameEl) {
    nameEl.innerHTML = (page === 'home')
      ? (S.meta.headerTitle || S.meta.siteName)
      : '<a href="index.html">' + (S.meta.innerHeaderTitle || S.meta.siteName) + '</a>';
  }
  var bandSvg = $('.chart-band svg');
  if (bandSvg && S.meta.headerHeight) bandSvg.style.height = S.meta.headerHeight + 'px';
  var subEl = $('.site-sub');
  if (subEl) subEl.textContent = S.meta.siteSub;

  // menu, built from meta.nav so a new tab needs one line in content.js
  var navBox = $('.site-nav .nav-inner');
  if (navBox && S.meta.nav && S.meta.nav.length) {
    navBox.innerHTML = S.meta.nav.map(function (n) {
      return '<a href="' + n.href + '"' + (n.page === page ? ' class="active"' : '') + '>' + n.label + '</a>';
    }).join('');
  }

  var foot = $('.footer-inner');
  if (foot) {
    foot.innerHTML =
      '<span>&copy; ' + new Date().getFullYear() + ' ' + S.meta.footerName + '</span>' +
      '<span><a href="' + S.meta.scholar + '">Google Scholar</a> · ' +
      '<a href="mailto:' + S.meta.email + '">' + S.meta.email + '</a></span>';
  }

  var titles = { home: 'Home', research: 'Research', collaborators: 'Collaborators',
    team: 'Team', publications: 'Publications', outreach: 'News',
    life: 'Lab Life', join: 'Join Us' };
  if (titles[page]) document.title = titles[page] + ' | ' + S.meta.siteName;

  /* ---------- helpers ---------- */
  function section(eyebrow, heading) {
    var s = el('section');
    if (eyebrow) s.appendChild(el('p', 'eyebrow', eyebrow));
    if (heading) s.appendChild(el('h2', null, heading));
    return s;
  }
  function rowList(rows) {
    var ul = el('ul', 'row-list');
    rows.forEach(function (r) {
      var li = el('li');
      li.appendChild(el('span', 'k', r.k || r.code));
      var t = (r.text !== undefined ? r.text : r.v);
      if (r.note) t += ' <span class="note">· ' + r.note + '</span>';
      li.appendChild(el('span', null, t));
      ul.appendChild(li);
    });
    return ul;
  }
  function pubItems(list) {
    var ul = el('ul', 'pub-list');
    list.forEach(function (p) {
      var li = el('li');
      var h = '<span class="authors">' + p.authors + '</span>' +
              '<span class="title">' + p.title + '</span>';
      if (p.venue) h += '<span class="venue-wrap">' + p.venue + '</span> ';
      if (p.doiURL) h += '<span class="doi"><a href="' + p.doiURL + '">' + p.doiText + '</a></span>';
      li.innerHTML = h;
      ul.appendChild(li);
    });
    return ul;
  }

  var main = $('main');
  if (!main) return;

  /* ================= HOME: welcome + word cloud ================= */
  if (page === 'home') {
    var H = S.home;

    var w = el('section', 'welcome');
    w.appendChild(el('p', 'welcome-small', H.welcomeSmall));
    w.appendChild(el('h1', null, H.welcomeBig));

    var acro = '';
    (H.acronym || []).forEach(function (part) {
      if (part.plain !== undefined) { acro += esc(part.plain); return; }
      var word = String(part.word);
      acro += '<u>' + esc(word.charAt(0)) + '</u>' + esc(word.slice(1));
    });
    w.appendChild(el('p', 'acronym', acro));
    var band = document.querySelector('.chart-band .band-inner');
    if (band) { band.innerHTML = ''; band.appendChild(w); } else { main.appendChild(w); }

    if (H.intro) {
      var intro = el('section', 'home-intro');
      intro.appendChild(el('p', null, H.intro));
      if (H.cloudLead) intro.appendChild(el('p', 'cloud-lead', H.cloudLead));
      main.appendChild(intro);
    }

    var cloudSec = el('section', 'cloud-sec');
    var wc = H.wordcloud || {};

    if (wc.image) {
      var holder = el('div', 'cloud-img', 'word cloud image<br>(' + wc.image + ')');
      cloudSec.appendChild(holder);
      tryImg(wc.image, 'Research themes of the CoastalTIDES Lab', function (im) {
        holder.replaceWith(im);
      });
    } else {
      // ---- spiral placement: biggest word at the centre, outward from there ----
      var CW = 1400, CH = 760;
      var SIZE = { 1: 19, 2: 26, 3: 34, 4: 45, 5: 58 };
      var seed = 20260722;
      function rnd() { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; }

      var sorted = (wc.terms || []).slice().sort(function (a, b) { return b.w - a.w; });
      var boxes = [], placed = [], cx = CW / 2, cy = CH / 2;

      function fits(b) {
        if (b[0] < 2 || b[2] > CW - 2 || b[1] < 2 || b[3] > CH - 2) return false;
        for (var i = 0; i < boxes.length; i++) {
          var o = boxes[i];
          if (!(b[2] + 4 < o[0] || b[0] - 4 > o[2] || b[3] + 3 < o[1] || b[1] - 3 > o[3])) return false;
        }
        return true;
      }

      sorted.forEach(function (term, idx) {
        var fs = SIZE[term.w] || 26;
        var vertical = (term.w <= 2 && idx % 3 === 0);
        var w = term.t.length * fs * 0.55, h = fs * 1.05;
        if (vertical) { var sw = w; w = h; h = sw; }
        var th = rnd() * 6.28;
        for (var n = 0; n < 14000; n++) {
          var r = 0.62 * th;
          var x = cx + r * Math.cos(th) * 1.9;
          var y = cy + r * Math.sin(th) * 1.0;
          var b = [x - w / 2, y - h / 2, x + w / 2, y + h / 2];
          if (fits(b)) {
            boxes.push(b);
            var fill = term.w >= 5 ? '#14293D' : (term.w === 4 ? '#B32E62' : (term.w === 3 ? '#3E5D70' : '#7D97A3'));
            var tx = x.toFixed(0), ty = (y + fs * 0.34).toFixed(0);
            placed.push('<text x="' + tx + '" y="' + ty + '" text-anchor="middle" font-size="' + fs
              + '" fill="' + fill + '"'
              + (vertical ? ' transform="rotate(-90 ' + tx + ' ' + ty + ')"' : '')
              + '>' + esc(term.t) + '</text>');
            break;
          }
          th += 0.08;
        }
      });

      var bx0 = 1e9, by0 = 1e9, bx1 = -1e9, by1 = -1e9;
      boxes.forEach(function (b) {
        if (b[0] < bx0) bx0 = b[0];
        if (b[1] < by0) by0 = b[1];
        if (b[2] > bx1) bx1 = b[2];
        if (b[3] > by1) by1 = b[3];
      });
      var pad = 6;
      var svg = '<svg viewBox="' + (bx0 - pad).toFixed(0) + ' ' + (by0 - pad).toFixed(0) + ' '
        + (bx1 - bx0 + pad * 2).toFixed(0) + ' ' + (by1 - by0 + pad * 2).toFixed(0)
        + '" xmlns="http://www.w3.org/2000/svg" '
        + 'role="img" aria-label="Word cloud of the lab\'s research themes">'
        + placed.join('') + '</svg>';
      var fig = el('figure', 'wordcloud', svg);
      if (wc.caption) fig.appendChild(el('figcaption', null, wc.caption));
      cloudSec.appendChild(fig);
    }
    main.appendChild(cloudSec);
  }

  /* ================= RESEARCH ================= */
  function projectCards(list) {
    var grid = el('div', 'project-grid');
    list.forEach(function (p) {
      var card = el('article', 'project');
    var ph = el('div', 'proj-img', 'photo');
      if (p.image) tryImg(p.image, p.title, function (im) {
        ph.innerHTML = '';
        ph.classList.add('has-photo');
        if (p.scale) {
          im.style.maxWidth = (p.scale * 100) + '%';
          im.style.maxHeight = (p.scale * 100) + '%';
        }
        ph.appendChild(im);
      });
      card.appendChild(ph);
      var body = el('div', 'proj-body');
      body.appendChild(el('h3', null, p.title));
      if (p.funding) body.appendChild(el('p', 'proj-tag', p.funding));
      body.appendChild(el('p', null, p.text));
      card.appendChild(body);
      grid.appendChild(card);
    });
    return grid;
  }

  if (page === 'research') {
    var ov = section('Overview', 'What we study, and how');
    ov.appendChild(el('p', 'intro-text', S.research.intro));
    main.appendChild(ov);

    var cur = section(null, S.research.currentTitle);
    cur.appendChild(projectCards(S.research.current));
    main.appendChild(cur);

    var pa = section(null, S.research.pastTitle);
    pa.appendChild(projectCards(S.research.past));
    main.appendChild(pa);
  }

  /* ================= COLLABORATORS ================= */
  if (page === 'collaborators') {
    var C = S.collaborators, WM = window.WORLD;
    var cs = section(null, C.title);
    if (C.intro) cs.appendChild(el('p', 'intro-text', C.intro));

    if (WM) {
      var W = WM.width, Hh = WM.height;
      var m = '<svg viewBox="0 0 ' + W + ' ' + Hh + '" xmlns="http://www.w3.org/2000/svg" '
        + 'role="img" aria-label="World map showing past and present collaborations">'
        + '<rect x="0" y="0" width="' + W + '" height="' + Hh + '" fill="#EFF6F8"/>';
      function gmerc(lat) {
        lat = Math.max(Math.min(lat, 84), -84);
        return WM.k * (WM.yTop - Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360)));
      }
      for (var lat = -45; lat <= 75; lat += 15) {
        var gy = gmerc(lat);
        if (gy < 0 || gy > Hh) continue;
        m += '<line x1="0" y1="' + gy.toFixed(0) + '" x2="' + W + '" y2="' + gy.toFixed(0) + '" stroke="#DCE8EC" stroke-width="1"/>';
      }
      for (var lon = -150; lon < 180; lon += 30) {
        var gx = (lon + 180) / 360 * W;
        m += '<line x1="' + gx + '" y1="0" x2="' + gx + '" y2="' + Hh + '" stroke="#DCE8EC" stroke-width="1"/>';
      }
      m += '<path d="' + WM.land + '" fill="#F0E8D4" stroke="#C9BB94" stroke-width="0.7" stroke-linejoin="round"/>';
      m += '<path d="' + WM.highlight + '" fill="#E3D5AE" stroke="#B09A63" stroke-width="0.9" stroke-linejoin="round"/>';

      function ymerc(lat) {
        lat = Math.max(Math.min(lat, 84), -84);
        return Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
      }
      (C.sites || []).forEach(function (s, i) {
        var x = (s.lon + 180) / 360 * W;
        var y = WM.k * (WM.yTop - ymerc(s.lat));
        var left = (s.side === 'l');
        m += '<g class="site" data-i="' + i + '">'
          + '<circle class="halo" cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="11" fill="#B32E62" opacity="0.15"/>'
          + '<circle class="dot" cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="4.5" fill="#B32E62"/>'
          + '<text class="lbl" x="' + (x + (left ? -9 : 9)).toFixed(0) + '" y="' + (y + 4).toFixed(0) + '" '
          + 'text-anchor="' + (left ? 'end' : 'start') + '">' + esc(s.name) + '</text>'
          + '</g>';
      });
      m += '</svg>';
      cs.appendChild(el('figure', 'world-map', m));
    }
    main.appendChild(cs);

    if (C.groups && C.groups.length) {
      var gs = el('section');
      var gg = el('div', 'collab-groups');
      C.groups.forEach(function (g) {
        var d = el('div', 'collab-group');
        d.appendChild(el('h3', null, g.place));
        var ul = el('ul');
        g.items.forEach(function (t) { ul.appendChild(el('li', null, t)); });
        d.appendChild(ul);
        gg.appendChild(d);
      });
      gs.appendChild(gg);
      main.appendChild(gs);
    }
  }

  /* ================= TEAM ================= */
  function labelledLine(label, value) {
    return el('p', 'line', '<span class="lab">' + label + ':</span> ' + value);
  }
  function personRow(p, L, compact) {
    var row = el('div', 'person-row' + (compact ? ' compact' : ''));
    var body = el('div', 'who');
    body.appendChild(el('h3', null, p.name));
    if (p.role) body.appendChild(el('p', 'role', p.role));
    if (p.dept) body.appendChild(el('p', 'dept', p.dept));
    if (p.education) body.appendChild(labelledLine(L.education, p.education));
    if (p.topic) body.appendChild(labelledLine(L.topic, p.topic));
    if (p.after) body.appendChild(labelledLine(L.after, p.after));
    if (p.links && p.links.length) {
      var lk = el('p', 'links');
      p.links.forEach(function (a, i) {
        lk.innerHTML += (i ? ' · ' : '') + '<a href="' + a.href + '">' + a.label + '</a>';
      });
      body.appendChild(lk);
    }
    row.appendChild(body);
    var shot = el('div', 'shot', 'photo');
    if (p.photo) tryImg(p.photo, p.name, function (im) { shot.replaceWith(im); });
    row.appendChild(shot);
    return row;
  }

  if (page === 'team') {
    var T = S.team;
    var L = T.labels || { education: 'Education', topic: 'Research Topic', after: 'Position' };

    var pisec = section(null, T.piTitle);
    pisec.appendChild(personRow(T.pi, L, false));
    main.appendChild(pisec);

    var cs2 = section(null, T.currentTitle);
    T.current.forEach(function (p) { cs2.appendChild(personRow(p, L, false)); });
    main.appendChild(cs2);

    if (T.past && T.past.length) {
      var ps = section(null, T.pastTitle);
      T.past.forEach(function (p) { ps.appendChild(personRow(p, L, true)); });
      main.appendChild(ps);
    }
  }

  /* ================= PUBLICATIONS ================= */
  if (page === 'publications') {
    var pub = section('Peer-reviewed', 'Select First Author Publications');
    pub.appendChild(pubItems(S.publications.published));
    main.appendChild(pub);

    if (S.publications.inprep && S.publications.inprep.length) {
      var ip = section('In the pipeline', 'Manuscripts in preparation');
      var note = el('p', null, S.publications.inprepNote || '');
      note.style.cssText = 'color:var(--slate);font-size:0.9rem;';
      ip.appendChild(note);
      ip.appendChild(pubItems(S.publications.inprep));
      main.appendChild(ip);
    }
    var full = el('p', null, 'Full record on <a href="' + S.meta.scholar + '">Google Scholar</a>.');
    full.style.marginTop = '26px';
    main.appendChild(full);
  }

  /* ================= OUTREACH ================= */
  if (page === 'outreach') {
    var nw = section('Updates', 'News');
    (S.outreach || []).forEach(function (n) {
      var d = el('div', 'news-item');
      d.appendChild(el('h3', 'stamp', esc(n.date) + ' <span class="bar">|</span> ' + n.title));
      if (n.text) d.appendChild(el('p', null, n.text));
      nw.appendChild(d);
    });
    main.appendChild(nw);
  }

  /* ================= JOIN US ================= */
  if (page === 'join') {
    var J = S.join;
    var jn = section('Join us', 'Work with the CoastalTIDES Lab');
    jn.appendChild(el('p', 'intro-text', J.intro));

    var two = el('div', 'join-split');
    var recruit = el('div', 'recruit');
    J.prospective.forEach(function (p) {
      var e = el('div', 'entry');
      e.appendChild(el('div', 'meta', p.metaTop + '<small>' + p.metaSub + '</small>'));
      var d = el('div');
      d.appendChild(el('p', null, p.text));
      e.appendChild(d);
      recruit.appendChild(e);
    });
    two.appendChild(recruit);

    var contact = el('aside', 'contact-card');
    contact.appendChild(el('h3', null, J.contactHeading));
    var ul = el('ul', 'contact-list');
    J.rows.forEach(function (r) {
      var li = el('li');
      li.appendChild(el('span', 'k', r.k));
      li.appendChild(el('span', 'v', r.v));
      ul.appendChild(li);
    });
    contact.appendChild(ul);
    two.appendChild(contact);

    jn.appendChild(two);
    main.appendChild(jn);

  }

  /* ================= LAB LIFE (gallery) ================= */
  if (page === 'life') {
    var LF = S.life || {};
    var lsec = section(null, LF.title);
    if (LF.intro) lsec.appendChild(el('p', 'intro-text', LF.intro));
    main.appendChild(lsec);

    var gal = el('div', 'gallery');
    (LF.photos || []).forEach(function (p) {
      var f = el('figure', 'shot-card');
      var ph = el('div', 'shot-ph', 'photo<br>' + (p.src || ''));
      if (p.src) tryImg(p.src, p.caption || '', function (im) { ph.replaceWith(im); });
      f.appendChild(ph);
      if (p.caption) f.appendChild(el('figcaption', null, p.caption));
      gal.appendChild(f);
    });
    main.appendChild(gal);
  }
})();
