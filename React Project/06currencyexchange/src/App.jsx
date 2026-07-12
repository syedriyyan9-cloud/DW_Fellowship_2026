import { useState } from 'react'
import { Input } from './components/Index'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    console.log("Convert clicked");
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Currency Exchange
        </h1>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
        >

          <Input
            label='From'
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setAmount(amount)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />

          <div className="flex justify-center">
            <button
              type='button'
              onClick={swap}
              className="px-6 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition duration-200 active:scale-95"
            >
              Swap
            </button>
          </div>

          <Input
            label='To'
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          <button
            type='submit'
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-lg shadow-md transition duration-200 active:scale-95"
          >
            {from.toUpperCase()} to {to.toUpperCase()}
          </button>

        </form>

      </div>
    </div>
  )
}

export default App