import React from 'react';

const Reservation_Info = () => {
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
                    <input type="date" className='border-2 p-1 w-72 rounded-lg' />
                </div>
                <div className='p-2'>
                    <label className='text-base'>Return Date <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input type="date" className='border-2 p-1 w-72 rounded-lg' />
                </div>
                <div className='p-2 flex justify-between'>
                    <label className='text-base'>Duration</label> 
                    <input type="text" className='border-2 p-1 rounded-lg' />
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