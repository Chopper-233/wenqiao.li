// Muted previews play only in view. Click the video, or use Enter/Space, to
// pause/resume without overlay controls. Reduced-motion preferences are respected.
(() => {
  if (!('IntersectionObserver' in window)) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const states = [];

  function render(state) {
    const action = state.video.paused ? 'Play' : 'Pause';
    state.video.setAttribute('aria-label', `${action} ${state.video.dataset.label} video`);
    state.video.title = `${action} video (click or press Enter / Space)`;
  }

  function sync(state) {
    const shouldPlay = state.visible && !document.hidden && state.manual !== false &&
      (state.manual === true || !reducedMotion.matches);
    if (shouldPlay) state.video.play().catch(() => render(state));
    else state.video.pause();
    render(state);
  }

  document.querySelectorAll('.paper-video').forEach(container => {
    const video = container.querySelector('video');
    const state = { video, visible: false, manual: null };
    states.push(state);
    video.muted = true;
    video.controls = false;
    video.tabIndex = 0;
    video.setAttribute('role', 'button');
    const toggle = () => {
      state.manual = video.paused;
      sync(state);
    };
    video.addEventListener('click', toggle);
    video.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
    video.addEventListener('play', () => render(state));
    video.addEventListener('pause', () => render(state));
    new IntersectionObserver(entries => {
      state.visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .25;
      sync(state);
    }, { threshold: [0, .25] }).observe(container);
    render(state);
  });

  document.addEventListener('visibilitychange', () => states.forEach(sync));
  reducedMotion.addEventListener('change', () => states.forEach(sync));
})();
