import React from "react";
import contactImg from "../assets/images/contact/contact-person.jpg";
import emailIcon from "../assets/svg/email.svg";
import telephoneIcon from "../assets/svg/telephone.svg";
import placeIcon from "../assets/svg/place.svg";

export default function Contact() {
  return (
    <>
      <div className="hero min-h-screen bg-slate-700">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className=" object-cover rounded-2xl" src={contactImg} />
          </div>

          <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                Contact Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-300  sm:text-xl">
                To contact us, please send your question via the form provided.
                We are ready to help you.
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="border-cyan-700 border hover:bg-slate-800 bg-blue-900 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
      {/* contact */}
      <div className="flex w-full p-20  bg-white dark:bg-slate-600">
        <div className="grid h-40 flex-grow card bg-white rounded-box place-items-center">
          <img src={emailIcon} className="w-10" />
          <h6 className="text-black text-xl">Mail here</h6>
          <p className="text-black">harisenin-hotel@harisenin.com</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-40 flex-grow card bg-white rounded-box place-items-center">
          <img src={placeIcon} className="w-10" />
          <h6 className="text-black text-xl">Visit here</h6>
          <p className="text-black">
            13, Conclave Simatupang Jl. Simatupang No.RT 01, RT.13/RW.5,
            Cilandak Tim.
          </p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-40 flex-grow card bg-white rounded-box place-items-center">
          <img src={telephoneIcon} className="w-10" />
          <h6 className="text-black text-xl">Call here</h6>
          <p className="text-black">+62 812-5799-3236</p>
        </div>
      </div>

      <div className="relative w-full h-96">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </>
  );
}
