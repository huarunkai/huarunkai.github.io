(() => {
  'use strict';
  const toggle = document.querySelector('.language-toggle');
  const content = document.querySelectorAll('[data-en][data-zh]');
  let currentLanguage = 'en';
  const setLanguage = (language) => {
    currentLanguage = language === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
    content.forEach((element) => {
      element.textContent = element.dataset[currentLanguage].replace(/\\n/g, '\n');
    });
    toggle.setAttribute('aria-pressed', String(currentLanguage === 'zh'));
    toggle.setAttribute('aria-label', currentLanguage === 'zh' ? 'Switch to English' : '切换为中文');
    document.querySelector('.section-nav').setAttribute('aria-label', currentLanguage === 'zh' ? '页面章节' : 'Sections');
    document.querySelector('.profile').setAttribute('aria-label', currentLanguage === 'zh' ? '个人简介' : 'Profile');
    document.querySelector('.research-themes').setAttribute('aria-label', currentLanguage === 'zh' ? '研究方向' : 'Research interests');
    try { localStorage.setItem('runkai-language', currentLanguage); } catch (_) { /* Storage may be unavailable in private mode. */ }
  };
  try { if (localStorage.getItem('runkai-language') === 'zh') setLanguage('zh'); } catch (_) { /* The English page works without storage. */ }
  toggle.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'zh' : 'en'));
  const links = Array.from(document.querySelectorAll('.section-nav a'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const updateActiveSection = () => {
    let selected = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 96) selected = section;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      const anchorSection = sections.find((section) => `#${section.id}` === window.location.hash);
      selected = anchorSection && anchorSection.getBoundingClientRect().top >= 0
        ? anchorSection
        : sections[sections.length - 1];
    }
    links.forEach((link) => {
      const active = link.hash === `#${selected.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  let pendingScrollUpdate = false;
  window.addEventListener('scroll', () => {
    if (pendingScrollUpdate) return;
    pendingScrollUpdate = true;
    requestAnimationFrame(() => {
      updateActiveSection();
      pendingScrollUpdate = false;
    });
  }, { passive: true });
  window.addEventListener('resize', updateActiveSection);
  window.addEventListener('hashchange', updateActiveSection);
  toggle.addEventListener('click', updateActiveSection);
  updateActiveSection();
})();
