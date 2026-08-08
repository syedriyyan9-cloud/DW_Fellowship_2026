import { useState } from "react";
import dummyApiResponse from "../featureFlag/data.js";

function Tabs(props) {
    const [buttonActive, setButtonActive] = useState(-1);

    function handleContent(currIndex) {
        setButtonActive(currIndex);
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
                    Tabs
                </h1>

                <div className="flex border-b border-slate-200">
                    {props.data.map((dataItem, index) => (
                        <div key={index}>
                            <button
                                onClick={() => handleContent(index)}
                                className={`px-6 py-3 font-semibold transition duration-200 ${buttonActive === index
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-slate-500 hover:text-slate-800"
                                    }`}
                            >
                                {dataItem.label}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-6 min-h-30">
                    {buttonActive !== -1 ? (
                        <div className="bg-slate-50 rounded-xl p-6 text-slate-700 leading-relaxed">
                            {props.data[buttonActive].content}
                        </div>
                    ) : (
                        <div className="text-center text-slate-400 py-8">
                            Select a tab to view its content
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Tabs;