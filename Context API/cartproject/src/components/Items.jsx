import { useEffect, useState, useContext } from "react"
import { CartContext } from "./CartProvider.jsx"

function Items() {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=30")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Cannot fetch data")
                }
                return res.json()
            })
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-semibold text-gray-600">
                    Loading...
                </p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">

            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                Products
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {data.products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
                    >

                        {/* Product Image */}
                        <div className="h-56 bg-gray-50 flex items-center justify-center p-4">
                            <img
                                src={item.images[0]}
                                alt={item.title}
                                className="w-full h-full object-contain hover:scale-105 transition duration-300"
                            />
                        </div>

                        {/* Product Information */}
                        <div className="p-5 flex flex-col flex-1">

                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h2>

                            <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-1">
                                {item.description}
                            </p>

                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xl font-bold text-gray-900">
                                    ${item.price}
                                </span>

                                <span className="text-sm text-yellow-600 font-medium">
                                    ⭐ {item.rating}
                                </span>
                            </div>

                            <button
                                onClick={() => addToCart(item)}
                                className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 active:scale-95 transition duration-200"
                            >
                                Add to Cart
                            </button>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Items