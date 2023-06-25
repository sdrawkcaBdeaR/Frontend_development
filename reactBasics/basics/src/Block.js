function Block({heading,imgadd,content}){
    let w=200;
    return (
        <div style={{backgroundColor:''}}> 
            <h3>{heading}</h3>
            <img src={imgadd} style={{width:w}} />
            <p>{content}</p>
        </div>
    );
}

export default Block;