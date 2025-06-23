import Link from "next/link";

function about(){

    return(
        <div>
            <h1>About Us</h1>
            <p>Welcome to the Medi-Hist Portal, your go-to platform for managing medical histories efficiently.</p>
            <p>Our mission is to provide a user-friendly interface for patients and healthcare providers to access and manage medical records securely.</p>
            <p>Contact us at</p>
            <Link className="classic-link" href="/" > back to home </Link>
        </div>
    );
}
export default about;