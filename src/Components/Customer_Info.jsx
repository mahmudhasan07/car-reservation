import React from 'react';

const Customer_Info = () => {
    return (
        <section className='w-fit h-fit border-2 border-black'>
            <h1 className='font-semibold text-lg'>Customer Information</h1>
            <hr className='my-2 border-2 rounded-xl border-[#5D5CFF]' />
            <div className='border-2 space-y-2 p-2 rounded-xl'>
                <div>
                    <label className='text-base' htmlFor="">First Name <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input type="text" className='border-2 w-72' />
                </div>
                <div>
                    <label className='text-base' htmlFor="">Last Name <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input type="text" className='border-2 w-72' />
                </div>
                <div>
                    <label className='text-base' htmlFor="">Email <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input type="email" className='border-2 w-72' />
                </div>
                <div>
                    <label className='text-base' htmlFor="">Phone <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input type="number" className='border-2 w-72' />
                </div>
            </div>
        </section>
    );
};

export default Customer_Info;