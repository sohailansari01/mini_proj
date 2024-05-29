// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBuyLXz-AeGiMJuTbukeqLukNqoOBNQHy8",
  authDomain: "fir-2f869.firebaseapp.com",
  projectId: "fir-2f869",
  storageBucket: "fir-2f869.appspot.com",
  messagingSenderId: "720048966453",
  appId: "1:720048966453:web:93d46b9b0a574892d7da7c",
  measurementId: "G-WWJC14VJ59"
};

// Ensure Firebase isn't initialized more than once
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();

const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');
const container = document.querySelector('.container');

document.querySelector('#sign-up-btn').addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

document.querySelector('#sign-in-btn').addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signUpForm.querySelector('input[type=email]').value;
  const password = signUpForm.querySelector('input[type=password]').value;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    console.log('User signed up:', userCredential.user);
    alert('You have successfully signed up!');
    signUpForm.reset();
    container.classList.remove('sign-up-mode');
    
  } catch (error) {
    console.error('Error creating user:', error);
    alert('Error creating user: ' + error.message);
  }
});

signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = signInForm.querySelector('input[type=email]').value;
  const password = signInForm.querySelector('input[type=password]').value;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    console.log('User signed in:', userCredential.user);
    alert('You have successfully signed in!');
    signInForm.reset();
    window.location.href = 'profile.html'; 
  } catch (error) {
    console.error('Error user Not found:', error);
    alert('Error User Not Found: ' + error.message);
  }
});
