Modern Digital Clock
A sleek, responsive digital clock application built with vanilla JavaScript, HTML5, and CSS3. This project demonstrates real-time DOM manipulation and asynchronous execution logic.

🚀 Features
Asynchronous Time Updates: Utilizes JavaScript's setInterval to handle real-time clock synchronization without blocking the main thread.

Dynamic Formatting: Implements logic to ensure a consistent HH:MM:SS format using string padding.

Neon UI Design: A modern dark-mode aesthetic with CSS glow effects and responsive Flexbox centering.

Lightweight: Built with zero external dependencies or libraries.

🛠️ Tech Stack
HTML5: Semantic structure for the clock container.

CSS3: Custom styling featuring neon glow effects, transitions, and flexible layouts.

JavaScript (ES6+): Core logic focused on the Date object and asynchronous UI updates.

📖 How It Works
The application uses an asynchronous approach to keep the time accurate:

The Loop: A setInterval function triggers every 1000ms (1 second).

Data Fetching: The script captures the current system time using the new Date() constructor.

UI Sync: The DOM is updated dynamically, ensuring the user sees the latest time instantly without a page refresh.

🔧 Installation & Usage
Clone this repository:

Bash
git clone https://github.com/celalce/clock-javascript.git
Open the project folder:

Bash
cd clock-javascript
Launch clock.html in any modern web browser.

👤 Author
Celal Albayrak
