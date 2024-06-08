import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [Array, setArray] = useState();
    useEffect(() => {
        async function MyData() {
            const res = await fetch("https://watch-server-07.vercel.app/watches")
            const data = await res.json()
            setArray(data)

        }
        MyData()
    }, []);
    return (
        <section className='flex flex-wrap gap-10'>
            {
                Array?.map((element,idx)=> <Card key={idx} card={element}></Card>)
            }
        </section>
    );
};

const Card =({card})=>{
return(
    <div className='w-80 border-2 h-fit border-black p-2 rounded-lg'>
        <img className='w-52' src={card?.Watch_image} alt="" />
        <h1>{card?.Watch_name}</h1>
        <h1>{card?.Watch_type}</h1>
        <h1>{card?.Watch_note}</h1>
    </div>
)
}

export default Watch;