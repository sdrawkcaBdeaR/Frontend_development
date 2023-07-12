import Book from "./book"

const ShowBooks=({bookList,onDel,onEdit})=>{

    const renderBooks=bookList.map((book)=>{
        return (<Book bookDetails={book} onDel={onDel} onEdit={onEdit} key={book.id} />)
    })
    return(
        <div>{renderBooks}</div>
    )
}

export default ShowBooks