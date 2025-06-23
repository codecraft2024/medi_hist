import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Link from "next/link";

function Home() {

    let hideDescription = true
    return (
        <main className="main">
            <Header title="Header title"  subtitle=",this is subtitle" />

            <Footer/>
            <Link className="classic-link" href="/about">Go to About </Link>
        </main>
    );
}
export default Home;