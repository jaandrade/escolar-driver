
// Firebase configuration
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

// Password validation function
function validatePassword(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const errors = [];
  if (password.length < minLength) errors.push("A senha deve ter no mínimo 8 caracteres");
  if (!hasUpperCase) errors.push("A senha deve conter pelo menos uma letra maiúscula");
  if (!hasLowerCase) errors.push("A senha deve conter pelo menos uma letra minúscula");
  if (!hasNumbers) errors.push("A senha deve conter pelo menos um número");
  if (!hasSpecialChar) errors.push("A senha deve conter pelo menos um caractere especial");

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Authentication functions
async function registerUser(email, password) {
  const validation = validatePassword(password);
  if (!validation.isValid) {
    throw new Error(validation.errors.join('\n'));
  }
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    window.location.href = '/index.html';
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    window.location.href = '/index.html';
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { registerUser, loginUser, resetPassword };
