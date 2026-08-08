import { useState, useEffect } from "react";
import data from "./data.js";
import dummyApiResponse from "../featureFlag/data.js";

function Accordian() {
  const [select, setSelect] = useState(null);
  const [enable, setEnable] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [loading, setLoading] = useState(dummyApiResponse.accordian)

  useEffect(() => {
    setLoading(!loading)
  }, [dummyApiResponse.accordian])

  function handleQuestions(currId) {
    setSelect(select === currId ? null : currId);
  }

  function handleEnable() {
    setEnable(!enable);
  }

  function handleMultiple(currId) {
    let cpyarr = [...multiple];
    let findId = cpyarr.findIndex((index) => index === currId);

    if (findId === -1) {
      cpyarr.push(currId);
    } else {
      cpyarr.splice(findId, 1);
    }

    setMultiple(cpyarr);
  }

  if(loading){
    return(<div></div>)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-10 px-4">
      {/* Toggle Button */}
      <button
        onClick={handleEnable}
        className={`mb-8 rounded-lg px-6 py-3 font-semibold text-white transition duration-300 shadow-md
          ${
            enable
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
      >
        {enable ? "Disable" : "Enable"} Multi Selection
      </button>

      {/* Accordion Container */}
      <div className="w-full max-w-2xl space-y-4">
        {data.map((dataItems) => (
          <div
            key={dataItems.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {enable ? (
              <div
                onClick={() => handleMultiple(dataItems.id)}
                className="cursor-pointer"
              >
                <div className="flex justify-between items-center p-5 hover:bg-slate-50 transition">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {dataItems.question}
                  </h3>

                  <span className="text-2xl font-bold text-slate-500">
                    {multiple.includes(dataItems.id) ? "−" : "+"}
                  </span>
                </div>

                {multiple.includes(dataItems.id) && (
                  <div className="px-5 pb-5 text-slate-600 leading-7 border-t border-slate-200">
                    {dataItems.answer}
                  </div>
                )}
              </div>
            ) : (
              <div
                onClick={() => handleQuestions(dataItems.id)}
                className="cursor-pointer"
              >
                <div className="flex justify-between items-center p-5 hover:bg-slate-50 transition">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {dataItems.question}
                  </h3>

                  <span className="text-2xl font-bold text-slate-500">
                    {select === dataItems.id ? "−" : "+"}
                  </span>
                </div>

                {select === dataItems.id && (
                  <div className="px-5 pb-5 text-slate-600 leading-7 border-t border-slate-200">
                    {dataItems.answer}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordian;