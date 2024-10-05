import React from 'react'

const Partnerships = () => {
  return (
    <div className="px-6 py-32 h-full sm:px-8 md:px-16 lg:px-24">
      <div className='space-y-4'>
        <h1 className='text-2xl text-primary-100 font-semibold'>Partners and Constituent Members</h1>
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>International Partners</h2>
          <ul className="list-disc pl-5">
            <li>International Transport Workers’ Federation (ITF)</li>
            <li>International Seafarers’ Welfare and Assistance Network (ISWAN)</li>
            <li>Convention on Business Integrity (CBi) and the Maritime Anti-corruption Network (MACN)</li>
            </ul>
            <h2 className='text-xl font-semibold'>Constituent Members (to use only logos of these organizations)</h2>
            <ul className="list-disc pl-5">
              <li>Nigerian Merchant Navy and Water Transport Senior Staff Officers Association</li>
              <li>Maritime Workers Union of Nigeria</li>
              <li>Apostleship of the Sea (Stella Maris)</li>
              <li>Mission to Seafarers (MTS)</li>
            </ul>
            <h2 className='text-xl font-semibold'>Government agencies</h2>
            <ul className="list-disc pl-5">
              <li>Nigerian Maritime Administration and Safety Agency (NIMASA)</li>
              <li>Nigerian Ports Authority (NPA)</li>
            </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Partnerships;
