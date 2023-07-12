import { useState } from 'react'

const AddBar=({onSubmit})=>{
    const [text,setText]=useState('')
    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const handleClick=(event)=>{
        onSubmit(text)
        setText('')
    }
    return(
        <div>
            <input value={text} placeholder='Book name' onChange={handleChange}/>
            <button onClick={handleClick}>Add book</button>
        </div>
    )
}

export default AddBar