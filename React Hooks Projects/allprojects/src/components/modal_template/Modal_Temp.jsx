import { useState } from "react";

function Modal_Temp(props) {
  const [active, setActive] = useState(false);

  return (
    <div className="min-h-125 bg-slate-100 flex flex-col items-center justify-center px-4">
      
      <button
        onClick={() => setActive(!active)}
        className="px-6 py-3 rounded-lg bg-slate-800 text-white font-semibold shadow-md hover:bg-slate-700 transition duration-200"
      >
        Display Modal
      </button>

      {active ? (
        <div className="w-full max-w-lg mt-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">

            {/* Header */}
            {props.header ? (
              <div className="px-6 py-5 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-800">
                  {props.header}
                </h2>
              </div>
            ) : null}

            {/* Body */}
            {props.body ? (
              <div className="px-6 py-6 text-slate-600">
                {props.body}
              </div>
            ) : null}

            {/* Footer */}
            {props.footer ? (
              <div className="px-6 py-5 bg-slate-50 border-t border-slate-200">
                <p className="font-medium text-slate-700">
                  {props.footer}
                </p>
              </div>
            ) : null}

          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal_Temp;