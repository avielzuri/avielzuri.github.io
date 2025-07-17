# Aviel Zuri-Shaday | Portfolio Website

A modern, responsive portfolio website showcasing aerospace engineering projects, research experience, and technical skills. Built with vanilla HTML, CSS, and JavaScript with a focus on performance, accessibility, and user experience.

## 🚀 Live Demo

Visit the live site: [avielzuri.github.io](https://avielzuri.github.io)

## ✨ Features

### 🎨 Design & UX
- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Theme**: Toggle between themes with preference persistence
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling**: Enhanced navigation with animated scroll behavior

### 📱 Mobile Experience
- **Mobile-First**: Responsive design prioritizing mobile experience
- **Hamburger Menu**: Collapsible navigation for mobile devices
- **Touch Optimized**: Properly sized touch targets and interactions

### ♿ Accessibility
- **ARIA Labels**: Proper accessibility attributes for screen readers
- **High Contrast**: Excellent color contrast ratios in both themes
- **Keyboard Navigation**: Full keyboard accessibility support
- **Semantic HTML**: Proper HTML5 structure for accessibility

### ⚡ Performance
- **Lazy Loading**: Images load only when needed
- **CSS Containment**: Optimized rendering performance
- **Smooth Animations**: Hardware-accelerated transitions
- **Lightweight**: No external dependencies, pure vanilla JavaScript

### 🔒 Security
- **External Link Protection**: Proper `rel="noopener noreferrer"` attributes
- **Error Handling**: Robust DOM query error handling
- **Input Validation**: Safe handling of user interactions

## 🛠️ Tech Stack

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with custom properties (CSS variables)
- **JavaScript (ES6+)**: Interactive features and theme management
- **GitHub Pages**: Hosting and deployment

## 📁 Project Structure

```
avielzuri.github.io/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and themes
├── README.md          # Project documentation
├── _config.yml        # Jekyll configuration
├── context_dump.txt   # Project context and content
└── images/           # Project images
    ├── OrbitDynSim/  # Orbital Dynamics Simulator images
    └── OTV/          # Over Terrain Vehicle images
```

## 🎯 Sections

### 🏠 Hero Section
- Professional introduction
- Contact information
- Call-to-action buttons
- Theme toggle

### 👨‍💼 About Section
- Professional background
- Current role and education
- Technical skills organized by category
- Languages proficiency

### 🚀 Projects Section
- **Orbital Dynamics Simulator**: Python-based satellite orbit visualization
- **Over Terrain Vehicle**: C++/Arduino autonomous vehicle project
- **EEG Motion Classification**: Signal processing research project

### 📄 Resume Section
- Education details
- Professional experience
- Research projects
- Technical achievements

## 🚦 Getting Started

### Prerequisites
- Modern web browser
- Git (for development)
- Python (for local development server)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/avielzuri/avielzuri.github.io.git
   cd avielzuri.github.io
   ```

2. **Start local server**
   ```bash
   python -m http.server 8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Making Changes

1. **Edit files**
   - `index.html` for content changes
   - `styles.css` for styling modifications

2. **Test locally**
   ```bash
   python -m http.server 8000
   ```

3. **Deploy changes**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

## 🎨 Theme Customization

The website uses CSS custom properties for easy theme customization:

```css
:root {
    --bg-color: #fff;
    --text-color: #333;
    --accent-color: #3498db;
    /* ... more variables */
}

[data-theme="dark"] {
    --bg-color: #0f0f0f;
    --text-color: #f0f0f0;
    --accent-color: #4a9eff;
    /* ... dark theme overrides */
}
```

## 📱 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🔧 Performance Optimizations

- **Lazy Loading**: Images load on scroll
- **CSS Containment**: Improved rendering performance
- **Preconnect**: DNS prefetching for external resources
- **Image Dimensions**: Prevents layout shift during loading
- **Smooth Transitions**: Hardware-accelerated animations

## 📊 SEO Features

- **Meta Tags**: Comprehensive SEO metadata
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image alternatives
- **Structured Data**: Professional profile information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This portfolio website is available for viewing and reference. All content and code represent personal work and projects by Aviel Zuri-Shaday.

## 📧 Contact

**Aviel Zuri-Shaday**
- Email: [avielzurishaday@gmail.com](mailto:avielzurishaday@gmail.com)
- Phone: [347-241-7945](tel:347-241-7945)
- LinkedIn: [linkedin.com/in/aviel-zuri-shaday](https://linkedin.com/in/aviel-zuri-shaday)
- Location: Queens, NY

## 🎓 About the Developer

Aerospace Engineering student at University of Maryland with expertise in:
- Flight simulation and autonomous systems
- EEG signal processing and brain-computer interfaces
- Python, C++, and web development
- Research in Extended Reality Flight Simulation Lab

---

**Developed by Aviel Zuri-Shaday** | *Enhanced with Claude-4-Sonnet AI assistance*
