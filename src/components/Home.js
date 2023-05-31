import React from 'react';
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
    <div className="flex items-centermx-auto justify-center h-80 py-6 bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-purple-700 mb-3 font-myFont ">
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
              className="text-green-600 text-lg mb-4 font-semibold"
            >
              This is CS10. We are here to assist you ? How may we help you ? </p>
              )}
              
            </Transition>
            <button className='bg-buttonColor text-white px-2 rounded-lg font-semibold py-2
          '><Link to="/blogs">Get started</Link></button>
          </div>
         
    </div>

<div className="w-full px-4 pt-16">
<div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
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
          <span>Can we help you?</span>
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