import { useState } from "react";

function TicTacToe() {
    const [x, setX] = useState("X");
    const [count, setCount] = useState(0);
    const [board, setBoard] = useState([
        ["\t", "\t", "\t"],
        ["\t", "\t", "\t"],
        ["\t", "\t", "\t"],
    ]);
    const [p1_win, setP1_win] = useState(null);

    function handleReset() {
        let cpyarr = board.map((row) => row.map((column) => "\t"));
        setBoard(cpyarr);
        setCount(0);
        setX("X");
        setP1_win(null);
    }

    function handleClick(r_index, c_index) {
        if (p1_win) {
            return;
        }

        let cpyarr = board.map((row) => [...row]);

        if (
            cpyarr[r_index][c_index] === "X" ||
            cpyarr[r_index][c_index] === "O"
        ) {
            return;
        } else if (count % 2 !== 0) {
            setX("X");
        } else {
            setX("O");
        }

        cpyarr[r_index][c_index] = x;
        setCount((prev) => prev + 1);

        if (
            (cpyarr[0][0] === cpyarr[0][1] &&
                cpyarr[0][1] === cpyarr[0][2] &&
                cpyarr[0][2] === "X") ||
            (cpyarr[1][0] === cpyarr[1][1] &&
                cpyarr[1][1] === cpyarr[1][2] &&
                cpyarr[1][2] === "X") ||
            (cpyarr[2][0] === cpyarr[2][1] &&
                cpyarr[2][1] === cpyarr[2][2] &&
                cpyarr[2][2] === "X") ||
            (cpyarr[0][0] === cpyarr[1][1] &&
                cpyarr[1][1] === cpyarr[2][2] &&
                cpyarr[2][2] === "X") ||
            (cpyarr[0][2] === cpyarr[1][1] &&
                cpyarr[1][1] === cpyarr[2][0] &&
                cpyarr[2][0] === "X") ||
            (cpyarr[0][0] === cpyarr[1][0] &&
                cpyarr[1][0] === cpyarr[2][0] &&
                cpyarr[2][0] === "X") ||
            (cpyarr[0][1] === cpyarr[1][1] &&
                cpyarr[1][1] === cpyarr[2][1] &&
                cpyarr[2][1] === "X") ||
            (cpyarr[0][2] === cpyarr[1][2] &&
                cpyarr[1][2] === cpyarr[2][2] &&
                cpyarr[2][2] === "X")
        ) {
            setP1_win(1);
        } else if (
            (cpyarr[0][0] === cpyarr[0][1] &&
                cpyarr[0][1] === cpyarr[0][2] &&
                cpyarr[0][2] === "O") ||
            (cpyarr[1][0] === cpyarr[1][1] &&
                cpyarr[1][1] === cpyarr[1][2] &&
                cpyarr[1][2] === "O") ||
            (cpyarr[2][0] === cpyarr[2][1] &&
                cpyarr[2][1] === cpyarr[2][2] &&
                cpyarr[2][2] === "O") ||
            (cpyarr[0][0] === cpyarr[1][1] &&
                cpyarr[1][1] === cpyarr[2][2] &&
                cpyarr[2][2] === "O") ||
            (cpyarr[0][2] === cpyarr[1][1] &&
                cpyarr[1][1] === cpyarr[2][0] &&
                cpyarr[2][0] === "O") ||
            (cpyarr[0][0] === cpyarr[1][0] &&
                cpyarr[1][0] === cpyarr[2][0] &&
                cpyarr[2][0] === "O") ||
            (cpyarr[0][1] === cpyarr[1][1] &&
                cpyarr[1][1] === cpyarr[2][1] &&
                cpyarr[2][1] === "O") ||
            (cpyarr[0][2] === cpyarr[1][2] &&
                cpyarr[1][2] === cpyarr[2][2] &&
                cpyarr[2][2] === "O")
        ) {
            setP1_win(2);
        }

        setBoard(cpyarr);
    }

    return (
        <div className="min-h-150 bg-slate-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-8">
                    Tic Tac Toe
                </h1>

                {/* Board */}
                <div className="flex justify-center">
                    <table className="border-collapse">
                        <tbody>
                            {board.map((row, r_index) => (
                                <tr key={r_index}>
                                    {row.map((column, c_index) => (
                                        <td
                                            key={c_index}
                                            onClick={() => handleClick(r_index, c_index)}
                                            className={`
                        w-20 h-20 sm:w-24 sm:h-24
                        border-2 border-slate-800
                        text-center text-3xl sm:text-4xl
                        font-bold
                        cursor-pointer
                        select-none
                        transition duration-150
                        ${column === "X"
                                                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
                                                    : column === "O"
                                                        ? "text-red-600 bg-red-50 hover:bg-red-100"
                                                        : "bg-white hover:bg-slate-100"
                                                }
                    `}
                                        >
                                            {column}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Game Status */}
                <div className="mt-8 text-center">
                    {p1_win ? (
                        <h3 className="text-2xl font-bold text-green-600">
                            {p1_win === 1 ? "Player 1 wins 🎉" : "Player 2 wins 🎉"}
                        </h3>
                    ) : (
                        <h3 className="text-xl font-semibold text-slate-700">
                            {x === "X" ? "Player 1 turn" : "Player 2 turn"}
                        </h3>
                    )}
                </div>

                {/* Reset */}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleReset}
                        className="px-8 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 active:scale-95 transition duration-200 shadow-md"
                    >
                        Reset Game
                    </button>
                </div>

            </div>
        </div>
    );
}

export default TicTacToe;