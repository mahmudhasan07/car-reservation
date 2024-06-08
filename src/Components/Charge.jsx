import React from 'react';

const Charge = () => {
    return (
        <section className='w-fit h-fit'>
            <h1 className='font-semibold text-lg'>Charges Summary</h1>
            <hr className='my-2 border-2 rounded-xl border-[#5D5CFF]' />
            <div className="overflow-x-auto">
  <table className="table w-[500px] border-2">
    {/* head */}
    <thead>
      <tr>
        <th>Charge</th>
        <th>Unit</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
        </section>
    );
};

export default Charge;