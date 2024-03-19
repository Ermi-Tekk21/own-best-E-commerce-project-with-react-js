import { useState, useEffect } from "react";
import { navLinks, procedLink } from "../constants";
import { arrowRight, menu, own_best } from "../assets/icons";
import { Link } from "react-router-dom";
import { Ham } from "./";
import { close } from "../assets/icons";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {visible && (
        <header className="fixed padding-x py-4 w-full z-30 shadow bg-slate-50 items-center">
          <nav className="flex items-center gap-4 justify-around">
            <nav className="flex flex-1">
              <Link to="/">
                <img
                  src={own_best}
                  alt="logo"
                  className="max-lg:w-[90px] w-[140px]"
                />
              </Link>
            </nav>
            <ul className="flex gap-6 max-lg:hidden">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="font-montserrat text-lg text-slate-gray hover:underline   hover:underline-offset-[25px]
                            transition delay-100 hover:text-blue-500 duration-50 rounded-lg px-4 py-1 
                            focus:-translate-y-1 focus:scale-110 focus:bg-indigo-100 hover:shadow-sm z-auto "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-1 items-center text-white bg-coral-sky px-8 py-2 text-sm rounded-full max-lg:hidden">
              {procedLink.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`hover:font-semibold thover:tex-blue-500 hover:underline hover:underline-offset-[25px] ${item.className}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <img
                src={arrowRight}
                className="hover:translate-x-1 mx-2"
                alt=""
                width={15}
                height={15}
              />
            </ul>
            <div className="lg:hidden">
              <button onClick={handleClick}>
                <img src={menu} alt="menu" className={`w-6 -z-40 ${isOpen ? "hidden" : ""}`} />
                <img src={close} alt="closemenu" className={`w-6 -z-40 ${!isOpen ? "hidden" : ""}`}/>
              </button>
              <Ham isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </nav>
        </header>
      )}
    </>
  );
};
export default Nav;
