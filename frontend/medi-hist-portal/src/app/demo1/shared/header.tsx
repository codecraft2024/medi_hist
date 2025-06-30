type HeaderParams = {
    title: string;
    subtitle?: string;
}


function Header(props: HeaderParams) {
    return (
        <>
            <div>
                line one : {props.title}
            </div>
            <div>
                line two : {props.subtitle ? props.subtitle : "our portal"}
            </div>
        </>
    );
}

export default Header;