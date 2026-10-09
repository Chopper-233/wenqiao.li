# Wenqiao Li

Personal academic homepage for Wenqiao Li.

**Website:** https://chopper-233.github.io/wenqiao.li/

## Edit the website

- `index.html`: biography, contact links, and publications.
- `styles.css`: layout, typography, and responsive styles.
- `media.js`: in-view playback, with click and keyboard pause/resume on the video itself.
- `assets/`: profile portrait, publication figures, icons, and muted video previews.

The website uses plain HTML, CSS, and a small video-playback script. No build step, package installation, or API key is needed. Video previews are available in WebM and MP4 for browser compatibility and respect reduced-motion preferences. There are no visible playback buttons: click a video or focus it and press Enter/Space to pause or resume. Without JavaScript, the poster remains visible and the publication's project link provides access to the full demonstration.

## Preview locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deployment

GitHub Pages serves the root of the `main` branch. Changes pushed to `main` are published automatically. The `.nojekyll` file disables Jekyll processing. Relative asset paths support this repository's `/wenqiao.li/` URL.

GitHub settings: **Settings → Pages → Deploy from a branch → main → / (root)**.

## Sources and credits

The layout is inspired by [Changyi Lin](https://linchangyi1.github.io/) and [Jon Barron](https://jonbarron.info/). The biography, advisors, and research affiliations were supplied by Wenqiao Li. Publication metadata were checked against arXiv and the CVF Open Access proceedings. Unconfirmed degree dates and awards are intentionally omitted.

- Profile portrait: illustration supplied by Wenqiao Li on October 9, 2026.
- UVTA: side-by-side original-speed clips of human light-bulb data collection (`light1.mp4`, seconds 12–24) and robot light-bulb manipulation (`light/light.mp4`, seconds 125–137). These are separate demonstrations, not time-synchronized recordings. The crops focus on the hands and bulb and exclude the participant's face. No audio is included.
- DexEMG: the robot-and-human-hand panel matching the supplied reference, displayed from the upper-left of the original [Figure 1](https://arxiv.org/html/2603.05861v1/figures/fig1-teaser-1.jpg), without the surrounding plots and other panels.
- PASDF: [teaser](https://arxiv.org/html/2505.24431v1/PASDF_teaser_figure.png).
- MulSen-AD: [multimodal examples](https://raw.githubusercontent.com/ZZZBBBZZZ/MulSen-AD/main/img/cases.png).
- Phys-AD: [project demonstration](https://guyao2023.github.io/Phys-AD/demo1.mp4), trimmed to skip the opening white screen and resized for a lightweight, silent preview.
- Anomaly-ShapeNet: [examples](https://raw.githubusercontent.com/Chopper-233/Anomaly-ShapeNet/main/examples.png).

Publication figures remain attributed to the respective research works and authors; they are not relicensed as website artwork.

Google Scholar, GitHub, and X icons are from [Simple Icons](https://simpleicons.org/) (CC0); the email icon is from [Lucide](https://lucide.dev/) (ISC). License files are included in `assets/icons/`. Brand marks belong to their respective owners.

DexEMG's IROS acceptance and the Academic Service list were supplied by Wenqiao Li.
