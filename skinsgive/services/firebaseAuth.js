import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import {  auth } from '../firebase'
import { Alert } from 'react-native';
import { createUserInDb } from './firebasedb';
// import { createUserInDb } from './firebasedb';

export const registerNewUser = (username, email, password, rank) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user:" + user)

        updateAuthProfile(username)

        //had to be in order, very weird
        await createUserInDb(email, rank, username, user.uid)

        Alert.alert("created user", user)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ": " + errorMessage)

        Alert.alert("Whoops", errorMessage)

      
      });
}



export const signInUser = async (email, password) => {

  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("User signed in" + user.email)

    Alert.alert("Welcome", "successfully logged in")

  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode + ": " + errorMessage)

    Alert.alert("Whoops!", errorCode)

  
  });
}


export const signOutUser =() => {
  signOut(auth).then(()=> {
    console.log("logged out")
  }).catch((error) => {
    console.log(error.errorMessage)
  })

}

export const getCurrentUser= () => {
  return auth.currentUser;
}



const updateAuthProfile = (username) => {
  updateProfile(auth.currentUser, {
    displayName: username, photoURL: "example"
  }).then(() => {

  }).catch(() => {

  })
}