import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export default function SignOut() {
    const auth = firebase.auth();
    return auth.currentUser && (
      <button className='p-3 bg-red-600 duration-300 m-2 hover:bg-red-500 font-bold rounded-md'
      onClick={() => auth.signOut()}>Sign Out</button>
    )
  }