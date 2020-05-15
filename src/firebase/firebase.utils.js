import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyALpl3kkUFOttC6X0_Hai_9hUgAlivOxDg",
  authDomain: "crwn-db-fb42c.firebaseapp.com",
  databaseURL: "https://crwn-db-fb42c.firebaseio.com",
  projectId: "crwn-db-fb42c",
  storageBucket: "crwn-db-fb42c.appspot.com",
  messagingSenderId: "47708941199",
  appId: "1:47708941199:web:774686deeccd360ba7b9fa",
  measurementId: "G-B4K29DZX52",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //create instance of the google provider
provider.setCustomParameters({ prompt: "select_account" }); //google always promtp you to select which account you want to use
//to login, this is useful if you have multiple google account

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
