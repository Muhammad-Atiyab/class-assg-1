import Link from "next/link";

export default function Navbar() {

    return(
<div className="flex flex-row justify-evenly items-center bg-blue-700 h-16 text-white text-xl">
 <Link  href='/' className="navbar-button">Home</Link>
    <Link href='/about' title="Custom delay 5sec to test Loading" className="navbar-button">About</Link>
    <Link href='/services' className="navbar-button">Services</Link>
    <Link href='/contact' className="navbar-button">Contact</Link>
    <Link href='/jobs' className="navbar-button">Jobs</Link>
    <Link href='/jobs/quranteacher' title="To check general throw error" className="navbar-button">Quran Teacher</Link>
</div>
    )
}