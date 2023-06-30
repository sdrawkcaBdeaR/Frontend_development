import Block from "./Block";

function App() {
    let imgadds=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCjlq0fagjDegDiHxvLQ3mSXCGPf5ATAkkcgDlUptMY4upH8Xdci1VLiL40mlWM5TfHQ&usqp=CAU',
                'https://www.rd.com/wp-content/uploads/2020/11/GettyImages-889552354-e1606774439626.jpg',
                'https://cpimg.tistatic.com/06487962/b/4/RIR-Chick.jpg'];

    let headings=['Cat','Dog','Chick'];
    let contents=['This pet is owned by mean owners.','This pet is owned by kind owners','This pet is owned by kfc lovers'];

    return(
        <>
            <section class="hero is-danger">
                <div class="hero-body">
                    <p class="title">
                    CUTE ANIMALS
                    </p>
                    <p class="subtitle">
                    About their owners
                    </p>
                </div>
            </section>
            <div className="container">
                <section className='section'>
                    <div className="columns">
                        <div className="column is-4">
                            <Block imgadd={imgadds[0]} heading={headings[0]} content={contents[0]} />
                        </div>
                        <div className="column is-4">
                            <Block imgadd={imgadds[1]} heading={headings[1]} content={contents[1]} />
                        </div>
                        <div className="column is-4">
                            <Block imgadd={imgadds[2]} heading={headings[2]} content={contents[2]} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default App;