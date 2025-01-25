import React from 'react'

const ListValue = ({ label, value } : {label: string, value: string}) => {
  return (
    <li>
      <span className="flex items-center justify-between">
        <p className="text-gray-6 dark:text-gray-4">{label}</p>
        <p className="font-medium">{value}</p>
      </span>
    </li>
  );
};


export default ListValue