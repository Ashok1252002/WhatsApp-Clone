import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBrf9wsDkol_KZJuDDB66kIzkxFnqW7ZMA",
	authDomain: "whatsapp-clone-590.firebaseapp.com",
	projectId: "whatsapp-clone-590",
	storageBucket: "whatsapp-clone-590.appspot.com",
	messagingSenderId: "971352372670",
	appId: "1:971352372670:web:358926ceb1efe4c54835ef",
	measurementId: "G-73G45QJSHH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
