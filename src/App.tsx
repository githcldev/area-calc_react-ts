import { useEffect, useState } from 'react'
import './App.css'
import { Area, AreaParams, InEvent } from './Area'
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

  const change = (a: InEvent) => {
    try {
      let ve = Number(a.ev.target.value)
      a.fr(ve)
    } catch (err) {
      alert('Given value not a valid number')
    }
  }

  return (
    <>
      <div className='c'>
        Number: <input value={n} onChange={(ev) => change({ev, fr: setN }) } /> <br /> <br />
        Num String: <input value={ns} readOnly /> <br /> <br />
        <div className='a'>
          Height: <input value={h} onChange={(ev) => change({ev, fr: setH}) } /> <br />
          Width: <input value={w} onChange={(ev) => change({ev, fr: setW}) } />
        </div> <br />
        Area: <input value={a} readOnly />
      </div>
    </>
  )
}

export default App
