const RenderedImage=({imageList})=>{

    const imageStyle={borderRadius:"40px"}

    const textStyle={color:"white",
                     padding:"0px 10px 10px 20px"}

    const cardStyle={margin:"0px 5px 20px 5px",
                     backgroundColor:"#3573bf",
                     borderRadius:"30px"}

    const renderImages=imageList.map((image)=>{
        return (
            <div key={image.id} style={cardStyle} >
                <img src={image.urls.small} 
                     alt={image.alt_description}
                     style={imageStyle} />
                <p style={textStyle} >{image.alt_description}</p>
            </div>
        )})

    return renderImages;
}

export default RenderedImage