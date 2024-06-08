import './App.css'
import Additional_Charge from './Components/Additional_Charge'
import Charge from './Components/Charge'
import Customer_Info from './Components/Customer_Info'
import Reservation_Info from './Components/Reservation_Info'
import Vehicle from './Components/Vehicle'

function App() {


  return (
    <>
    <section className='mx-16 my-5'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold'>Reservation</h1>
        <button className='btn'>Print / Download</button>
      </div>
      <div className='grid my-5 grid-cols-3'>
        <Reservation_Info></Reservation_Info>
        <Customer_Info></Customer_Info>
        <Charge></Charge>
        </div>
        <div className='grid grid-cols-3'> 
        <Vehicle></Vehicle>
        <Additional_Charge></Additional_Charge>
      </div>
      </section>
    </>
  )
}

export default App
