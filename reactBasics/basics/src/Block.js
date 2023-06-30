function Block({heading,imgadd,content}){
    return (
        <div className="card" style={{padding:'5%',backgroundColor:'yellow'}}>
            <div className="card-image">
            <figure className="image is-1by1">
                <img src={imgadd} alt="animal"/>
            </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                <p className="title is-4">{heading}</p>
                </div>

                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Block;