import React, { useState } from 'react';
import './App.css';

function App() {

  const [binario, setBinario] = useState()
  const [decimal, setDecimal] = useState()
  const [erro, setErro] = useState()

  const onFormSubmit = e =>{
    e.preventDefault();

    if(binario.match(/^[0-1]+$/g) === null) {
      setErro("digite apenas 0 e 1")
      return
    }
    setErro(" ")

    const reverterBinario = binario
    .split('')
    .map(Number)
    .reverse()
    console.log(reverterBinario)

    const resultado = reverterBinario.reduce((acumula, valor, index) =>
      acumula + valor * Math.pow(2, index)
    )
    setDecimal(resultado)
  }

  

  return (
    <div className="App">
      
      <header className="App-header">
      
      <form className='Content' onSubmit={onFormSubmit}>
      {erro && <span style={{color:'red',}}>{erro}</span>}
          <input type="number" className='Input-convert' placeholder='digite 0 ou 1'
          onChange={(e) => setBinario(e.target.value)}
          ></input>
          <span className='Span-logo'>Bin2Dec</span>
          <input type="number" className='Input-convert' value={decimal}></input>
          <button type='submit'>Converter</button>
      </form>

      
      </header>
    </div>
  );
}

export default App;
