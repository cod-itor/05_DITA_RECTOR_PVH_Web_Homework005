import React from 'react'

const sidebar = () => {
  return (
    <div className= 'flex p-1 bg-blue-950 rounded-2xl text-white' >
        <h1 className=''>MENU</h1>
        <div>
            <div>
                <p>Overview</p>
            </div>
            <div>
                <p>Items</p>
            </div>
            <div>
                <p>Orders</p>
            </div>
            <div>
                <p>Customers</p>
            </div>
            <div>
                <p>Settings</p>
            </div>
        </div>
      
    </div>
  )
}

export default sidebar
