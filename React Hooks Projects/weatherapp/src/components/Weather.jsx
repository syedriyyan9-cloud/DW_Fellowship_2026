import { useEffect, useRef, useState } from "react";

function Weather() {
    const apiKey = import.meta.env.VITE_API_KEY
    const [city, setCity] = useState("Lahore");
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const inputValue = useRef();
    const curDateTime = new Date();

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        setError("City not found");
                    } else if (response.status === 500) {
                        setError("Internal Server Error");
                    }
                }

                return response.json();
            })
            .then((response) => {
                setLoading(false);
                setData(response);
            })
            .catch((e) => {
                console.log(e.message);
                setError("Something Went wrong");
            });
    }, [city]);

    function changeCity() {
        setCity(inputValue.current.value);
        setError("");
        setLoading(true);
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center px-4">
                <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm px-8 py-10 rounded-3xl shadow-2xl text-center">
                    <div className="text-6xl mb-5">🌤️</div>

                    <p className="text-xl sm:text-2xl font-bold text-slate-800">
                        Loading weather...
                    </p>

                    <div className="mt-5 w-10 h-10 mx-auto border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center px-4 py-8">

                <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-10 text-center">

                    <div className="text-6xl sm:text-7xl mb-5">
                        🌧️
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-3">
                        {error}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-500 mb-7">
                        We couldn't find weather information for that city.
                    </p>

                    <div className="flex flex-col gap-3">

                        <input
                            type="text"
                            ref={inputValue}
                            placeholder="Enter another city..."
                            className="w-full px-4 py-3.5 border border-slate-300 rounded-xl outline-none text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />

                        <button
                            onClick={changeCity}
                            className="w-full px-6 py-3.5 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 active:scale-[0.98] transition duration-200"
                        >
                            Search
                        </button>

                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center px-4 py-8 sm:py-12">

            <div className="w-full max-w-xl">

                {/* Main Weather Card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">

                    {/* Header */}
                    <div className="bg-slate-900 text-white px-5 py-7 sm:px-8 sm:py-9 text-center">

                        <div className="text-5xl sm:text-6xl mb-3">
                            ☀️
                        </div>

                        <h1 className="text-3xl sm:text-4xl font-bold">
                            Weather App
                        </h1>

                        <p className="text-sm sm:text-base text-slate-300 mt-2">
                            Check the current weather anywhere
                        </p>

                    </div>

                    <div className="p-5 sm:p-8">

                        {/* Search */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-8">

                            <input
                                type="text"
                                ref={inputValue}
                                placeholder="Enter city..."
                                className="w-full flex-1 px-4 py-3.5 border border-slate-300 rounded-xl outline-none text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />

                            <button
                                onClick={changeCity}
                                className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 active:scale-[0.98] transition duration-200"
                            >
                                Search
                            </button>

                        </div>

                        {/* City & Date */}
                        <div className="text-center mb-7 sm:mb-9">

                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
                                {city.charAt(0).toUpperCase() + city.slice(1)}
                            </h2>

                            <p className="text-sm sm:text-base text-slate-500 mt-2">
                                {curDateTime.toDateString()}
                            </p>

                        </div>

                        {/* Temperature */}
                        <div className="text-center mb-8 sm:mb-10">

                            <p className="text-7xl sm:text-8xl font-bold tracking-tight text-slate-800">
                                {Math.round(data.main.temp)}°
                            </p>

                            <p className="text-lg sm:text-xl text-slate-500 mt-1">
                                Celsius
                            </p>

                        </div>

                        {/* Weather Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

                            {/* Humidity */}
                            <div className="bg-sky-50 rounded-2xl p-5 text-center border border-sky-100">

                                <p className="text-3xl mb-3">
                                    💧
                                </p>

                                <p className="text-sm text-slate-500">
                                    Humidity
                                </p>

                                <p className="text-xl font-bold text-slate-800 mt-1">
                                    {Math.round(data.main.humidity)}%
                                </p>

                            </div>

                            {/* Feels Like */}
                            <div className="bg-orange-50 rounded-2xl p-5 text-center border border-orange-100">

                                <p className="text-3xl mb-3">
                                    🌡️
                                </p>

                                <p className="text-sm text-slate-500">
                                    Feels Like
                                </p>

                                <p className="text-xl font-bold text-slate-800 mt-1">
                                    {Math.round(data.main.feels_like)}°C
                                </p>

                            </div>

                            {/* Pressure */}
                            <div className="bg-indigo-50 rounded-2xl p-5 text-center border border-indigo-100">

                                <p className="text-3xl mb-3">
                                    📊
                                </p>

                                <p className="text-sm text-slate-500">
                                    Pressure
                                </p>

                                <p className="text-xl font-bold text-slate-800 mt-1">
                                    {Math.round(data.main.pressure)}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Footer */}
                <p className="text-center text-sm text-white/80 mt-5">
                    Weather information powered by OpenWeather
                </p>

            </div>

        </div>
    );
}

export default Weather;