# ☕ Coffee Landing Page Project

```markdown

Welcome to the **Coffee Landing Page** project!  
This is a simple yet visually appealing landing page for a coffee shop or brand.

> ⚠️ **Note**: The project includes beautiful animations but does **not** currently support responsive design.

---
```
## 📑 Table of Contents
```
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---
```
## 📁 Project Structure

```markdown
source/
├── fonts/                   # Custom web fonts (e.g., .woff2, .ttf)
│
├── media-assets/           # Images, videos, and other media assets
│
├── styles/                 # Main styling directory
│   ├── index.css           # ⬅️ Main CSS entry: @import all partials
│   ├── colours.css         # CSS variables converted from SASS
│   ├── fonts.css           # @font-face and font rules
│   ├── base.css            # Reset + body, html, etc.
│   │
│   ├── layout/             # Layout-specific styling
│   │   ├── container.css   # Container widths, sections, scroll-behavior
│   │   └── media.css       # Media queries
│   │
│   ├── components/         # Isolated UI elements
│   │   ├── cup.css         # Coffee cup animation
│   │   └── slider.css      # Vertical slider
│   │
│   └── utils/              # Utility classes, mixins, etc.
│       └── animations.css  # Keyframes and transitions
│
├── index.html              # Main landing page
├── index.js                # Main JavaScript logic
├── slider.html             # Slider-specific page/component
└── README.md               # Project documentation
```


## File Breakdown 🗄️
````
- `index.html`: Main HTML page.
- `index.js`: JavaScript for animations and logic.
- `slider.html`: Slider component layout.
- `styles/`: All SCSS/CSS stylesheets.
  - `_coffee.scss`: Coffee-themed style partial.
  - `_colours.scss`: Color variables.
  - `_slider.scss`: Slider-specific styles.
  - `style.scss`: Main SCSS file.
  - `style.css`: Compiled CSS output.
  - `style.css.map`: CSS source map.
- `media-assets/`: Images and videos.
---
````
## 🚀 Getting Started
````
To get a local copy up and running, follow these simple steps.

### ✅ Prerequisites

Make sure you have the following:

- A modern web browser (Chrome, Firefox, etc.)
- [Sass](https://sass-lang.com/install) installed globally

````

## 📦 Installation

Clone the repository and navigate into it:
```sh
git clone https://github.com/larvenejafemcoder/landingCoffeePage---updatedLegacy.git
cd source
```

## 🛠️ Usage

To preview the site locally:

* Open `index.html` directly in your browser.

## 🤝 Contributing

Contributions are what make the open source community so powerful.
Any help is **greatly appreciated**!

1. Fork the repo
2. Create a feature branch
   `git checkout -b feature/AmazingFeature`
3. Commit your changes
   `git commit -m 'Add AmazingFeature'`
4. Push to your branch
   `git push origin feature/AmazingFeature`
5. Open a Pull Request


## 📄 License

Distributed under the MIT License.
See `LICENSE` for more information.


## 🙏 Acknowledgments

* Inspired by real-world coffee shop web designs.
* Thanks to all contributors and creative coders out there.

---

☕ **Enjoy your coffee and your code.**

```
Commander KernelGhost is OUT!
```
