import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { socialMedia } from "../../constants";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="padding">
      <h2
        data-aos="fade-down-right"
        className="text-4xl font-palanquin font-bold mb-10"
      >
        CONTACT <span className="text-coral-sky"> US </span>
      </h2>
      <p
            data-aos="fade-right"
            className="mt-6lg:max-w-lg mt-2 font-montserrat text-slate-gray mb-8 w-1/2"
          >
            Have a question or want to get in touch? Fill out the form below and
            we'll get back to you as soon as possible.
          </p>
      <div className="grid grid-cols-2  max-md:flex flex-col-reverse jus bg-slate50">
        <div className="flex flex-col w-1/2">
        <div className='flex gap-5 mt-8 mb-4'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <Link to={icon.path}><img src={icon.src} alt={icon.alt} width={24} height={24} /></Link>
              </div>
            ))}
          </div>
          <iframe
            data-aos="zoom-in-down"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.3825941708756!2d39.281089172043316!3d8.55915927737047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1f807b401f11%3A0xa23ad015fae14d56!2sASTU%20MAIN%20GATE!5e0!3m2!1sen!2set!4v1710287203671!5m2!1sen!2set"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="shadow-lg rounded-xl"
          ></iframe>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <form className=" border-[0.5px] hover:border-[2px] border-sky-400 p-2 rounded-lg shadow-md shadow-sky-400">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
