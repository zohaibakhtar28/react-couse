import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  //ref hook :P used for passing reference of objects on change of some dependency. Ex : We want to copy text of password in case of copy btn is clicked? We pass a reference on input of password label and put an onclick on copy btn where it fires this.

  const passwordRef = useRef(null); //default value is null
  


  //callback hook. Used for caching previous rseults on change of dependencies : to optimise usage of memory 
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random() * str.length) + 1);
      pass += str[char];
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordRef.current.value)
    
  }, [password])


  //Use effect hooks : Used to re render on change of any dependency mentioned. If we directly call setPassword() it won't reun because react by default React limits the no of re renders to prevent infinte loop
  useEffect(()=>{
    passwordGenerator()

  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} 
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 transition-opacity duration-300 hover:opacity-20">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
