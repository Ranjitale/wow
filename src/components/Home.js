import React from 'react';
import hlogo from '../img/react-components-library-1024x512.png'
import { Transition } from '@headlessui/react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

const Home = () => {
  const [showText, setShowText] = React.useState(false);

  React.useEffect(() => {
    setShowText(true);
  }, []);

    return (
      <>
        <div className=" items-center mx-auto justify-center h-80 py-6 bg-gray-200 relative mt-2">
          <h3 className='font-meroFont text-center text-4xl mb-6 text-purple-500 mt-6'>Welcome <em>ĸαямα</em> </h3>
        <img src={hlogo}alt='bgimg' className='mb-4 sm:8/12 w-8/12 rounded-md items-center mx-auto' />
      <div className="max-w-md mt-16 p-6 border-yellow-100 bg-wow rounded-lg shadow-md mx-auto">
            <h1 className="text-4xl font-bold text-purple-700 mb-3 font-meroFont ">
              
          Hello, World !!
        </h1>
        <Transition
          show={showText}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          {() => (
            <p
              className="text-green-600 text-3xl mb-4 font-semibold font-meroFont"
            >
              Get started with infinity-zero in less than a minute...</p>
              )}
              
            </Transition>
            <button className='bg-buttonColor text-white px-2 rounded-lg font-semibold py-2
          '><Link to="/blogs" className=' focus:text-red-700 focus:w-3 focus:h-3'>Get started</Link></button>
          </div>
         
    </div>

<div className="w-full px-4 bottom-0 mt-16">
<div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="mt-96 md:mt-60 flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Who we are</span>
          <ChevronUpIcon
            className={`${
              open ? 'rotate-180 transform' : ''
            } h-5 w-5 text-purple-500`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
          We are a group of students where we started this web to provide the knowledge we have with you.
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  <Disclosure as="div" className="mt-2">
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Can user help us?</span>
          <ChevronUpIcon
            className={`${
              open ? 'rotate-180 transform' : ''
            } h-5 w-5 text-purple-500`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
         Yes, If we want to help us go checkout  our technical support how you may help us.
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
</div>
</div>
      </>
  );
};

export default Home;
