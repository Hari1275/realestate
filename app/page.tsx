'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import {
  educationInstitutions,
  hospitals,
  imagesA,
  imagesAObjects,
  imagesB,
  imagesBObjects,
  imagesC,
  imagesCObjects,
  itCompanies,
  keyLocations,
  shoppingMallsAndCinemas,
  sightsOfInterest,
} from '../public/galleryImage';
import ListItems from './components/ListItems';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { HiOutlineDownload } from 'react-icons/hi';
import { ImFacebook } from 'react-icons/im';
import { HiCheck } from 'react-icons/hi';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from 'react-icons/ai';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import YouTubePlayer from './components/Video';

// import './styles.css';
export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    threshold: 0.2, // Adjust the threshold as needed
  });

  const [isNavbarOpaque, setIsNavbarOpaque] = useState(true);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Check the scroll position and set the state accordingly
      if (window.scrollY > 0) {
        setIsNavbarOpaque(false);
      } else {
        setIsNavbarOpaque(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const [currentTab, setCurrentTab] = useState('A');

  // const imageSets: { [key: string]: string[] } = {
  //   A: imagesA,
  //   B: imagesB,
  //   C: imagesC,
  // };
  const imageSets: { [key: string]: { image: string; alt: string }[] } = {
    A: imagesAObjects,
    B: imagesBObjects,
    C: imagesCObjects,
  };
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  const openImagePopup = () => {
    setImagePopupOpen(true);
  };
  const openPopup = () => {
    setFormData({
      firstName: '',
      email: '',
      phone: '',
    });
    setLoading(false);
    setShowModal(true);
  };

  const closeImagePopup = () => {
    setImagePopupOpen(false);
  };
  const closePopup = () => {
    setFormData({
      firstName: '',
      email: '',
      phone: '',
    });
    setShowModal(false);
    setLoading(false);

    setDownload(false);
  };

  const [showModal, setShowModal] = useState(false);
  const [isDownload, setDownload] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({ phone: '' });
  const [loading, setLoading] = useState(false);
  const [succuss, setSuccuss] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[789]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const phone = formData.phone;

    if (!validatePhone(phone)) {
      setErrors({
        phone: 'Invalid phone number. Please enter a 10-digit Indian number.',
      });
      return;
    }

    const api = 'https://redefineerp-ext-api.azurewebsites.net/api/addLead?';

    const parameters = {
      code: 't9g1JMHRm4XrqYBDdNB2UNWhEr4Go2XA-M53XXWrwcY9AzFurIy6Hg==',
      responderName: formData.firstName,
      responderPhone: formData.phone,
      responderEmail: formData.email,
      projectName: '',
      source: 'magicbricks',
      comments: '',
    };
    // console.log('parameters: ', parameters);

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ parameters }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccuss(true);
        setTimeout(() => {
          setSuccuss(false);
        }, 3000);
        console.log(data);
        setFormData({
          firstName: '',
          email: '',
          phone: '',
        });
        setLoading(false);
        if (!isDownload) return;

        const pdfUrl =
          'https://d3svv1ub18oysf.cloudfront.net/Subha%20Esperanza_Brochure.pdf';
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.download = 'ESPERANZA_BROCHURE.pdf';
        a.click();
      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Form submission logic when validation passes.
    // console.log(formData);
  };
  function handleDownload() {
    setShowModal(true);
    setDownload(true);
    // const pdfUrl =
    //   'https://d3svv1ub18oysf.cloudfront.net/Subha%20Esperanza_Brochure.pdf';
    // const a = document.createElement('a');
    // a.href = pdfUrl;
    // a.target = '_blank';
    // a.rel = 'noopener noreferrer';
    // a.download = 'ESPERANZA_BROCHURE.pdf';
    // a.click();
  }
  return (
    <>
      <div
        className={`navbar py-6 fixed w-ful  ${
          isNavbarOpaque ? 'bg-transparent' : 'bg-[#DDCF8D]'
        } z-10`}
      >
        <div className='navbar-start '>
          {/* First Row: Menu */}
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
                  className='hover.bg-white hover.text-yellow-500'
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
                  className='hover.bg-white hover.text-yellow-500'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#footer'
                  className='hover.bg-white hover.text-yellow-500'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Row: Logo */}
          <Link href='#' className='normal-case text-xl px-10'>
            <Image
              src='/logo.png'
              alt='logo'
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
            />
          </Link>

          {/* Third Row: Enquire Button */}
          <button
            className='bg-[#1E1E1E] text-white text-center py-4 px-8 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:hidden'
            type='button'
            onClick={() => setShowModal(true)}
          >
            Enquire
          </button>
        </div>

        <div className='navbar-center hidden lg:flex px-20'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link
                className='hover:bg-white hover:text-yellow-500'
                style={{ backgroundColor: 'transparent' }}
                href='#'
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href='#gallery'
                className='hover:bg-white hover:text-yellow-500'
                style={{ backgroundColor: 'transparent' }}
              >
                Amenities
              </Link>
            </li>
            <li>
              <Link
                href='#reach'
                className='hover:bg-white hover:text-yellow-500'
                style={{ backgroundColor: 'transparent' }}
              >
                Specifications
              </Link>
            </li>
            <li>
              <Link
                href='#plan'
                className='hover:bg-white hover:text-yellow-500'
                style={{ backgroundColor: 'transparent' }}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                href='#location'
                className='hover:bg-white hover:text-yellow-500'
                style={{ backgroundColor: 'transparent' }}
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                href='#footer'
                className='hover:bg-white hover:text-yellow-500'
                style={{ backgroundColor: 'transparent' }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='#footer'
                className='hover:bg-white hover:text-yellow-500'
                style={{ backgroundColor: 'transparent' }}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button
                className='bg-[#1E1E1E] text-white font-bold  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                type='button'
                onClick={openPopup}
              >
                Enquire
              </button>
            </li>
          </ul>
        </div>
        {/* <div className='navbar-end'>
      <a className='btn'>Button</a>
    </div> */}
      </div>
      {/* hero */}

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className='mySwiper full-screen-slider relative'
        style={{ zIndex: 1 }}
      >
        <SwiperSlide>
          <div
            className='swiper-image hero min-h-screen md:min-h-screen lg:min-h-screen bg-cover bg-no-repeat absolute top-0 w-full h-full'
            style={{
              backgroundImage: 'url("/hero.png")',

              display: 'flex',
              alignItems: 'center', // Vertically center the content
              paddingLeft: '40px',
            }}
          >
            {/* <div className='content text-white'>
              <h4 className='mb-5 font-bold text-sm'>
                WELCOME TO YOUR WORLD OF
              </h4>
              <p className='mb-2 text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-medium'>
                Comfort &amp;
              </p>
              <p className='mb-5 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium'>
                Convenience!
              </p>
              <p className='mb-5 my-2  lg:pb-20  md:text-lg lg:text-xl xl:text-2xl'>
                101 ADORABLE APARTMENTS @ YEMALUR, BENGALURU
              </p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src='/hero-1.png' /> */}
          <div
            className='swiper-image hero min-h-screen md:min-h-screen lg:min-h-screen bg-cover bg-no-repeat'
            style={{
              backgroundImage: 'url("/hero-1.jpg")',

              display: 'flex',
              alignItems: 'center', // Vertically center the content
              paddingLeft: '40px',
            }}
          >
            {/* <div className='content text-white'>
              <h4 className='mb-5 font-bold text-sm'>
                WELCOME TO YOUR WORLD OF
              </h4>
              <p className='mb-2 text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-medium'>
                Comfort &amp;
              </p>
              <p className='mb-5 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium'>
                Convenience!
              </p>
              <p className='mb-5 my-2 lg:pb-20 text-base md:text-lg lg:text-xl xl:text-2xl'>
                101 ADORABLE APARTMENTS @ YEMALUR, BENGALURU
              </p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src='/hero-2.png' /> */}
          <div
            className='swiper-image hero min-h-screen md:min-h-screen lg:min-h-screen bg-cover bg-no-repeat'
            style={{
              backgroundImage: 'url("/hero-2.webp")',

              display: 'flex',
              alignItems: 'center', // Vertically center the content
              paddingLeft: '40px',
            }}
          >
            {/* <div className='content text-white'>
              <h4 className='mb-5 font-bold text-sm'>
                WELCOME TO YOUR WORLD OF
              </h4>
              <p className='mb-2 text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-medium'>
                Comfort &amp;
              </p>
              <p className='mb-5 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium'>
                Convenience!
              </p>
              <p className='mb-5 my-2 lg:pb-20 text-base md:text-lg lg:text-xl xl:text-2xl'>
                101 ADORABLE APARTMENTS @ YEMALUR, BENGALURU
              </p>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
      {/* download */}
      <div className='fixed left-0 top-full transform -translate-y-full md:p-10 p-6 z-10'>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-full '
          onClick={handleDownload}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          Download Brochure
          <HiOutlineDownload className='ml-2' />
        </button>
      </div>

      {showModal ? (
        <div className='fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto z-50 outline-none focus:outline-none'>
          <div className='w-auto md:w-1/2 mx-auto'>
            <div className='bg-white w-full rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none'>
              <div className='border-b border-solid border-gray-300 p-5 rounded-t flex items-center justify-between bg-[#095D8E] text-white'>
                <h3 className='text-3xl font-semibold'>ENQUIRY FORM</h3>
                <button className='text-white p-2' onClick={closePopup}>
                  <span className='text-black opacity-70 text-xl block bg-[#DDCF8D] h-10 w-10 rounded-full flex items-center justify-center'>
                    x
                  </span>
                </button>
              </div>
              {succuss && (
                <div className='alert ' style={{ borderRadius: '0' }}>
                  <HiCheck />
                  <span>Form submitted successfully!</span>
                </div>
              )}

              <div className='p-6'>
                <form onSubmit={handleSubmit}>
                  <div className='form-control w-full '>
                    <label className='label'>
                      <span className='label-text'>Name</span>
                    </label>
                    <input
                      id='firstName'
                      name='firstName'
                      className='input input-bordered w-full  mb-3'
                      type='text'
                      placeholder='Enter Your Name'
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-control w-full '>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>
                    <input
                      id='email'
                      name='email'
                      className='input input-bordered w-full  mb-3'
                      type='text'
                      placeholder='Enter Your Email'
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='form-control w-full '>
                    <label className='label'>
                      <span className='label-text'>Phone</span>
                    </label>
                    <input
                      id='phone'
                      name='phone'
                      className='input input-bordered w-full  mb-3'
                      type='number'
                      placeholder='Enter Your Phone'
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <span className='text-red-500'>{errors.phone}</span>
                    )}
                  </div>
                  <div className='p-6 border-t border-solid border-blueGray-200 flex items-center justify-end rounded-b '>
                    {/* <button
                      className='text-white font-bold uppercase px-4 py-2 text-sm focus:outline-none mr-2 bg-yellow-500 active:bg-[#DDCF8D]'
                      type='button'
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button> */}
                    <button
                      className='text-white bg-yellow-500 active:bg-[#DDCF8D] font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg focus:outline-none'
                      type='submit'
                    >
                      {loading ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div>
        {/* content */}
        <div className='mx-auto py-10 md:py-20 px-10 md:px-20  mt-0 gap-10 flex flex-col md:flex-row items-center bg-[#1E1E1E]'>
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
            <Image
              src='/section.png'
              alt='Image'
              className='w-full h-auto'
              width={350}
              height={350}
            />
          </motion.div>
          {/* Right Column (Text) */}
          {/* <div className='md:w-1/2 mt-4 md:mt-0'>
          <h2 className='text-3xl font-700 text-[#DDCF8D]'>
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
            <h2 className='text-3xl font-700 text-[#DDCF8D]'>
              LIFE AT ESPERANZA
            </h2>
            <p className='mt-4 text-[#fff]'>
              Relationships mean the world to us; we connect people to their
              homes and to their communities. All locations are hand-picked
              considering future appreciation, proximity, and convenience of
              essentials in and around the Project.
            </p>
          </motion.div>
        </div>

        {/* second content */}
        <div className='mx-auto py-10 px-10 md:px-20 mt-0 gap-10 flex flex-col md:flex-row items-center bg-[#1E1E1E] text-[#fff]'>
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
            <h2 className='text-3xl font-700 text-[#DDCF8D]'>ESPERANZA</h2>
            <p className='mt-4 '>
              Experience modern living at Subha Esperanza with impeccable
              design, spacious 2 and 3 BHK apartments, luxurious amenities, and
              serene surroundings near HAL Marathahalli. Enjoy seamless
              connectivity to IT parks, schools, and shopping centers. Subha
              Esperanza is your ideal home for luxury and sophistication.
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
            <Image
              src='/second-section.png'
              alt='Image'
              className='w-full h-auto'
              width={350}
              height={350}
            />
          </motion.div>
        </div>
        {/* Gallery section */}
        <div id='gallery'>
          <p className='md:text-7xl text-3xl text-[#DDCF8D] font-700 text-center  bg-[#111] py-6 md:py-20'>
            GALLERY
          </p>
        </div>

        <div className='mx-auto px-10 md:px-20 mt-0 bg-[#111]'>
          <div className='tabs px-5 pb-5 flex justify-center md:justify-end'>
            <a
              className={`tab tab-lifted ${
                currentTab === 'A'
                  ? 'tab-active text-[#DDCF8D]'
                  : 'text-[#DDCF8D]'
              }`}
              onClick={() => handleTabChange('A')}
            >
              Overview
            </a>
            <a
              className={`tab tab-lifted ${
                currentTab === 'B'
                  ? 'tab-active text-[#DDCF8D]'
                  : 'text-[#DDCF8D]'
              }`}
              // className='tab tab-lifted tab-active text-[#DDCF8D]'
              onClick={() => handleTabChange('B')}
            >
              Parks
            </a>
            <a
              className={`tab tab-lifted ${
                currentTab === 'C'
                  ? 'tab-active text-[#DDCF8D]'
                  : 'text-[#DDCF8D]'
              }`}
              onClick={() => handleTabChange('C')}
            >
              Clubhouse
            </a>
          </div>
          <motion.div
            className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 py-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {imageSets[currentTab].map((imageObject, index) => (
              <div key={index} className='image-container '>
                <Image
                  className='h-auto max-w-full rounded-lg'
                  src={imageObject.image}
                  alt={imageObject.alt}
                  width={450}
                  height={350}
                />
                <div className='tooltip'>{imageObject.alt}</div>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Reach section */}
        <div id='reach'>
          <p className='md:text-7xl text-3xl text-[#DDCF8D] font-700 text-center bg-[#1E1E1E] py-6 md:py-20 '>
            REACH EVERYWHERE IN MINUTES
          </p>
        </div>
        <div>
          <div className='mx-auto py-6 md:py-10 px-10 md:px-20 mt-0 bg-[#1E1E1E] text-[#fff]'>
            <div className='lg:flex lg:flex-row lg:space-x-8'>
              <ListItems title='Key Locations' items={keyLocations} />

              <ListItems title='IT Parks & Companies' items={itCompanies} />

              <ListItems
                title='Education Institutions'
                items={educationInstitutions}
              />
            </div>
          </div>

          <div className='mx-auto md:py-10 py-6 px-10 md:px-20 py-0 mt-0 bg-[#1E1E1E] text-[#fff]'>
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
          <p className='md:text-7xl text-3xl text-[#DDCF8D] font-700 text-center bg-[#111] py-6 md:py-20'>
            MASTER PLAN
          </p>
        </div>
        <div className='mx-auto py-10 px-10 md:px-20 mt-0 bg-[#111] gap-10 flex flex-col md:flex-row items-center'>
          {/* Left Column (Image) */}
          <div className='md:w-1/2 md:pr-4'>
            <div
              className='relative cursor-pointer'
              onDoubleClick={openImagePopup}
            >
              <Image
                src='/plan.png'
                alt='Image'
                className='w-full h-auto'
                width={350}
                height={350}
              />
              {isImagePopupOpen && (
                <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-90 z-50'>
                  <div className='max-w-full max-h-full'>
                    <Image
                      src='/plan.png'
                      alt='Image'
                      className='w-full h-auto'
                      width={600}
                      height={600}
                    />
                    <div
                      className='absolute top-4 right-4 cursor-pointer text-white text-2xl'
                      onClick={closeImagePopup}
                    >
                      Close
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (Text) */}
          <div className='md:w-1/2 mt-4 md:mt-0 text-[#fff]'>
            <p className='mt-4 text-2xl font-[700]'>
              1.75 ACRES OF GREEN OPEN SPACES, LANDSCAPING AND NATURALLY
              CONNECTED LIFESTYLE
            </p>
          </div>
        </div>
        {/* location */}
        <div id='location'>
          <p className='md:text-7xl text-3xl text-[#DDCF8D] font-700 text-center bg-[#1E1E1E] py-6 md:py-20'>
            LOCATION
          </p>
        </div>
        {/* <div className='mx-auto py-10 px-10 mt-0 bg-[#1E1E1E] gap-10 flex flex-col md:flex-row items-center'>
          {/* Left Column (Image) */}

        {/* <div className='md:w-1/2 mt-4 md:mt-0 text-[#fff]'>
            <p className='mt-4 '>
              Experience modern living at Subha Esperanza with impeccable
              design, spacious 2 and 3 BHK apartments, luxurious amenities, and
              serene surroundings near HAL Marathahalli. Enjoy seamless
              connectivity to IT parks, schools, and shopping centers. Subha
              Esperanza is your ideal home for luxury and sophistication.
            </p>
          </div> */}

        {/* Right Column (Text) */}
        {/* <div className='md:w-1/2 md:pr-4'>
            <Image
              src='/location.png'
              alt='Image'
              className='w-full h-auto'
              width={350}
              height={350}
            />
          </div>
        </div> */}
        <div className='mx-auto py-10 px-10 md:px-20 mt-0 gap-10 flex flex-col  md:flex-row items-center bg-[#1E1E1E]'>
          {/* Left Column (Google Map iframe) */}
          <div className='md:w-1/2 md:pr-4'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124425.33634737677!2d77.48873064320871!3d12.953173055800995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149aa0dcfcf9%3A0xa83f0d28751ff1a!2sSubha%20Builders%20and%20Developers!5e0!3m2!1sen!2sin!4v1696786208507!5m2!1sen!2sin'
              style={{ border: '0', borderRadius: '25px' }}
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='w-full h-[450px]'
            ></iframe>
          </div>

          {/* Right Column (Text Content) */}
          <div className='md:w-1/2 mt-4 md:mt-0 text-[#fff]'>
            <Image
              src='/location.webp'
              alt='Image'
              className='w-full h-[450px]'
              width={350}
              height={250}
            />
          </div>
        </div>
        {/* maahome */}
        <div className='mx-auto py-10 px-10 md:px-20 mt-0 gap-10 flex flex-col md:flex-row items-center bg-[#1E1E1E] text-[#fff]'>
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
            <h2 className='text-3xl font-700 text-[#DDCF8D]'>About MaaHomes</h2>
            <p className='mt-4 '>
              It is more than just papers & words. It is what the workflow and
              ethics are built around. The motto is to provide an experience of
              convenience to the client not only through the sales process but
              throughout their cycle of ownership. Be it sale, maintenance or
              resale.
            </p>
            <p className=' py-2'>
              Maa Homes would always be there for you if you need help with your
              property. Maa Homes takes pride in the quality and their projects
              & if years down the line, you feel that you want to sell one of
              your properties, you will have the option to sell back at a
              standard price.
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
            <Image
              src='/maahomes.jpg'
              alt='Image'
              className='w-full h-auto rounded-md'
              width={350}
              height={350}
            />
          </motion.div>
        </div>

        {/* about subha */}
        <div className='mx-auto py-10 md:py-20 px-10 md:px-20  mt-0 gap-10 flex flex-col md:flex-row items-center bg-[#1E1E1E]'>
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
            <Image
              src='/subha-about.jpg'
              alt='Image'
              className='w-full h-auto'
              width={350}
              height={350}
            />
          </motion.div>
          {/* Right Column (Text) */}
          {/* <div className='md:w-1/2 mt-4 md:mt-0'>
          <h2 className='text-3xl font-700 text-[#DDCF8D]'>
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
            <h2 className='text-3xl font-700 text-[#DDCF8D]'>About Shuba</h2>
            <p className='mt-4 text-[#fff]'>
              Our primary focus is on developing high quality constructions and
              attaining leadership positioning in the real-estate field and
              becoming one of the most preferred brands. We promise our
              customers that with a diverse multi-domain portfolio, we will
              bring truly global living standards right into your home. Natural
              evolution and diversifications led to the formation of Subha by
              blending the traditional essence of business development.
            </p>
            <p className=' py-2 text-[#fff]'>
              Built on innovation, leadership and trust, Subha is one of the
              leading developers in South India with the philosophy of
              Infrastructure development and property manage event with the best
              technologies in place . We came with a zeal to achieve perfection
              by seeing the rising need for quality amongst people .We conquered
              the hearts of millions by constructing the customized villas,
              apartments, commercial and retail spaces of the highest quality
              standards in order.
            </p>
          </motion.div>
        </div>

        {/* <div className='flex items-center justify-center bg-black mx-auto py-10 px-10 md:px-10 sm:px-4 md:py-20 py-10 pb-10 md:py-20 md:pb-20 '>
          
        </div> */}
        <div>
          <div className='video-responsive bg-black '>
            <iframe
              width='560'
              height='315'
              className=' px-10 py-10 md:px-20 md:pt-20 md:py-20 mx-auto'
              src='https://www.youtube.com/embed/X6X9gdSTNhk?si=rLFhdLpIDK73QkVz'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <footer className='bg-[#1E1E1E] md:py-20 my-0 py-5' id='footer'>
          <div className='mx-auto w-full '>
            <div className='grid grid-cols-1 gap-20 py-10 px-10 md:px-20 lg:py-8 md:grid-cols-3 '>
              <div>
                <Image
                  src='/logo-old.png'
                  alt='Company Logo'
                  width={125}
                  height={125}
                />
                <p className='text-white  font-normal font-[400] py-8'>
                  Every Subha Builders & Developers project is well designed and
                  developed with the highest standards of quality. From spacious
                  and luxurious villas to sensible, well-appointed apartments
                  and plotted developments, Subha Builders & Developers always
                  delivers a top-notch quality of life.
                </p>

                <div className='flex flex-row items-center  text-black  gap-2'>
                  <div className='bg-white p-4 '>
                    <ImFacebook />
                  </div>
                  <div className='bg-white p-4 '>
                    <AiOutlineTwitter />
                  </div>
                  <div className='bg-white p-4 '>
                    <AiFillLinkedin />
                  </div>
                  <div className='bg-white p-4 '>
                    <AiOutlineInstagram />
                  </div>
                </div>
              </div>
              <div>
                <h2 className='mb-6 text-lg font-[400] text-white uppercase text-white'>
                  Contact Us.
                </h2>
                <div className='flex items-center space-x-4 border-b border-gray-300 dark:border-gray-700 pb-4'>
                  <Image
                    src='/Vector.svg'
                    alt='Phone'
                    className='w-6 h-6'
                    width={4}
                    height={4}
                  />
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
                  <Image
                    src='/message.svg'
                    alt='Phone'
                    className='w-6 h-6'
                    width={4}
                    height={4}
                  />
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
                  <Image
                    src='/loc.svg'
                    alt='Phone'
                    className='w-6 h-6'
                    width={4}
                    height={4}
                  />
                  <div className='flex flex-col'>
                    <p className='text-white font-normal font-[400]'>
                      Office Address
                    </p>
                    <p className='text-white font-normal font-[400]'>
                      #252, 3rd Floor, V.K. Pride Building, 14th Main, HSR
                      Layout Sector 7, Bengaluru - 560102.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='bg-[#A08131] rounded-lg '>
                  {succuss && (
                    <div className='alert ' style={{ borderRadius: '0' }}>
                      <HiCheck />
                      <span>Form submitted successfully!</span>
                    </div>
                  )}
                  <div className='bg-[#A08131] rounded-lg p-4 flex flex-col items-center text-center'>
                    <h1 className='text-xl font-bold mb-4 text-[#fff]'>
                      Feel free to contact us if you need any assistance, any
                      help, or another question.
                    </h1>
                    <form className='w-full' onSubmit={handleSubmit}>
                      <div className='mb-4'>
                        <input
                          type='text'
                          id='firstName'
                          name='firstName'
                          className='bg-gray-200 p-2 w-full rounded'
                          placeholder='Name'
                          value={formData.firstName}
                          onChange={handleChange}
                          style={{
                            backgroundColor: '#F0F4F5',
                            color: '#AEB4B9',
                          }}
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='bg-gray-200 p-2 w-full rounded'
                          placeholder='Email'
                          style={{
                            backgroundColor: '#F0F4F5',
                            color: '#AEB4B9',
                          }}
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='number'
                          id='phone'
                          name='phone'
                          className='bg-gray-200 p-2 w-full rounded'
                          placeholder='Phone'
                          style={{
                            backgroundColor: '#F0F4F5',
                            color: '#AEB4B9',
                          }}
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <span className='text-red-500'>{errors.phone}</span>
                        )}
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
                        {loading ? 'Submitting...' : 'Enquire'}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <section className='bg-black text-white py-8 text-center font-normal font-[400] py-10 px-10 md:px-20'>
          <p className='py-2 pb-2'>DISCLAIMER</p>
          <p>
            The images shown in the material are only for the purpose of
            illustrating a possible layout and do not form a part of the
            offering.
            <br />
            The builder / promoter reserves the right to change, alter, add or
            delete any specifications mentioned herein without prior permission
            or notice.
            <br />
            RERA No: PRM/KA/RERA/1251/308/PR/020622/004953
            <br />
          </p>
        </section>
        <div className='py-4 px-4 text-center bg-[#1E1E1E] text-white'>
          <p>
            <br />© 2023 All Rights Reserved | Powered by wipeoutQ|{' '}
            <a href='https://www.wipeoutq.com' className='text-white'>
              www.wipeoutq.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
