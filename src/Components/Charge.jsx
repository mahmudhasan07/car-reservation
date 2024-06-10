import React, { useEffect, useState } from 'react';

const Charge = () => {

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
        const type1 = window.localStorage.getItem("hour")
        sethours(type1)
        const type2 = window.localStorage.getItem("day") || window.localStorage.getItem("day")
        setdays(type2)
        const type3 = window.localStorage.getItem("week")
        setweeks(type3)
        const type4 = window.localStorage.getItem("totalCostOfHour")
        settotalCostOfHour(type4)
        const type5 = window.localStorage.getItem("totalCostOfDay") || window.localStorage.getItem("daily")
        settotalCostOfDay(type5)
        const type6 = window.localStorage.getItem("totalCostOfWeek") || window.localStorage.getItem("weekly")
        settotalCostOfWeek(type6)
        const type7 = window.localStorage.getItem("hourly")
        sethourly(type7)
        const type8 = window.localStorage.getItem("daily")
        setdaily(type8)
        const type9 = window.localStorage.getItem("weekly")
        setweekly(type9)
    }, []);

    return (
        <section className='w-fit h-fit'>
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
        </section>
    );
};

export default Charge;