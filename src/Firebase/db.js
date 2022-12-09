import {initializeApp} from 'firebase/app'
import { getFirestore,collection } from 'firebase/firestore'

const firebaseConfig ={ 
    apiKey: "AIzaSyBA8uj_iKA_K_lXsFCN-DDwmYVz6N1vB8U",
    authDomain: "inventory-9c6c2.firebaseapp.com",
    databaseURL: "https://inventory-9c6c2-default-rtdb.firebaseio.com",
    projectId: "inventory-9c6c2",
    storageBucket: "inventory-9c6c2.appspot.com",
    messagingSenderId: "646321935740",
    appId: "1:646321935740:web:cd69df0f583f651c0780f9"
}

const db = getFirestore();

const inventory = collection(db,'inventory');
const FBorders = collection(db, 'orders')

export{
    db, inventory,FBorders
}