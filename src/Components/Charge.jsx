import React, { useEffect, useState } from 'react';

const Charge = ({loading}) => {

    const [hours, sethours] = useState("")
    const [days, setdays] = useState("");
    const [weeks, setweeks] = useState();
    const [totalCostOfHour, settotalCostOfHour] = useState("");
    const [totalCostOfDay, settotalCostOfDay] = useState("");
    const [totalCostOfWeek, settotalCostOfWeek] = useState("");
    const [hourly, sethourly] = useState("");
    const [daily, setdaily] = useState("");
    const [weekly, setweekly] = useState("");


    // useEffect(() => {
        
    // }, [hours,weeks,days]);

    if(loading == true){
        const type1 = window.localStorage?.getItem("hour")
        sethours(type1)
        const type2 = window.localStorage?.getItem("day") 
        setdays(type2)
        const type3 = window.localStorage?.getItem("week")
        setweeks(type3)
        const type4 = window.localStorage?.getItem("totalCostOfHour")
        settotalCostOfHour(type4)
        const type5 = window.localStorage?.getItem("totalCostOfDay") 
        settotalCostOfDay(type5)
        const type6 = window.localStorage?.getItem("totalCostOfWeek")
        settotalCostOfWeek(type6)
        const type7 = window.localStorage?.getItem("hourly")
        sethourly(type7)
        const type8 = window.localStorage?.getItem("daily")
        setdaily(type8)
        const type9 = window.localStorage?.getItem("weekly")
        setweekly(type9)
        console.log(hours,weeks,days);
    }


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
                                        {hours != "undefined" ?<td> {hours} </td>: ""}
                                        {hourly != "undefined" ?<td> {hourly} </td>: ""}
                                        {totalCostOfHour != "undefined" ?<td> {totalCostOfHour}</td> : ""}</>
                                    :
                                    ""

                            }
                        </tr>
                        <tr>

                            {
                                days ?
                                    <>
                                        {days != "undefined" ?  <td> Days</td>: ""}
                                        {days != "undefined" ?  <td> {days} </td>: ""}
                                        {daily != "undefined" ?  <td> {daily}</td> : ""}
                                        {totalCostOfDay != "undefined" ? <td>  {totalCostOfDay} </td>: ""}</>
                                    :
                                    ""
                            }
                        </tr>
                        <tr>

                            {
                                weeks ?
                                    <>
                                        {weeks != "undefined" ? <td> weeks  </td>: ""}
                                        {weeks != "undefined" ? <td> {weeks}  </td>: ""}
                                        {weekly != "undefined" ? <td> {weekly}  </td>: ""}
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