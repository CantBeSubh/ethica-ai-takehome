import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
    return (
        <nav className="flex justify-center space-x-4 items-center border-b-2 p-4">
            <h1 className="text-5xl font-bold">MOVIE<span className="text-orange-600">REVIEWS</span></h1>
            <ModeToggle />
        </nav>
    )
}

export default Navbar