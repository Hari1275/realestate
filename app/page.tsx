import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='navbar bg-[#DDCF8D]'>
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
                <a className='hover:bg-white hover:text-yellow-500'>Overview</a>
              </li>
              <li>
                <a className='hover:bg-white hover:text-yellow-500'>
                  Amenities
                </a>
              </li>
              <li>
                <a className='hover:bg-white hover:text-yellow-500'>
                  Specifications
                </a>
              </li>
              <li>
                <a className='hover:bg-white hover:text-yellow-500'>Plans</a>
              </li>
              <li>
                <a className='hover:bg-white hover:text-yellow-500'>Location</a>
              </li>
              <li>
                <a className='hover:bg-white hover:text-yellow-500'>About</a>
              </li>
              <li>
                <a className='hover:bg-white hover:text-yellow-500'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost normal-case text-xl'>
            <Image
              src={'/logo.png'}
              alt='logo'
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
            />
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link
                className='hover:bg-white hover:text-yellow-500'
                href='#second'
              >
                Overview
              </Link>
            </li>
            <li>
              <a className='hover:bg-white hover:text-yellow-500'>Amenities</a>
            </li>
            <li>
              <a className='hover:bg-white hover:text-yellow-500'>
                Specifications
              </a>
            </li>
            <li>
              <a className='hover:bg-white hover:text-yellow-500'>Plans</a>
            </li>
            <li>
              <a className='hover:bg-white hover:text-yellow-500'>Location</a>
            </li>
            <li>
              <a className='hover:bg-white hover:text-yellow-500'>About</a>
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

      <div className='container mx-auto p-4 mt-6 gap-10 flex flex-col md:flex-row items-center'>
        {/* Left Column (Image) */}
        <div className='md:w-1/2 md:pr-4'>
          <img src='section.png' alt='Image' className='w-full h-auto' />
        </div>

        {/* Right Column (Text) */}
        <div className='md:w-1/2 mt-4 md:mt-0'>
          <h2 className='text-3xl font-bold'>LIFE AT ESPERANZA</h2>
          <p className='mt-4 '>
            Relationships mean the world to us; we connect people to their homes
            and to their communities. All locations are hand-picked considering
            future appreciation, proximity, and convenience of essentials in and
            around the Project.
          </p>
        </div>
      </div>

      {/* second content */}
      <div
        className='container mx-auto p-4 mt-6 gap-10 flex flex-col md:flex-row items-center'
        id='second'
      >
        {/* Left Column (Image) */}

        <div className='md:w-1/2 mt-4 md:mt-0'>
          <p className='font-3xl py-2'>STEP INTO THE WORLD OF</p>
          <h2 className='text-3xl font-bold'>ESPERANZA</h2>
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
        </div>

        {/* Right Column (Text) */}
        <div className='md:w-1/2 md:pr-4'>
          <img src='second-section.png' alt='Image' className='w-full h-auto' />
        </div>
      </div>
    </>
  );
}
