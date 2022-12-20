import React, { useState } from 'react';
import { mostFrequent } from './utils/mostFrequent'

import "./index.css"

const App = () => {
  const [result, setResult] = useState("")

  const handleUpload = async (e) => {
    e.preventDefault()

    const reader = new FileReader()
    reader.onload = async (e) => {

      const text = (e.target.result)
      const list = text.split(/\r?\n/).map(n => parseInt(n))

      let arraySize = list.length
      let mostOccurring = 5

      let solution = mostFrequent(list, arraySize, mostOccurring)
      setResult(solution)
    };

    reader.readAsText(e.target.files[0])
  }
  return (
    <div>
      <h1 className='title'>Upload File</h1>

      <div className='upload-card'>
        <input type="file" onChange={handleUpload} />
        <p className="main">Supported files</p>
        <p className="info">TXT</p>
      </div>

      {result.split("\n").map((item, key) => {
        return <div key={key}>{item}</div>;
      })}
    </div>)
}

export default App;
