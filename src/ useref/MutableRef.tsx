import {useEffect, useState,useRef} from "react"

export default function MutableRef() {
    const [data, setData] = useState(0)
    const counter=useRef<number | null>(null)

    const stopTimer=()=>{
   counter.current &&    window.clearInterval(counter.current)
    }
    useEffect(()=>{
        counter.current = window.setInterval(() => {
            setData(data=>data+1)
        },1000)

        return () => {
            stopTimer()
        }
    })
  return (
    <div>
          <h2>Mutable Ref example</h2>
          <h3>Timeer-{data}</h3>
          <button onClick={()=>stopTimer()} >Stop Timer</button>

    </div>
  );
}
