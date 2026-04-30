# Color Clock

A simple React practice application that displays the current time and date with a theme toggle feature. The clock features a Bootstrap icon as its logo and allows users to switch between two gradient backgrounds.

## ✨ Features

- Displays current local time
- Shows current date
- **Theme Toggle Button** - Switch between two gradient backgrounds:
  - Theme 1: Blue to Yellow gradient
  - Theme 2: Dark Blue gradient
- Smooth background transitions (1 second ease-in-out)
- Responsive centered layout
- Bootstrap clock icon with white card styling
- White text with subtle shadow for readability

## 🛠️ Technologies Used

- **React** - UI library with Hooks (useState, useEffect)
- **Vite** - Build tool and development server
- **Bootstrap Icons** - Clock icon (bi-clock-fill)
- **CSS3** - Styling with gradients, transitions, and CSS classes for theming

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

## 🚀 Installation & Setup

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
Add Bootstrap Icons CDN

Open index.html (create it if missing) and add this to the <head> section:

html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
Start the development server

bash
npm run dev
Open your browser and navigate to the local URL shown in the terminal (usually http://localhost:5173)

📁 Project Structure
text
color-clock/
├── src/
│   ├── App.jsx      # Main component with clock logic and theme toggle
│   ├── App.css      # Styling with theme classes
│   ├── main.jsx     # React entry point
│   └── index.css    # Global styles (if any)
├── index.html       # HTML entry point (needs Bootstrap Icons CDN)
├── package.json     # Project dependencies
└── README.md        # This file
🎨 How the Theme Toggle Works
The theme toggle uses React's useState and useEffect hooks:

useState(false) tracks whether Theme 1 is active

When the button is clicked, the state toggles

useEffect watches for state changes and applies the appropriate CSS class to the body element

CSS classes (theme-one or theme-two) change the background gradient

The transition property creates a smooth color change animation

🎨 Customization
Change Theme Colors
Edit App.css and modify the gradient values:

css
/* Theme 1 - Light/Blue-Yellow */
body.theme-one {
  background: linear-gradient(125deg, #00e5ff 0%, #ffeb3b 100%);
}

/* Theme 2 - Dark/Purple */
body.theme-two {
  background: linear-gradient(125deg, #2c3e50 0%, #3498db 100%);
}
Add More Themes
Add a new CSS class in App.css:

css
body.theme-three {
  background: linear-gradient(125deg, #ff6b6b 0%, #c06c84 100%);
}
Update the toggle logic in App.jsx to cycle through three themes instead of two

Resize the Clock Icon
In App.css, adjust the font-size property of .clock-logo:

css
.clock-logo {
  font-size: 60px;  /* Change this value */
}
Change Button Styling
In App.jsx, modify the button's style prop:

jsx
<button 
  onClick={() => setIsClicked(!click)}
  style={{
    border: "none",
    padding: "10px 20px",
    backgroundColor: "aqua",
    borderRadius: "10px"
  }}
>
  Toggle Theme
</button>
⏰ Making the Clock Real-Time
The current version displays static time. To make it update every second, add this code to App.jsx:

jsx
const [time, setTime] = useState(new Date())

useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date())
  }, 1000)
  
  return () => clearInterval(timer)
}, [])

// Then display: {time.toLocaleTimeString()}


🔧 Future Improvements


Add real-time ticking seconds

Implement color changes based on time of day

Add 12/24 hour format toggle

Display seconds with milliseconds

Include full day name in date display

Add animation effects on theme toggle

Cycle through more than two themes

Save user's theme preference in localStorage

Add keyboard shortcut (e.g., press 'T' to toggle theme)

🐛 Known Issues

Time doesn't automatically update (static on load)

Missing Bootstrap Icons CDN in HTML file (needs to be added manually)

📝 Notes

This project uses CSS classes for theming rather than inline styles for better maintainability

The useEffect hook ensures the theme persists and applies correctly to the entire page body

The button includes inline styles for quick customization, but these could be moved to CSS classes for consistency

📄 License

This project is for educational/practice purposes.