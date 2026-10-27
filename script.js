(() => {
  'use strict';
  const toggle = document.querySelector('.language-toggle');
  const translated = document.querySelectorAll('[data-en][data-zh]');
  let currentLanguage = 'en';
  function setLanguage(language) {
    currentLanguage = language === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
    translated.forEach(element => {
      element.textContent = element.dataset[currentLanguage];
    });
    toggle.setAttribute('aria-pressed', String(currentLanguage === 'zh'));
    toggle.setAttribute('aria-label', currentLanguage === 'zh' ? 'Switch to English' : '切换为中文');
    document.querySelector('.profile').setAttribute('aria-label', currentLanguage === 'zh' ? '个人简介' : 'Profile');
    document.querySelector('.portrait').alt = currentLanguage === 'zh' ? '华润凯' : 'Runkai Hua';
    document.title = currentLanguage === 'zh' ? '关于我 - 华润凯的个人主页' : 'About Me - Homepage - Runkai Hua';
    try { localStorage.setItem('runkai-language', currentLanguage); } catch (_) { /* The page remains usable without browser storage. */ }
  }
  try {
    if (localStorage.getItem('runkai-language') === 'zh') setLanguage('zh');
  } catch (_) { /* Keep English as the default when storage is unavailable. */ }
  toggle.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'zh' : 'en'));

  // Native details/summary keeps publication groups usable without JavaScript.
  let printStates = [];
  window.addEventListener('beforeprint', () => {
    printStates = Array.from(document.querySelectorAll('.publication-group'), element => ({ element, open: element.open }));
    printStates.forEach(({ element }) => { element.open = true; });
  });
  window.addEventListener('afterprint', () => {
    printStates.forEach(({ element, open }) => { element.open = open; });
  });
})();
