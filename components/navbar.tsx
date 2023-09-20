import { ModeToggle } from "@/components/mode-toggle"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center p-4 space-x-4 border-b-2">
            <h1 className="text-5xl font-bold">MOVIE <span className="text-orange-600">REVIEWS</span></h1>
            <ModeToggle />
        </nav>
    )
}

export default Navbar