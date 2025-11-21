import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase config (from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyB7NLbDQR2c3KGBV5iLAHrf-26kSAs4F2k",
    authDomain: "portfolio-45d2f.firebaseapp.com",
    projectId: "portfolio-45d2f",
    storageBucket: "portfolio-45d2f.firebasestorage.app",
    messagingSenderId: "24446470401",
    appId: "1:24446470401:web:8379b7f0f05d0132b27300",
    measurementId: "G-Q2WL6CVMFV"
};

// Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submit
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        await addDoc(collection(db, "messages"), {
            name,
            email,
            message,
            timestamp: serverTimestamp()
        });
        alert("✅ Message sent and saved!");
        document.getElementById("contactForm").reset();
    } catch (error) {
        console.error("Error saving message: ", error);
        alert("❌ Something went wrong.");
    }
});

  const scrollIndicator = document.getElementById('scrollIndicator');

  // Fade out on scroll
  window.addEventListener('scroll', () => {
    scrollIndicator.style.opacity = '0';
  });

  // Fade out on click
  scrollIndicator.addEventListener('click', () => {
    scrollIndicator.style.opacity = '0';
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  });