import React, { useContext, useEffect, useState } from 'react';
import { Context } from './ContextAPI';

const Charge = () => {
    const { loading, setloading } = useContext(Context)
    const [hours, sethours] = useState("")
    const [days, setdays] = useState("");
    const [weeks, setweeks] = useState();
    const [totalCostOfHour, settotalCostOfHour] = useState("");
    const [totalCostOfDay, settotalCostOfDay] = useState("");
    const [totalCostOfWeek, settotalCostOfWeek] = useState("");
    const [hourly, sethourly] = useState("");
    const [daily, setdaily] = useState("");
    const [weekly, setweekly] = useState("");

    // console.log(loading);
    useEffect(() => {
        if (loading == true) {
            const type1 = localStorage.getItem("hour")
            sethours(type1)
            const type2 = localStorage.getItem("day")
            setdays(type2)
            const type3 = localStorage.getItem("week")
            setweeks(type3)
            const type4 = localStorage.getItem("totalCostOfHour")
            settotalCostOfHour(type4)
            const type5 = localStorage.getItem("totalCostOfDay")
            settotalCostOfDay(type5)
            const type6 = localStorage.getItem("totalCostOfWeek")
            settotalCostOfWeek(type6)
            const type7 = localStorage.getItem("hourly")
            sethourly(type7)
            const type8 = localStorage.getItem("daily")
            setdaily(type8)
            const type9 = localStorage.getItem("weekly")
            setweekly(type9)
            setloading(false)
        }
    }, [days, weeks, hours,loading,setloading]);


    return (
        <section id='charge' className='w-fit h-fit'>
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
                                        {hours != "undefined" ? <td>Hours</td> : ""}
                                        {hours != "undefined" ? <td> {hours} </td> : ""}
                                        {hourly != "undefined" ? <td> {hourly} </td> : ""}
                                        {totalCostOfHour != "undefined" ? <td> {totalCostOfHour}</td> : ""}</>
                                    :
                                    ""

                            }
                        </tr>
                        <tr>

                            {
                                days ?
                                    <>
                                        {days != "undefined" ? <td> Days</td> : ""}
                                        {days != "undefined" ? <td> {days} </td> : ""}
                                        {daily != "undefined" ? <td> {daily}</td> : ""}
                                        {totalCostOfDay != "undefined" ? <td>  {totalCostOfDay} </td> : ""}</>
                                    :
                                    ""
                            }
                        </tr>
                        <tr>

                            {
                                weeks ?
                                    <>
                                        {weeks != "undefined" ? <td> weeks  </td> : ""}
                                        {weeks != "undefined" ? <td> {weeks}  </td> : ""}
                                        {weekly != "undefined" ? <td> {weekly}  </td> : ""}
                                        {totalCostOfWeek != "undefined" ? <td> {totalCostOfWeek} </td> : ""}</>
                                    :
                                    ""
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Charge;