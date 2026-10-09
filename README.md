# Wenqiao Li

Personal academic homepage for Wenqiao Li.

**Website:** https://chopper-233.github.io/wenqiao.li/

## Edit the website

- `index.html`: biography, contact links, and publications.
- `styles.css`: layout, typography, and responsive styles.
- `media.js`: in-view playback, with click and keyboard pause/resume on the video itself.
- `assets/`: profile portrait, publication figures, icons, and muted video previews.

The website uses plain HTML, CSS, and a small video-playback script. No build step, package installation, or API key is needed. Video previews are available in WebM and MP4 for browser compatibility and respect reduced-motion preferences. There are no visible playback buttons: click a video or focus it and press Enter/Space to pause or resume. Without JavaScript, the poster remains visible and the publication's project link provides access to the full demonstration.

Publication previews use a 22rem desktop media column. Most previews use a 16:10 frame; the wide Phys-AD 5×3 montage uses its native 2416:818 aspect ratio to avoid top/bottom letterboxing. Content retains its original proportions without stretching or cropping. Click a method diagram to open its full-size SVG. The SVGs preserve vector text and paths from the original figure PDFs (embedded photos retain their source resolution). Video previews are re-encoded from the original clips: UVTA at 960×600 and Phys-AD at 2416×818, with H.264 CRF 17 and VP9 CRF 22.

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
- Chinese name: 李文峤, set in a locally hosted, three-character subset of [Ma Shan Zheng](https://github.com/google/fonts/tree/main/ofl/mashanzheng) with an oblique style. The SIL Open Font License is included in `assets/fonts/OFL-MaShanZheng.txt`.
- UVTA: side-by-side clips of human light-bulb data collection at **1×** (`light1.mp4`, seconds 12–19.2, left) and robot light-bulb manipulation at **5×** (`light/light.mp4`, seconds 125–161, right), combined into a 7.2-second loop. Speed is applied only to the robot clip before compositing. These are separate demonstrations, not time-synchronized recordings. The crops focus on the hands and bulb and exclude the participant's face. No audio is included.
- DexEMG: the robot-and-human-hand panel matching the supplied reference, displayed from the upper-left of the original [Figure 1](https://arxiv.org/html/2603.05861v1/figures/fig1-teaser-1.jpg), without the surrounding plots and other panels.
- PASDF: full network architecture, including pose-wise alignment and the SDF network; SVG converted using `pdftocairo -svg` from `figs/network.pdf` in the [arXiv source](https://arxiv.org/src/2505.24431v1).
- MulSen-AD: full multimodal pipeline, including RGB, infrared, and point-cloud memory banks and the Decision Gating Unit; SVG converted from `figs/mulsen_pipeline.pdf` in the [arXiv source](https://arxiv.org/src/2412.14592).
- Phys-AD: the 15 normal physical-interaction videos from the [project homepage](https://guyao2023.github.io/Phys-AD/), arranged in its original 5-column × 3-row order. Each source loops independently at its original speed in a silent 12-second preview. Row 1: `ball.mp4`, `button.mp4`, `car.mp4`, `clip.mp4`, `hinge.mp4`; row 2: `liquid.mp4`, `magnet.mp4`, `rolling_bear.mp4`, `rubber_band.mp4`, `screw.mp4`; row 3: `slide.mp4`, `sticky_roller.mp4`, `toothpaste.mp4`, `fan_n.mp4`, `zipper.mp4`. Source URLs are relative to the project homepage.
- Anomaly-ShapeNet: full IMRNet training/testing architecture; SVG converted from `latex/figures/model/Architecture.pdf` in the [arXiv source](https://arxiv.org/src/2311.14897v3).

Publication figures remain attributed to the respective research works and authors; they are not relicensed as website artwork.

Google Scholar, GitHub, and X icons are from [Simple Icons](https://simpleicons.org/) (CC0); the email icon is from [Lucide](https://lucide.dev/) (ISC). License files are included in `assets/icons/`. Brand marks belong to their respective owners.

DexEMG's IROS acceptance and the Academic Service list were supplied by Wenqiao Li.
