import React from 'react'

const OfficeAddresses = () => {
  return (
    <div className="px-6 py-32 h-full space-y-6 sm:px-8 md:px-16 lg:px-24">
        <div className='space-y-4'>
            <h1 className='text-2xl text-primary-100 font-bold'>Office Locations</h1>
            <p>NSWBN operates from multiple locations across Nigeria to ensure accessible and comprehensive support for seafarers. Below are the details of our main office and regional offices.</p>
        </div>
        <div>
            <h2 className='text-xl font-bold'>Main Office:</h2>
            <ul>
                <li><span className='font-semibold'>Address:</span> National Seafarers Welfare Board of Nigeria, 3rd Floor, 15B Awolowo Road, by EFCC, Ikoyi, Lagos, Nigeria.</li>
                <li><span className='font-semibold'>Phone:</span> </li>
                <li><span className='font-semibold'>Email:</span> info@nswbn.org</li>
                <li><span className='font-semibold'>Operating Hours:</span> Monday to Friday, 9:00 AM - 5:00 PM</li>
            </ul>
        </div>
        <div className='space-y-4'>
            <h1 className='text-2xl font-bold'>Regional Offices:</h1>
            <div>
            <h2 className='text-xl text-primary-100 font-semibold '>Apapa Office:</h2>
            <ul>
                <li><span className='font-semibold'>Address:</span> Apapa Port Complex, Dock Road, Apapa, Lagos, Nigeria.</li>
                <li><span className='font-semibold'>Phone:</span> </li>
                <li><span className='font-semibold'>Email:</span> apapa@nswbn.org</li>
                <li><span className='font-semibold'>Operating Hours:</span> Monday to Friday, 9:00 AM - 5:00 PM</li>
            </ul>
            </div>
            <div>
            <h2 className='text-xl text-primary-100 font-semibold'>Port Harcourt Office:</h2>
            <ul>
                <li><span className='font-semibold'>Address:</span> Port Harcourt Port, Wharf Road, Port Harcourt, Nigeria.</li>
                <li><span className='font-semibold'>Phone:</span> </li>
                <li><span className='font-semibold'>Email:</span> portharcourt@nswbn.org</li>
                <li><span className='font-semibold'>Operating Hours:</span> Monday to Friday, 9:00 AM - 5:00 PM</li>
            </ul>
            </div>
            <div>
            <h2 className='text-xl text-primary-100 font-semibold'>Onne Office:</h2>
            <ul>
                <li><span className='font-semibold'>Address:</span> Onne Port, Onne, Rivers State, Nigeria.</li>
                <li><span className='font-semibold'>Phone:</span> </li>
                <li><span className='font-semibold'>Email:</span> onne@nswbn.org</li>
                <li><span className='font-semibold'>Operating Hours:</span> Monday to Friday, 9:00 AM - 5:00 PM</li>
            </ul>
            </div>
            <div>
            <h2 className='text-xl text-primary-100 font-semibold'>Warri Office:</h2>
            <ul>
                <li><span className='font-semibold'>Address:</span> Warri Port, Warri, Delta State, Nigeria.</li>
                <li><span className='font-semibold'>Phone:</span> </li>
                <li><span className='font-semibold'>Email:</span> warri@nswbn.org</li>
                <li><span className='font-semibold'>Operating Hours:</span> Monday to Friday, 9:00 AM - 5:00 PM</li>
            </ul>
            </div>
            <div>
            <h2 className='text-xl text-primary-100 font-semibold'>Calabar Office (Upcoming):</h2>
            <ul>
                <li><span className='font-semibold'>Address:</span> Calabar Port, Calabar, Cross River State, Nigeria.</li>
                <li><span className='font-semibold'>Phone:</span> </li>
                <li><span className='font-semibold'>Email:</span> calabar@nswbn.org</li>
                <li><span className='font-semibold'>Operating Hours:</span> Monday to Friday, 9:00 AM - 5:00 PM</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default OfficeAddresses