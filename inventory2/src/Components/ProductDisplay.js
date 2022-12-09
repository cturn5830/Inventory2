import { useState } from "react";
import EditProduct from "./EditProduct";

export default function ProductDisplay(props) {
    const { Product, Brand, Amount, Size, Location, Campaign, SGA, Retail, Year, createdAt} = props.product;
    const DocId= props.product.id;
    let DivID = 'EditProduct'+createdAt;
    let EditCheck = 'false';
    
    const [displayState, setdisplayState ] =useState ('500vh');
    
    return (<>
      <tr>
      <th>{Product}</th>
        <th>{Brand}</th>
        <th>{Amount}</th>
        <th>{Size}</th>
        <th>{Location}</th>
        <th>{Campaign}</th>
        <th>{SGA}</th>
        <th>{Retail}</th>
        <th>{Year}</th>
        <button className='bg-teal-800 text-teal-100 p-2 rounded-md hover:bg-teal-700 duration-150 mt-3' onClick={()=>{
          if(EditCheck === 'false'){
            EditCheck = 'true';
            setdisplayState('0');
          }
          else{
            EditCheck = 'false';
            setdisplayState('500vh');
          }
        }}>EDIT</button>
      </tr>

      <div className='fixed duration-500 bg-slate-300 w-full h-full flex flex-col items-center gap-3 justify-center z-20 left-0'id={DivID} style={{top:displayState}}>

      <EditProduct DocId={DocId}
      
      productValue={{Product, Brand, Amount, Size, Location, Campaign, SGA, Retail, Year, createdAt}}
      />
        <button className='bg-teal-800 text-teal-100 p-2 rounded-md hover:bg-red-700 duration-300 w-1/5' onClick={
          ()=>{
            setdisplayState('500vh');}
        }>
          Close
        </button>
      </div>
    </>)
  }