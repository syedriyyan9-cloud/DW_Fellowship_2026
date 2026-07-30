import { useState, useEffect } from "react";

function LoadMore(props) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(10);
    const [prevCount, setPrevCount] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch(`https://dummyjson.com/products?limit=${props.limit}&skip=0`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            })
            .then((response) => {
                setData(response);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
            });
    }, [props.limit]);

    useEffect(() => {
        if (data && data.products && data.products.length > 0) {
            addToList();
        }
    }, [count, data]);

    function addToList() {
        let cpyarray = [...products];

        for (let i = prevCount; i < count && i < data.products.length; i++) {
            cpyarray.push(data.products[i]);
        }

        setPrevCount(count);
        setProducts(cpyarray);
    }

    function increaseCount() {
        setCount((prev) => prev + 10);
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="bg-white px-8 py-6 rounded-xl shadow-lg text-xl font-semibold">
                    Loading Products...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="bg-red-100 border border-red-300 text-red-700 px-8 py-6 rounded-xl shadow-lg">
                    Error: {error}
                </div>
            </div>
        );
    }

    if (!data || !data.products) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="bg-yellow-100 border border-yellow-300 text-yellow-700 px-8 py-6 rounded-xl shadow-lg">
                    No products found.
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 py-10 px-6">
            <div className="max-w-7xl mx-auto">

                <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
                    Load More Products
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-5">
                                <h2 className="text-lg font-semibold text-slate-800">
                                    {product.title}
                                </h2>

                                <p className="mt-2 text-2xl font-bold text-blue-600">
                                    ${product.price}
                                </p>

                                <p className="mt-2 text-slate-600 line-clamp-3">
                                    {product.description}
                                </p>

                                <p className="mt-4 text-sm text-slate-500">
                                    Category: {product.category}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                {count < data.products.length && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={increaseCount}
                            className="px-8 py-3 rounded-xl bg-slate-800 text-white font-semibold shadow-lg hover:bg-slate-700 hover:shadow-xl transition-all duration-200"
                        >
                            Load More ({products.length} of {data.products.length})
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default LoadMore;