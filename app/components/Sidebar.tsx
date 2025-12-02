import Link from "next/link";


export default function Sidebar() {
  return (
    <div>
        <nav className="fixed top-0 left-0 h-screen w-48 flex flex-col justify-center items-center gap-6 p-4">
            <Link href="/" className="transform hover:scale-105 transition duration-200">Home</Link>
            <Link href="/project" className="transform hover:scale-105 transition duration-200">Project</Link>
            <Link href="/about" className="transform hover:scale-105 transition duration-200">About</Link>
        </nav>
    </div>
  )
}
