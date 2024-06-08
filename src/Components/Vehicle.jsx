import React from 'react';

const Vehicle = () => {
    return (
        <section className='w-fit h-fit'>
            <h1 className='font-semibold text-lg'>Vehicle Information</h1>
            <hr className='my-2 border-2 rounded-xl border-[#5D5CFF]' />
            <div className='border-2 p-2'>
                <div>
                    <label className='text-base' htmlFor="">Vehicle Type <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <select className='border-2 w-72 rounded-xl p-1' name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <label className='text-base' htmlFor="">Vehicle <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <select name="" id="" className='border-2 w-72 rounded-xl p-1'>
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default Vehicle;