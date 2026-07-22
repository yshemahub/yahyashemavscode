(function () {
  var triggers = document.querySelectorAll('.js-lightbox');
  if (!triggers.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.hidden = true;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close">&times;</button><div class="lightbox-content"></div>';
  document.body.appendChild(overlay);

  var content = overlay.querySelector('.lightbox-content');
  var closeBtn = overlay.querySelector('.lightbox-close');
  var lastTrigger = null;

  function open(trigger) {
    lastTrigger = trigger;
    content.innerHTML = '';

    var img = trigger.querySelector('img');
    var video = trigger.querySelector('video');
    var span = trigger.querySelector('span');

    if (img) {
      var bigImg = document.createElement('img');
      bigImg.src = img.currentSrc || img.src;
      bigImg.alt = img.alt || '';
      content.appendChild(bigImg);
    } else if (video) {
      var bigVideo = document.createElement('video');
      bigVideo.src = video.currentSrc || video.src;
      bigVideo.controls = true;
      bigVideo.autoplay = true;
      content.appendChild(bigVideo);
    } else if (span) {
      var note = document.createElement('span');
      note.textContent = span.textContent;
      content.appendChild(note);
    }

    overlay.hidden = false;
    closeBtn.focus();
    document.addEventListener('keydown', onKeydown);
  }

  function close() {
    overlay.hidden = true;
    content.innerHTML = '';
    document.removeEventListener('keydown', onKeydown);
    if (lastTrigger) lastTrigger.focus();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') close();
  }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  closeBtn.addEventListener('click', close);

  triggers.forEach(function (el) {
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.addEventListener('click', function () { open(el); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(el);
      }
    });
  });
})();
