import React from 'react'

const TableCell = ({children,className}) => {
  return (
      <td className={`py-3 border-gray-300 border px-3 ${className}`}>{children}</td>
  );
}

export default TableCell