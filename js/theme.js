/* Theme Toggle */

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const THEME_KEY = 'portfolio-theme';

// Initialize theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    applyTheme(theme);
}

// Apply theme
function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    
    // Update button icon
    const icon = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.innerHTML = `<span class="theme-icon">${icon}</span>`;
}

// Toggle theme
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Event listeners
themeToggle.addEventListener('click', toggleTheme);

// Initialize on page load
window.addEventListener('load', initializeTheme);

console.log('Theme toggle initialized!');
