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

  /* ---------- shared header / footer / titles ---------- */
  var page = document.body.dataset.page;
  var nameEl = $('.site-name');
  if (nameEl) {
    nameEl.innerHTML = (page === 'home')
      ? S.meta.siteName
      : '<a href="index.html">' + S.meta.siteName + '</a>';
  }
  var subEl = $('.site-sub');
  if (subEl) subEl.textContent = S.meta.siteSub;

  var foot = $('.footer-inner');
  if (foot) {
    foot.innerHTML =
      '<span>&copy; ' + new Date().getFullYear() + ' ' + S.meta.footerName + '</span>' +
      '<span><a href="' + S.meta.scholar + '">Google Scholar</a> · ' +
      '<a href="mailto:' + S.meta.email + '">' + S.meta.email + '</a></span>';
  }

  var titles = { home: 'Home', research: 'Research', publications: 'Publications',
    teaching: 'Teaching', mentorship: 'Mentorship', news: 'News', contact: 'Contact' };
  if (titles[page]) document.title = titles[page] + ' | ' + S.meta.siteName;

  /* ---------- helpers ---------- */
  function section(eyebrow, heading) {
    var s = el('section');
    if (eyebrow) s.appendChild(el('p', 'eyebrow', eyebrow));
    if (heading) s.appendChild(el('h2', null, heading));
    return s;
  }
  function entries(list) {
    var frag = document.createDocumentFragment();
    list.forEach(function (p) {
      var e = el('div', 'entry');
      e.appendChild(el('div', 'meta', p.tag + '<small>' + (p.sub || '') + '</small>'));
      var d = el('div');
      d.appendChild(el('h3', null, p.title));
      d.appendChild(el('p', null, p.text));
      e.appendChild(d);
      frag.appendChild(e);
    });
    return frag;
  }
  function rowList(rows) {
    var ul = el('ul', 'row-list');
    rows.forEach(function (r) {
      var li = el('li');
      li.appendChild(el('span', 'k', r.k || r.code));
      var t = r.text + (r.note ? ' <span class="note">· ' + r.note + '</span>' : '');
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

  /* ---------- per-page rendering ---------- */
  if (page === 'home') {
    // slideshow captions
    var caps = document.querySelectorAll('.hero-slides .slide-caption');
    S.slides.forEach(function (c, i) { if (caps[i]) caps[i].textContent = c; });

    var hero = el('section', 'hero');
    var left = el('div');
    left.appendChild(el('p', 'eyebrow', 'Welcome'));
    left.appendChild(el('p', 'lede', S.home.lede));
    var ip = el('p', null, S.home.intro); ip.style.marginTop = '16px';
    left.appendChild(ip);
    left.appendChild(el('p', 'contact-line',
      S.home.contactLine + '<br><a href="mailto:' + S.meta.email + '">' + S.meta.email +
      '</a> · <a href="' + S.meta.scholar + '">Google Scholar</a>'));
    hero.appendChild(left);
    hero.appendChild(el('div', 'portrait', '<span>Portrait photo<br>(images/portrait.jpg)</span>'));
    main.appendChild(hero);

    var ab = section('Background', S.home.aboutTitle);
    S.home.about.forEach(function (p) { ab.appendChild(el('p', null, p)); });
    main.appendChild(ab);

    var lt = section('Recent', 'Latest');
    S.home.latest.forEach(function (n) {
      var d = el('div', 'news-item');
      d.appendChild(el('p', 'date', n.date));
      d.appendChild(el('h3', null, n.title));
      lt.appendChild(d);
    });
    var more = el('p', null, '<a href="news.html">All news &rarr;</a>');
    more.style.marginTop = '20px';
    lt.appendChild(more);
    main.appendChild(lt);

    // if a real portrait exists, use it
    var img = new Image();
    img.onload = function () {
      $('.portrait').innerHTML = '';
      img.alt = 'Portrait';
      $('.portrait').appendChild(img);
    };
    img.src = 'images/portrait.jpg';
  }

  if (page === 'research') {
    var ov = section('Overview', 'What we study, and how');
    ov.appendChild(el('p', null, S.research.intro));
    main.appendChild(ov);

    var cur = section('Active work', 'Current projects');
    cur.appendChild(entries(S.research.current));
    main.appendChild(cur);

    var pa = section('Foundations', 'Earlier work');
    pa.appendChild(entries(S.research.past));
    main.appendChild(pa);
  }

  if (page === 'publications') {
    var pub = section('Peer-reviewed', 'Publications');
    pub.appendChild(pubItems(S.publications.published));
    main.appendChild(pub);

    var ip2 = section('In the pipeline', 'Manuscripts in preparation');
    var note = el('p', null, S.publications.inprepNote);
    note.style.cssText = 'color:var(--slate);font-size:0.9rem;';
    ip2.appendChild(note);
    ip2.appendChild(pubItems(S.publications.inprep));
    var full = el('p', null, 'Full record on <a href="' + S.meta.scholar + '">Google Scholar</a>.');
    full.style.marginTop = '26px';
    ip2.appendChild(full);
    main.appendChild(ip2);
  }

  if (page === 'teaching') {
    S.teaching.groups.forEach(function (g) {
      var s = section(g.eyebrow, g.heading);
      g.blocks.forEach(function (b, i) {
        var h3 = el('h3', null, b.sub);
        if (i > 0) h3.style.marginTop = '34px'; else h3.style.marginTop = '6px';
        s.appendChild(h3);
        s.appendChild(rowList(b.rows));
      });
      main.appendChild(s);
    });
    main.appendChild(el('section', 'panel-buff', '<p>' + S.teaching.footnote + '</p>'));
  }

  if (page === 'mentorship') {
    var ph = section('Philosophy', 'Mentorship');
    ph.appendChild(el('p', null, S.mentorship.philosophy));
    main.appendChild(ph);

    var pr = section('Join us', 'Prospective students');
    S.mentorship.prospective.forEach(function (p) {
      var e = el('div', 'entry');
      e.appendChild(el('div', 'meta', p.metaTop + '<small>' + p.metaSub + '</small>'));
      var d = el('div'); d.appendChild(el('p', null, p.text));
      e.appendChild(d);
      pr.appendChild(e);
    });
    main.appendChild(pr);

    var gp = section('The group', 'People');
    var grid = el('div', 'people-grid');
    S.mentorship.people.forEach(function (p) {
      var card = el('div', 'person');
      var shot = el('div', 'headshot', 'photo');
      if (p.photo) {
        var im = new Image();
        im.alt = p.name;
        im.onload = function () { shot.replaceWith(im); };
        im.src = p.photo;   // stays a placeholder if the file isn't there yet
      }
      card.appendChild(shot);
      card.appendChild(el('h3', null, p.name));
      card.appendChild(el('p', 'role', p.role));
      if (p.about) card.appendChild(el('p', 'about', p.about));
      grid.appendChild(card);
    });
    gp.appendChild(grid);

    var c3 = el('h3', null, 'Graduate committees'); c3.style.marginTop = '40px';
    gp.appendChild(c3);
    gp.appendChild(rowList(S.mentorship.committees));
    var c4 = el('h3', null, 'Past mentees (LSU)'); c4.style.marginTop = '34px';
    gp.appendChild(c4);
    gp.appendChild(rowList(S.mentorship.pastMentees));
    main.appendChild(gp);
  }

  if (page === 'news') {
    var nw = section('Log', 'News');
    S.news.forEach(function (n) {
      var d = el('div', 'news-item');
      d.appendChild(el('p', 'date', n.date));
      d.appendChild(el('h3', null, n.title));
      if (n.text) d.appendChild(el('p', null, n.text));
      nw.appendChild(d);
    });
    main.appendChild(nw);
  }

  if (page === 'contact') {
    var ct = section('Get in touch', 'Contact');
    var ul = el('ul', 'row-list');
    S.contact.rows.forEach(function (r) {
      var li = el('li');
      li.appendChild(el('span', 'k', r.k));
      li.appendChild(el('span', null, r.v));
      ul.appendChild(li);
    });
    ul.style.marginTop = '10px';
    ct.appendChild(ul);
    var pb = el('section', 'panel-buff', '<p>' + S.contact.note + '</p>');
    pb.style.marginTop = '40px';
    ct.appendChild(pb);
    main.appendChild(ct);
  }
})();
