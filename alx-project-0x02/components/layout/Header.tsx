import Home from "@/pages/home"
import About from "@/pages/about"
import Posts from "@/pages/posts"
import Link from", "next/link"

const Header : React.FC = () => {
    return (
        <header className="bg-red-600 text-white shadow-md py-4">
            <div className="container mx-auto px-4">
                <ul className="flex space-x-4">
                    <li className="hover:underline">
                        <Home/>
                    </li>
                    <li className="hover:underline">
                        <About/>
                    </li>
                    <li className="hover:underline">
                       <Posts/>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;
