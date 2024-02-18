import Link from "next/link"

export function TopNav() {

    return (

        <div className="topnav">
            <p className = "font-bold text-xl" style={{paddingLeft : "2rem", paddingTop : "1rem"}}>Daniel.Detchev</p>
            <div className="navbar text-l font-bold" style={{paddingTop : "1rem"}}>

                <Link href="/">
                <p>Home</p>
                </Link>
                <Link href="/about">
                <p>About</p>
                </Link>
                <Link href="/projects">
                <p>Projects</p>
                </Link>
                <Link href="/contact">
                <p>Contact</p>
                </Link>

            </div>
        </div>

    );

}