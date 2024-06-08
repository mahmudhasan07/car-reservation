import React from 'react';

const Additional_Charge = () => {
    return (
        <section className='w-fit h-fit'>
             <h1 className='font-semibold text-lg'>Additional Charges</h1>
             <hr className='my-2 border-2 rounded-xl border-[#5D5CFF]' />
             <div >
                <div className='border-2 space-y-2 p-2'>
                    <div className='flex justify-between w-72'>
                        <div className='flex'>
                        <input type="checkbox" />
                        <p>Collision Damage Waiver</p>
                        </div>
                        <p>$9.00</p>
                    </div>
                    <div className='flex justify-between w-72'>
                        <div className='flex'>
                        <input type="checkbox" />
                        <p>Liability Insurance</p>
                        </div>
                        <p>$15.00</p>
                    </div>
                    <div className='flex justify-between w-72'>
                        <div className='flex'>
                        <input type="checkbox" />
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