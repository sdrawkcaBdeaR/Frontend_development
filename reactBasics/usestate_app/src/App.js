import Card from "./card";
import './app.css'
import 'bulma/css/bulma.css'
import tiger from "./components/tiger.avif"
import dog from "./components/dog.jpeg"
import lion from "./components/lion.jpeg"
import monkey from "./components/monkey.png"
import cat from "./components/cat.jpeg"
import { useState } from "react";

const App=()=>{

    const Animals=[{imgadd:tiger,name:'tiger'},
                    {imgadd:dog,name:'dog'},
                    {imgadd:cat,name:'cat'},
                    {imgadd:lion,name:'lion'},
                    {imgadd:monkey,name:'monkey'}];
    let [arr,setArr]=useState([]);

    const handleClick=()=>{
        arr.push()
        setArr([...arr,Animals[Math.floor(Animals.length*Math.random())]]);
    }
    const renderAnimals=arr.map((item,)=>(<div className="column is-4"><Card imgadd={item.imgadd} name={item.name}/></div>));

    return (
        <div>
            <div className="hero is-primary" style={{textAlign:'center',backgroundColor:'#eeeeee'}}>
                <button className="button is-dark is-large"
                onClick={handleClick}>Click to add Animal</button>
            </div>
            <div className="cards">
                {renderAnimals}
            </div>
        </div>
    )
}

export default App;