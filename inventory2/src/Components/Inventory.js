import AddInventory from "./AddInventory";
import btnIMG from '../img/add.png';
import ProductDisplay from "./ProductDisplay";
import { useEffect, useState } from "react";
import {inventory} from '../Firebase/db';
import { getDocs, onSnapshot } from "firebase/firestore";
import SignOut from "./SignOut";
import {FaFolderPlus} from 'react-icons/fa'

export default function Inventory() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading ] = useState(true);
  
    const [wrapper, setWrapper ] = useState('200vh');
    const [addBTN, setAddBTN ] = useState('0');

  onSnapshot(inventory, (snapshot) => {
    let products = []
    snapshot.docs.forEach((doc)=>{
      products.push({...doc.data(),id: doc.id})
    })
    
  })

  useEffect( ()=>{

    async function getData() {
      const snapshot = await getDocs(inventory);
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

    return (
    <>
    <main>
      <SignOut/>
      <a href='/Order'>
      <button className='p-3 bg-teal-600 text-teal-900 rounded-md font-bold hover:bg-teal-400 duration-300'> Orders </button>
        </a>
      <table className="table m-auto rounded-md">
    {loading && <div>Products are loading</div>}
      {!loading && products.length > 0 &&
      <>
      <thead>
        <tr >
      <th>Product</th>
        <th>Brand</th>
        <th>Amount</th>
        <th>Size</th>
        <th>Location</th>
        <th>Campaign</th>
        <th>SGA</th>
        <th>Retail</th>
        <th>Year</th>
        <th>EDIT</th>
        </tr>
      </thead>
      <tbody>
        {products && products.map(prod => <ProductDisplay key={prod.id} product={prod} />)}
      </tbody>

        </>
      }
  
  
      </table>
        { <div className="addremoveWrapper">
          <button onClick={()=>{
              setWrapper('0')
              setAddBTN('150px')
          }} style={{top:addBTN}} className="addBTN ADDremove">
            <FaFolderPlus className='text-slate-300 text-4xl'/>
            </button>
        </div>
         }
      <AddInventory movement={wrapper} cancelBTN={cancelBTN()}/>
      </main>
    </>)
    function cancelBTN(){
      return(<>
      <button 
      className='bg-teal-800 text-teal-100 p-2 rounded-md hover:bg-red-700 duration-300 w-full'
      onClick={()=>{setWrapper('200vh')
      setAddBTN('0')}}>
        Close
      </button>
      
      </>)
    }
    function MoveAddBTN(){
      if(addBTN='150px'){
        setAddBTN('0')
      }else{
        setAddBTN('150px')
      }
    }
  }

  
