import React, { useEffect, useState } from 'react';

const Reservation_Info = () => {

    const [pickup, setPickup] = useState("");
    const [return_Date, setReturn] = useState("");
    const [duration, setDuration] = useState("");

    useEffect(() => {
        const newPickup = new Date(pickup)
        const newReturn_Date = new Date(return_Date)
        // console.log();
        if (newPickup.getDate() == newReturn_Date.getDate()) {
            // console.log("same");
            const hour = (newReturn_Date.getTime() - newPickup.getTime()) / (1000 * 60 * 60)
            setDuration(`${(newReturn_Date.getTime() - newPickup.getTime()) / (1000 * 60 * 60)}hr`)
            localStorage.setItem("pickup_time", newPickup)
            localStorage.setItem("return_time", newReturn_Date)
            localStorage.setItem("duration_hour", hour)

        }
        else {
            const totalTime = (newReturn_Date.getTime() - newPickup.getTime()) / (1000 * 60 * 60 * 24)
            if (totalTime > 6) {
                const week = parseInt(totalTime / 7);
                const days = parseInt(Math.max(totalTime % 7))
                setDuration(`${week}week, ${days}day`)
                localStorage.setItem("pickup_time", newPickup)
                localStorage.setItem("return_time", newReturn_Date)
                localStorage.setItem("duration_week", week)
                localStorage.setItem("duration_day", days)

            }
        }

    }, [pickup, return_Date]);

    // console.log(duration);

    return (
        <section className='w-fit h-fit'>
            <h1 className='font-semibold text-lg'>Reservation Details</h1>
            <hr className='my-2 border-2 rounded-xl border-[#5D5CFF]' />
            <div className='border-2 rounded-xl '>
                <div className='p-2'>
                    <label className='text-base'>Reservation ID</label> <br />
                    <input type="text" className='border-2 w-72 p-1 rounded-lg' />
                </div>
                <div className='p-2'>
                    <label className='text-base'>Pickup Date <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input onChange={(e) => setPickup(e.target.value)} type="datetime-local" className='border-2 p-1 w-72 rounded-lg' />
                </div>
                <div className='p-2'>
                    <label className='text-base'>Return Date <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input onChange={(e) => setReturn(e.target.value)} type="datetime-local" className='border-2 p-1 w-72 rounded-lg' />
                </div>
                <div className='p-2 flex justify-between'>
                    <label className='text-base'>Duration</label>
                    <input type="text" value={duration} readOnly className='border-2 p-1 rounded-lg' />
                </div>
                <div className='p-2'>
                    <label className='text-base'>Discount</label> <br />
                    <input type="text" className='border-2 p-1 w-72 rounded-lg' />
                </div>
            </div>

        </section>
    );
};

export default Reservation_Info;