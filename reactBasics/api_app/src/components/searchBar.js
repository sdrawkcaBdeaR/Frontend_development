import { useState } from "react"
import 'bulma/css/bulma.css'

const SearchBar=({handleSubmit})=>{

    const [text,setText]=useState("");
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        handleSubmit(text)
    }
    const handleChange=(event)=>{
        setText(event.target.value)
    }

    return (
        <div  style={{padding:"10px 0px 20px 0px"}} >
            <form onSubmit={handleFormSubmit} >
                <input className="input is-rounded is-hovered" 
                       onChange={handleChange} 
                       placeholder={"What's on your mind"}
                       value={text} />
            </form>
        </div>
    );
}

export default SearchBar;