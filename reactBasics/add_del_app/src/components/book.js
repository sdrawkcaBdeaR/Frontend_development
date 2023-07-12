import EditComponent from "./editComponent"
import { useState } from 'react'

const Book=({bookDetails,onDel,onEdit})=>{
    const [editState,setEditState]=useState(true)

    const handleDeleteClick=()=>{
        onDel(bookDetails.id)
    }
    const handleEditChange=()=>{
        setEditState(!editState)
    }
    const handleEdit=(id,newName)=>{
        onEdit(id,newName)
        setEditState(!editState)
    }

    let show=editState?(<div>{bookDetails.name}</div>):(<EditComponent bookDetails={bookDetails} onEdit={handleEdit} />)
    return(
        <div>
            <img src={bookDetails.imgadd} />
            {show}
            <button onClick={handleDeleteClick} >Delete</button>
            <button onClick={handleEditChange} >Edit</button>
            
        </div>
    )
}

export default Book