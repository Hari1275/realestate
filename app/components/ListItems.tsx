import React from 'react';
import { GoKey } from 'react-icons/go';
import { PiPark } from 'react-icons/pi';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { LiaHospitalSolid } from 'react-icons/lia';
import { MdLocalMall } from 'react-icons/md';
import { CgInsights } from 'react-icons/cg';

function ListItems({ title, items }: any) {
  return (
    <div className='lg:w-1/3 w-full flex py-6'>
      <div className='mr-4 p-2 text-[#DA9100] text-2xl'>
        {title === 'Key Locations' && <GoKey />}
        {title === 'IT Parks & Companies' && <PiPark />}
        {title === 'Education Institutions' && <MdOutlineCastForEducation />}
        {title === 'Hospitals' && <LiaHospitalSolid />}
        {title === 'Shopping Malls & Cinemas' && <MdLocalMall />}
        {title === 'Sights of Interest' && <CgInsights />}
      </div>
      <div>
        <p className='text-2xl text-[#DA9100]'>{title}</p>
        <ul className='list-disc list-inside space-y-2 py-4'>
          {items.map((item: any, index: any) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListItems;
