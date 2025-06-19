type HeaderParams = {
    text: string;
}


function Header(props:HeaderParams) {
    return (
        <div>
           hello dear  {props.text}
        </div>
    );
}

function Footer() {
    return (
        <div>
            <h2>this is footer</h2>
        </div>
    );
}

function Description() {
    return (
        <div>
            <h2>this is description</h2>
        </div>
    );
}

function Home() {

    let hideDescription = true
    return (
        <main>
            <Header text="mina lewes"/>
            {!hideDescription&&<Description/>}
            <Footer/>
        </main>
    );
}

export default Home;
