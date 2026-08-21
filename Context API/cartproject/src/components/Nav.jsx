import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "./CartProvider.jsx"

function Nav() {
    let {cart} = useContext(CartContext)
    return (
        <nav className="w-full bg-white shadow-md">
            <ul className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                <li>
                    <Link
                        to="/"
                        className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200"
                    >
                        Products
                    </Link>
                </li>

                <li>
                    <Link
                        to="/cart"
                        className="px-5 py-2 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition duration-200"
                    >
                        Cart: Items({cart.length})
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default Nav