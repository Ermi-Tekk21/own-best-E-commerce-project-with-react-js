import { useState, useEffect } from "react";
import { navLinks, procedLink } from "../constants";
import { arrowRight, own_best } from "../assets/icons";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
          <nav className="flex justify-between">
            <nav className="flex flex-1">
              <a href="/">
                <img src={own_best} alt="logo" width={140} height={35} />
              </a>
            </nav>
            <ul className="flex max-md:hidden">
              {navLinks.map((item, index) => (
                <li key={index} className="mx-8">
                  <a
                    href={item.path}
                    className="font-montserrat text-lg text-slate-gray hover:underline   hover:underline-offset-[25px]
                            transition delay-100 hover:text-blue-500 duration-50 rounded-lg px-4 py-1 
                            focus:-translate-y-1 focus:scale-110 focus:bg-indigo-100 shadow-sm z-auto "
                  >
                    {item.title}
                  </a>
                  
                </li>
              ))}
            </ul>
            <ul className="flex gap-1 items-center text-white bg-coral-sky px-8 text-sm rounded-full max-lg:hidden">
              {procedLink.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className={`hover:font-semibold thover:tex-blue-500 hover:underline hover:underline-offset-[25px] ${item.className}`}
                  >
                    {item.title}
                  </a>
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

            <div classname="absolute"></div>
          </nav>
        </header>
      )}
    </>
  );
};
export default Nav;
