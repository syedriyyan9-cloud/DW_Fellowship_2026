import Nav from "../components/Nav.jsx"
import { CartContext } from "../components/CartProvider.jsx"
import { useContext } from "react"

function CartItems() {

    const { cart, removeFromCart } = useContext(CartContext)

    return (
        <div className="min-h-screen bg-gray-100">
            
            <Nav />

            <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6">

                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    Shopping Cart
                </h1>

                {cart.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-md p-10 text-center">
                        <p className="text-lg text-gray-500">
                            Your cart is empty.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">

                        {cart.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-xl shadow-md p-5 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition duration-200"
                            >

                                {/* Product Image */}
                                <div className="w-full sm:w-48 h-48 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        className="w-full h-full object-contain hover:scale-105 transition duration-300"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-col flex-1">

                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                        {product.title}
                                    </h2>

                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                        {product.description}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between">

                                        <span className="text-xl font-bold text-gray-900">
                                            ${product.price}
                                        </span>

                                        <button
                                            onClick={() => removeFromCart(product.id)}
                                            className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 active:scale-95 transition duration-200"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </main>
        </div>
    )
}

export default CartItems