import { useState } from "react";
import {db, FBorders } from "../Firebase/db";
import {updateDoc, doc, addDoc } from "firebase/firestore";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import DeleteProduct from "./DeleteProduct";

export default function EditProduct(props){
    const productValue= props.productValue

    const DocRef=props.DocId    

    const DocLocate = doc(db,'inventory',DocRef)

    const [Product, setProduct] = useState(productValue.Product);
    const [Brand, setBrand] = useState(productValue.Brand);
    const [Amount, setAmount] = useState(productValue.Amount);
    const [Size, setSize] = useState(productValue.Size);
    const [Location, setLocation] = useState(productValue.Location);
    const [Campaign, setCampaign] = useState(productValue.Campaign);
    const [SGA, setSGA] = useState(productValue.SGA);
    const [Retail, setRetail] = useState(productValue.Retail);
    const [Year, setYear] = useState(productValue.Year);

    const [NewLocate,setNewLocate] = useState('');
    const [OrderAmount, setOrderAmount] = useState('')


    const newleft= Amount - OrderAmount;
    
    const [OrderFailed, setOrderFailed] = useState('-200vh')

    const order = {
      Product: Product,
      Brand:Brand,
      OrderAmount:OrderAmount,
      Size:Size,
      Location:NewLocate,
      Campaign:Campaign,
      SGA:SGA,
      Retail:Retail,
      Year:Year,
      Doc_ref:DocRef,
      orderAt: firebase.firestore.FieldValue.serverTimestamp(),
    }
    const edits_after_order = {
      Product: Product,
      Brand:Brand,
      Amount:newleft,
      Size:Size,
      Location:Location,
      Campaign:Campaign,
      SGA:SGA,
      Retail:Retail,
      Year:Year,
      orderAt: firebase.firestore.FieldValue.serverTimestamp(),
    }
    const edits = {
        Product: Product,
        Brand:Brand,
        Amount:Amount,
        Size:Size,
        Location:Location,
        Campaign:Campaign,
        SGA:SGA,
        Retail:Retail,
        Year:Year,
        editAt: firebase.firestore.FieldValue.serverTimestamp(),
      }
    const SendInventory = async (e) => {
        e.preventDefault();
        
    }

    return(<div>
    <form onSubmit={SendInventory}>

      
        <h1 className='text-4xl text-teal-700 font-bold text-center'>Edit Product</h1>
        <div className='flex flex-row gap-10'>
        <section className="flex flex-col gap-y-0.5">
        <h3 className='text-center text-teal-900 font-semibold'>Product</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Product} onChange={(e) => setProduct(e.target.value)} placeholder="Product" />
        <h3 className='text-center text-teal-900 font-semibold'>Brand</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" />
        <h3 className='text-center text-teal-900 font-semibold'>Amount</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <h3 className='text-center text-teal-900 font-semibold'>Size</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Size} onChange={(e) => setSize(e.target.value)} placeholder="Size" />
        <h3 className='text-center text-teal-900 font-semibold'>Location</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        </section>
        <section className="flex flex-col gap-y-0.5">
        <h3 className='text-center text-teal-900 font-semibold'>Campaign</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Campaign} onChange={(e) => setCampaign(e.target.value)} placeholder="Campaign" />
        <h3 className='text-center text-teal-900 font-semibold'>SGA</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={SGA} onChange={(e) => setSGA(e.target.value)} placeholder="SGA" />
        <h3 className='text-center text-teal-900 font-semibold'>Retail</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Retail} onChange={(e) => setRetail(e.target.value)} placeholder="Retail" />
        <h3 className='text-center text-teal-900 font-semibold'>Year</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={Year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />
        </section>
        </div>
  <br/>
        <button className='w-full bg-teal-800 text-teal-100 p-2 rounded-md hover:bg-teal-700 duration-150' type="submit" 
        disabled={!Product && !Brand && !Amount && !Size && !Location && !Campaign && !SGA && !Retail && !Year} 
        onClick={
          ()=>{updateDoc(DocLocate, edits)}  
          }>Update</button>
           </form>



    <form className='flex flex-col gap-3 mt-3'onSubmit={SendInventory}>
      <h1 className='text-4xl text-teal-700 font-bold text-center'>
        Make Order
      </h1>
      <h3 className='text-center text-teal-900 font-semibold'>Location</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={NewLocate} onChange={(e) => setNewLocate(e.target.value)} placeholder='Location'/>
      <h3 className='text-center text-teal-900 font-semibold'> Amount going out </h3>
          <input className='bg-teal-50 p-1 rounded-md' value={OrderAmount} onChange={(e) => setOrderAmount(e.target.value)} placeholder='Amount'/>

      <button className='bg-teal-800 text-teal-100 p-2 rounded-md hover:bg-teal-700 duration-150 mb-3 content-around'
      type='submit'
      disabled={!NewLocate && !OrderAmount}
       onClick={
        ()=>{
          updateDoc(DocLocate,edits_after_order);
          addDoc(FBorders,order);
      }}>
      Complete Order</button>
    </form>


<DeleteProduct Locate={DocLocate}/>
           <div className="Errorpopup" style={{top:OrderFailed}}>
            <h3>
              Error: Order Amount Great Than Availible
            </h3>
           </div>
</div>)
}