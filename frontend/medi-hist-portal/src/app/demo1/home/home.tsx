import Header from "@/app/demo1/shared/header";
import Footer from "@/app/demo1/shared/footer";
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