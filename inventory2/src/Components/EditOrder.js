import { useState } from "react";
import {db, FBorders,inventory } from "../Firebase/db";
import {updateDoc, doc, addDoc,getDoc, deleteDoc } from "firebase/firestore";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import DeleteProduct from "./DeleteProduct";
import { useEffect } from "react";

export default function EditOrder(props){
    

    const productValue= props.productValue

    const DocRef=props.DocId    

    const DocLocate = doc(db,'orders',DocRef)

    const [Product, setProduct] = useState(productValue.Product);
    const [Brand, setBrand] = useState(productValue.Brand);
    const [Amount, setAmount] = useState(productValue.OrderAmount);
    const [Size, setSize] = useState(productValue.Size);
    const [Location, setLocation] = useState(productValue.Location);
    const [Campaign, setCampaign] = useState(productValue.Campaign);
    const [SGA, setSGA] = useState(productValue.SGA);
    const [Retail, setRetail] = useState(productValue.Retail);
    const [Year, setYear] = useState(productValue.Year);
    const [OriginalDoc, setOriginalDoc] = useState(productValue.Doc_ref);

    const ogDocRef= doc(db,'inventory',OriginalDoc)
    
    const [OgDoc, setOgDoc] = useState([])

    getDoc(ogDocRef)
      .then((doc) => {
        setOgDoc(doc.data())
      })


    const edits = {
        Product: Product,
        Amount:Amount,
        Size:Size,
        Location:Location,
        editAt: firebase.firestore.FieldValue.serverTimestamp(),
      }
    const SendInventory = async (e) => {
        e.preventDefault();
        
    }

    const OgDocNum = Number(OgDoc.Amount)
    const AmountNum = Number(Amount)

    const mathamount = OgDocNum+AmountNum ; 



    const ogDocUpdate = {
      Amount: mathamount
    }

    return(<div className='flex flex-row m-auto gap-10'>
    <form className='flex flex-col gap-3' onSubmit={SendInventory}>
        <h1 className='text-4xl text-teal-700 font-bold text-center'>Edit Product</h1>
        <h3 className='text-center text-teal-900 font-semibold'>Product</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Product} onChange={(e) => setProduct(e.target.value)} placeholder="Product" />
        <h3 className='text-center text-teal-900 font-semibold'>Amount</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <h3 className='text-center text-teal-900 font-semibold'>Size</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Size} onChange={(e) => setSize(e.target.value)} placeholder="Size" />
        <h3 className='text-center text-teal-900 font-semibold'>Location</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        <button
        className='w-full bg-teal-800 text-teal-100 p-2 rounded-md hover:bg-teal-700 duration-150 z-30' 
        type="submit" 
        disabled={!Product  && !Amount && !Size && !Location } 
        onClick={
          ()=>{updateDoc(DocLocate, edits)}  
          }>Update</button>
           </form>

          <div>
            <h1 className='text-4xl text-teal-700 font-bold text-center mb-3'>
              Remove Order
            </h1>
           <form className='flex flex-col gap-3' onSubmit={SendInventory}>
              <h3 className='text-center text-teal-900 font-semibold'>
                Amount Return
              </h3>
              <input className='bg-teal-50 p-1 rounded-md' value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />

              <button 
              className='w-full bg-teal-800 text-teal-100 p-2 rounded-md hover:bg-teal-700 duration-150'
              type="submit" 
        disabled={!Product  && !Amount && !Size && !Location } 
        onClick={
          ()=>{
              updateDoc(ogDocRef, ogDocUpdate);
              deleteDoc(DocLocate);
          }  
          }>return</button>
           </form>
          </div>
</div>)
}