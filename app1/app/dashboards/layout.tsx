import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <h1 className='text-xl text-green-600 mb-4'>Dashbord layout</h1>
      {children}
    </div>
  )
}
