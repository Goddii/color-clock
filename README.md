Color Clock
A simple React practice application that displays the current time and date with a visually appealing gradient background. The clock features a Bootstrap icon as its logo.

✨ Features
Displays current local time that updates automatically

Shows current date

Clean, modern gradient background with smooth transitions

Responsive centered layout

Bootstrap clock icon with white card styling

White text with subtle shadow for readability

🛠️ Technologies Used
React - UI library

Vite - Build tool and development server

Bootstrap Icons - Clock icon (bi-clock-fill)

CSS3 - Styling with gradients and transitions

📋 Prerequisites
Before running this application, make sure you have the following installed:

Node.js (v14 or higher)

npm or yarn

🚀 Installation & Setup
Clone or download the project files

Install dependencies

bash
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
│   ├── App.jsx      # Main component with clock logic
│   ├── App.css      # Styling for the clock app
│   ├── main.jsx     # React entry point
│   └── index.css    # Global styles (if any)
├── index.html       # HTML entry point (needs Bootstrap Icons CDN)
├── package.json     # Project dependencies
└── README.md        # This file
🎨 Customization
Change the Background
Edit App.css and modify the body background gradient:

css
body {
  background: linear-gradient(125deg, #2c3e50 0%, #3498db 100%);
}
Resize the Clock Icon
In App.css, adjust the font-size property of .clock-logo:

css
.clock-logo {
  font-size: 60px;  /* Change this value */
}
Change Text Color
Modify the .app-container color property:

css
.app-container {
  color: #ffeb3b;  /* Change to any color */
}
⏰ How It Works
The app uses React's useState and lifecycle methods to create a real-time clock. The time updates automatically using setInterval (implementation would need to be added to make it dynamic).

Note: The current version displays the time only once when the component loads. To make it a real-time ticking clock, you would need to:

Add a useState for the current time

Use useEffect to set up an interval that updates the time every second

Clean up the interval on component unmount

🐛 Known Issues
The time doesn't automatically update (static on load)

Missing Bootstrap Icons CDN in HTML file

🔧 Future Improvements
Add real-time ticking seconds

Implement color changes based on time of day

Add 12/24 hour format toggle

Add seconds display with milliseconds

Include date with day name

Add animation effects

📄 License
This project is for educational/practice purposes.