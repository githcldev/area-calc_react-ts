import { useEffect, useState } from 'react'
import './App.css'
import { Area, AreaParams } from './Area'
import { NumStr } from './NumStr'


function App() {
  const [n, setN] = useState(0)
  const [ns, setNs] = useState("")

  const [h, setH] = useState(0)
  const [w, setW] = useState(0)
  const [a, setA] = useState(0)

  useEffect(() => {
    let str = new NumStr(n)
    setNs(str.str())
  }, [n])

  useEffect(() => {
    let p: AreaParams = {
      w, h
    }
    let rec = new Area(p)
    setA(rec.calc())
  }, [h, w])

  return (
    <>
      <div className='c'>
        Number: <input value={n} onChange={(e) => setN(Number(e.target.value))} /> <br /> <br />
        Num String: <input value={ns} onChange={(e) => { } } /> <br /> <br />
        <div className='a'>
          Height: <input value={h} onChange={(e) => setH(Number(e.target.value))} /> <br />
          Width: <input value={w} onChange={(e) => setW(Number(e.target.value))} />
        </div> <br />
        Area: <input value={a} onChange={(e) => { return; } } />
      </div>
    </>
  )
}

export default App
