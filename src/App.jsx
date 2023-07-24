import React, {useState} from 'react'

const App = () => {

let [priceInput, setPriceInput] = useState()
let [errorMessage, setErrorMessage] = useState("")

function handlePrice(e) {
  if (e.target.value >= 0) {
    setPriceInput(e.target.value)
    setErrorMessage('')
  } else {
    setErrorMessage('No negative numbers allowed')
  }
}
  return (
    <>
<div className = 'container'>
  <h2>Price Input</h2>
  <h3>${priceInput}</h3>
  <input 
  type = 'number'
  value = {priceInput}
  onChange = {handlePrice}
  placeholder = 'Enter positive number'
  />
  {errorMessage && <p className='error'>{errorMessage}</p>}
</div>
    </>
  )
}

export default App
