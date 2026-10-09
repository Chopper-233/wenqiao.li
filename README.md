# Wenqiao Li

Personal academic homepage for Wenqiao Li.

**Website:** https://chopper-233.github.io/wenqiao.li/

## Edit the website

- `index.html`: biography, contact links, and publications.
- `styles.css`: layout, typography, and responsive styles.
- `assets/`: profile photograph and publication figures.

The website is plain HTML and CSS. No build step, package installation, or API key is needed.

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
- UVTA: the author's project teaser, [project page](https://uni-vta.github.io/).
- DexEMG: [Figure 1](https://arxiv.org/html/2603.05861v1/figures/fig1-teaser-1.jpg).
- PASDF: [teaser](https://arxiv.org/html/2505.24431v1/PASDF_teaser_figure.png).
- MulSen-AD: [data collection figure](https://raw.githubusercontent.com/ZZZBBBZZZ/MulSen-AD/main/img/device.png).
- Phys-AD: [data collection figure](https://guyao2023.github.io/Phys-AD/data%20collection.png).
- Anomaly-ShapeNet: [examples](https://raw.githubusercontent.com/Chopper-233/Anomaly-ShapeNet/main/examples.png).

Publication figures remain attributed to the respective research works and authors; they are not relicensed as website artwork.
