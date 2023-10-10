import React from 'react';

function ListItems({ title, items }: any) {
  return (
    <div className='lg:w-1/3 w-full'>
      <p className='text-2xl text-[#DA9100]'>{title}</p>
      <ul className='list-disc list-inside space-y-2 py-4'>
        {items.map((item: any, index: any) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
