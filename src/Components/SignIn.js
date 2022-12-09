
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


export default function SignIn() {
    const auth = firebase.auth();
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    return (<div className="loginWrapper">
  <h1>
    Inventory Tracker
  </h1>
      <button onClick={signInWithGoogle}>Google Sign-in</button>
      <h2>
        Provided by Theory
      </h2>
      </div>
  )

}