import React,{useState,useRef}  from 'react'
import {v4 as uuidv4} from "uuid";
import  Edit  from "./edit.js";
export default function Todo() {
    const [itemsArray,setitemsArray]=useState([]);
    const [value,setvalue]=useState("");
    const [editItems,seteditItems]=useState(false); 
   const itemRef=useRef(null)
    function addData()
    {   
    if(editItems){
      var updatedArry=itemsArray.map((item) => 
      item.id===editItems.id?{...item, value:itemRef.current.value}:item);
      setitemsArray(updatedArry)
      seteditItems(false);
  }
    else
    {
      if(itemRef.current.value!=='')
      {
        setitemsArray([ ...itemsArray, {value:itemRef.current.value,id:uuidv4()}]) 
      setvalue(itemRef.current.value);  
      }        
    }    
    console.log(itemsArray)   
    } 
  return (
    <>
      <div className="w-100 h-10 text-center border mt-4 todoList">
               <p className="pt-2">To Do List</p> 
            </div>
          <div className="text-center d-flex">
            <div>
          <input ref={itemRef}className="mt-3 Item form-control w-70" type="text" placeholder="Enter" aria-label="default input example"/>
          </div>
          <div className="mt-2  ms-2">
           <svg  onClick={addData}xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-plus mt-2" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>

</div>
</div>
<br />
<Edit itemsArray={itemsArray} setitemsArray={setitemsArray} editItems={editItems} seteditItems={seteditItems} value={value} setvalue={setvalue} itemRef={itemRef} />
    </>
  )
}
