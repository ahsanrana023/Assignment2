import  firebase from "firebase"
const firebaseConfig = {
 //Add your firebase api information here..
  };

  firebase.initializeApp(firebaseConfig)
  const database = firebase.database()

  export{database}