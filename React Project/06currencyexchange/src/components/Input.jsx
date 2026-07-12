import React, { useId } from 'react'

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
}) {
    const amountInputId = useId()

    return (
        <div className="w-full bg-white rounded-xl p-4 shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-3">
                <label
                    htmlFor={amountInputId}
                    className="text-sm font-medium text-gray-700"
                >
                    {label}
                </label>

                <span className="text-xs text-gray-400">
                    Currency
                </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <input
                    id={amountInputId}
                    type="number"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition"
                />

                <select
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                    className="rounded-lg border border-gray-300 px-4 py-2 bg-white outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Input