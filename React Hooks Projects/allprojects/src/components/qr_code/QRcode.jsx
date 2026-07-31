import { useRef, useState } from "react";
import QRCode from "react-qr-code";

function QRcode() {
  const inputRef = useRef(null);
  const [cpyinput, setCpy] = useState("");

  function handleInput() {
    if (inputRef.current) {
      setCpy(inputRef.current.value);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          QR Code Generator
        </h1>

        <div className="flex gap-3">

          <input
            ref={inputRef}
            type="text"
            placeholder="Enter text or URL..."
            className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            onClick={handleInput}
            className="rounded-lg bg-slate-800 px-5 py-3 text-white font-semibold hover:bg-slate-700 transition"
          >
            Generate
          </button>

        </div>

        <div className="mt-10 flex justify-center">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <QRCode
              value={cpyinput}
              size={220}
              bgColor="#FFFFFF"
              fgColor="#000000"
            />
          </div>
        </div>

        {cpyinput && (
          <p className="mt-6 text-center text-slate-600 break-all">
            <span className="font-semibold">Current Value:</span>
            <br />
            {cpyinput}
          </p>
        )}
      </div>
    </div>
  );
}

export default QRcode;