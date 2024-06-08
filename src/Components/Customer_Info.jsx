import React, { useEffect, useState } from 'react';

const Customer_Info = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    useEffect(() => {
        console.log(firstName, lastName, email, number);
        if (firstName, lastName, email, number) {
            localStorage.setItem("name", firstName + " " +lastName)
            localStorage.setItem("email", email)
            localStorage.setItem("number", number)
        }

    }, [firstName, lastName, email, number]);

    return (
        <section className='w-fit h-fit '>
            <h1 className='font-semibold text-lg'>Customer Information</h1>
            <hr className='my-2 border-2 rounded-xl border-[#5D5CFF]' />
            <div className='border-2 space-y-2 p-2 rounded-xl'>
                <div>
                    <label className='text-base' htmlFor="">First Name <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" className='border-2 p-1 rounded-xl w-72' />
                </div>
                <div>
                    <label className='text-base' htmlFor="">Last Name <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input onChange={(e) => setLastName(e.target.value)} type="text" className='border-2 w-72 p-1 rounded-xl' />
                </div>
                <div>
                    <label className='text-base' htmlFor="">Email <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className='border-2 w-72 p-1 rounded-xl' />
                </div>
                <div>
                    <label className='text-base' htmlFor="">Phone <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <input onChange={(e) => setNumber(e.target.value)} type="number" className='border-2 w-72 p-1 rounded-xl' />
                </div>
            </div>
        </section>
    );
};

export default Customer_Info;