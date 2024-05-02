import React from 'react'
import contactImg from "../assets/images/contact/contact-person.jpg"
import emailIcon from "../assets/svg/email.svg"
import telephoneIcon from "../assets/svg/telephone.svg"
import placeIcon from "../assets/svg/place.svg"


export default function Contact() {
  return (
    <>
        <div className="hero min-h-screen class=">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <img className=" object-cover rounded-2xl" src={contactImg} />
            </div>

            <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"> 
              To contact us,
            please send your question via the form provided. We are ready to help you.
              </p>
              <form action="#" className='space-y-8'>
                <div>
                  <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                    Your email
                  </label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Subject
                  </label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Your message
                  </label>
                  <textarea  id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Send message
                </button>
              </form>
            </div>
            </section>
          </div>
        </div>
        {/* contact */}
        <div className="flex w-full p-20">
          <div className="grid h-40 flex-grow card bg-white rounded-box place-items-center">
            <img src={emailIcon} className="w-10" />
            <h6 className="text-black text-xl">
              Mail here
            </h6>
            <p className='text-black'>
            harisenin-hotel@harisenin.com
            </p>
          </div>
          <div className='divider divider-horizontal'></div>
          <div className='grid h-40 flex-grow card bg-white rounded-box place-items-center'>
            <img src={placeIcon} className='w-10'/>
            <h6 className='text-black text-xl'>
              Visit here
            </h6>
            <p className='text-black'>13, Conclave Simatupang Jl. Simatupang No.RT 01, RT.13/RW.5, Cilandak Tim.</p>
          </div>
          <div className='divider divider-horizontal'></div>
          <div className='grid h-40 flex-grow card bg-white rounded-box place-items-center'>
            <img src={telephoneIcon} className='w-10'/>
            <h6 className='text-black text-xl'>
              Call here
            </h6>
            <p className='text-black'>+62 812-5799-3236</p>
          </div>
        </div>
    </>
  )
}
