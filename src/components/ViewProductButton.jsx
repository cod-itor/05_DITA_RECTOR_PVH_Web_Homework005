'use client';
import React from 'react'

const ViewProductButton = ({children , onClick}) => {
  return (
    <button onClick={onClick} className="bg-indigo-700 hover:bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-xl shrink-0">
          {children}
    </button>
  )
}

export default ViewProductButton
