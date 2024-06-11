import { useContext, useEffect, useState } from 'react';
import logo from "../../public/logo.png"
import { Context } from './ContextAPI';


const Invoice = () => {
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
        <section id='download_part' className='flex justify-around gap-10 text-black bg-white'>
            <div className=' w-1/2'>
            {/* <button onClick={handleDownload} className='btn'>Hello</button> */}
                <div>
                    <div className='flex justify-between'>
                        <img src={logo} className='w-20' alt="" />
                        <div>
                            <p>CH Car Place Inc</p>
                            <p>162 Bergen st</p>
                            <p>Booklyn, NY 11213</p>
                        </div>
                    </div>

                    <div className='flex gap-1 justify-between'>
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
            <div className=' w-1/2'>
                <div>
                    <h1>Reservation {""}</h1>
                    <h1>REPAIR ORDER:</h1>
                    <div>
                        <h1>CLAIM:</h1>
                        <p>{"" }</p>
                        <p>{ ""}</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-lg'>Charges Summary</h1>
                    <hr className='my-2 border-2 rounded-xl border-[#5D5CFF]' />
                    <div className="overflow-x-auto bg-[#DFDFFF] text-black">
                        <table className="table w-[300px] ">
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