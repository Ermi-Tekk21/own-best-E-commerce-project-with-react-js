import { useEffect, useState } from "react";
import { arrowRight, arrowDown } from "../../assets/icons";
import Button from "../../components/Button";
import Card from "../../components/ClothCard";
import { topCloths, statistics } from "../../constants";
import { man_01 } from "../../assets/images/products/man";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  const [bigClothImg, setBigClothImg] = useState(man_01);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="w-full flex xl:flex-row flex-col justify-between min-h-screen gap-10 max-container ml-10">
      <div
        data-aos="fade-right"
        className="xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-sky">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Discover the Latest
          </span>{" "}
          <br />
          <span className="text-coral-sky inline-block mt-3">in Fashion</span>
          <br />
          Trends
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish new arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <a href="/log-in">
          <Button label="Shop now" iconURL={arrowRight}/>
        </a>
        <div className="flex justify-evenly items-start flex-wrap w-full mt-20 gap-16 border text-center py-4 rounded-lg border-sky-600 border-dotted hover:bg-sky-50 ">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <div className="flex items-center gap-1 justify-center">
          <p className="font-montserrat text-slate-gray  text-right text-2xl max-sm:ml-4">
            <span className="text-coral-sky font-bold">Top</span> cloths <br />
            from our collections
            <br />
          </p>
          <img
            src={arrowDown}
            alt="topcloth"
            width={40}
            height={40}
            className="border-2 rounded-full p-2 bg-sky-200 mt-6 rotate-90 animate-bounce "
          />
        </div>
        <img
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          src={bigClothImg}
          alt="cloth colletion"
          width={350}
          height={302}
          className="object-contain flex justify-center  relative max-sm:ml-4"
        />

        <div className="flex sm:gap-6 gap-4 absolute  -bottom-20 ">
          {topCloths.map((clothImage, index) => (
            <div key={index}>
              <Card
                index={index}
                imgURL={clothImage}
                changeBigImage={(cloth) => setBigClothImg(cloth)}
                bigImg={bigClothImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LandingPage;
