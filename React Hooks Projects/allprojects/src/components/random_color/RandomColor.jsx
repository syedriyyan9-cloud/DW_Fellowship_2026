    import { useState } from "react";

    function RandomColor() {
    const [HEX, setHEX] = useState(false);
    const [RGB, setRGB] = useState(true);
    const [color, setColor] = useState('')

    function createRandomColor() {
        if (HEX) {
        let colors = "ABCDEF0123456789";
        let hexColor = "";

        for (let i = 0; i < 6; i++) {
            let random = Math.floor(Math.random() * colors.length);
            hexColor += colors[random];
        }
        setHEX(hexColor);
        setColor(`#${HEX}`)
        } else {
        let rgbColor = [];

        for (let i = 0; i < 3; i++) {
            let random = Math.floor(Math.random() * 255);
            rgbColor.push(random);
        }
        setRGB([...rgbColor]);
        setColor(`rgb(${RGB[0]},${RGB[1]},${RGB[2]})`)
        }
    }

    function createRGBColor() {
        setHEX(false);
        setRGB(true);
    }

    function createHEXColor() {
        setRGB(false);
        setHEX(true);
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4" style={{background: color}}>
        <div className="w-full max-w-lg rounded-2xl bg-white/90 backdrop-blur-sm shadow-2xl p-8 text-center">
            
            {/* Heading */}
            <h1 className="text-3xl font-bold text-black mb-8">
            Random Color Generator
            </h1>

            {/* Color Type Buttons */}
            <div className="flex justify-center gap-4 mb-8">
            <button
                onClick={createHEXColor}
                className={`px-5 py-3 rounded-lg font-semibold transition duration-200 ${
                HEX
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
                HEX Color
            </button>

            <button
                onClick={createRGBColor}
                className={`px-5 py-3 rounded-lg font-semibold transition duration-200 ${
                RGB
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
                RGB Color
            </button>
            </div>

            {/* Generate Button */}
            <button
            onClick={createRandomColor}
            className="w-full rounded-xl bg-gray-900 px-6 py-4 text-white font-semibold hover:bg-gray-800 transition duration-200 shadow-lg"
            >
            <span className="block text-lg">Create Random Color</span>

            {HEX ? (
                <h1 className="mt-3 text-3xl font-bold tracking-wider">
                #{HEX}
                </h1>
            ) : (
                <h1 className="mt-3 text-3xl font-bold tracking-wider">
                RGB({RGB[0]}, {RGB[1]}, {RGB[2]})
                </h1>
            )}
            </button>
        </div>
        </div>
    );
    }

    export default RandomColor;