function Block({heading,imgadd,content}){
    return (
        <div style={{backgroundColor:''}}> 
            <h3>{heading}</h3>
            <img src={imgadd} style={{width:200}} />
            <p>{content}</p>
        </div>
    );
}

export default Block;