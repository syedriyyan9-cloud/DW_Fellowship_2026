import { useState } from "react";
import dummyApiResponse from "../featureFlag/data.js";

function StarRating() {
    const [star, setStar] = useState([
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
      ]);

      const [count, setCount] = useState(-1);

      function fillStar(index) {
        let tempArr = [...star];
    
        if (index > count) {
          for (let i = count + 1; i <= index; i++) {
            tempArr[i] = "filled";
          }
        }
    
        else {
          for (let i = count; i > index; i--) {
            tempArr[i] = "empty";
          }
        }
    
        setCount(index);
        setStar(tempArr);
      }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">Star Rating</h1>

        <ul className="flex gap-3 justify-center">
        {star.map((currentStar, index) => (
          <li
            key={index}
            onClick={() => fillStar(index)}
              className="cursor-pointer text-5xl transition-transform duration-200 hover:scale-125 select-none"
            >
              {currentStar === "filled" ? "★" : "☆"}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-lg text-gray-600">Rating: {count+1} / 10</p>
      </div>
    </div>
  );
}

export default StarRating;
