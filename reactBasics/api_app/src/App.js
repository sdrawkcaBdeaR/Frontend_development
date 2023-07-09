import SearchImage from "./components/api";
import SearchBar from "./components/searchBar";
import { useState } from "react"
import RenderedImage from "./components/imageList";
import './components/imagelist.css'

function App() {
  const [images,setImages]=useState([]);

  const handleSubmit= async (term)=>{
    const result= await SearchImage(term)
    setImages(result)
  }

  return (
    <div style={{backgroundColor:"#112233"}}>
      <SearchBar handleSubmit={handleSubmit} />
      <div className="imagelist">
        <RenderedImage imageList={images}/>
      </div>
    </div>
  );
}

export default App;
