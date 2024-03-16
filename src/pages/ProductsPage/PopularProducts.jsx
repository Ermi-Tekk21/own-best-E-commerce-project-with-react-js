import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PopularProductCatagory } from "../../constants";
import { PopularProductCard, PopularBtn } from "../../components";

const PopularProducts = () => {
  const [currentPop, setCurrentPop] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="products" className="max-containe padding max-sm:mt-12 ">
      <div className="flex flex-col gap-5">
        <div className="md:flex gap-10 items-center">
          <h2
            data-aos="fade-down-right"
            className="text-4xl font-palanquin font-bold"
          >
            Our <span className="text-coral-sky"> Popular </span> Products
          </h2>
          <div data-aos="fade-down-right" className="flex gap-4 mt-4">
            {PopularProductCatagory.map((item) => (
              <div key={item.id}>
                <PopularBtn
                  label={item.catagotyName}
                  changeCatagory={(newCatagory) => setCurrentPop(newCatagory)}
                  currentPop={currentPop}
                />
              </div>
            ))}
          </div>
        </div>

        <p
          data-aos="fade-right"
          className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"
        >
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {currentPop.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
