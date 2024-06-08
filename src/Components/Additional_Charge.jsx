import React, { useState } from 'react';

const Additional_Charge = () => {
    const [tax, settax] = useState("");
    const handleCheck1 =(e)=>{
        e.preventDefault()
        settax(10)
    }
    const handleCheck2 =(e)=>{
        e.preventDefault()
        settax(10)
    }
    const handleCheck3 =(e)=>{
        e.preventDefault()
        settax(10)
    }
    // console.log(tax);
    return (
        <section className='w-fit h-fit -mt-16'>
             <h1 className='font-semibold text-lg'>Additional Charges</h1>
             <hr className='my-2 border-2 rounded-xl border-[#5D5CFF]' />
             <div className='text-base'>
                <div className='border-2 rounded-xl space-y-4 p-2'>
                    <div className='flex justify-between w-72'>
                        <div className='flex gap-2'>
                        <input type="checkbox" onChange={handleCheck1} />
                        <p>Collision Damage Waiver</p>
                        </div>
                        <p>$9.00</p>
                    </div>
                    <div className='flex justify-between w-72'>
                        <div className='flex gap-2'>
                        <input type="checkbox" onChange={handleCheck2} />
                        <p>Liability Insurance</p>
                        </div>
                        <p>$15.00</p>
                    </div>
                    <div className='flex justify-between w-72'>
                        <div className='flex gap-2'>
                        <input type="checkbox"  onChange={handleCheck3} />
                        <p>Rental Tax</p>
                        </div>
                        <p>11.5%</p>
                    </div>

                </div>
             </div>
        </section>
    );
};

export default Additional_Charge;