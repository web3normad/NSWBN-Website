import React from 'react'

const MissionVision = () => {
  return (
    <div className="px-6 py-32 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold leading-tight mb-8 text-primary-100 text-center">
        Mission and Vision
      </h2>
      
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h3 className='text-lg font-bold text-primary-100 mb-2'>VISION</h3>
          <p className="text-gray-700 leading-relaxed">
            To be the leading Seafarers' Welfare Organization in Africa.
          </p>
        </div>
        
        <div>
          <h3 className='text-lg font-bold text-primary-100 mb-2'>MISSION</h3>
          <p className="text-gray-700 leading-relaxed">
            To promote, advocate, guide, train, and conduct studies to support its constituent members.
          </p>
        </div>
        
        <div className='flex justify-center'>
          {/* Placeholder for image - you can add the actual image source when available */}
          <div className="w-full max-w-4xl h-64 bg-gray-200 flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionVision