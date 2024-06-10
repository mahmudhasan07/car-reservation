import { useEffect, useState } from 'react';
import logo from "../../public/logo.png"
import * as React from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Invoice = ({condition}) => {
    const [hours, sethours] = useState("")
    const [days, setdays] = useState("");
    const [weeks, setweeks] = useState();
    const [totalCostOfHour, settotalCostOfHour] = useState("");
    const [totalCostOfDay, settotalCostOfDay] = useState("");
    const [totalCostOfWeek, settotalCostOfWeek] = useState("");
    const [hourly, sethourly] = useState("");
    const [daily, setdaily] = useState("");
    const [weekly, setweekly] = useState("");


    useEffect(() => {
        sethours(localStorage.getItem("hour"))
        setdays(localStorage.getItem("day") || localStorage.getItem("day"))
        setweeks(localStorage.getItem("week"))
        settotalCostOfHour(localStorage.getItem("totalCostOfHour"))
        settotalCostOfDay(localStorage.getItem("totalCostOfDay") || localStorage.getItem("daily"))
        settotalCostOfWeek(localStorage.getItem("totalCostOfWeek") || localStorage.getItem("weekly"))
        sethourly(localStorage.getItem("hourly"))
        setdaily(localStorage.getItem("daily"))
        setweekly(localStorage.getItem("weekly"))

        
    }, []);

    // useReactToPrint({})
    // if(condition == true){
    //     document.addEventListener("click", function (){
    //         useReactToPrint({
    //             con
    //         })
    //     })
    // }
    if(condition == true){
        window.print()
    }

    const handleDownload = () => {
        // const input = document.querySelector("#download_part");
        // // Specify the id of the element you want to convert to PDF
        // html2canvas(input).then((canvas) => {
        //     const imgData = canvas.toDataURL('image/png');
        //     const doc = new jsPDF('p', 'mm', 'a4');
        //     const componentWidth = doc.internal.pageSize.getWidth();
        //     const componentHeight = doc.internal.pageSize.getHeight();
        //     doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        //     doc.save('downloaded-file.pdf');
        //     console.log("pdf");
        // })
    }

    return (
        <section id='download_part'  className='flex mx-16 my-10'>
            <button onClick={handleDownload} className='btn'>Hello</button>
            <div className='flex-1'>
                <div>
                    <div className='flex justify-around'>
                        <img src={logo} className='w-20' alt="" />
                        <div>
                            <p>CH Car Place Inc</p>
                            <p>162 Bergen st</p>
                            <p>Booklyn, NY 11213</p>
                        </div>
                    </div>

                    <div className='flex justify-around'>
                        <div>
                            <h1 className='text-xl font-bold'>RENTER INFO</h1>
                            <p>name</p>
                            <p>email</p>
                            <p>phone</p>
                        </div>
                        <div>
                            <p>Monday 9.00 AM - 6.00 PM</p>
                            <p>Tuesday 9.00 AM - 6.00 PM</p>
                            <p>Wednesday 9.00 AM - 6.00 PM</p>
                            <p>Thursday 9.00 AM - 6.00 PM</p>
                            <p>Friday 9.00 AM - 6.00 PM</p>
                            <p>Saturday 9.00 AM - 6.00 PM</p>
                            <p>Sunday 9.00 AM - 6.00 PM</p>
                        </div>
                    </div>

                    <div>
                        <h1>ADDITIONAL AUTHORIZED DRIVER(S)</h1>
                        <div>
                            <h1>UNIT DETAILS</h1>
                            <p>Unit: {""}</p>
                            <p>Model & Make : {""}</p>
                        </div>
                        <div>
                            <p>BILL TO:</p>
                            <p>Payment Type : Unpaid</p>
                            <p>Auth : $0.00</p>
                        </div>
                        <div>
                            <h1>Referral :</h1>
                            <p>NOTICE : Collision Insurance (CDW) - $7 per day</p>
                            <p>Limits liability of damages to one's own vehicle up to $1000 in event of accident</p>
                            <p>by waiving this coverage renter agrees to be hold liable for damage</p>
                            <div className='flex justify-around my-5'>
                                <p>Accept</p>
                                <p>Reject</p>
                            </div>
                        </div>
                        <div>
                            <p>Rental service may be refused anyone when done in the interest of the renting company or customer</p>
                            <p>- Rates do not include gassoline</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <div>
                    <h1>Reservation {""}</h1>
                    <h1>REPAIR ORDER:</h1>
                    <div>
                        <h1>CLAIM:</h1>
                        <p>{ }</p>
                        <p>{ }</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-lg'>Charges Summary</h1>
                    <hr className='my-2 border-2 rounded-xl border-[#5D5CFF]' />
                    <div className="overflow-x-auto bg-[#DFDFFF] text-black">
                        <table className="table w-[500px] ">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Charge</th>
                                    <th>Unit</th>
                                    <th>Rate</th>
                                    <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {
                                        hours ?
                                            <>
                                                <td>{hours != "undefined" ? "Hours" : ""}</td>
                                                <td>{hours != "undefined" ? hours : ""}</td>
                                                <td>{hourly != "undefined" ? hourly : ""}</td>
                                                <td>{totalCostOfHour != "undefined" ? totalCostOfHour : ""}</td></>
                                            :
                                            ""

                                    }
                                </tr>
                                <tr>

                                    {
                                        days ?
                                            <>
                                                <td>{days != "undefined" ? "Days" : ""}</td>
                                                <td>{days != "undefined" ? days : ""}</td>
                                                <td>{daily != "undefined" ? daily : ""}</td>
                                                <td>{totalCostOfDay != "undefined" ? totalCostOfDay : ""}</td></>
                                            :
                                            ""
                                    }
                                </tr>
                                <tr>

                                    {
                                        weeks ?
                                            <>
                                                <td>{weeks != "undefined" ? "Weeks" : ""}</td>
                                                <td>{weeks != "undefined" ? weeks : ""}</td>
                                                <td>{weekly != "undefined" ? weekly : ""}</td>
                                                <td>{totalCostOfWeek != "undefined" ? totalCostOfWeek : ""}</td></>
                                            :
                                            ""
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <p>Your rental agreement offers for an additional charges, an optional waiver to cover all or a part of your responsibility for damage to or loss of the vehicle. Before deciding whether to purchase the walver, you may wish to determine whether to purchase the walver Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est amet dignissimos necessitatibus deleniti, praesentium eaque porro nobis eius beatae ullam ducimus magnam ut atque eum excepturi unde vitae repudiandae pariatur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, obcaecati optio. Possimus veniam rerum quas, ex repellat excepturi! Illum quae veritatis quam consectetur earum, hic in et alias officia ut!</p>
                    <div>
                        <div>
                            <h1>Renters Signature</h1>
                            <p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
                        </div>
                        <div>
                            <h1>Additional Driver 1</h1>
                            <p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Invoice;