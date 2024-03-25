import React, { forwardRef } from 'react';

const TailInput = forwardRef(({ type, id, ph, inchange}, ref) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{id}</label>
      <input type={type} id={id} ref={ref} onChange={inchange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={ph} required />
    </div>
  );
});

export default TailInput;