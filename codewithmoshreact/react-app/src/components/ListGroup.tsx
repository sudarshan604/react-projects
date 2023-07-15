import { MouseEvent } from "react"


interface Props{
    items:string[];
    heading:string;
   //(item:string)=>void
    onSelectitem:(item:string)=>void
}

function ListGroup({items,heading,onSelectitem}:Props){

 //event handler
 const handleClick=(event:MouseEvent)=>console.log(event)

 return( 
    <>
       <h1>{heading}</h1>
        <ul className="list-group">
          {items.map(item=><li key={item} onClick={()=>onSelectitem(item)}  className="list-group-item">{item}</li>)}
        </ul>
    </>
     )
}

export default ListGroup