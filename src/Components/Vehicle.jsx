import React, { useEffect, useState } from 'react';
import axios from "axios"

const Vehicle = () => {

    const [types_array, setTypes] = useState()

    const [Array, setArray] = useState([]);
    const [cars, setCars] = useState([]);
    const [type, setType] = useState("");
    const [carModel, setCarModel] = useState("");
    useEffect(() => {
        async function Cars() {
            const res = await fetch("https://exam-server-7c41747804bf.herokuapp.com/carsList")
            const data = await res.json()
            // console.log(data?.data);
            // setArray(data.data)
            setCars(data?.data)
            const types = data?.data?.map(item => item.type)
            setTypes([...new Set(types)])

            if (type) {
                const models = data?.data?.filter((item, idx) => item.type.includes(type))
                setArray(models)
            }

        }
        Cars()

        const name = localStorage.getItem("name")
        const email = localStorage.getItem("email")
        const phone = localStorage.getItem("number")
        const pickup_time = localStorage.getItem("pickup_time")
        const return_time = localStorage.getItem("return_time")
        const duration_week = localStorage.getItem('duration_week')
        const duration_day = localStorage.getItem('duration_day')
        const duration_hour = localStorage.getItem('duration_hour')
        // console.log(type, carModel);
        if (type && carModel) {
            // console.log(carModel);
            // console.log(carModel);
            const splitCarModel = carModel.split(',')
            // console.log(splitCarModel);
            const pickCar = cars.filter((item, idx) => item?.type.includes(type) && item?.make == splitCarModel[0] && item?.model == splitCarModel[1])
            // console.log(pickCar[0].rates);
            const rate = pickCar[0].rates
            const postData = { duration_week, duration_day, duration_hour, rate }
            console.log(postData);
            axios.post('http://localhost:5000/rents', postData)
                .then(res => {
                    console.log(res.data);
                    if (res?.data.length > 1) {
                        localStorage.setItem("totalCostOfDay", res.data[0])
                        localStorage.setItem("totalCostOfWeek", res.data[1])
                    }
                    else{
                        localStorage.setItem('totalCostOfHour', res.data[0])
                    }
                })
                .catch(error => {
                    console.log(error);
                })

        }


        // console.log(name,email,phone,pickup_time, return_time,duration);


    }, [carModel, type, cars]);

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
                                types_array?.map((item, idx) => <option key={idx} value={item}>{item}</option>)
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
                                Array.map((item, idx) => <option key={idx} value={`${item?.make}` + "," + `${item?.model}`}> {item?.make} , {item?.model}</option>)
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