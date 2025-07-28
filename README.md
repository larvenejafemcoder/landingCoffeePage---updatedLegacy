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
<pre>
<span style="color:#38bdf8">source/</span>
├── <span style="color:#a3a3a3">fonts/</span>                   # Web fonts (.woff2, .ttf)
│
├── <span style="color:#a3a3a3">media-assets/</span>           # Images, videos, etc.
│
├── <span style="color:#38bdf8">styles/</span>                 # Modular CSS system
│   ├── <span style="color:#38bdf8">index.css</span>           # ⬅️ Entry point
│   ├── <span style="color:#facc15">colours.css</span>         # Theme color variables
│   ├── <span style="color:#facc15">fonts.css</span>           # @font-face rules
│   ├── <span style="color:#facc15">base.css</span>            # Reset + html/body defaults
│
│   ├── <span style="color:#c084fc">layout/</span>             # Layout structure
│   │   ├── <span style="color:#c084fc">container.css</span>   # Containers and wrappers
│   │   └── <span style="color:#c084fc">media.css</span>       # Media queries
│
│   ├── <span style="color:#f97316">components/</span>         # Reusable UI parts
│   │   ├── <span style="color:#f97316">cup.css</span>         # ☕ Coffee cup animation
│   │   └── <span style="color:#f97316">slider.css</span>      # Vertical slider
│
│   ├── <span style="color:#4ade80">sections/</span>           # Page sections
│   │   ├── <span style="color:#4ade80">hero.css</span>        # Hero section
│   │   ├── <span style="color:#4ade80">about.css</span>       # About section
│   │   └── <span style="color:#4ade80">contact.css</span>     # Contact section
│
│   └── <span style="color:#f472b6">utils/</span>              # Helpers
│       ├── <span style="color:#f472b6">animations.css</span>  # Keyframes
│       └── <span style="color:#f472b6">spacing.css</span>     # Spacing utilities
│
├── <span style="color:#38bdf8">index.html</span>              # Main landing page
├── <span style="color:#38bdf8">index.js</span>                # Main logic
├── <span style="color:#38bdf8">slider.html</span>             # Slider component
└── <span style="color:#a3a3a3">README.md</span>               # Project docs
</pre>
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
