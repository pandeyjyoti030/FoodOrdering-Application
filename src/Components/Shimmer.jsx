import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap p-8 justify-center align-center gap-8'>
      {/* SHimmer UI loading.... */}
    {Array(10).fill("").map((e,index)=> <div key={index} className='shimmer-card'></div>)}
    </div>
  )
}

export default Shimmer