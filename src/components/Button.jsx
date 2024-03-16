const Button = ({ label, iconURL }) => {
  return (
    <button
      data-aos="flip-left"
      className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
    text-white border-coral-sky bg-coral-sky hover:text-white rounded-full hover:font-semibold focus:translate-x-1 focus:delay-100 shadow-lg"
    >
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full bg-white w-5 h-5 hover:translate-x-1 animate-pulse"
      />
    </button>
  );
};

export default Button;
