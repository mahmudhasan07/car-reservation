import React, { useEffect, useState } from 'react';

const Vehicle = () => {

    const [types_array, setTypes] = useState()

    const [Array, setArray] = useState([]);
    const [type, setType] = useState("");
    const [carModel, setCarModel] = useState("");
    useEffect(() => {
        async function Cars() {
            const res = await fetch("https://exam-server-7c41747804bf.herokuapp.com/carsList")
            const data = await res.json()
            // console.log(data?.data);
            // setArray(data.data)
            const types = data?.data.map(item=> item?.type)
            // console.log();
            setTypes([...new Set(types)])

            if(type){
                const models = data?.data?.filter((item,idx)=> item?.type.includes(type))
                setArray(models)
            }

        }
        Cars()
        // console.log(type, carModel);
        if(type && carModel){
            console.log(type,carModel);
            
        }


    }, [carModel, type]);

    // console.log(types_array);

    return (
        <section className='w-fit h-fit'>
            <h1 className='font-semibold text-lg'>Vehicle Information</h1>
            <hr className='my-2 border-2 rounded-xl border-[#5D5CFF]' />
            <div className='border-2 rounded-xl p-2'>
                <div>
                    <label className='text-base' htmlFor="">Vehicle Type <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <select onChange={(e) => setType(e.target.value)} className='border-2 w-72 rounded-xl p-1' name="" id="">
                        <option value="">Default</option>
                        {
                            types_array?.length > 0 ?
                                types_array?.map((item, idx) => <option  key={idx} value={item}>{item}</option>)
                                :
                                <option value=""></option>
                        }
                    </select>
                </div>
                <div>
                    <label className='text-base' htmlFor="">Vehicle <span className='text-red-600 font-bold text-lg'>*</span></label> <br />
                    <select onChange={(e) => setCarModel(e.target.value)} name="" id="" className='border-2 w-72 rounded-xl p-1'>
                        <option value="">Default</option>
                        {
                            Array?.length > 0 ?
                                Array.map((item, idx) => <option key={idx} value={item?.make + "," + item?.model}>{item?.make} , {item?.model}</option>)
                                :
                                <option value=""></option>
                        }
                    </select>
                </div>
            </div>
        </section>
    );
};

export default Vehicle;