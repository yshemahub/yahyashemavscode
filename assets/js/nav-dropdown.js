(function () {
  document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
    var toggle = dropdown.querySelector('.nav-dropdown-toggle');
    var menu = dropdown.querySelector('.nav-dropdown-menu');
    if (!toggle || !menu) return;

    function close() {
      dropdown.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    function open() {
      dropdown.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (dropdown.classList.contains('is-open')) {
        close();
      } else {
        open();
      }
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });
  });
})();
