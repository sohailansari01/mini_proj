import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuyLXz-AeGiMJuTbukeqLukNqoOBNQHy8",
  authDomain: "fir-2f869.firebaseapp.com",
  projectId: "fir-2f869",
  storageBucket: "fir-2f869.appspot.com",
  messagingSenderId: "720048966453",
  appId: "1:720048966453:web:93d46b9b0a574892d7da7c",
  measurementId: "G-WWJC14VJ59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
auth.useDeviceLanguage();

// Function to create spinner
function createSpinner(button) {
  const spinner = document.createElement('span');
  spinner.classList.add('spinner-border', 'spinner-border-sm', 'ms-1');
  button.appendChild(spinner);
  return spinner;
}

// Function to remove spinner
function removeSpinner(spinner) {
  spinner.remove();
}

const google = document.getElementById("google");
google.addEventListener("click", function (event) {
  // Prevent the default action of the click event
  event.preventDefault();

  // Get the button that was clicked
  var button = event.target;

  // Add spinner to the button
  const spinner = createSpinner(button);

  // Sign in with Google
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      alert("success");
      window.location.href = "dashboard.html";
      // Remove spinner
      removeSpinner(spinner);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      alert(errorMessage);
      // Remove spinner
      removeSpinner(spinner);
    });
});
