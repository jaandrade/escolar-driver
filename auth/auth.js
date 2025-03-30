
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

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

// Login form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '../index.html';
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
    }
  });
}

// Register form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = '../index.html';
    } catch (error) {
      alert('Erro ao criar conta: ' + error.message);
    }
  });
}

// Forgot password form
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
if (forgotPasswordForm) {
  forgotPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    try {
      await sendPasswordResetEmail(auth, email);
      alert('Email de recuperação enviado! Verifique sua caixa de entrada.');
      window.location.href = 'login.html';
    } catch (error) {
      alert('Erro ao enviar email de recuperação: ' + error.message);
    }
  });
}
