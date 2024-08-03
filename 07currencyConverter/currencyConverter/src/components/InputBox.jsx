import React, {useId} from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {


    const amountId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor= {amountId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          id = {amountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

/*
1.) This input box takes two variables - label (From or To) , className - (If user wants to inject his css)
2.) Rest of the variables are pretty self explanatory.
3.) Uses of each : 
<input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled = {amountDisable}
          value={amount}
          onChange={(e)=> {onAmountChange && onAmountChange(Number(e.target.value))}}
/>

disabled -> user dalsakta hai ya nahi ?
value -> amount se ayegi jo user dega
onchange -> if amount change hota hai to event fire karo e and function call krdo with new Amount to handle the fetch request
----------------------------------------------------------
<select
  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
  value={selectCurrency}
  onChange={(e) => {
    onCurrencyChange && onCurrencyChange(e.target.value);
  }}
  disabled={currencyDisable}
>
  {currencyOptions.map((curr) => (
    <option key={curr} value={curr}>
      {curr}
    </option>
  ))}
</select>

value - ayegi from currency jo user pass karega, by default usd hai
onchange - if selected currency change hogi to ek event fire hoga and usko handle karega onCurrencyChangeFunction

now options mai har baar : loop through hoga from all the currencies available
jo bhi select hoga wo show hoga user ko . Also jo bhi select hoga usko event ke through handle karenge. Note : Loop krne ke liye keys zaroori hai in react for options.

-----------------------------------------------------------

const amountId = useId();

useId unique values deta hai so we can easily bind the in input id 
*/


