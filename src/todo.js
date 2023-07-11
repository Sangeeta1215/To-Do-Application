import React,{useState,useRef}  from 'react'
import {v4 as uuidv4} from "uuid";
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
    else{
      setitemsArray([ ...itemsArray, {value:itemRef.current.value,id:uuidv4()}])       
    }

        
    
    console.log(itemsArray)
    
    
    }
    function deleteItem(id)
    {
       var item=itemsArray.filter(item=>(item.id!==id))
       setitemsArray(item)
    
    
    }
    function editItem(id,value)
    { 
       setvalue(value);
      itemRef.current.value=value;
      seteditItems({ id, value });    
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
          <div className="border mt-3  ms-2">
           <svg  onClick={addData}xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-plus mt-2" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
{/* <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil editItem" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg> */}
</div>
</div>
<br />
{
itemsArray.map((item,index)=>
<p key={index}>
 {item.value} <svg  onClick={()=>deleteItem(item.id)} value={item} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash deleteItems" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
   &emsp;
 <svg onClick={()=>editItem(item.id,item.value)}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
</p>)
}      
    </>
  )
}
