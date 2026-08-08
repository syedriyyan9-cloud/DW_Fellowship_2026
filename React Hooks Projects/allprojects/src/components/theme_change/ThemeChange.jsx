import { useState, useEffect } from "react";
import dummyApiResponse from "../featureFlag/data.js";

function ThemeChange() {
const [Dark, setDark] = useState(() => {
    const savedDark = localStorage.getItem("Dark");
    return savedDark ? Boolean(savedDark) : false;
});

useEffect(() => {
    localStorage.setItem("Dark", JSON.stringify(Dark));
}, [Dark]);

return (
    <div
    className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        Dark ? "bg-slate-900" : "bg-slate-100"
    }`}
    >
    <div
        className={`w-full max-w-md rounded-2xl shadow-xl p-8 text-center transition-colors duration-500 ${
        Dark ? "bg-slate-800" : "bg-white"
        }`}
    >
        <h1
        className={`text-3xl font-bold mb-6 ${
            Dark ? "text-white" : "text-slate-800"
        }`}
        >
        Theme Switcher (Uses Local Storage)
        </h1>

        <h3
        className={`text-lg mb-8 ${
            Dark ? "text-slate-300" : "text-slate-600"
        }`}
        >
        Hello World 👋
        </h3>

        <button
        onClick={() => setDark((prev) => !prev)}
        className={`px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md ${
            Dark
            ? "bg-white text-slate-900 hover:bg-slate-200"
            : "bg-slate-900 text-white hover:bg-slate-700"
        }`}
        >
        Switch to {Dark ? "Light" : "Dark"} Mode
        </button>
    </div>
    </div>
);
}

export default ThemeChange;