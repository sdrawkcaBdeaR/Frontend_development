import { useState } from 'react'

const EditComponent=({bookDetails,onEdit})=>{
    const [text,setText]=useState(bookDetails.name)
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const handleClick=(event)=>{
        onEdit(bookDetails.id,text)
    }

    return (
        <div>
            <input value={text} onChange={handleChange} />
            <button onClick={handleClick} >save</button>
        </div>
    )
}

export default EditComponent