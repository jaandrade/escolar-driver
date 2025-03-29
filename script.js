
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on system preference
function setInitialTheme() {
  if (prefersDarkScheme.matches) {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌜';
  } else {
    document.body.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌞';
  }
}

// Toggle theme
function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌞';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌜';
  }
}

// Initialize
setInitialTheme();
themeToggle.addEventListener('click', toggleTheme);
