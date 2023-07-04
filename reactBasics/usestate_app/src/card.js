import { useState } from 'react';
import heart from './components/Heart.png'

const Card=({imgadd,name})=>{
    const [size,setSize]=useState(0);
    
    return (
        <div className="card" 
        style={{padding:'5%',backgroundColor:'yellow'}}
        onClick={()=>setSize(size+1)}>
            <div className="card-image">
            <figure className="image is-1by1">
                <img src={imgadd} alt="animal"/>
            </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                <p className="title is-4">Animal</p>
                </div>

                <div className="content">
                    {name}
                </div>
            </div>
            <img src={heart} style={{width:10+1*size+'px',position:'absolute',bottom:'10%',right:'10%'}} />
        </div>
    )
}

export default Card;