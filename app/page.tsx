'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import {
  educationInstitutions,
  hospitals,
  imageUrls,
  itCompanies,
  keyLocations,
  shoppingMallsAndCinemas,
  sightsOfInterest,
} from '../public/galleryImage';
import ListItems from './components/ListItems';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    threshold: 0.2, // Adjust the threshold as needed
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <>
      <div className='navbar bg-[#DDCF8D] sticky top-0'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link className='hover:bg-white hover:text-yellow-500' href='#'>
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href='#gallery'
                  className='hover:bg-white hover:text-yellow-500'
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href='#reach'
                  className='hover:bg-white hover:text-yellow-500'
                >
                  Specifications
                </Link>
              </li>
              <li>
                <Link
                  href='#plan'
                  className='hover:bg-white hover:text-yellow-500'
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  href='#location'
                  className='hover:bg-white hover:text-yellow-500'
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href='#footer'
                  className='hover:bg-white hover:text-yellow-500'
                >
                  About
                </Link>
              </li>
              <li>
                <a className='hover:bg-white hover:text-yellow-500'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <Link href='#' className='btn btn-ghost normal-case text-xl'>
            <Image
              src={'/logo.png'}
              alt='logo'
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
            />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link className='hover:bg-white hover:text-yellow-500' href='#'>
                Overview
              </Link>
            </li>
            <li>
              <Link
                href='#gallery'
                className='hover:bg-white hover:text-yellow-500'
              >
                Amenities
              </Link>
            </li>
            <li>
              <Link
                href='#reach'
                className='hover:bg-white hover:text-yellow-500'
              >
                Specifications
              </Link>
            </li>
            <li>
              <Link
                href='#plan'
                className='hover:bg-white hover:text-yellow-500'
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                href='#location'
                className='hover:bg-white hover:text-yellow-500'
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                href='#footer'
                className='hover:bg-white hover:text-yellow-500'
              >
                About
              </Link>
            </li>
            <li>
              <a className='hover:bg-white hover:text-yellow-500'>Contact Us</a>
            </li>
          </ul>
        </div>
        {/* <div className='navbar-end'>
      <a className='btn'>Button</a>
    </div> */}
      </div>
      {/* hero */}
      <div
        className='hero min-h-[500px] md:min-h-[500px] lg:min-h-[600px]'
        style={{
          backgroundImage: 'url(hero.png)',
          display: 'flex',
          alignItems: 'center', // Vertically center the content
          paddingLeft: '40px', // Add 10px padding to the left
        }}
      >
        {/* <div className='hero-overlay bg-opacity-60'></div> */}
        <div className='flex flex-col text-start'>
          <h4 className='mb-5 font-bold text-sm'>WELCOME TO YOUR WORLD OF</h4>

          <p className='mb-2 text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-medium'>
            Comfort &amp;
          </p>
          <p className='mb-5 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium'>
            Convenience!
          </p>
          <p className='mb-5 my-2 text-base md:text-lg lg:text-xl xl:text-2xl'>
            101 ADORABLE APARTMENTS @ YEMALUR, BENGALURU
          </p>
        </div>
      </div>
      {/* content */}
      <div className='mx-auto py-10 px-10 mt-0 gap-10 flex flex-col md:flex-row items-center bg-[#1E1E1E]'>
        {/* Left Column (Image) */}
        {/* <div className='md:w-1/2 md:pr-4'>
          <img src='section.png' alt='Image' className='w-full h-auto' />
        </div> */}
        <motion.div
          className='md:w-1/2 md:pr-4'
          initial={{ opacity: 0, x: -100 }} // Initial state, starts off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Animation properties when component appears
          transition={{ duration: 1 }}
        >
          <img src='section.png' alt='Image' className='w-full h-auto' />
        </motion.div>
        {/* Right Column (Text) */}
        {/* <div className='md:w-1/2 mt-4 md:mt-0'>
          <h2 className='text-3xl font-700 text-[#DA9100]'>
            LIFE AT ESPERANZA
          </h2>
          <p className='mt-4 '>
            Relationships mean the world to us; we connect people to their homes
            and to their communities. All locations are hand-picked considering
            future appreciation, proximity, and convenience of essentials in and
            around the Project.
          </p>
        </div> */}
        <motion.div
          className='md:w-1/2 mt-4 md:mt-0'
          initial={{ opacity: 0, x: 100 }} // Initial state, starts off-screen to the right
          animate={{ opacity: 1, x: 0 }} // Animation properties when component appears
          transition={{ duration: 1 }} // Animation duration
        >
          <h2 className='text-3xl font-700 text-[#DA9100]'>
            LIFE AT ESPERANZA
          </h2>
          <p className='mt-4'>
            Relationships mean the world to us; we connect people to their homes
            and to their communities. All locations are hand-picked considering
            future appreciation, proximity, and convenience of essentials in and
            around the Project.
          </p>
        </motion.div>
      </div>
      {/* second content */}
      <div className='mx-auto py-10 px-10 mt-0 gap-10 flex flex-col md:flex-row items-center bg-[#1E1E1E]'>
        {/* Left Column (Image) */}
        <motion.div
          ref={ref}
          className='md:w-1/2 mt-4 md:mt-0'
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className='font-3xl py-2 '>STEP INTO THE WORLD OF</p>
          <h2 className='text-3xl font-700 text-[#DA9100]'>ESPERANZA</h2>
          <p className='mt-4 '>
            Experience modern living at Subha Esperanza with impeccable design,
            spacious 2 and 3 BHK apartments, luxurious amenities, and serene
            surroundings near HAL Marathahalli. Enjoy seamless connectivity to
            IT parks, schools, and shopping centers. Subha Esperanza is your
            ideal home for luxury and sophistication.
          </p>
          <p className='font-bold py-2'>
            Modern Amenities | Urban Location | Sophisticated Style
          </p>
        </motion.div>

        {/* Right Column (Text) */}
        <motion.div
          className='md:w-1/2 md:pr-4'
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img src='second-section.png' alt='Image' className='w-full h-auto' />
        </motion.div>
      </div>
      ;{/* Gallery section */}
      <div id='gallery'>
        <p className='md:text-7xl text-3xl text-[#DA9100] font-700 text-center  bg-[#111] py-6'>
          GALLERY
        </p>
      </div>
      <div className='mx-auto py-10 px-10 mt-0 bg-[#111]'>
        <motion.div
          className='grid grid-cols-2 md:grid-cols-6 gap-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <img
                className='h-auto max-w-full rounded-lg'
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={350}
                height={350}
              />
            </div>
          ))}
        </motion.div>
      </div>
      {/* Reach section */}
      <div id='reach'>
        <p className='md:text-7xl text-3xl text-[#DA9100] font-700 text-center bg-[#1E1E1E] py-6 '>
          REACH EVERYWHERE IN MINUTES
        </p>
      </div>
      <div>
        <div className='mx-auto md:py-10 px-10 mt-0 bg-[#1E1E1E]'>
          <div className='lg:flex lg:flex-row lg:space-x-8'>
            <ListItems title='Key Locations' items={keyLocations} />
            <ListItems title='IT Parks & Companies' items={itCompanies} />
            <ListItems
              title='Education Institutions'
              items={educationInstitutions}
            />
          </div>
        </div>

        <div className='mx-auto md:py-10 px-10 py-0 mt-0 bg-[#1E1E1E]'>
          <div className='lg:flex lg:flex-row lg:space-x-8'>
            <ListItems title='Hospitals' items={hospitals} />
            <ListItems
              title='Shopping Malls & Cinemas'
              items={shoppingMallsAndCinemas}
            />
            <ListItems title='Sights of Interest' items={sightsOfInterest} />
          </div>
        </div>
      </div>
      {/* Master plan */}
      <div id='plan'>
        <p className='md:text-7xl text-3xl text-[#DA9100] font-700 text-center bg-[#111] py-6'>
          MASTER PLAN
        </p>
      </div>
      <div className='mx-auto py-10 px-10 mt-0 bg-[#111] gap-10 flex flex-col md:flex-row items-center'>
        {/* Left Column (Image) */}
        <div className='md:w-1/2 md:pr-4'>
          <img src='plan.png' alt='Image' className='w-full h-auto' />
        </div>

        {/* Right Column (Text) */}
        <div className='md:w-1/2 mt-4 md:mt-0'>
          <p className='mt-4 text-2xl font-[700]'>
            1.75 ACRES OF GREEN OPEN SPACES, LANDSCAPING AND NATURALLY CONNECTED
            LIFESTYLE
          </p>
        </div>
      </div>
      {/* location */}
      <div id='location'>
        <p className='md:text-7xl text-3xl text-[#DA9100] font-700 text-center bg-[#1E1E1E] py-6'>
          LOCATION
        </p>
      </div>
      <div className='mx-auto py-10 px-10 mt-0 bg-[#1E1E1E] gap-10 flex flex-col md:flex-row items-center'>
        {/* Left Column (Image) */}

        <div className='md:w-1/2 mt-4 md:mt-0'>
          <p className='mt-4 '>
            Experience modern living at Subha Esperanza with impeccable design,
            spacious 2 and 3 BHK apartments, luxurious amenities, and serene
            surroundings near HAL Marathahalli. Enjoy seamless connectivity to
            IT parks, schools, and shopping centers. Subha Esperanza is your
            ideal home for luxury and sophistication.
          </p>
        </div>

        {/* Right Column (Text) */}
        <div className='md:w-1/2 md:pr-4'>
          <img src='location.png' alt='Image' className='w-full h-auto' />
        </div>
      </div>
      <div className='mx-auto py-10 px-10 mt-0  gap-10 flex flex-col md:flex-row items-center  bg-[#1E1E1E]'>
        {/* Left Column (Google Map iframe) */}
        {/* <div className='md:w-1/2 md:pr-4'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2dLongitude!3dLatitude!4m15!1m6!1m2!1sAddress!2sCity!3sState!2m4!1i20!2i30!3i200!4i100!5i5!6i1!7i4!8i100!9i2!10i3!12i1!13i10!14i1!15i3!16i4!18i9'
            width='600'
            height='450'
            style={{ border: '0' }}
            allowFullScreen={false}
            loading='lazy'
          ></iframe>
        </div> */}

        {/* Right Column (Text Content) */}
        <div className='md:w-1/2 mt-4 md:mt-0'>
          <p className='mt-4 '>
            With close proximity to major IT parks, commercial spaces, and
            workplaces in and around the ORR IT corridor, the strategic location
            of this project makes it an excellent choice for a home as well as
            an investment.
          </p>
        </div>
      </div>
      {/* Footer */}
      <footer className='bg-white dark:bg-[#1E1E1E]' id='footer'>
        <div className='mx-auto w-full '>
          <div className='grid grid-cols-1 gap-8 py-10 px-10 lg:py-8 md:grid-cols-3'>
            <div>
              <img src='logo.png' alt='Company Logo' width={125} height={125} />
              <p className='text-white  font-normal font-[400] py-8'>
                Every Subha Builders & Developers project is well designed and
                developed with the highest standards of quality. From spacious
                and luxurious villas to sensible, well-appointed apartments and
                plotted developments, Subha Builders & Developers always
                delivers a top-notch quality of life.
              </p>
            </div>
            <div>
              <h2 className='mb-6 text-lg font-[400] text-white uppercase text-white'>
                Contact Us.
              </h2>
              <div className='flex items-center space-x-4 border-b border-gray-300 dark:border-gray-700 pb-4'>
                <img src='Vector.svg' alt='Phone' className='w-6 h-6' />
                <div className='flex flex-col'>
                  <p className='text-white font-normal font-[400]'>
                    Phone Number
                  </p>
                  <p className='text-white font-normal font-[400]'>
                    +91 78160 00555
                  </p>
                </div>
              </div>
              <div className='flex items-center space-x-4 py-4 border-b border-gray-300 dark:border-gray-700 pb-4'>
                <img src='message.svg' alt='Phone' className='w-6 h-6' />
                <div className='flex flex-col'>
                  <p className='text-white font-normal font-[400]'>
                    Email Address
                  </p>
                  <p className='text-white font-normal font-[400]'>
                    info@subhabuilders.com
                  </p>
                </div>
              </div>
              <div className='flex items-center space-x-4 py-4'>
                <img src='loc.svg' alt='Phone' className='w-6 h-6' />
                <div className='flex flex-col'>
                  <p className='text-white font-normal font-[400]'>
                    Office Address
                  </p>
                  <p className='text-white font-normal font-[400]'>
                    #252, 3rd Floor, V.K. Pride Building, 14th Main, HSR Layout
                    Sector 7, Bengaluru - 560102.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-yellow-600  rounded-lg'>
                <div className='bg-yellow-400 rounded-lg p-4 flex flex-col items-center text-center'>
                  <h1 className='text-xl font-bold mb-4 text-[#111]'>
                    Feel free to contact us if you need any assistance, any
                    help, or another question.
                  </h1>
                  <form className='w-full'>
                    <div className='mb-4'>
                      <input
                        type='text'
                        className='bg-gray-200 p-2 w-full rounded'
                        placeholder='Name'
                        style={{ backgroundColor: '#F0F4F5', color: '#AEB4B9' }}
                      />
                    </div>
                    <div className='mb-4'>
                      <input
                        type='email'
                        className='bg-gray-200 p-2 w-full rounded'
                        placeholder='Email'
                        style={{ backgroundColor: '#F0F4F5', color: '#AEB4B9' }}
                      />
                    </div>
                    <div className='mb-4'>
                      <input
                        type='tel'
                        className='bg-gray-200 p-2 w-full rounded'
                        placeholder='Phone'
                        style={{ backgroundColor: '#F0F4F5', color: '#AEB4B9' }}
                      />
                    </div>
                    {/* <div className='mb-4'>
                      <input
                        type='text'
                        className='bg-gray-200 p-2 w-full rounded'
                        placeholder="I'm not a robot"
                        style={{ backgroundColor: '#F0F4F5', color: '#AEB4B9' }}
                      />
                    </div> */}
                    <button
                      className='bg-black text-white px-4 py-2 rounded'
                      style={{ backgroundColor: '#111' }}
                    >
                      Enquire
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className='bg-black text-white py-8 text-center font-normal font-[400] py-10 px-10'>
        <p className='py-2 pb-2'>DISCLAIMER</p>
        <p>
          The images shown in the material are only for the purpose of
          illustrating a possible layout and do not form a part of the offering.
          <br />
          The builder / promoter reserves the right to change, alter, add or
          delete any specifications mentioned herein without prior permission or
          notice.
          <br />
          RERA No: PRM/KA/RERA/1251/308/PR/020622/004953
          <br />
        </p>
      </section>
      <div className='p-2 text-center'>
        <p>
          <br />© 2023 All Rights Reserved | Powered by wipeoutQ|{' '}
          <a href='https://www.wipeoutq.com' className='text-white'>
            www.wipeoutq.com
          </a>
        </p>
      </div>
    </>
  );
}
