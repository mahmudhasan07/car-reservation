import { useEffect, useRef, useState } from 'react'
import './App.css'
import Additional_Charge from './Components/Additional_Charge'
import Charge from './Components/Charge'
import Customer_Info from './Components/Customer_Info'
import Reservation_Info from './Components/Reservation_Info'
import Vehicle from './Components/Vehicle'
import Invoice from './Components/Invoice'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useReactToPrint } from "react-to-print";



function App() {

  const [condition, setcondition] = useState(false);
  const [loading, setloading] = useState(false);
  // const componentRef = useRef()

  useEffect(() => {
    window.addEventListener("load", function () {
      // localStorage.clear()
    })
  }, []);
  // const componentRef = useRef()

  // const handleDownload = () => {
  //   // const pdf = await PdfDocument.fromHtml(Invoice())
  //   // await pdf.saveAs("stampedPdf.pdf");
  //   // const blob = new Blob([content], { type: 'text/plain' });
  //   // const url = window.URL.createObjectURL(blob);
  //   // const link = document.createElement('a');
  //   // link.href = url;
  //   // link.download = filename;
  //   // link.click();
  //   // PDFDownloadLink.saveAsPDF(Invoice, 'myComponent.pdf')

  //   // generatePDF(components, {filename: 'page.pdf'})

  //   // document.getElementById("download_part").style.backgroundColor = "green"

  //   // generatePDF(components, {filename: 'invoice.pdf'})
  //   // const input = document.querySelector("#Hello_part");
  //   // // Specify the id of the element you want to convert to PDF
  //   // html2canvas(input)
  //   //   .then((canvas) => {
  //   //     const imgData = canvas.toDataURL('image/png');
  //   //     const doc = new jsPDF('p', 'mm', 'a4');
  //   //     const componentWidth = doc.internal.pageSize.getWidth();
  //   //     const componentHeight = doc.internal.pageSize.getHeight();
  //   //     doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
  //   //     doc.save('downloaded-file.pdf');
  //   //     console.log("pdf");
  //   //   })


  // }

  // const handleDownload = useReactToPrint({
  //   content : ()=> componentRef.current,
  //   documentTitle : "Application.pdf",
  //   onAfterPrint :()=> alert("download complete")
  // })

  // const components = document.getElementById("download_part")


  const handleLoadingn = ()=>{
    
  }


  return (
    <>
      <section id='Hello_part' className='mx-16 my-5'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-semibold'>Reservation</h1>
          <button onClick={()=> setcondition(true)}  className='btn'>Print / Download</button>
        </div>
        <div className='grid my-5 gap-3 grid-cols-3'>
          <Reservation_Info></Reservation_Info>
          <Customer_Info></Customer_Info>
          <Charge loading={loading}></Charge>
          <Vehicle setloading={setloading}></Vehicle>
          <Additional_Charge></Additional_Charge>
        </div>
        <div >
          <Invoice condition = {condition}></Invoice>
        </div>
      </section>
    </>
  )
}

export default App
