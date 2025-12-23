
# 🎬 Video Player Web

<div align="center">

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/your-username/videoplayer)
[![License](https://img.shields.io/badge/license-ISC-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)
[![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20Windows%20%7C%20macOS-lightgrey.svg)]()
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

A modern, feature-rich video player built with vanilla HTML, CSS, and JavaScript. This application provides a comprehensive video playback experience with playlist management, multiple viewing modes, and a sleek user interface.

[🚀 Live Demo](#-quick-start) • [📋 Features](#-features) • [🛠️ Installation](#-installation) • [🤝 Contributing](#-contributing) • [📄 License](#-license)

</div>


## ✨ Features

### 🎥 Core Video Playback
- **High-quality video playback** with support for multiple formats
- **Play/Pause controls** with visual feedback
- **Skip forward/backward** (10-second intervals)
- **Volume control** with mute/unmute functionality
- **Playback speed control** (0.5x to 2x)
- **Progress bar** with seek functionality
- **Time display** (current time / total duration)

### 📋 Playlist Management
- **Add multiple videos** to create custom playlists
- **File picker** for selecting video files from your computer
- **Shuffle playlist** for randomized playback
- **Loop playlist** or loop individual videos
- **Delete videos** from playlist with one click
- **Clear entire playlist** functionality
- **Visual indication** of currently playing video

### 🖥️ Advanced Viewing Options
- **Fullscreen mode** for immersive viewing
  - Toggle via button, F11 key, or double-click on video
- **Picture-in-Picture** support for multitasking
- **Keyboard accessibility** with space/enter and F11 support
- **Responsive design** that works on different screen sizes

### 🎨 User Interface
- **Light/Dark theme toggle** with local storage persistence
- **Smooth animations** and transitions
- **Custom scrollbar** styling
- **Hover effects** and interactive feedback
- **Accessibility features** with proper ARIA labels
- **Modern Material Design-inspired** controls

### 🔧 Technical Features
- **Cross-browser compatibility** (Chrome, Firefox, Safari, Edge)
- **Error handling** with console logging
- **Local storage** for theme preferences
- **Media Session API** metadata support (basic)
- **No external dependencies** for the frontend
- **Express.js server** for easy local development


## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed on your system
- Git (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/videoplayer.git
   cd videoplayer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - The application will automatically open at `http://localhost:8000`
   - If it doesn't open automatically, navigate to the URL manually

## 📸 Screenshots

### Dark Theme
```
[Dark theme video player interface - to be added]
```

### Light Theme
```
[Light theme video player interface - to be added]
```

### Playlist Management
```
[Playlist features demonstration - to be added]
```

### Usage

1. **Add Videos**: Click the "+" icon or use the file picker to add video files
2. **Control Playback**: Use the control buttons or keyboard shortcuts
3. **Manage Playlist**: Add, remove, or reorder videos in your playlist
4. **Fullscreen Mode**: Click the fullscreen button or press F11
5. **Toggle Theme**: Use the theme toggle button to switch between light and dark modes

## 🎮 Controls & Shortcuts

### Mouse Controls
- **Click play/pause button**: Play or pause video
- **Click volume control**: Adjust volume level
- **Click progress bar**: Seek to specific time
- **Double-click video**: Toggle fullscreen mode
- **Click playlist items**: Switch to that video


### Keyboard Shortcuts
- **Spacebar**: Play/Pause (when video is focused)
- **Enter**: Play/Pause (when video is focused)
- **F11**: Toggle fullscreen mode

## 🏗️ Project Structure

```
videoplayer/
├── index.html          # Main application file
├── server.js           # Express server
├── package.json        # Project configuration
├── README.md          # Project documentation
└── node_modules/      # Dependencies (created after npm install)
```

## 🔧 Development

### Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build for distribution (creates executable)

### Customization

The video player is built with vanilla technologies for easy customization:

- **HTML Structure**: Modify `index.html` to change layout
- **Styling**: Update CSS variables in the `<style>` section for themes
- **Functionality**: Extend JavaScript functions in the `<script>` section

### CSS Variables for Theming

The application uses CSS custom properties for easy theming:

```css
:root {
  --color-bg: #111;
  --color-text-main: #eee;
  --color-bg-container: #333;
  /* ... more variables */
}
```

## 🌐 Browser Support

- **Chrome**: ✅ Fully supported
- **Firefox**: ✅ Fully supported
- **Safari**: ✅ Fully supported
- **Edge**: ✅ Fully supported
- **Mobile browsers**: ✅ Responsive design

## 📝 Features in Detail

### Fullscreen Mode
The fullscreen feature allows you to:
- View videos in true fullscreen mode
- Use F11, double-click, or the button to toggle
- Exit fullscreen with the same method or ESC key

### Picture-in-Picture
- Watch videos while working in other applications
- Available on supported browsers
- Toggle via the PiP button

### Playlist Management
- Support for multiple video formats
- Drag-and-drop file addition
- Persistent playlist during session
- Visual feedback for current video

### Theme System
- Automatic light/dark theme detection
- Manual theme toggle
- Smooth theme transitions
- Local storage preference saving


## 🐛 Troubleshooting

### Common Issues

1. **Videos not loading**
   - Ensure video files are in supported formats (MP4, WebM, etc.)
   - Videos are loaded from local files, not URLs

2. **Fullscreen not working**
   - Fullscreen requires user interaction to activate
   - Check browser fullscreen permissions

3. **Playlist not saving**
   - Playlist is session-based and resets on page refresh
   - No cloud storage - videos must be re-added each session

### Error Handling
The application includes basic error handling:
- Server connection error notifications
- Console logging for video loading errors
- Browser compatibility checks
- Fullscreen API error handling

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/videoplayer.git
   cd videoplayer
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Make your changes**

5. **Test your changes**
   ```bash
   npm start
   ```

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Submit a Pull Request**

### Contribution Guidelines

- **Code Style**: Follow existing patterns and conventions
- **Testing**: Test your changes thoroughly
- **Documentation**: Update documentation if needed
- **Commits**: Use clear, descriptive commit messages

### Reporting Issues

**🐛 Bug Reports**
- Use the [Issue Tracker](https://github.com/your-username/videoplayer/issues)
- Include steps to reproduce the bug
- Provide browser and OS information
- Include screenshots if relevant

**💡 Feature Requests**
- Check existing issues first
- Describe the feature clearly
- Explain why it would be useful

## 📋 Roadmap

### Upcoming Features
- [ ] Drag and drop file support
- [ ] Video thumbnail generation
- [ ] Playlist persistence
- [ ] Keyboard shortcuts enhancement
- [ ] Mobile responsive improvements
- [ ] Video format support expansion

## 🏗️ Development

### Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build for distribution (creates executable)

### Project Structure

```
videoplayer/
├── 📄 index.html          # Main application file
├── 📄 server.js           # Express server
├── 📄 package.json        # Project configuration
├── 📄 README.md          # Project documentation
├── 📄 .gitignore         # Git ignore rules
├── 📄 LICENSE            # License file
└── 📁 node_modules/      # Dependencies (created after npm install)
```

### Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Build**: None (pure vanilla technologies)
- **Package Manager**: npm

## 🔒 Security

This project follows standard security practices for web applications. Report security vulnerabilities by creating a private issue or contacting the maintainers directly.

## 📄 License

This project is licensed under the GNU GPL Version 1 License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- Built with modern web technologies
- Uses Material Design principles
- Inspired by popular video player interfaces
- Optimized for performance and user experience

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-username/videoplayer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/videoplayer/discussions)
- **Email**: [Contact Maintainer](mailto:maintainer@example.com)

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star on GitHub! ⭐**

Made with ❤️ by [Foliage Tree](https://github.com/foliagetree23)

</div>
