import React from 'react'

const ListValue = ({ label, value } : {label: string, value: string}) => {
  return (
    <li>
      <span className="flex items-center justify-between">
        <p className="text-gray-7 dark:text-gray-3">{label}</p>
        <p className="line-clamp-1">{value}</p>
      </span>
    </li>
  );
};


export default ListValue