
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBT9k4fk0iQ7CCt-ocHNcmot0opmfF-His",
  authDomain: "escolar-driver.firebaseapp.com",
  projectId: "escolar-driver",
  storageBucket: "escolar-driver.firebasestorage.app",
  messagingSenderId: "724110470164",
  appId: "1:724110470164:web:d86069321bf098a2354b01",
  measurementId: "G-9LLCH71GJX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setInitialTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'dark' ? '🌜' : '🌞';
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '🌜' : '🌞';
  localStorage.setItem('theme', newTheme);
}

// Check authentication state
onAuthStateChanged(auth, (user) => {
  if (!user && !window.location.pathname.includes('/auth/')) {
    window.location.href = '/auth/login.html';
  }
});

// Initialize theme
setInitialTheme();
themeToggle.addEventListener('click', toggleTheme);

// Logout functionality
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
  logoutButton.addEventListener('click', async () => {
    try {
      await signOut(auth);
      window.location.href = '/auth/login.html';
    } catch (error) {
      alert('Erro ao fazer logout: ' + error.message);
    }
  });
}
