import { useState, useEffect } from "react";

function SlidingWindowUsingFetch(props) {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(`https://picsum.photos/v2/list?page=${props.page}&limit=${props.limit}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Unable to get data from API");
                }
            })
            .then((response) => {
                setData(response);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
                console.log(error);
            });
    }, []);

    function prev() {
        if (data.length === 0) return;

        setCount((prevCount) =>
            prevCount === 0 ? data.length - 1 : prevCount - 1
        );
    }

    function next() {
        if (data.length === 0) return;

        setCount((prevCount) =>
            prevCount === data.length - 1 ? 0 : prevCount + 1
        );
    }

    if (loading)
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="bg-white px-8 py-6 rounded-xl shadow-lg text-xl font-semibold text-slate-700">
                    Loading images... ⏳
                </div>
            </div>
        );

    if (error)
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="bg-red-100 border border-red-300 text-red-700 px-8 py-6 rounded-xl shadow-lg">
                    Error: {error}
                </div>
            </div>
        );

    if (data.length === 0)
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <div className="bg-yellow-100 border border-yellow-300 text-yellow-700 px-8 py-6 rounded-xl shadow-lg">
                    No images found.
                </div>
            </div>
        );

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
                    Image Slider (Fetch API)
                </h1>

                <div className="flex items-center justify-center gap-6">

                    {/* Previous Button */}
                    <button
                        onClick={prev}
                        className="w-14 h-14 rounded-full bg-slate-800 text-white text-2xl hover:bg-slate-700 transition"
                    >
                        ◀
                    </button>

                    {/* Image */}
                    <img
                        src={data[count].download_url}
                        alt={data[count].author}
                        className="w-full max-w-2xl h-112.5 object-cover rounded-xl shadow-lg"
                    />

                    {/* Next Button */}
                    <button
                        onClick={next}
                        className="w-14 h-14 rounded-full bg-slate-800 text-white text-2xl hover:bg-slate-700 transition"
                    >
                        ▶
                    </button>

                </div>

                {/* Image Information */}
                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold text-slate-800">
                        {data[count].author}
                    </h2>

                    <p className="text-slate-500 mt-2">
                        Image {count + 1} of {data.length}
                    </p>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-6">
                    {data.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCount(index)}
                            className={`w-3 h-3 rounded-full transition ${index === count
                                    ? "bg-slate-800"
                                    : "bg-slate-300 hover:bg-slate-500"
                                }`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default SlidingWindowUsingFetch;