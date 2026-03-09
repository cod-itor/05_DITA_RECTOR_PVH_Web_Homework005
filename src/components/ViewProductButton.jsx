'use client';
import React from 'react'

const ViewProductButton = ({children , onClick}) => {
  return (
    <div className=''>
        <div>
            <Image>

            </Image>
            <div>
                <div>
                    <h1>Wireless Mouse</h1>
                    <p>price</p>
                    <i>icon</i>
                </div>
                <p>Ergonomic wireless </p>
            </div>

        </div>
        <div>
            <button>View</button>
        </div>

    </div>
  )
}

export default ViewProductButton
