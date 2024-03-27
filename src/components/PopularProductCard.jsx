import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div class="bg-gray-100 rounded-2xl p-10 cursor-pointer hover:-translate-y-2 transition-all relative shadow-lg hover:border-2 border-sky-400">
      <div class="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4 hover:bg-sky-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          class="fill-gray-800 inline-block"
          viewBox="0 0 64 64"
        >
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
            data-original="#000000"
          ></path>
        </svg>
      </div>
      <div class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
        <img
          src={imgURL}
          alt="Product 3"
          width={24} height={24}
          class="h-full w-full object-contain"
        />
      </div>
      <hr />
      <div class="text-center mt-4">
        <h3 class="text-lg font-bold text-gray-800">{name}</h3>
        <h4 class="text-xl text-gray-700 font-bold mt-4">
          {price}
        </h4>
        <button
          type="button"
          class="w-full mt-6 px-4 py-3 bg-[#717070] hover:bg-[#474646] text-white rounded-full"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default PopularProductCard;
