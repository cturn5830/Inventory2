import { useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { addDoc } from "firebase/firestore";
import { inventory } from "../Firebase/db";

export default function AddInventory(props) {
    // ... omitted
    const movement = props.movement;
    const cancelBTN = props.cancelBTN;

    const [formValue1, setFormValue1] = useState('');
    const [formValue2, setFormValue2] = useState('');
    const [formValue3, setFormValue3] = useState('');
    const [formValue4, setFormValue4] = useState('');
    const [formValue5, setFormValue5] = useState('');
    const [formValue6, setFormValue6] = useState('');
    const [formValue7, setFormValue7] = useState('');
    const [formValue8, setFormValue8] = useState('');
    const [formValue9, setFormValue9] = useState('');
  
    const newProduct = {
      Product: formValue1,
      Brand:formValue2,
      Amount:formValue3,
      Size:formValue4,
      Location:formValue5,
      Campaign:formValue6,
      SGA:formValue7,
      Retail:formValue8,
      Year:formValue9,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }

    const SendInventory = async (e) => {
      e.preventDefault();
  
      setFormValue1('');
      setFormValue2('');
      setFormValue3('');
      setFormValue4('');
      setFormValue5('');
      setFormValue6('');
      setFormValue7('');
      setFormValue8('');
      setFormValue9('');
    }
   
  
    return (<>
  <div className='fixed duration-500 bg-slate-300 w-full h-full flex flex-col items-center gap-3 justify-center z-20' style={{top:movement}}>
      <form onSubmit={SendInventory}>
        <h1 className='text-4xl text-teal-700 font-bold text-center'>Add Product</h1>
        <div className='flex flex-row gap-10'>
          <section className="flex flex-col gap-y-0.5">
        <h3 className='text-center text-teal-900 font-semibold'>Product</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={formValue1} onChange={(e) => setFormValue1(e.target.value)} placeholder="Product" />
        <h3 className='text-center text-teal-900 font-semibold'>Brand</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={formValue2} onChange={(e) => setFormValue2(e.target.value)} placeholder="Brand" />
        <h3 className='text-center text-teal-900 font-semibold'>Amount</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={formValue3} onChange={(e) => setFormValue3(e.target.value)} placeholder="Amount" />
        <h3 className='text-center text-teal-900 font-semibold'>Size</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={formValue4} onChange={(e) => setFormValue4(e.target.value)} placeholder="Size" />
</section>
        <section className="flex flex-col gap-y-0.5">
        <h3 className='text-center text-teal-900 font-semibold'>Location</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={formValue5} onChange={(e) => setFormValue5(e.target.value)} placeholder="Location" />
        <h3 className='text-center text-teal-900 font-semibold'>Campaign</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={formValue6} onChange={(e) => setFormValue6(e.target.value)} placeholder="Campaign" />
        <h3 className='text-center text-teal-900 font-semibold'>SGA</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={formValue7} onChange={(e) => setFormValue7(e.target.value)} placeholder="SGA" />
        <h3 className='text-center text-teal-900 font-semibold'>Retail</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={formValue8} onChange={(e) => setFormValue8(e.target.value)} placeholder="Retail" />
        <h3 className='text-center text-teal-900 font-semibold'>Year</h3>
        <input className='bg-teal-50 p-1 rounded-md' value={formValue9} onChange={(e) => setFormValue9(e.target.value)} placeholder="Year" />
        </section>
        </div>
  <br/>
        <button className='bg-teal-800 text-teal-100 p-2 rounded-md hover:bg-teal-700 duration-150 mb-3 content-around'
        type="submit" disabled={!formValue1 && !formValue2 && !formValue3 && !formValue4 && !formValue5 && !formValue6 && !formValue7 && !formValue8 && !formValue9} onClick={
          ()=>{
            addDoc(inventory, newProduct);
            
          }}>Submit</button>
        {cancelBTN}
      </form>
  </div>
    </>)
  }