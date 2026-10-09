// Muted research previews play only in view. Explicit pauses and reduced-motion
// preferences are respected; native controls remain available without JavaScript.
(() => {
  if (!('IntersectionObserver' in window)) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const states = [];
  const playIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v16l13-8z"/></svg>';
  const pauseIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>';

  function render(state) {
    const action = state.video.paused ? 'Play' : 'Pause';
    state.button.innerHTML = state.video.paused ? playIcon : pauseIcon;
    state.button.setAttribute('aria-label', `${action} ${state.video.dataset.label} video`);
    state.button.title = `${action} video`;
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
    const button = container.querySelector('.video-toggle');
    const state = { video, button, visible: false, manual: null };
    states.push(state);
    video.muted = true;
    video.controls = false;
    button.hidden = false;
    button.addEventListener('click', () => {
      state.manual = video.paused;
      sync(state);
    });
    video.addEventListener('play', () => render(state));
    video.addEventListener('pause', () => render(state));
    video.addEventListener('error', () => {
      button.hidden = true;
      video.controls = true;
    });
    new IntersectionObserver(entries => {
      state.visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .25;
      sync(state);
    }, { threshold: [0, .25] }).observe(container);
    render(state);
  });

  document.addEventListener('visibilitychange', () => states.forEach(sync));
  reducedMotion.addEventListener('change', () => states.forEach(sync));
})();
