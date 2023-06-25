import Block from "./Block";

function App() {
    let imgadds=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCjlq0fagjDegDiHxvLQ3mSXCGPf5ATAkkcgDlUptMY4upH8Xdci1VLiL40mlWM5TfHQ&usqp=CAU',
                'https://www.rd.com/wp-content/uploads/2020/11/GettyImages-889552354-e1606774439626.jpg',
                'https://cpimg.tistatic.com/06487962/b/4/RIR-Chick.jpg'];

    let headings=['Cat','Dog','Chick'];
    let contents=['This pet is owned by mean owners.','This pet is owned by kind owners','This pet is owned by kfc lovers'];

    return(
        <>
            <Block imgadd={imgadds[0]} heading={headings[0]} content={contents[0]} />
            <Block imgadd={imgadds[1]} heading={headings[1]} content={contents[1]} />
            <Block imgadd={imgadds[2]} heading={headings[2]} content={contents[2]} />
        </>
    )
}

export default App;