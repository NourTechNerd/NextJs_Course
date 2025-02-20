import React from 'react'
import Link from 'next/link' 


export default function users() {
  return (
    <div>
      <h1>Cards of Users</h1>
      <ul>
        <li><Link href = "/dashboards/users/1">User1</Link></li>
        <li><Link href = "/dashboards/users/2">User2</Link></li>
        <li><Link href = "/dashboards/users/3">User3</Link></li>
    
      </ul>
    </div>
  )
}
