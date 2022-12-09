import { useState,useEffect } from "react";
import {db, FBorders,inventory } from "../Firebase/db";
import {updateDoc, doc, addDoc, getDocs } from "firebase/firestore";
import OrderDisplay from "./OrderDisplay";
import SignOut from "./SignOut";

export default function OrdersView(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading ] = useState(true);
  
    const [wrapper, setWrapper ] = useState('200vh');
    const [addBTN, setAddBTN ] = useState('0');
  useEffect( ()=>{

    async function getData() {
      const snapshot = await getDocs(FBorders);
      const data = snapshot.docs.map(doc => {
      const newDoc = {
        id: doc.id,
        ...doc.data()
      }
      return newDoc
    })

    setProducts(data)

    
    }

    getData();
    setLoading(false)
    

  },[] );

    return(<main>
    {loading && <div>Products are loading</div>}
      {!loading && products.length > 0 &&
      <>
      <SignOut/>
      <a href='/Inventory'>
        <button className='p-3 bg-teal-600 text-teal-900 rounded-md font-bold hover:bg-teal-400 duration-300'>Inventory</button>
      </a>
      <div>
    <h1 className='text-4xl text-teal-700 font-bold text-center'>
        Current orders
    </h1>
    <table className="table m-auto rounded-md">
        <thead>
          <tr>
            <th>Product</th>
            <th>Location</th>
            <th>Sent Amount</th>
            <th>Size</th>
            <th>Edit</th>
        </tr>
      </thead>
    {products && products.map(prod => <OrderDisplay key={prod.id} product={prod} />)}
    </table>
    </div>
    </>}
    </main>)
}