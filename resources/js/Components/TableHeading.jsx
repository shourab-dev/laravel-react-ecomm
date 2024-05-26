import React from 'react'

const TableHeading = ({children,className}) => {
  return (
    <th className={`bg-gray-200 py-3 border-gray-300 border ${className}`}>{children}</th>
  )
}

export default TableHeading