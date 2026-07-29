(function () {
  var rotators = document.querySelectorAll('.media-rotator');
  if (!rotators.length) return;

  function activate(item) {
    item.classList.add('is-active');
    if (item.tagName === 'VIDEO') {
      item.currentTime = 0;
      item.play();
    }
  }

  function deactivate(item) {
    item.classList.remove('is-active');
    if (item.tagName === 'VIDEO') item.pause();
  }

  rotators.forEach(function (rotator) {
    var items = rotator.querySelectorAll('img, video');
    if (items.length < 2) return;

    var index = 0;
    if (items[0].tagName === 'VIDEO') items[0].play();

    var timer;

    function goTo(newIndex) {
      deactivate(items[index]);
      index = (newIndex + items.length) % items.length;
      activate(items[index]);
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(function () { goTo(index + 1); }, 4000);
    }

    resetTimer();

    var prevBtn = rotator.querySelector('.rotator-prev');
    var nextBtn = rotator.querySelector('.rotator-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        goTo(index - 1);
        resetTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        goTo(index + 1);
        resetTimer();
      });
    }
  });
})();
