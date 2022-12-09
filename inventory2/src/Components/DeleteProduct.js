import { useState } from "react";
import {deleteDoc} from "firebase/firestore";
import 'firebase/compat/firestore';
import NotifyDelete from "./NotifyDelete";


export default function DeleteProduct(props){
  const DocLocate = props.Locate;

  const [deleteCheck, setDeleteCheck] = useState('150vh');

  const NotifyOff = {
    display:'none',
    opacity:'0',
  };
  const NotifyOn = {
    display:'block',
    opacity:'100',
  };

  const [Notify, setNotify] = useState(NotifyOff);
    return(<>
    <button className='bg-teal-800 text-teal-100 p-2 rounded-md hover:bg-red-700 duration-300 w-full'
    onClick={()=>{
      setDeleteCheck('80vh')
    }}>
      Delete Product
    </button>

    <div className="duration-300 absolute bg-red-700 w-100 -left-1/5 flex gap-20 p-8 rounded-md " style={{top:deleteCheck}}>
    <button className='text-red-300 rounded-lg hover:bg-red-900 p-3'
    onClick={()=>{
      deleteDoc(DocLocate);
      setNotify(NotifyOn);
      setTimeout(function(){
        setNotify(NotifyOff)
      },3000)
    }}>
      DELETE PRODUCT
    </button>
    <button className='text-red-300 rounded-lg hover:bg-red-900 p-3'onClick={()=>{
      setDeleteCheck('150vh')
    }}>
      Keep Product
    </button>
    </div>
    <div>
      <NotifyDelete styleprop={Notify}/>
    </div>
    </>)
}

/*

*/