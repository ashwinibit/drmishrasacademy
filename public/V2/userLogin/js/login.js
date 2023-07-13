const toggle=()=>{
    var yourUl = document.getElementById("idCreate");
    
    yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';

    var yourUl1 = document.getElementById("signIn");
    yourUl1.style.display = yourUl.style.display === 'none' ? '' : 'none';
}



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOXQh-mt_59tuUoqHl0yi0TDB35K1taeU",
    authDomain: "drmishrasacademy-3037c.firebaseapp.com",
    databaseURL: "https://drmishrasacademy-3037c-default-rtdb.asia-southeast1.firebasedatabase.app",  
    projectId: "drmishrasacademy-3037c",
    storageBucket: "drmishrasacademy-3037c.appspot.com",
    messagingSenderId: "392167429253",
    appId: "1:392167429253:web:e8b3f612d4290af0d445ec",
    measurementId: "G-4W2ZVERQ82"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const database = firebaseApp.database();

// Sign up function
const signUp = () => {
    const email = document.getElementById("loginMail").value;
    const password = document.getElementById("loginPassword").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}