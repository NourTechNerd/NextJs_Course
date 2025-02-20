import React from 'react'

type Params ={
    id : string
}


export default function User_details({params}:{params:Params}) {
  return (
    <div>
        <h1>User details page</h1>
        <h3>User id : {params.id}</h3>
    </div>
  )
}
