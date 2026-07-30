    import { useState } from "react";
    import img1 from "./images/p1.PNG";
    import img2 from "./images/p2.PNG";
    import img3 from "./images/p3.PNG";
    import img4 from "./images/p4.PNG";

    function SlidingWindow() {
    const [count, setCount] = useState(0);

    const images = [img1, img2, img3, img4];

    function next() {
        if (count === images.length - 1) {
        setCount(0);
        } else {
        setCount((prev) => prev + 1);
        }
    }

    function prev() {
        if (count === 0) {
        setCount(images.length - 1);
        } else {
        setCount((prev) => prev - 1);
        }
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl">
            <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
            Image Slider
            </h1>

            <div className="flex items-center justify-center gap-6">
            <button
                onClick={prev}
                className="w-14 h-14 rounded-full bg-slate-800 text-white text-2xl hover:bg-slate-700 transition duration-200"
            >
                ←
            </button>

            <img
                src={images[count]}
                alt={`Slide ${count + 1}`}
                className="w-full max-w-2xl h-112.5 object-cover rounded-xl shadow-lg"
            />

            <button
                onClick={next}
                className="w-14 h-14 rounded-full bg-slate-800 text-white text-2xl hover:bg-slate-700 transition duration-200"
            >
                →
            </button>
            </div>

            <div className="flex justify-center gap-3 mt-8">
            {images.map((_, index) => (
                <div
                key={index}
                className={`w-3 h-3 rounded-full transition ${
                    index === count ? "bg-slate-800" : "bg-slate-300"
                }`}
                />
            ))}
            </div>

            <p className="text-center mt-4 text-slate-600 font-medium">
            {count + 1} / {images.length}
            </p>
        </div>
        </div>
    );
    }

    export default SlidingWindow;