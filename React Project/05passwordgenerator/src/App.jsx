import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [pLength, setPLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const changePassword = useCallback( () => {
    let pass = ""
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(number) letters += '9876543210'
    if(char) letters += "+_*&^%$#@!()[]{}';:?/>.<,"
    for(let i = 0; i < pLength; i++)
    {
      let random = Math.floor(Math.random() * letters.length)
      pass += letters[random]
    }
    setPassword(pass)
    // console.log(pass.length, pLength)
  }, [pLength, number, char, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,25)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    changePassword()
  },[pLength,number,char,changePassword])

  return (
    <>
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
  <div className="w-full max-w-xl bg-gray-800 p-8 rounded-xl shadow-lg">

    {/* Heading */}
    <h1 className="text-3xl font-bold text-center text-white mb-6">
      Password Generator
    </h1>

    {/* Password Input */}
    <div className="flex mb-6">
      <input
      type="text"
      value={password}
      ref={passwordRef}
      readOnly
      placeholder="Generated Password"
      className="flex-1 px-4 py-3 rounded-l-lg bg-white text-gray-800 outline-none"
      />
      <button 
      onClick={copyPassword}
      className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-r-lg font-semibold transition">
        Copy
      </button>
    </div>

    {/* Controls */}
    <div className="space-y-5">

      {/* Length */}
      <div className="flex items-center gap-4">
        <input
          type="range"
          min={8}
          max={25}
          value={pLength}
          onChange={(e) => {setPLength(Number(e.target.value))}}
          className="flex-1 accent-orange-500 cursor-pointer"
        />
        <label className="text-white font-medium whitespace-nowrap">
          Length: {pLength}
        </label>
      </div>

      {/* Options */}
      <div className="flex gap-4">
        <label className="flex items-center gap-2 text-white font-medium cursor-pointer">
          <input
            type="checkbox"
            checked={number}
            onChange={() => {
              setNumber((prev) => !prev)
            }}
            className="h-5 w-5 accent-orange-500 cursor-pointer"
          />
          Numbers
        </label>

        <label className="flex items-center gap-2 text-white font-medium cursor-pointer">
          <input
            type="checkbox"
            checked={char}
            onChange={() => {
              setChar((prev) => !prev)
            }}
            className="h-5 w-5 accent-orange-500 cursor-pointer"
          />
          Characters
        </label>
      </div>

    </div>
  </div>
</div>
    </>
  )
}

export default App
