import Header from "@/app/component/header";
import Footer from "@/app/component/footer";

function Home() {

    let hideDescription = true
    return (
        <main className="main">
            <Header title="this is header title"  subtitle=",this is subtitle" />

            <Footer/>
        </main>
    );
}
export default Home;