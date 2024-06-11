import { useEffect, useRef, useState } from 'react'
import './App.css'
import Additional_Charge from './Components/Additional_Charge'
import Charge from './Components/Charge'
import Customer_Info from './Components/Customer_Info'
import Reservation_Info from './Components/Reservation_Info'
import Vehicle from './Components/Vehicle'
import Invoice from './Components/Invoice'



function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    window.addEventListener("load", function () {
      // localStorage.clear()
    })
  }, []);

  const handDownload = () => {
    window.print()
  }


  return (
    <>
      <section className='mx-16  my-5'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-semibold'>Reservation</h1>
          <button onClick={handDownload} className='btn'>Print / Download</button>
        </div>
        <div className='grid my-5 text-xl gap-3 grid-cols-3'>
          <Reservation_Info></Reservation_Info>
          <Customer_Info></Customer_Info>
          <Charge loading={loading}></Charge>
          <Vehicle setloading={setloading}></Vehicle>
          <Additional_Charge></Additional_Charge>
        </div>
        <div className=''>
          <Invoice></Invoice>
        </div>
      </section>
    </>
  )
}

export default App
